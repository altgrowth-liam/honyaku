"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateListViewerState = exports.isListViewerState = exports.CURATELIST = exports.MODLIST = exports.validateListItemView = exports.isListItemView = exports.validateListView = exports.isListView = exports.validateListViewBasic = exports.isListViewBasic = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isListViewBasic(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.graph.defs#listViewBasic');
}
exports.isListViewBasic = isListViewBasic;
function validateListViewBasic(v) {
    return lexicons_1.lexicons.validate('app.bsky.graph.defs#listViewBasic', v);
}
exports.validateListViewBasic = validateListViewBasic;
function isListView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.graph.defs#listView');
}
exports.isListView = isListView;
function validateListView(v) {
    return lexicons_1.lexicons.validate('app.bsky.graph.defs#listView', v);
}
exports.validateListView = validateListView;
function isListItemView(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.graph.defs#listItemView');
}
exports.isListItemView = isListItemView;
function validateListItemView(v) {
    return lexicons_1.lexicons.validate('app.bsky.graph.defs#listItemView', v);
}
exports.validateListItemView = validateListItemView;
/** A list of actors to apply an aggregate moderation action (mute/block) on */
exports.MODLIST = 'app.bsky.graph.defs#modlist';
/** A list of actors used for curation purposes such as list feeds or interaction gating */
exports.CURATELIST = 'app.bsky.graph.defs#curatelist';
function isListViewerState(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.graph.defs#listViewerState');
}
exports.isListViewerState = isListViewerState;
function validateListViewerState(v) {
    return lexicons_1.lexicons.validate('app.bsky.graph.defs#listViewerState', v);
}
exports.validateListViewerState = validateListViewerState;
