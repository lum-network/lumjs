import { Any } from '../../../codegen/google/protobuf/any';
import { MsgCreateClient, MsgSubmitMisbehaviour, MsgUpdateClient, MsgUpgradeClient } from '../../../codegen/ibc/core/client/v1/tx';
import { registry, MessageComposer } from '../../../codegen/ibc/core/client/v1/tx.registry';
import { Message } from '../../types';

const { createClient, updateClient, upgradeClient, submitMisbehaviour } = MessageComposer.withTypeUrl;

export const BuildMsgCreateClient = (signer: string, clientState?: Any, consensusState?: Any): Message => {
    const value: MsgCreateClient = {
        signer,
        clientState,
        consensusState,
    };
    return createClient(value);
};

export const BuildMsgUpdateClient = (clientId: string, signer: string, header?: Any): Message => {
    const value: MsgUpdateClient = {
        clientId,
        signer,
        header,
    };
    return updateClient(value);
};

export const BuildMsgUpgradeClient = (clientId: string, proofUpgradeClient: Uint8Array, signer: string, proofUpgradeConsensusState: Uint8Array, clientState?: Any, consensusState?: Any): Message => {
    const value: MsgUpgradeClient = {
        clientId,
        proofUpgradeClient,
        signer,
        proofUpgradeConsensusState,
        clientState,
        consensusState,
    };
    return upgradeClient(value);
};

export const BuildMsgSubmitMisbehaviour = (signer: string, clientId: string, misbehaviour?: Any): Message => {
    const value: MsgSubmitMisbehaviour = {
        signer,
        clientId,
        misbehaviour,
    };
    return submitMisbehaviour(value);
};

const ibcClientMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    ibcClientMsgUrl[msgType] = url;
});

export { ibcClientMsgUrl };
