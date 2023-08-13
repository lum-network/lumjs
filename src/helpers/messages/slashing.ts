import { Message } from '../types';
import { MsgUnjail } from '../../codegen/cosmos/slashing/v1beta1/tx';
import { MessageComposer } from '../../codegen/cosmos/slashing/v1beta1/tx.registry';

const { unjail } = MessageComposer.withTypeUrl;

export const BuildMsgUnjail = (validatorAddr: string): Message => {
    const value: MsgUnjail = {
        validatorAddr,
    };
    return unjail(value);
};
