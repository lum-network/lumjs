import { Message } from '../../types';
import { Any } from '../../../codegen/google/protobuf/any';
export declare const BuildMsgCreateClient: (signer: string, clientState?: Any, consensusState?: Any) => Message;
export declare const BuildMsgUpdateClient: (clientId: string, signer: string, header?: Any) => Message;
export declare const BuildMsgUpgradeClient: (clientId: string, proofUpgradeClient: Uint8Array, signer: string, proofUpgradeConsensusState: Uint8Array, clientState?: Any, consensusState?: Any) => Message;
export declare const BuildMsgSubmitMisbehaviour: (signer: string, clientId: string, misbehaviour?: Any) => Message;
