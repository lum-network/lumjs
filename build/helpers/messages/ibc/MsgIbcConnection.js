"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMsgConnectionOpenTry = exports.BuildMsgConnectionOpenInit = exports.BuildMsgConnectionOpenConfirm = exports.BuildMsgConnectionOpenAck = void 0;
const tx_registry_1 = require("../../../codegen/ibc/core/connection/v1/tx.registry");
const { connectionOpenAck, connectionOpenConfirm, connectionOpenInit, connectionOpenTry } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgConnectionOpenAck = (connectionId, signer, counterpartyConnectionId, proofClient, proofConsensus, proofTry, clientState, proofHeight, consensusHeight, version) => {
    const value = {
        connectionId,
        signer,
        counterpartyConnectionId,
        proofClient,
        proofConsensus,
        proofTry,
        clientState,
        proofHeight,
        consensusHeight,
        version,
    };
    return connectionOpenAck(value);
};
exports.BuildMsgConnectionOpenAck = BuildMsgConnectionOpenAck;
const BuildMsgConnectionOpenConfirm = (connectionId, signer, proofAck, proofHeight) => {
    const value = {
        connectionId,
        signer,
        proofAck,
        proofHeight,
    };
    return connectionOpenConfirm(value);
};
exports.BuildMsgConnectionOpenConfirm = BuildMsgConnectionOpenConfirm;
const BuildMsgConnectionOpenInit = (clientId, signer, delayPeriod, counterparty, version) => {
    const value = {
        clientId,
        signer,
        delayPeriod,
        counterparty,
        version,
    };
    return connectionOpenInit(value);
};
exports.BuildMsgConnectionOpenInit = BuildMsgConnectionOpenInit;
const BuildMsgConnectionOpenTry = (signer, clientId, previousConnectionId, delayPeriod, counterpartyVersions, proofClient, proofConsensus, proofInit, clientState, proofHeight, consensusHeight, counterparty) => {
    const value = {
        signer,
        clientId,
        previousConnectionId,
        delayPeriod,
        counterpartyVersions,
        proofClient,
        proofConsensus,
        proofInit,
        clientState,
        proofHeight,
        consensusHeight,
        counterparty,
    };
    return connectionOpenTry(value);
};
exports.BuildMsgConnectionOpenTry = BuildMsgConnectionOpenTry;
//# sourceMappingURL=MsgIbcConnection.js.map