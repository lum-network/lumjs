/**
 * Create a search query by block height
 *
 * @param height block height
 */
export declare const searchTxByBlockHeight: (height: number) => string;
/**
 * Create a search query by tags
 *
 * @param tags tags to search for
 * @param minHeight min block height (filter)
 * @param maxHeight max block height (filter)
 */
export declare const searchTxByTags: (tags: {
    key: string;
    value: string;
}[], minHeight?: number, maxHeight?: number) => string;
/**
 * Create a search query by sender address
 *
 * @param senderAddress wallet address (bech32)
 * @param minHeight min block height (filter)
 * @param maxHeight max block height (filter)
 */
export declare const searchTxFrom: (senderAddress: string, minHeight?: number, maxHeight?: number) => string;
/**
 * Create a search query by recipient address
 *
 * @param recipientAddress wallet address (bech32)
 * @param minHeight min block height (filter)
 * @param maxHeight max block height (filter)
 */
export declare const searchTxTo: (recipientAddress: string, minHeight?: number, maxHeight?: number) => string;
