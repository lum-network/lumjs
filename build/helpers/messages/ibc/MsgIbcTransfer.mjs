import { registry, MessageComposer } from '../../../codegen/ibc/applications/transfer/v1/tx.registry';
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
const ibcTransferMsgUrl = {};
registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    ibcTransferMsgUrl[msgType] = url;
});
export { ibcTransferMsgUrl };
//# sourceMappingURL=MsgIbcTransfer.js.map