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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFollow = exports.isLike = exports.isRepost = exports.isPost = exports.getOpsByType = exports.FirehoseSubscriptionBase = void 0;
const xrpc_server_1 = require("@atproto/xrpc-server");
const repo_1 = require("@atproto/repo");
const lexicon_1 = require("@atproto/lexicon");
const lexicons_1 = require("../lexicon/lexicons");
const subscribeRepos_1 = require("../lexicon/types/com/atproto/sync/subscribeRepos");
class FirehoseSubscriptionBase {
    constructor(db, service) {
        this.db = db;
        this.service = service;
        this.sub = new xrpc_server_1.Subscription({
            service: service,
            method: lexicons_1.ids.ComAtprotoSyncSubscribeRepos,
            getParams: () => this.getCursor(),
            validate: (value) => {
                try {
                    return lexicons_1.lexicons.assertValidXrpcMessage(lexicons_1.ids.ComAtprotoSyncSubscribeRepos, value);
                }
                catch (err) {
                    console.error('repo subscription skipped invalid message', err);
                }
            },
        });
    }
    run(subscriptionReconnectDelay) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                try {
                    for (var _d = true, _e = __asyncValues(this.sub), _f; _f = yield _e.next(), _a = _f.done, !_a;) {
                        _c = _f.value;
                        _d = false;
                        try {
                            const evt = _c;
                            try {
                                yield this.handleEvent(evt);
                            }
                            catch (err) {
                                console.error('repo subscription could not handle message', err);
                            }
                            // update stored cursor every 20 events or so
                            if ((0, subscribeRepos_1.isCommit)(evt) && evt.seq % 20 === 0) {
                                yield this.updateCursor(evt.seq);
                            }
                        }
                        finally {
                            _d = true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            catch (err) {
                console.error('repo subscription errored', err);
                setTimeout(() => this.run(subscriptionReconnectDelay), subscriptionReconnectDelay);
            }
        });
    }
    updateCursor(cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db
                .updateTable('sub_state')
                .set({ cursor })
                .where('service', '=', this.service)
                .execute();
        });
    }
    getCursor() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.db
                .selectFrom('sub_state')
                .selectAll()
                .where('service', '=', this.service)
                .executeTakeFirst();
            return res ? { cursor: res.cursor } : {};
        });
    }
}
exports.FirehoseSubscriptionBase = FirehoseSubscriptionBase;
const getOpsByType = (evt) => __awaiter(void 0, void 0, void 0, function* () {
    const car = yield (0, repo_1.readCar)(evt.blocks);
    const opsByType = {
        posts: { creates: [], deletes: [] },
        reposts: { creates: [], deletes: [] },
        likes: { creates: [], deletes: [] },
        follows: { creates: [], deletes: [] },
    };
    for (const op of evt.ops) {
        const uri = `at://${evt.repo}/${op.path}`;
        const [collection] = op.path.split('/');
        if (op.action === 'update')
            continue; // updates not supported yet
        if (op.action === 'create') {
            if (!op.cid)
                continue;
            const recordBytes = car.blocks.get(op.cid);
            if (!recordBytes)
                continue;
            const record = (0, repo_1.cborToLexRecord)(recordBytes);
            const create = { uri, cid: op.cid.toString(), author: evt.repo };
            if (collection === lexicons_1.ids.AppBskyFeedPost && (0, exports.isPost)(record)) {
                opsByType.posts.creates.push(Object.assign({ record }, create));
            }
            else if (collection === lexicons_1.ids.AppBskyFeedRepost && (0, exports.isRepost)(record)) {
                opsByType.reposts.creates.push(Object.assign({ record }, create));
            }
            else if (collection === lexicons_1.ids.AppBskyFeedLike && (0, exports.isLike)(record)) {
                opsByType.likes.creates.push(Object.assign({ record }, create));
            }
            else if (collection === lexicons_1.ids.AppBskyGraphFollow && (0, exports.isFollow)(record)) {
                opsByType.follows.creates.push(Object.assign({ record }, create));
            }
        }
        if (op.action === 'delete') {
            if (collection === lexicons_1.ids.AppBskyFeedPost) {
                opsByType.posts.deletes.push({ uri });
            }
            else if (collection === lexicons_1.ids.AppBskyFeedRepost) {
                opsByType.reposts.deletes.push({ uri });
            }
            else if (collection === lexicons_1.ids.AppBskyFeedLike) {
                opsByType.likes.deletes.push({ uri });
            }
            else if (collection === lexicons_1.ids.AppBskyGraphFollow) {
                opsByType.follows.deletes.push({ uri });
            }
        }
    }
    return opsByType;
});
exports.getOpsByType = getOpsByType;
const isPost = (obj) => {
    return isType(obj, lexicons_1.ids.AppBskyFeedPost);
};
exports.isPost = isPost;
const isRepost = (obj) => {
    return isType(obj, lexicons_1.ids.AppBskyFeedRepost);
};
exports.isRepost = isRepost;
const isLike = (obj) => {
    return isType(obj, lexicons_1.ids.AppBskyFeedLike);
};
exports.isLike = isLike;
const isFollow = (obj) => {
    return isType(obj, lexicons_1.ids.AppBskyGraphFollow);
};
exports.isFollow = isFollow;
const isType = (obj, nsid) => {
    try {
        lexicons_1.lexicons.assertValidRecord(nsid, fixBlobRefs(obj));
        return true;
    }
    catch (err) {
        return false;
    }
};
// @TODO right now record validation fails on BlobRefs
// simply because multiple packages have their own copy
// of the BlobRef class, causing instanceof checks to fail.
// This is a temporary solution.
const fixBlobRefs = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(fixBlobRefs);
    }
    if (obj && typeof obj === 'object') {
        if (obj.constructor.name === 'BlobRef') {
            const blob = obj;
            return new lexicon_1.BlobRef(blob.ref, blob.mimeType, blob.size, blob.original);
        }
        return Object.entries(obj).reduce((acc, [key, val]) => {
            return Object.assign(acc, { [key]: fixBlobRefs(val) });
        }, {});
    }
    return obj;
};
