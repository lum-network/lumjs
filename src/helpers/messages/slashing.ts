import { MsgUnjail } from '../../codegen/cosmos/slashing/v1beta1/tx';
import { registry, MessageComposer } from '../../codegen/cosmos/slashing/v1beta1/tx.registry';
import { Message } from '../types';

const { unjail } = MessageComposer.withTypeUrl;

export const BuildMsgUnjail = (validatorAddr: string): Message => {
    const value: MsgUnjail = {
        validatorAddr,
    };
    return unjail(value);
};

const slashingMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    slashingMsgUrl[msgType] = url;
});

export { slashingMsgUrl };
