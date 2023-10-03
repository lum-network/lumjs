import { MessageComposer } from '../../codegen/cosmos/slashing/v1beta1/tx.registry';
const { unjail } = MessageComposer.withTypeUrl;
export const BuildMsgUnjail = (validatorAddr) => {
    const value = {
        validatorAddr,
    };
    return unjail(value);
};
//# sourceMappingURL=slashing.js.map