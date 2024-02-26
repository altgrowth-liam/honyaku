"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSelfLabel = exports.isSelfLabel = exports.validateSelfLabels = exports.isSelfLabels = exports.validateLabel = exports.isLabel = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isLabel(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.label.defs#label');
}
exports.isLabel = isLabel;
function validateLabel(v) {
    return lexicons_1.lexicons.validate('com.atproto.label.defs#label', v);
}
exports.validateLabel = validateLabel;
function isSelfLabels(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.label.defs#selfLabels');
}
exports.isSelfLabels = isSelfLabels;
function validateSelfLabels(v) {
    return lexicons_1.lexicons.validate('com.atproto.label.defs#selfLabels', v);
}
exports.validateSelfLabels = validateSelfLabels;
function isSelfLabel(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.label.defs#selfLabel');
}
exports.isSelfLabel = isSelfLabel;
function validateSelfLabel(v) {
    return lexicons_1.lexicons.validate('com.atproto.label.defs#selfLabel', v);
}
exports.validateSelfLabel = validateSelfLabel;
