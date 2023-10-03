import { MessageComposer } from '../../../codegen/ibc/applications/transfer/v1/tx.registry';
const { transfer } = MessageComposer.withTypeUrl;
export const BuildMsgTransfer = (receiver, sender, sourceChannel, sourcePort, timeoutTimestamp, timeoutHeight, token) => {
    const value = {
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
//# sourceMappingURL=MsgIbcTransfer.js.map