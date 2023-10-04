import { Any } from '../../codegen/google/protobuf/any';
import { Coin, Message } from '../types';
import { VoteOption, WeightedVoteOption } from 'src/codegen/cosmos/gov/v1beta1/gov';
export declare const BuildMsgDeposit: (proposalId: Long, depositor: string, amount: Coin[]) => Message;
export declare const BuildMsgSubmitProposal: (content: Any | undefined, initialDeposit: Coin[], proposer: string) => Message;
export declare const BuildMsgVote: (proposalId: Long, voter: string, option: VoteOption, metadata: string) => Message;
export declare const BuildMsgVoteWeighted: (proposalId: Long, voter: string, options: WeightedVoteOption[]) => Message;
declare const govMsgUrl: {
    [key: string]: string;
};
export { govMsgUrl };
