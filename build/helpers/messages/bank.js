"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankMsgUrl = exports.BuildMsgMultiSend = exports.BuildMsgSend = void 0;
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
const bankMsgUrl = {};
exports.bankMsgUrl = bankMsgUrl;
tx_registry_1.registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    bankMsgUrl[msgType] = url;
});
//# sourceMappingURL=bank.js.map