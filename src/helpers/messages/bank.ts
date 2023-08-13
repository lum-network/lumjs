import { MessageComposer } from '../../codegen/cosmos/bank/v1beta1/tx.registry';
import { Input, Output } from '../../codegen/cosmos/bank/v1beta1/bank';
import { MsgMultiSend, MsgSend } from '../../codegen/cosmos/bank/v1beta1/tx';
import { Message, Coin } from '../types';

const { multiSend, send } = MessageComposer.withTypeUrl;

export const BuildMsgSend = (fromAddress: string, toAddress: string, amount: Coin[]): Message => {
    const value: MsgSend = {
        fromAddress,
        toAddress,
        amount,
    };
    return send(value);
};

export const BuildMsgMultiSend = (inputs: Input[], outputs: Output[]): Message => {
    const value: MsgMultiSend = {
        inputs,
        outputs,
    };
    return multiSend(value);
};
