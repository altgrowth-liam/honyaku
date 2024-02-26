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
exports.validateAuth = void 0;
const xrpc_server_1 = require("@atproto/xrpc-server");
const validateAuth = (req, serviceDid, didResolver) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization = '' } = req.headers;
    if (!authorization.startsWith('Bearer ')) {
        throw new xrpc_server_1.AuthRequiredError();
    }
    const jwt = authorization.replace('Bearer ', '').trim();
    return (0, xrpc_server_1.verifyJwt)(jwt, serviceDid, (did) => __awaiter(void 0, void 0, void 0, function* () {
        return didResolver.resolveAtprotoKey(did);
    }));
});
exports.validateAuth = validateAuth;
