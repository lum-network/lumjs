import { Message, Coin } from '../types';
export declare const BuildMsgFundCommunityPool: (depositor: string, amount: Coin[]) => Message;
export declare const BuildMsgSetWithdrawAddress: (delegatorAddress: string, withdrawAddress: string) => Message;
export declare const BuildMsgWithdrawDelegatorReward: (delegatorAddress: string, validatorAddress: string) => Message;
export declare const BuildMsgWithdrawValidatorCommission: (validatorAddress: string) => Message;
declare const distributionMsgUrl: {
    [key: string]: string;
};
export { distributionMsgUrl };
