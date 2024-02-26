"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLinks = exports.isLinks = exports.validateFeed = exports.isFeed = void 0;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isFeed(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.describeFeedGenerator#feed');
}
exports.isFeed = isFeed;
function validateFeed(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.describeFeedGenerator#feed', v);
}
exports.validateFeed = validateFeed;
function isLinks(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.feed.describeFeedGenerator#links');
}
exports.isLinks = isLinks;
function validateLinks(v) {
    return lexicons_1.lexicons.validate('app.bsky.feed.describeFeedGenerator#links', v);
}
exports.validateLinks = validateLinks;
