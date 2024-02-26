"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAppPassword = exports.isAppPassword = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isAppPassword(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.server.createAppPassword#appPassword');
}
exports.isAppPassword = isAppPassword;
function validateAppPassword(v) {
    return lexicons_1.lexicons.validate('com.atproto.server.createAppPassword#appPassword', v);
}
exports.validateAppPassword = validateAppPassword;
