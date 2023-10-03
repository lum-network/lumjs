import { Input, Output } from '../../codegen/cosmos/bank/v1beta1/bank';
import { Message, Coin } from '../types';
export declare const BuildMsgSend: (fromAddress: string, toAddress: string, amount: Coin[]) => Message;
export declare const BuildMsgMultiSend: (inputs: Input[], outputs: Output[]) => Message;
