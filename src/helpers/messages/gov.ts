import { Any } from '../../codegen/google/protobuf/any';
import { registry, MessageComposer } from '../../codegen/cosmos/gov/v1beta1/tx.registry';
import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted } from '../../codegen/cosmos/gov/v1beta1/tx';
import { Coin, Message } from '../types';
import { VoteOption, WeightedVoteOption } from 'src/codegen/cosmos/gov/v1beta1/gov';

const { deposit, submitProposal, vote, voteWeighted } = MessageComposer.withTypeUrl;

export const BuildMsgDeposit = (proposalId: Long, depositor: string, amount: Coin[]): Message => {
    const value: MsgDeposit = {
        proposalId,
        depositor,
        amount,
    };
    return deposit(value);
};

export const BuildMsgSubmitProposal = (content: Any | undefined, initialDeposit: Coin[], proposer: string): Message => {
    const value: MsgSubmitProposal = {
        content,
        initialDeposit,
        proposer,
    };
    return submitProposal(value);
};

export const BuildMsgVote = (proposalId: Long, voter: string, option: VoteOption, metadata: string): Message => {
    const value: MsgVote = {
        proposalId,
        voter,
        option,
    };
    return vote(value);
};

export const BuildMsgVoteWeighted = (proposalId: Long, voter: string, options: WeightedVoteOption[]): Message => {
    const value: MsgVoteWeighted = {
        proposalId,
        voter,
        options,
    };
    return voteWeighted(value);
};

const govMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    govMsgUrl[msgType] = url;
});

export { govMsgUrl };
