import { MessageComposer } from '../../../codegen/ibc/core/client/v1/tx.registry';
const { createClient, updateClient, upgradeClient, submitMisbehaviour } = MessageComposer.withTypeUrl;
export const BuildMsgCreateClient = (signer, clientState, consensusState) => {
    const value = {
        signer,
        clientState,
        consensusState,
    };
    return createClient(value);
};
export const BuildMsgUpdateClient = (clientId, signer, header) => {
    const value = {
        clientId,
        signer,
        header,
    };
    return updateClient(value);
};
export const BuildMsgUpgradeClient = (clientId, proofUpgradeClient, signer, proofUpgradeConsensusState, clientState, consensusState) => {
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
export const BuildMsgSubmitMisbehaviour = (signer, clientId, misbehaviour) => {
    const value = {
        signer,
        clientId,
        misbehaviour,
    };
    return submitMisbehaviour(value);
};
//# sourceMappingURL=MsgIbcClient.js.map