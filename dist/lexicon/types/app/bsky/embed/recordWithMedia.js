"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateView = exports.isView = exports.validateMain = exports.isMain = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isMain(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        (v.$type === 'app.bsky.embed.recordWithMedia#main' ||
            v.$type === 'app.bsky.embed.recordWithMedia'));
}
exports.isMain = isMain;
function validateMain(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.recordWithMedia#main', v);
}
exports.validateMain = validateMain;
function isView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.embed.recordWithMedia#view');
}
exports.isView = isView;
function validateView(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.recordWithMedia#view', v);
}
exports.validateView = validateView;
