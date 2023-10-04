import { registry, MessageComposer } from '../../codegen/cosmos/slashing/v1beta1/tx.registry';
const { unjail } = MessageComposer.withTypeUrl;
export const BuildMsgUnjail = (validatorAddr) => {
    const value = {
        validatorAddr,
    };
    return unjail(value);
};
const slashingMsgUrl = {};
registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    slashingMsgUrl[msgType] = url;
});
export { slashingMsgUrl };
//# sourceMappingURL=slashing.js.map