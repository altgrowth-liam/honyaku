"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVideoDetails = exports.isVideoDetails = exports.validateImageDetails = exports.isImageDetails = exports.validateBlobView = exports.isBlobView = exports.validateModerationDetail = exports.isModerationDetail = exports.validateModeration = exports.isModeration = exports.validateRecordViewNotFound = exports.isRecordViewNotFound = exports.validateRecordViewDetail = exports.isRecordViewDetail = exports.validateRecordView = exports.isRecordView = exports.validateRepoRef = exports.isRepoRef = exports.validateRepoViewNotFound = exports.isRepoViewNotFound = exports.validateRepoViewDetail = exports.isRepoViewDetail = exports.validateRepoView = exports.isRepoView = exports.validateReportViewDetail = exports.isReportViewDetail = exports.validateReportView = exports.isReportView = exports.ESCALATE = exports.ACKNOWLEDGE = exports.FLAG = exports.TAKEDOWN = exports.validateActionReversal = exports.isActionReversal = exports.validateActionViewCurrent = exports.isActionViewCurrent = exports.validateActionViewDetail = exports.isActionViewDetail = exports.validateActionView = exports.isActionView = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isActionView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#actionView');
}
exports.isActionView = isActionView;
function validateActionView(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#actionView', v);
}
exports.validateActionView = validateActionView;
function isActionViewDetail(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#actionViewDetail');
}
exports.isActionViewDetail = isActionViewDetail;
function validateActionViewDetail(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#actionViewDetail', v);
}
exports.validateActionViewDetail = validateActionViewDetail;
function isActionViewCurrent(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#actionViewCurrent');
}
exports.isActionViewCurrent = isActionViewCurrent;
function validateActionViewCurrent(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#actionViewCurrent', v);
}
exports.validateActionViewCurrent = validateActionViewCurrent;
function isActionReversal(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#actionReversal');
}
exports.isActionReversal = isActionReversal;
function validateActionReversal(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#actionReversal', v);
}
exports.validateActionReversal = validateActionReversal;
/** Moderation action type: Takedown. Indicates that content should not be served by the PDS. */
exports.TAKEDOWN = 'com.atproto.admin.defs#takedown';
/** Moderation action type: Flag. Indicates that the content was reviewed and considered to violate PDS rules, but may still be served. */
exports.FLAG = 'com.atproto.admin.defs#flag';
/** Moderation action type: Acknowledge. Indicates that the content was reviewed and not considered to violate PDS rules. */
exports.ACKNOWLEDGE = 'com.atproto.admin.defs#acknowledge';
/** Moderation action type: Escalate. Indicates that the content has been flagged for additional review. */
exports.ESCALATE = 'com.atproto.admin.defs#escalate';
function isReportView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#reportView');
}
exports.isReportView = isReportView;
function validateReportView(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#reportView', v);
}
exports.validateReportView = validateReportView;
function isReportViewDetail(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#reportViewDetail');
}
exports.isReportViewDetail = isReportViewDetail;
function validateReportViewDetail(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#reportViewDetail', v);
}
exports.validateReportViewDetail = validateReportViewDetail;
function isRepoView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#repoView');
}
exports.isRepoView = isRepoView;
function validateRepoView(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#repoView', v);
}
exports.validateRepoView = validateRepoView;
function isRepoViewDetail(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#repoViewDetail');
}
exports.isRepoViewDetail = isRepoViewDetail;
function validateRepoViewDetail(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#repoViewDetail', v);
}
exports.validateRepoViewDetail = validateRepoViewDetail;
function isRepoViewNotFound(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#repoViewNotFound');
}
exports.isRepoViewNotFound = isRepoViewNotFound;
function validateRepoViewNotFound(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#repoViewNotFound', v);
}
exports.validateRepoViewNotFound = validateRepoViewNotFound;
function isRepoRef(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#repoRef');
}
exports.isRepoRef = isRepoRef;
function validateRepoRef(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#repoRef', v);
}
exports.validateRepoRef = validateRepoRef;
function isRecordView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#recordView');
}
exports.isRecordView = isRecordView;
function validateRecordView(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#recordView', v);
}
exports.validateRecordView = validateRecordView;
function isRecordViewDetail(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#recordViewDetail');
}
exports.isRecordViewDetail = isRecordViewDetail;
function validateRecordViewDetail(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#recordViewDetail', v);
}
exports.validateRecordViewDetail = validateRecordViewDetail;
function isRecordViewNotFound(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#recordViewNotFound');
}
exports.isRecordViewNotFound = isRecordViewNotFound;
function validateRecordViewNotFound(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#recordViewNotFound', v);
}
exports.validateRecordViewNotFound = validateRecordViewNotFound;
function isModeration(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#moderation');
}
exports.isModeration = isModeration;
function validateModeration(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#moderation', v);
}
exports.validateModeration = validateModeration;
function isModerationDetail(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#moderationDetail');
}
exports.isModerationDetail = isModerationDetail;
function validateModerationDetail(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#moderationDetail', v);
}
exports.validateModerationDetail = validateModerationDetail;
function isBlobView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#blobView');
}
exports.isBlobView = isBlobView;
function validateBlobView(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#blobView', v);
}
exports.validateBlobView = validateBlobView;
function isImageDetails(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#imageDetails');
}
exports.isImageDetails = isImageDetails;
function validateImageDetails(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#imageDetails', v);
}
exports.validateImageDetails = validateImageDetails;
function isVideoDetails(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.admin.defs#videoDetails');
}
exports.isVideoDetails = isVideoDetails;
function validateVideoDetails(v) {
    return lexicons_1.lexicons.validate('com.atproto.admin.defs#videoDetails', v);
}
exports.validateVideoDetails = validateVideoDetails;
