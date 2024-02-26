"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRepo = exports.isRepo = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isRepo(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.sync.listRepos#repo');
}
exports.isRepo = isRepo;
function validateRepo(v) {
    return lexicons_1.lexicons.validate('com.atproto.sync.listRepos#repo', v);
}
exports.validateRepo = validateRepo;
