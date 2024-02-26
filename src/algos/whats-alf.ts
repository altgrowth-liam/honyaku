import { InvalidRequestError } from '@atproto/xrpc-server'
import { QueryParams } from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import { AppContext } from '../config'
import { OpenAI } from 'openai'
import dotenv from 'dotenv'
import { BskyAgent } from '@atproto/api'
dotenv.config()

// max 15 chars
export const shortname = 'whats-alf'

export const translateInNativeLanguage = async (content: string, language: string): Promise<string> => {
  const systemMessage = `You are the translation expert. Translate ${content} into ${language}.
  When translating, please keep as much nuance as possible. 
  Please do not change emojis, etc. as they are.
  If there are any expressions that are too offensive, vulgar, or otherwise inappropriate, 
  please modify them to softer expressions.`;

  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: 'system', content: systemMessage }, { role: 'user', content: content }],
    model: 'gpt-3.5-turbo',
  };

  const llmClient = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

  const chatCompletion: OpenAI.Chat.ChatCompletion = await llmClient.chat.completions.create(params);

  return chatCompletion.choices[0].message.content || ''
}

export const handler = async (ctx: AppContext, params: QueryParams) => {
  console.log("HITTING WHATS ALF")
  
  let builder = ctx.db
    .selectFrom('post')
    .selectAll()
    .orderBy('indexedAt', 'desc')
    .orderBy('cid', 'desc')
    .limit(params.limit)

  
  const res = await builder.execute()

  const untranslatedPosts = res.map((row) => ({
    uri: row.uri,
    text: row.text, // TODO: Make sure text is being written
    cid: row.cid
  }))

  // Translate each post to different lang
  const translatedPosts = await Promise.all(untranslatedPosts.map(async (untranslatedPost) => {
    const translatedText = await translateInNativeLanguage(untranslatedPost.text, 'ja')
    return {
      post: untranslatedPost,
      translatedText: translatedText
    }
  }))

  const agent = new BskyAgent({ service: 'https://bsky.social' })
  await agent.login({
    identifier: process.env.IDENTIFIER_BSKY!,
    password: process.env.PASSWORD_BSKY!
  })

  // reply to original post with translated text
  const translatedReplies = await Promise.all(translatedPosts.map(async (translatedPost) => {
      return {
        post: (await agent.post({
        text: translatedPost.translatedText,
        langs: [ "ja" ],
        embed: {
            $type: "app.bsky.embed.record",
            record: {
                uri: translatedPost.post.uri,
                cid: translatedPost.post.cid
            }
        }
      })).uri
    }

  }))

  let cursor: string | undefined
  const last = res.at(-1)
  if (last) {
    cursor = `${new Date(last.indexedAt).getTime()}::${last.cid}`
  }

  return {
    cursor,
    feed: translatedReplies,
  }
}
