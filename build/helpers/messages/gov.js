"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMsgVoteWeighted = exports.BuildMsgVote = exports.BuildMsgSubmitProposal = exports.BuildMsgDeposit = void 0;
const tx_registry_1 = require("../../codegen/cosmos/gov/v1beta1/tx.registry");
const { deposit, submitProposal, vote, voteWeighted } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgDeposit = (proposalId, depositor, amount) => {
    const value = {
        proposalId,
        depositor,
        amount,
    };
    return deposit(value);
};
exports.BuildMsgDeposit = BuildMsgDeposit;
const BuildMsgSubmitProposal = (content, initialDeposit, proposer) => {
    const value = {
        content,
        initialDeposit,
        proposer,
    };
    return submitProposal(value);
};
exports.BuildMsgSubmitProposal = BuildMsgSubmitProposal;
const BuildMsgVote = (proposalId, voter, option, metadata) => {
    const value = {
        proposalId,
        voter,
        option,
    };
    return vote(value);
};
exports.BuildMsgVote = BuildMsgVote;
const BuildMsgVoteWeighted = (proposalId, voter, options) => {
    const value = {
        proposalId,
        voter,
        options,
    };
    return voteWeighted(value);
};
exports.BuildMsgVoteWeighted = BuildMsgVoteWeighted;
//# sourceMappingURL=gov.js.map