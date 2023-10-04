import { registry, MessageComposer } from '../../codegen/cosmos/feegrant/v1beta1/tx.registry';
const { grantAllowance, revokeAllowance } = MessageComposer.withTypeUrl;
export const BuildMsgGrantAllowance = (granter, grantee, allowance) => {
    const value = {
        granter,
        grantee,
        allowance,
    };
    return grantAllowance(value);
};
export const BuildMsgRevokeAllowance = (granter, grantee) => {
    const value = {
        granter,
        grantee,
    };
    return revokeAllowance(value);
};
const feeGrantMsgUrl = {};
registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    feeGrantMsgUrl[msgType] = url;
});
export { feeGrantMsgUrl };
//# sourceMappingURL=feegrant.js.map