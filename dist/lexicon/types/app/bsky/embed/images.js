"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateViewImage = exports.isViewImage = exports.validateView = exports.isView = exports.validateAspectRatio = exports.isAspectRatio = exports.validateImage = exports.isImage = exports.validateMain = exports.isMain = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isMain(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        (v.$type === 'app.bsky.embed.images#main' ||
            v.$type === 'app.bsky.embed.images'));
}
exports.isMain = isMain;
function validateMain(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.images#main', v);
}
exports.validateMain = validateMain;
function isImage(v) {
    return ((0, util_1.isObj)(v) && (0, util_1.hasProp)(v, '$type') && v.$type === 'app.bsky.embed.images#image');
}
exports.isImage = isImage;
function validateImage(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.images#image', v);
}
exports.validateImage = validateImage;
function isAspectRatio(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.embed.images#aspectRatio');
}
exports.isAspectRatio = isAspectRatio;
function validateAspectRatio(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.images#aspectRatio', v);
}
exports.validateAspectRatio = validateAspectRatio;
function isView(v) {
    return ((0, util_1.isObj)(v) && (0, util_1.hasProp)(v, '$type') && v.$type === 'app.bsky.embed.images#view');
}
exports.isView = isView;
function validateView(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.images#view', v);
}
exports.validateView = validateView;
function isViewImage(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.embed.images#viewImage');
}
exports.isViewImage = isViewImage;
function validateViewImage(v) {
    return lexicons_1.lexicons.validate('app.bsky.embed.images#viewImage', v);
}
exports.validateViewImage = validateViewImage;
