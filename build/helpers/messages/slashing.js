"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slashingMsgUrl = exports.BuildMsgUnjail = void 0;
const tx_registry_1 = require("../../codegen/cosmos/slashing/v1beta1/tx.registry");
const { unjail } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgUnjail = (validatorAddr) => {
    const value = {
        validatorAddr,
    };
    return unjail(value);
};
exports.BuildMsgUnjail = BuildMsgUnjail;
const slashingMsgUrl = {};
exports.slashingMsgUrl = slashingMsgUrl;
tx_registry_1.registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    slashingMsgUrl[msgType] = url;
});
//# sourceMappingURL=slashing.js.map