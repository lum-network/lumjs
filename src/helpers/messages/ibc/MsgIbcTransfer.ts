import Long from 'long';
import { Message } from '../../types';
import { MsgTransfer } from '../../../codegen/ibc/applications/transfer/v1/tx';
import { Height } from '../../../codegen/ibc/core/client/v1/client';
import { Coin } from '../../types';
import { registry, MessageComposer } from '../../../codegen/ibc/applications/transfer/v1/tx.registry';

const { transfer } = MessageComposer.withTypeUrl;

export const BuildMsgTransfer = (receiver: string, sender: string, sourceChannel: string, sourcePort: string, timeoutTimestamp: Long.Long, timeoutHeight?: Height, token?: Coin): Message => {
    const value: MsgTransfer = {
        receiver,
        sender,
        sourceChannel,
        sourcePort,
        timeoutTimestamp,
        timeoutHeight,
        token,
    };
    return transfer(value);
};

const ibcTransferMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    ibcTransferMsgUrl[msgType] = url;
});

export { ibcTransferMsgUrl };
