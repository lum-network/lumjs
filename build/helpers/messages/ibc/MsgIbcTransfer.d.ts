import Long from 'long';
import { Message } from '../../types';
import { Height } from '../../../codegen/ibc/core/client/v1/client';
import { Coin } from '../../types';
export declare const BuildMsgTransfer: (receiver: string, sender: string, sourceChannel: string, sourcePort: string, timeoutTimestamp: Long.Long, timeoutHeight?: Height, token?: Coin) => Message;
declare const ibcTransferMsgUrl: {
    [key: string]: string;
};
export { ibcTransferMsgUrl };
