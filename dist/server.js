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
exports.FeedGenerator = void 0;
const events_1 = __importDefault(require("events"));
const express_1 = __importDefault(require("express"));
const identity_1 = require("@atproto/identity");
const lexicon_1 = require("./lexicon");
const feed_generation_1 = __importDefault(require("./methods/feed-generation"));
const describe_generator_1 = __importDefault(require("./methods/describe-generator"));
const db_1 = require("./db");
const subscription_1 = require("./subscription");
const well_known_1 = __importDefault(require("./well-known"));
class FeedGenerator {
    constructor(app, db, firehose, cfg) {
        this.app = app;
        this.db = db;
        this.firehose = firehose;
        this.cfg = cfg;
    }
    static create(cfg) {
        const app = (0, express_1.default)();
        const db = (0, db_1.createDb)(cfg.sqliteLocation);
        const firehose = new subscription_1.FirehoseSubscription(db, cfg.subscriptionEndpoint);
        const didCache = new identity_1.MemoryCache();
        const didResolver = new identity_1.DidResolver({
            plcUrl: 'https://plc.directory',
            didCache,
        });
        const server = (0, lexicon_1.createServer)({
            validateResponse: true,
            payload: {
                jsonLimit: 100 * 1024,
                textLimit: 100 * 1024,
                blobLimit: 5 * 1024 * 1024, // 5mb
            },
        });
        const ctx = {
            db,
            didResolver,
            cfg,
        };
        (0, feed_generation_1.default)(server, ctx);
        (0, describe_generator_1.default)(server, ctx);
        app.use(server.xrpc.router);
        app.use((0, well_known_1.default)(ctx));
        return new FeedGenerator(app, db, firehose, cfg);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.migrateToLatest)(this.db);
            this.firehose.run(this.cfg.subscriptionReconnectDelay);
            this.server = this.app.listen(this.cfg.port);
            yield events_1.default.once(this.server, 'listening');
            return this.server;
        });
    }
}
exports.FeedGenerator = FeedGenerator;
exports.default = FeedGenerator;
