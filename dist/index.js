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
exports.FEEDGEN_HOSTNAME = exports.FEEDGEN_PUBLISHER_DID = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./server"));
// SET THIS TO YOUR DID
// You can find your accounts DID by going to
// https://bsky.social/xrpc/com.atproto.identity.resolveHandle?handle=${YOUR_HANDLE}
exports.FEEDGEN_PUBLISHER_DID = 'did:plc:f4ldthcc2n5d2bfmukvd5pwx';
exports.FEEDGEN_HOSTNAME = 'TODO';
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    dotenv_1.default.config();
    const hostname = exports.FEEDGEN_HOSTNAME;
    const serviceDid = exports.FEEDGEN_PUBLISHER_DID;
    const server = server_1.default.create({
        port: (_a = maybeInt(process.env.PORT)) !== null && _a !== void 0 ? _a : 80,
        listenhost: exports.FEEDGEN_HOSTNAME,
        sqliteLocation: (_b = maybeStr(process.env.FEEDGEN_SQLITE_LOCATION)) !== null && _b !== void 0 ? _b : ':memory:',
        subscriptionEndpoint: (_c = maybeStr(process.env.FEEDGEN_SUBSCRIPTION_ENDPOINT)) !== null && _c !== void 0 ? _c : 'wss://bsky.network',
        publisherDid: exports.FEEDGEN_PUBLISHER_DID,
        subscriptionReconnectDelay: (_d = maybeInt(process.env.FEEDGEN_SUBSCRIPTION_RECONNECT_DELAY)) !== null && _d !== void 0 ? _d : 3000,
        hostname,
        serviceDid: `did:web:${exports.FEEDGEN_HOSTNAME}`,
    });
    yield server.start();
    console.log(`🤖 running feed generator at ${server.cfg.listenhost}:${server.cfg.port}`);
});
const maybeStr = (val) => {
    if (!val)
        return undefined;
    return val;
};
const maybeInt = (val) => {
    if (!val)
        return undefined;
    const int = parseInt(val, 10);
    if (isNaN(int))
        return undefined;
    return int;
};
run();
