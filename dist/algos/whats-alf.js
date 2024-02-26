"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.translateInNativeLanguage = exports.shortname = void 0;
const openai_1 = require("openai");
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = require("@atproto/api");
dotenv_1.default.config();
// max 15 chars
exports.shortname = 'whats-alf';
const translateInNativeLanguage = (content, language) => __awaiter(void 0, void 0, void 0, function* () {
    const systemMessage = `You are the translation expert. Translate ${content} into ${language}.
  When translating, please keep as much nuance as possible. 
  Please do not change emojis, etc. as they are.
  If there are any expressions that are too offensive, vulgar, or otherwise inappropriate, 
  please modify them to softer expressions.`;
    const params = {
        messages: [{ role: 'system', content: systemMessage }, { role: 'user', content: content }],
        model: 'gpt-3.5-turbo',
    };
    const llmClient = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const chatCompletion = yield llmClient.chat.completions.create(params);
    return chatCompletion.choices[0].message.content || '';
});
exports.translateInNativeLanguage = translateInNativeLanguage;
const handler = (ctx, params) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("HITTING WHATS ALF");
    let builder = ctx.db
        .selectFrom('post')
        .selectAll()
        .orderBy('indexedAt', 'desc')
        .orderBy('cid', 'desc')
        .limit(params.limit);
    const res = yield builder.execute();
    const untranslatedPosts = res.map((row) => ({
        uri: row.uri,
        text: row.text,
        cid: row.cid
    }));
    // Translate each post to different lang
    const translatedPosts = yield Promise.all(untranslatedPosts.map((untranslatedPost) => __awaiter(void 0, void 0, void 0, function* () {
        const translatedText = yield (0, exports.translateInNativeLanguage)(untranslatedPost.text, 'ja');
        return {
            post: untranslatedPost,
            translatedText: translatedText
        };
    })));
    const agent = new api_1.BskyAgent({ service: 'https://bsky.social' });
    yield agent.login({
        identifier: process.env.BSKY_IDENTIFIER,
        password: process.env.BSKY_PASSWORD
    });
    // reply to original post with translated text
    const translatedReplies = yield Promise.all(translatedPosts.map((translatedPost) => __awaiter(void 0, void 0, void 0, function* () {
        return {
            post: (yield agent.post({
                text: translatedPost.translatedText,
                langs: ["ja"],
                embed: {
                    $type: "app.bsky.embed.record",
                    record: {
                        uri: translatedPost.post.uri,
                        cid: translatedPost.post.cid
                    }
                }
            })).uri
        };
    })));
    let cursor;
    const last = res.at(-1);
    if (last) {
        cursor = `${new Date(last.indexedAt).getTime()}::${last.cid}`;
    }
    return {
        cursor,
        feed: translatedReplies,
    };
});
exports.handler = handler;
