import { MessageComposer } from '../../codegen/cosmos/bank/v1beta1/tx.registry';
const { multiSend, send } = MessageComposer.withTypeUrl;
export const BuildMsgSend = (fromAddress, toAddress, amount) => {
    const value = {
        fromAddress,
        toAddress,
        amount,
    };
    return send(value);
};
export const BuildMsgMultiSend = (inputs, outputs) => {
    const value = {
        inputs,
        outputs,
    };
    return multiSend(value);
};
//# sourceMappingURL=bank.js.map