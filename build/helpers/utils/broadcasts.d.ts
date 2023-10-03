import { BroadcastTxSyncResponse, BroadcastTxCommitResponse } from '../types';
/**
 * Returns true if transaction made it sucessfully into the transaction pool
 */
export declare const broadcastTxSyncSuccess: (res: BroadcastTxSyncResponse) => boolean;
/**
 * Returns true if transaction made it successfully into a block
 * (i.e. success in `check_tx` and `deliver_tx` field)
 */
export declare const broadcastTxCommitSuccess: (response: BroadcastTxCommitResponse) => boolean;
