"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ibcTransferMsgUrl = exports.BuildMsgTransfer = void 0;
const tx_registry_1 = require("../../../codegen/ibc/applications/transfer/v1/tx.registry");
const { transfer } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgTransfer = (receiver, sender, sourceChannel, sourcePort, timeoutTimestamp, timeoutHeight, token) => {
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
exports.BuildMsgTransfer = BuildMsgTransfer;
const ibcTransferMsgUrl = {};
exports.ibcTransferMsgUrl = ibcTransferMsgUrl;
tx_registry_1.registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    ibcTransferMsgUrl[msgType] = url;
});
//# sourceMappingURL=MsgIbcTransfer.js.map