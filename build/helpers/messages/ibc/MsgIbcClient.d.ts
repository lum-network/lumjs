import { Any } from '../../../codegen/google/protobuf/any';
import { Message } from '../../types';
export declare const BuildMsgCreateClient: (signer: string, clientState?: Any, consensusState?: Any) => Message;
export declare const BuildMsgUpdateClient: (clientId: string, signer: string, header?: Any) => Message;
export declare const BuildMsgUpgradeClient: (clientId: string, proofUpgradeClient: Uint8Array, signer: string, proofUpgradeConsensusState: Uint8Array, clientState?: Any, consensusState?: Any) => Message;
export declare const BuildMsgSubmitMisbehaviour: (signer: string, clientId: string, misbehaviour?: Any) => Message;
declare const ibcClientMsgUrl: {
    [key: string]: string;
};
export { ibcClientMsgUrl };
