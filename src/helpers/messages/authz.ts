import { Any } from '../../codegen/google/protobuf/any';
import { registry, MessageComposer } from '../../codegen/cosmos/authz/v1beta1/tx.registry';
import { MsgExec, MsgGrant, MsgRevoke } from '../../codegen/cosmos/authz/v1beta1/tx';
import { Grant } from '../../codegen/cosmos/authz/v1beta1/authz';
import { Message } from '../types';

const { exec, grant, revoke } = MessageComposer.withTypeUrl;

export const BuildMsgExec = (grantee: string, msgs: Any[]): Message => {
    const value: MsgExec = {
        grantee,
        msgs,
    };
    return exec(value);
};

export const BuildMsgGrant = (granter: string, grantee: string, grantValue?: Grant): Message => {
    const value: MsgGrant = {
        granter,
        grantee,
        grant: grantValue,
    };
    return grant(value);
};

export const BuildMsgRevoke = (granter: string, grantee: string, msgTypeUrl: string): Message => {
    const value: MsgRevoke = {
        granter,
        grantee,
        msgTypeUrl,
    };
    return revoke(value);
};

const authzMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    authzMsgUrl[msgType] = url;
});

export { authzMsgUrl };
