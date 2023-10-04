import { registry, MessageComposer } from '../../codegen/cosmos/authz/v1beta1/tx.registry';
const { exec, grant, revoke } = MessageComposer.withTypeUrl;
export const BuildMsgExec = (grantee, msgs) => {
    const value = {
        grantee,
        msgs,
    };
    return exec(value);
};
export const BuildMsgGrant = (granter, grantee, grantValue) => {
    const value = {
        granter,
        grantee,
        grant: grantValue,
    };
    return grant(value);
};
export const BuildMsgRevoke = (granter, grantee, msgTypeUrl) => {
    const value = {
        granter,
        grantee,
        msgTypeUrl,
    };
    return revoke(value);
};
const authzMsgUrl = {};
registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    authzMsgUrl[msgType] = url;
});
export { authzMsgUrl };
//# sourceMappingURL=authz.js.map