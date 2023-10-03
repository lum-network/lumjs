import { Any } from '../../codegen/google/protobuf/any';
import { registry, MessageComposer } from '../../codegen/cosmos/feegrant/v1beta1/tx.registry';
import { MsgGrantAllowance, MsgRevokeAllowance } from '../../codegen/cosmos/feegrant/v1beta1/tx';
import { Message } from '../types';

const { grantAllowance, revokeAllowance } = MessageComposer.withTypeUrl;

export const BuildMsgGrantAllowance = (granter: string, grantee: string, allowance?: Any): Message => {
    const value: MsgGrantAllowance = {
        granter,
        grantee,
        allowance,
    };
    return grantAllowance(value);
};

export const BuildMsgRevokeAllowance = (granter: string, grantee: string): Message => {
    const value: MsgRevokeAllowance = {
        granter,
        grantee,
    };
    return revokeAllowance(value);
};

const feeGrantMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    feeGrantMsgUrl[msgType] = url;
});

export { feeGrantMsgUrl };
