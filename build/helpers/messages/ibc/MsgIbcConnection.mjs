import { MessageComposer } from '../../../codegen/ibc/core/connection/v1/tx.registry';
const { connectionOpenAck, connectionOpenConfirm, connectionOpenInit, connectionOpenTry } = MessageComposer.withTypeUrl;
export const BuildMsgConnectionOpenAck = (connectionId, signer, counterpartyConnectionId, proofClient, proofConsensus, proofTry, clientState, proofHeight, consensusHeight, version) => {
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
export const BuildMsgConnectionOpenConfirm = (connectionId, signer, proofAck, proofHeight) => {
    const value = {
        connectionId,
        signer,
        proofAck,
        proofHeight,
    };
    return connectionOpenConfirm(value);
};
export const BuildMsgConnectionOpenInit = (clientId, signer, delayPeriod, counterparty, version) => {
    const value = {
        clientId,
        signer,
        delayPeriod,
        counterparty,
        version,
    };
    return connectionOpenInit(value);
};
export const BuildMsgConnectionOpenTry = (signer, clientId, previousConnectionId, delayPeriod, counterpartyVersions, proofClient, proofConsensus, proofInit, clientState, proofHeight, consensusHeight, counterparty) => {
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
//# sourceMappingURL=MsgIbcConnection.js.map