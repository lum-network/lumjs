"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTxTo = exports.searchTxFrom = exports.searchTxByTags = exports.searchTxByBlockHeight = void 0;
/**
 * Create a search query by block height
 *
 * @param height block height
 */
const searchTxByBlockHeight = (height) => {
    return `tx.height=${height}`;
};
exports.searchTxByBlockHeight = searchTxByBlockHeight;
/**
 * Create a search query by tags
 *
 * @param tags tags to search for
 * @param minHeight min block height (filter)
 * @param maxHeight max block height (filter)
 */
const searchTxByTags = (tags, minHeight, maxHeight) => {
    minHeight = minHeight || 0;
    maxHeight = maxHeight || Number.MAX_SAFE_INTEGER;
    const query = tags.map((t) => `${t.key}='${t.value}'`).join(' AND ');
    return `${query} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
};
exports.searchTxByTags = searchTxByTags;
/**
 * Create a search query by sender address
 *
 * @param senderAddress wallet address (bech32)
 * @param minHeight min block height (filter)
 * @param maxHeight max block height (filter)
 */
const searchTxFrom = (senderAddress, minHeight, maxHeight) => {
    minHeight = minHeight || 0;
    maxHeight = maxHeight || Number.MAX_SAFE_INTEGER;
    const query = `message.module='bank' AND transfer.sender='${senderAddress}'`;
    return `${query} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
};
exports.searchTxFrom = searchTxFrom;
/**
 * Create a search query by recipient address
 *
 * @param recipientAddress wallet address (bech32)
 * @param minHeight min block height (filter)
 * @param maxHeight max block height (filter)
 */
const searchTxTo = (recipientAddress, minHeight, maxHeight) => {
    minHeight = minHeight || 0;
    maxHeight = maxHeight || Number.MAX_SAFE_INTEGER;
    const query = `message.module='bank' AND transfer.recipient='${recipientAddress}'`;
    return `${query} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
};
exports.searchTxTo = searchTxTo;
//# sourceMappingURL=search.js.map