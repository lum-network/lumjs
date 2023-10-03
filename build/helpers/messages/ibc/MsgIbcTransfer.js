"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMsgTransfer = void 0;
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
//# sourceMappingURL=MsgIbcTransfer.js.map