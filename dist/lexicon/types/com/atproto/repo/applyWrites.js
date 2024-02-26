"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDelete = exports.isDelete = exports.validateUpdate = exports.isUpdate = exports.validateCreate = exports.isCreate = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isCreate(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.repo.applyWrites#create');
}
exports.isCreate = isCreate;
function validateCreate(v) {
    return lexicons_1.lexicons.validate('com.atproto.repo.applyWrites#create', v);
}
exports.validateCreate = validateCreate;
function isUpdate(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.repo.applyWrites#update');
}
exports.isUpdate = isUpdate;
function validateUpdate(v) {
    return lexicons_1.lexicons.validate('com.atproto.repo.applyWrites#update', v);
}
exports.validateUpdate = validateUpdate;
function isDelete(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.repo.applyWrites#delete');
}
exports.isDelete = isDelete;
function validateDelete(v) {
    return lexicons_1.lexicons.validate('com.atproto.repo.applyWrites#delete', v);
}
exports.validateDelete = validateDelete;
