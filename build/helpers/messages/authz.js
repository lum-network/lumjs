"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMsgRevoke = exports.BuildMsgGrant = exports.BuildMsgExec = void 0;
const tx_registry_1 = require("../../codegen/cosmos/authz/v1beta1/tx.registry");
const { exec, grant, revoke } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgExec = (grantee, msgs) => {
    const value = {
        grantee,
        msgs,
    };
    return exec(value);
};
exports.BuildMsgExec = BuildMsgExec;
const BuildMsgGrant = (granter, grantee, grantValue) => {
    const value = {
        granter,
        grantee,
        grant: grantValue,
    };
    return grant(value);
};
exports.BuildMsgGrant = BuildMsgGrant;
const BuildMsgRevoke = (granter, grantee, msgTypeUrl) => {
    const value = {
        granter,
        grantee,
        msgTypeUrl,
    };
    return revoke(value);
};
exports.BuildMsgRevoke = BuildMsgRevoke;
//# sourceMappingURL=authz.js.map