"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateViewExternal = exports.isViewExternal = exports.validateView = exports.isView = exports.validateExternal = exports.isExternal = exports.validateMain = exports.isMain = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isMain(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        (v.$type === 'app.bsky.embed.external#main' ||
            v.$type === 'app.bsky.embed.external'));
}
exports.isMain = isMain;
function validateMain(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.external#main', v);
}
exports.validateMain = validateMain;
function isExternal(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.embed.external#external');
}
exports.isExternal = isExternal;
function validateExternal(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.external#external', v);
}
exports.validateExternal = validateExternal;
function isView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.embed.external#view');
}
exports.isView = isView;
function validateView(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.external#view', v);
}
exports.validateView = validateView;
function isViewExternal(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.embed.external#viewExternal');
}
exports.isViewExternal = isViewExternal;
function validateViewExternal(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.external#viewExternal', v);
}
exports.validateViewExternal = validateViewExternal;
