import { Any } from '../../../codegen/google/protobuf/any';
import { Message } from '../../types';
import { Height } from '../../../codegen/ibc/core/client/v1/client';
import { Version, Counterparty } from '../../../codegen/ibc/core/connection/v1/connection';
export declare const BuildMsgConnectionOpenAck: (connectionId: string, signer: string, counterpartyConnectionId: string, proofClient: Uint8Array, proofConsensus: Uint8Array, proofTry: Uint8Array, clientState?: Any, proofHeight?: Height, consensusHeight?: Height, version?: Version) => Message;
export declare const BuildMsgConnectionOpenConfirm: (connectionId: string, signer: string, proofAck: Uint8Array, proofHeight?: Height) => Message;
export declare const BuildMsgConnectionOpenInit: (clientId: string, signer: string, delayPeriod: Long.Long, counterparty?: Counterparty, version?: Version) => Message;
export declare const BuildMsgConnectionOpenTry: (signer: string, clientId: string, previousConnectionId: string, delayPeriod: Long.Long, counterpartyVersions: Version[], proofClient: Uint8Array, proofConsensus: Uint8Array, proofInit: Uint8Array, clientState?: Any, proofHeight?: Height, consensusHeight?: Height, counterparty?: Counterparty) => Message;
