/**
 * Returns true if transaction made it sucessfully into the transaction pool
 */
export const broadcastTxSyncSuccess = (res) => {
    return res.code === 0;
};
/**
 * Returns true if transaction made it successfully into a block
 * (i.e. success in `check_tx` and `deliver_tx` field)
 */
export const broadcastTxCommitSuccess = (response) => {
    return response.checkTx.code === 0 && !!response.deliverTx && response.deliverTx.code === 0;
};
//# sourceMappingURL=broadcasts.js.map