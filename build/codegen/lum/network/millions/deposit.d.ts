/// <reference types="long" />
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum DepositState {
    DEPOSIT_STATE_UNSPECIFIED = 0,
    DEPOSIT_STATE_IBC_TRANSFER = 1,
    DEPOSIT_STATE_ICA_DELEGATE = 2,
    DEPOSIT_STATE_SUCCESS = 3,
    DEPOSIT_STATE_FAILURE = 4,
    UNRECOGNIZED = -1
}
export declare const DepositStateSDKType: typeof DepositState;
export declare const DepositStateAmino: typeof DepositState;
export declare function depositStateFromJSON(object: any): DepositState;
export declare function depositStateToJSON(object: DepositState): string;
export interface Deposit {
    poolId: Long;
    depositId: Long;
    state: DepositState;
    errorState: DepositState;
    depositorAddress: string;
    amount: Coin | undefined;
    winnerAddress: string;
    isSponsor: boolean;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
export interface DepositProtoMsg {
    typeUrl: "/lum.network.millions.Deposit";
    value: Uint8Array;
}
export interface DepositAmino {
    pool_id: string;
    deposit_id: string;
    state: DepositState;
    error_state: DepositState;
    depositor_address: string;
    amount?: CoinAmino | undefined;
    winner_address: string;
    is_sponsor: boolean;
    created_at_height: string;
    updated_at_height: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
export interface DepositAminoMsg {
    type: "/lum.network.millions.Deposit";
    value: DepositAmino;
}
export interface DepositSDKType {
    pool_id: Long;
    deposit_id: Long;
    state: DepositState;
    error_state: DepositState;
    depositor_address: string;
    amount: CoinSDKType | undefined;
    winner_address: string;
    is_sponsor: boolean;
    created_at_height: Long;
    updated_at_height: Long;
    created_at: Date | undefined;
    updated_at: Date | undefined;
}
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromPartial(object: DeepPartial<Deposit>): Deposit;
    fromAmino(object: DepositAmino): Deposit;
    toAmino(message: Deposit): DepositAmino;
    fromAminoMsg(object: DepositAminoMsg): Deposit;
    fromProtoMsg(message: DepositProtoMsg): Deposit;
    toProto(message: Deposit): Uint8Array;
    toProtoMsg(message: Deposit): DepositProtoMsg;
};
