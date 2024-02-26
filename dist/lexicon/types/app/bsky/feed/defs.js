"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateThreadgateView = exports.isThreadgateView = exports.validateSkeletonReasonRepost = exports.isSkeletonReasonRepost = exports.validateSkeletonFeedPost = exports.isSkeletonFeedPost = exports.validateGeneratorViewerState = exports.isGeneratorViewerState = exports.validateGeneratorView = exports.isGeneratorView = exports.validateViewerThreadState = exports.isViewerThreadState = exports.validateBlockedAuthor = exports.isBlockedAuthor = exports.validateBlockedPost = exports.isBlockedPost = exports.validateNotFoundPost = exports.isNotFoundPost = exports.validateThreadViewPost = exports.isThreadViewPost = exports.validateReasonRepost = exports.isReasonRepost = exports.validateReplyRef = exports.isReplyRef = exports.validateFeedViewPost = exports.isFeedViewPost = exports.validateViewerState = exports.isViewerState = exports.validatePostView = exports.isPostView = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isPostView(v) {
    return ((0, util_1.isObj)(v) && (0, util_1.hasProp)(v, '$type') && v.$type === 'app.bsky.feed.defs#postView');
}
exports.isPostView = isPostView;
function validatePostView(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#postView', v);
}
exports.validatePostView = validatePostView;
function isViewerState(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#viewerState');
}
exports.isViewerState = isViewerState;
function validateViewerState(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#viewerState', v);
}
exports.validateViewerState = validateViewerState;
function isFeedViewPost(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#feedViewPost');
}
exports.isFeedViewPost = isFeedViewPost;
function validateFeedViewPost(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#feedViewPost', v);
}
exports.validateFeedViewPost = validateFeedViewPost;
function isReplyRef(v) {
    return ((0, util_1.isObj)(v) && (0, util_1.hasProp)(v, '$type') && v.$type === 'app.bsky.feed.defs#replyRef');
}
exports.isReplyRef = isReplyRef;
function validateReplyRef(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#replyRef', v);
}
exports.validateReplyRef = validateReplyRef;
function isReasonRepost(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#reasonRepost');
}
exports.isReasonRepost = isReasonRepost;
function validateReasonRepost(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#reasonRepost', v);
}
exports.validateReasonRepost = validateReasonRepost;
function isThreadViewPost(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#threadViewPost');
}
exports.isThreadViewPost = isThreadViewPost;
function validateThreadViewPost(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#threadViewPost', v);
}
exports.validateThreadViewPost = validateThreadViewPost;
function isNotFoundPost(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#notFoundPost');
}
exports.isNotFoundPost = isNotFoundPost;
function validateNotFoundPost(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#notFoundPost', v);
}
exports.validateNotFoundPost = validateNotFoundPost;
function isBlockedPost(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#blockedPost');
}
exports.isBlockedPost = isBlockedPost;
function validateBlockedPost(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#blockedPost', v);
}
exports.validateBlockedPost = validateBlockedPost;
function isBlockedAuthor(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#blockedAuthor');
}
exports.isBlockedAuthor = isBlockedAuthor;
function validateBlockedAuthor(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#blockedAuthor', v);
}
exports.validateBlockedAuthor = validateBlockedAuthor;
function isViewerThreadState(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#viewerThreadState');
}
exports.isViewerThreadState = isViewerThreadState;
function validateViewerThreadState(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#viewerThreadState', v);
}
exports.validateViewerThreadState = validateViewerThreadState;
function isGeneratorView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#generatorView');
}
exports.isGeneratorView = isGeneratorView;
function validateGeneratorView(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#generatorView', v);
}
exports.validateGeneratorView = validateGeneratorView;
function isGeneratorViewerState(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#generatorViewerState');
}
exports.isGeneratorViewerState = isGeneratorViewerState;
function validateGeneratorViewerState(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#generatorViewerState', v);
}
exports.validateGeneratorViewerState = validateGeneratorViewerState;
function isSkeletonFeedPost(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#skeletonFeedPost');
}
exports.isSkeletonFeedPost = isSkeletonFeedPost;
function validateSkeletonFeedPost(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#skeletonFeedPost', v);
}
exports.validateSkeletonFeedPost = validateSkeletonFeedPost;
function isSkeletonReasonRepost(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#skeletonReasonRepost');
}
exports.isSkeletonReasonRepost = isSkeletonReasonRepost;
function validateSkeletonReasonRepost(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#skeletonReasonRepost', v);
}
exports.validateSkeletonReasonRepost = validateSkeletonReasonRepost;
function isThreadgateView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.defs#threadgateView');
}
exports.isThreadgateView = isThreadgateView;
function validateThreadgateView(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.defs#threadgateView', v);
}
exports.validateThreadgateView = validateThreadgateView;
