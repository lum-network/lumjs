"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMsgMultiSend = exports.BuildMsgSend = void 0;
const tx_registry_1 = require("../../codegen/cosmos/bank/v1beta1/tx.registry");
const { multiSend, send } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgSend = (fromAddress, toAddress, amount) => {
    const value = {
        fromAddress,
        toAddress,
        amount,
    };
    return send(value);
};
exports.BuildMsgSend = BuildMsgSend;
const BuildMsgMultiSend = (inputs, outputs) => {
    const value = {
        inputs,
        outputs,
    };
    return multiSend(value);
};
exports.BuildMsgMultiSend = BuildMsgMultiSend;
//# sourceMappingURL=bank.js.map