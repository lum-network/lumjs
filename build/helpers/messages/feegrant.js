"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMsgRevokeAllowance = exports.BuildMsgGrantAllowance = void 0;
const tx_registry_1 = require("../../codegen/cosmos/feegrant/v1beta1/tx.registry");
const { grantAllowance, revokeAllowance } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgGrantAllowance = (granter, grantee, allowance) => {
    const value = {
        granter,
        grantee,
        allowance,
    };
    return grantAllowance(value);
};
exports.BuildMsgGrantAllowance = BuildMsgGrantAllowance;
const BuildMsgRevokeAllowance = (granter, grantee) => {
    const value = {
        granter,
        grantee,
    };
    return revokeAllowance(value);
};
exports.BuildMsgRevokeAllowance = BuildMsgRevokeAllowance;
//# sourceMappingURL=feegrant.js.map