"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const makeRouter = (ctx) => {
    const router = express_1.default.Router();
    router.get('/.well-known/did.json', (_req, res) => {
        if (!ctx.cfg.serviceDid.endsWith(ctx.cfg.hostname)) {
            return res.sendStatus(404);
        }
        res.json({
            '@context': ['https://www.w3.org/ns/did/v1'],
            id: ctx.cfg.serviceDid,
            service: [
                {
                    id: '#bsky_fg',
                    type: 'BskyFeedGenerator',
                    serviceEndpoint: `https://${ctx.cfg.hostname}`,
                },
            ],
        });
    });
    return router;
};
exports.default = makeRouter;
