"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLinks = exports.isLinks = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isLinks(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.server.describeServer#links');
}
exports.isLinks = isLinks;
function validateLinks(v) {
    return lexicons_1.lexicons.validate('com.atproto.server.describeServer#links', v);
}
exports.validateLinks = validateLinks;
