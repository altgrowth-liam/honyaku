"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateThreadViewPref = exports.isThreadViewPref = exports.validateFeedViewPref = exports.isFeedViewPref = exports.validatePersonalDetailsPref = exports.isPersonalDetailsPref = exports.validateSavedFeedsPref = exports.isSavedFeedsPref = exports.validateContentLabelPref = exports.isContentLabelPref = exports.validateAdultContentPref = exports.isAdultContentPref = exports.validateViewerState = exports.isViewerState = exports.validateProfileViewDetailed = exports.isProfileViewDetailed = exports.validateProfileView = exports.isProfileView = exports.validateProfileViewBasic = exports.isProfileViewBasic = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isProfileViewBasic(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#profileViewBasic');
}
exports.isProfileViewBasic = isProfileViewBasic;
function validateProfileViewBasic(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#profileViewBasic', v);
}
exports.validateProfileViewBasic = validateProfileViewBasic;
function isProfileView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#profileView');
}
exports.isProfileView = isProfileView;
function validateProfileView(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#profileView', v);
}
exports.validateProfileView = validateProfileView;
function isProfileViewDetailed(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#profileViewDetailed');
}
exports.isProfileViewDetailed = isProfileViewDetailed;
function validateProfileViewDetailed(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#profileViewDetailed', v);
}
exports.validateProfileViewDetailed = validateProfileViewDetailed;
function isViewerState(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#viewerState');
}
exports.isViewerState = isViewerState;
function validateViewerState(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#viewerState', v);
}
exports.validateViewerState = validateViewerState;
function isAdultContentPref(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#adultContentPref');
}
exports.isAdultContentPref = isAdultContentPref;
function validateAdultContentPref(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#adultContentPref', v);
}
exports.validateAdultContentPref = validateAdultContentPref;
function isContentLabelPref(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#contentLabelPref');
}
exports.isContentLabelPref = isContentLabelPref;
function validateContentLabelPref(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#contentLabelPref', v);
}
exports.validateContentLabelPref = validateContentLabelPref;
function isSavedFeedsPref(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#savedFeedsPref');
}
exports.isSavedFeedsPref = isSavedFeedsPref;
function validateSavedFeedsPref(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#savedFeedsPref', v);
}
exports.validateSavedFeedsPref = validateSavedFeedsPref;
function isPersonalDetailsPref(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#personalDetailsPref');
}
exports.isPersonalDetailsPref = isPersonalDetailsPref;
function validatePersonalDetailsPref(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#personalDetailsPref', v);
}
exports.validatePersonalDetailsPref = validatePersonalDetailsPref;
function isFeedViewPref(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#feedViewPref');
}
exports.isFeedViewPref = isFeedViewPref;
function validateFeedViewPref(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#feedViewPref', v);
}
exports.validateFeedViewPref = validateFeedViewPref;
function isThreadViewPref(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.actor.defs#threadViewPref');
}
exports.isThreadViewPref = isThreadViewPref;
function validateThreadViewPref(v) {
    return lexicons_1.lexicons.validate('app.bsky.actor.defs#threadViewPref', v);
}
exports.validateThreadViewPref = validateThreadViewPref;
