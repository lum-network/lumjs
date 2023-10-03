import { Message, Coin } from '../types';
import { MsgDeposit } from '../../codegen/lum/network/dfract/tx';
import { registry, MessageComposer } from '../../codegen/lum/network/dfract/tx.registry';

const { deposit } = MessageComposer.withTypeUrl;

export const BuildMsgDepositDfract = (depositorAddress: string, amount: Coin): Message => {
    const value: MsgDeposit = {
        depositorAddress,
        amount,
    };
    return deposit(value);
};

const dfractMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    dfractMsgUrl[msgType] = url;
});

export { dfractMsgUrl };
