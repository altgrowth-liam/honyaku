"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRepoOp = exports.isRepoOp = exports.validateInfo = exports.isInfo = exports.validateTombstone = exports.isTombstone = exports.validateMigrate = exports.isMigrate = exports.validateHandle = exports.isHandle = exports.validateCommit = exports.isCommit = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isCommit(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.sync.subscribeRepos#commit');
}
exports.isCommit = isCommit;
function validateCommit(v) {
    return lexicons_1.lexicons.validate('com.atproto.sync.subscribeRepos#commit', v);
}
exports.validateCommit = validateCommit;
function isHandle(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.sync.subscribeRepos#handle');
}
exports.isHandle = isHandle;
function validateHandle(v) {
    return lexicons_1.lexicons.validate('com.atproto.sync.subscribeRepos#handle', v);
}
exports.validateHandle = validateHandle;
function isMigrate(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.sync.subscribeRepos#migrate');
}
exports.isMigrate = isMigrate;
function validateMigrate(v) {
    return lexicons_1.lexicons.validate('com.atproto.sync.subscribeRepos#migrate', v);
}
exports.validateMigrate = validateMigrate;
function isTombstone(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.sync.subscribeRepos#tombstone');
}
exports.isTombstone = isTombstone;
function validateTombstone(v) {
    return lexicons_1.lexicons.validate('com.atproto.sync.subscribeRepos#tombstone', v);
}
exports.validateTombstone = validateTombstone;
function isInfo(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.sync.subscribeRepos#info');
}
exports.isInfo = isInfo;
function validateInfo(v) {
    return lexicons_1.lexicons.validate('com.atproto.sync.subscribeRepos#info', v);
}
exports.validateInfo = validateInfo;
function isRepoOp(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.sync.subscribeRepos#repoOp');
}
exports.isRepoOp = isRepoOp;
function validateRepoOp(v) {
    return lexicons_1.lexicons.validate('com.atproto.sync.subscribeRepos#repoOp', v);
}
exports.validateRepoOp = validateRepoOp;
