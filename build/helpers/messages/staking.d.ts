import { Any } from '../../codegen/google/protobuf/any';
import { Coin, Description, CommissionRates, Message } from '../types';
export declare const BuildMsgBeginRedelegate: (delegatorAddress: string, validatorSrcAddress: string, validatorDstAddress: string, amount?: Coin) => Message;
export declare const BuildMsgCreateValidator: (validatorAddress: string, delegatorAddress: string, minSelfDelegation: string, commission?: CommissionRates, description?: Description, amountValue?: Coin, pubkey?: Any) => Message;
export declare const BuildMsgDelegate: (delegatorAddress: string, validatorAddress: string, amount?: Coin) => Message;
export declare const BuildMsgEditValidator: (validatorAddress: string, commissionRate: string, minSelfDelegation: string, description?: Description) => Message;
export declare const BuildMsgUndelegate: (delegatorAddress: string, validatorAddress: string, amount?: Coin) => Message;
