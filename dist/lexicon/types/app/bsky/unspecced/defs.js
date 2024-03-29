"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSkeletonSearchActor = exports.isSkeletonSearchActor = exports.validateSkeletonSearchPost = exports.isSkeletonSearchPost = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isSkeletonSearchPost(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.unspecced.defs#skeletonSearchPost');
}
exports.isSkeletonSearchPost = isSkeletonSearchPost;
function validateSkeletonSearchPost(v) {
    return lexicons_1.lexicons.validate('app.bsky.unspecced.defs#skeletonSearchPost', v);
}
exports.validateSkeletonSearchPost = validateSkeletonSearchPost;
function isSkeletonSearchActor(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.unspecced.defs#skeletonSearchActor');
}
exports.isSkeletonSearchActor = isSkeletonSearchActor;
function validateSkeletonSearchActor(v) {
    return lexicons_1.lexicons.validate('app.bsky.unspecced.defs#skeletonSearchActor', v);
}
exports.validateSkeletonSearchActor = validateSkeletonSearchActor;
