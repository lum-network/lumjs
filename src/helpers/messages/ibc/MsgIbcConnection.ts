import { Any } from '../../../codegen/google/protobuf/any';
import { Message } from '../../types';
import { MessageComposer } from '../../../codegen/ibc/core/connection/v1/tx.registry';
import { MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgConnectionOpenInit, MsgConnectionOpenTry } from '../../../codegen/ibc/core/connection/v1/tx';
import { Height } from '../../../codegen/ibc/core/client/v1/client';
import { Version, Counterparty } from '../../../codegen/ibc/core/connection/v1/connection';

const { connectionOpenAck, connectionOpenConfirm, connectionOpenInit, connectionOpenTry } = MessageComposer.withTypeUrl;

export const BuildMsgConnectionOpenAck = (
    connectionId: string,
    signer: string,
    counterpartyConnectionId: string,
    proofClient: Uint8Array,
    proofConsensus: Uint8Array,
    proofTry: Uint8Array,
    clientState?: Any,
    proofHeight?: Height,
    consensusHeight?: Height,
    version?: Version,
): Message => {
    const value: MsgConnectionOpenAck = {
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

export const BuildMsgConnectionOpenConfirm = (connectionId: string, signer: string, proofAck: Uint8Array, proofHeight?: Height): Message => {
    const value: MsgConnectionOpenConfirm = {
        connectionId,
        signer,
        proofAck,
        proofHeight,
    };
    return connectionOpenConfirm(value);
};

export const BuildMsgConnectionOpenInit = (clientId: string, signer: string, delayPeriod: Long.Long, counterparty?: Counterparty, version?: Version): Message => {
    const value: MsgConnectionOpenInit = {
        clientId,
        signer,
        delayPeriod,
        counterparty,
        version,
    };
    return connectionOpenInit(value);
};

export const BuildMsgConnectionOpenTry = (
    signer: string,
    clientId: string,
    previousConnectionId: string,
    delayPeriod: Long.Long,
    counterpartyVersions: Version[],
    proofClient: Uint8Array,
    proofConsensus: Uint8Array,
    proofInit: Uint8Array,
    clientState?: Any,
    proofHeight?: Height,
    consensusHeight?: Height,
    counterparty?: Counterparty,
): Message => {
    const value: MsgConnectionOpenTry = {
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
