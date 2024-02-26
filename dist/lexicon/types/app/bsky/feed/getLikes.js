"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLike = exports.isLike = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isLike(v) {
    return ((0, util_1.isObj)(v) && (0, util_1.hasProp)(v, '$type') && v.$type === 'app.bsky.feed.getLikes#like');
}
exports.isLike = isLike;
function validateLike(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.getLikes#like', v);
}
exports.validateLike = validateLike;
