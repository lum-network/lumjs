import { registry, MessageComposer } from '../../codegen/cosmos/gov/v1beta1/tx.registry';
const { deposit, submitProposal, vote, voteWeighted } = MessageComposer.withTypeUrl;
export const BuildMsgDeposit = (proposalId, depositor, amount) => {
    const value = {
        proposalId,
        depositor,
        amount,
    };
    return deposit(value);
};
export const BuildMsgSubmitProposal = (content, initialDeposit, proposer) => {
    const value = {
        content,
        initialDeposit,
        proposer,
    };
    return submitProposal(value);
};
export const BuildMsgVote = (proposalId, voter, option, metadata) => {
    const value = {
        proposalId,
        voter,
        option,
    };
    return vote(value);
};
export const BuildMsgVoteWeighted = (proposalId, voter, options) => {
    const value = {
        proposalId,
        voter,
        options,
    };
    return voteWeighted(value);
};
const govMsgUrl = {};
registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    govMsgUrl[msgType] = url;
});
export { govMsgUrl };
//# sourceMappingURL=gov.js.map