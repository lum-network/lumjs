"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ibcClientMsgUrl = exports.BuildMsgSubmitMisbehaviour = exports.BuildMsgUpgradeClient = exports.BuildMsgUpdateClient = exports.BuildMsgCreateClient = void 0;
const tx_registry_1 = require("../../../codegen/ibc/core/client/v1/tx.registry");
const { createClient, updateClient, upgradeClient, submitMisbehaviour } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgCreateClient = (signer, clientState, consensusState) => {
    const value = {
        signer,
        clientState,
        consensusState,
    };
    return createClient(value);
};
exports.BuildMsgCreateClient = BuildMsgCreateClient;
const BuildMsgUpdateClient = (clientId, signer, header) => {
    const value = {
        clientId,
        signer,
        header,
    };
    return updateClient(value);
};
exports.BuildMsgUpdateClient = BuildMsgUpdateClient;
const BuildMsgUpgradeClient = (clientId, proofUpgradeClient, signer, proofUpgradeConsensusState, clientState, consensusState) => {
    const value = {
        clientId,
        proofUpgradeClient,
        signer,
        proofUpgradeConsensusState,
        clientState,
        consensusState,
    };
    return upgradeClient(value);
};
exports.BuildMsgUpgradeClient = BuildMsgUpgradeClient;
const BuildMsgSubmitMisbehaviour = (signer, clientId, misbehaviour) => {
    const value = {
        signer,
        clientId,
        misbehaviour,
    };
    return submitMisbehaviour(value);
};
exports.BuildMsgSubmitMisbehaviour = BuildMsgSubmitMisbehaviour;
const ibcClientMsgUrl = {};
exports.ibcClientMsgUrl = ibcClientMsgUrl;
tx_registry_1.registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    ibcClientMsgUrl[msgType] = url;
});
//# sourceMappingURL=MsgIbcClient.js.map