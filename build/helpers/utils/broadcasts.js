"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastTxCommitSuccess = exports.broadcastTxSyncSuccess = void 0;
/**
 * Returns true if transaction made it sucessfully into the transaction pool
 */
const broadcastTxSyncSuccess = (res) => {
    return res.code === 0;
};
exports.broadcastTxSyncSuccess = broadcastTxSyncSuccess;
/**
 * Returns true if transaction made it successfully into a block
 * (i.e. success in `check_tx` and `deliver_tx` field)
 */
const broadcastTxCommitSuccess = (response) => {
    return response.checkTx.code === 0 && !!response.deliverTx && response.deliverTx.code === 0;
};
exports.broadcastTxCommitSuccess = broadcastTxCommitSuccess;
//# sourceMappingURL=broadcasts.js.map