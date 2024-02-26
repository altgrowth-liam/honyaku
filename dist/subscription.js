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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirehoseSubscription = void 0;
const subscribeRepos_1 = require("./lexicon/types/com/atproto/sync/subscribeRepos");
const subscription_1 = require("./util/subscription");
class FirehoseSubscription extends subscription_1.FirehoseSubscriptionBase {
    handleEvent(evt) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, subscribeRepos_1.isCommit)(evt))
                return;
            const ops = yield (0, subscription_1.getOpsByType)(evt);
            const postsToDelete = ops.posts.deletes.map((del) => del.uri);
            const postsToCreate = ops.posts.creates
                .filter((create) => {
                // only alf-related posts
                return create.record.text.toLowerCase().includes('alf');
            })
                .map((create) => {
                var _a, _b, _c, _d, _e, _f;
                // map alf-related posts to a db row
                return {
                    uri: create.uri,
                    cid: create.cid,
                    replyParent: (_c = (_b = (_a = create.record) === null || _a === void 0 ? void 0 : _a.reply) === null || _b === void 0 ? void 0 : _b.parent.uri) !== null && _c !== void 0 ? _c : null,
                    replyRoot: (_f = (_e = (_d = create.record) === null || _d === void 0 ? void 0 : _d.reply) === null || _e === void 0 ? void 0 : _e.root.uri) !== null && _f !== void 0 ? _f : null,
                    indexedAt: new Date().toISOString(),
                    text: create.record.text
                };
            });
            if (postsToDelete.length > 0) {
                yield this.db
                    .deleteFrom('post')
                    .where('uri', 'in', postsToDelete)
                    .execute();
            }
            if (postsToCreate.length > 0) {
                yield this.db
                    .insertInto('post')
                    .values(postsToCreate)
                    .onConflict((oc) => oc.doNothing())
                    .execute();
            }
        });
    }
}
exports.FirehoseSubscription = FirehoseSubscription;
