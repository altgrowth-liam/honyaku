"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRecord = exports.isRecord = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isRecord(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        (v.$type === 'app.bsky.graph.listblock#main' ||
            v.$type === 'app.bsky.graph.listblock'));
}
exports.isRecord = isRecord;
function validateRecord(v) {
    return lexicons_1.lexicons.validate('app.bsky.graph.listblock#main', v);
}
exports.validateRecord = validateRecord;
