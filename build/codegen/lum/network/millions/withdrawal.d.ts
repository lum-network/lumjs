/// <reference types="long" />
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum WithdrawalState {
    WITHDRAWAL_STATE_UNSPECIFIED = 0,
    WITHDRAWAL_STATE_ICA_UNDELEGATE = 1,
    WITHDRAWAL_STATE_ICA_UNBONDING = 2,
    WITHDRAWAL_STATE_IBC_TRANSFER = 3,
    WITHDRAWAL_STATE_FAILURE = 4,
    WITHDRAWAL_STATE_PENDING = 5,
    UNRECOGNIZED = -1
}
export declare const WithdrawalStateSDKType: typeof WithdrawalState;
export declare const WithdrawalStateAmino: typeof WithdrawalState;
export declare function withdrawalStateFromJSON(object: any): WithdrawalState;
export declare function withdrawalStateToJSON(object: WithdrawalState): string;
export interface Withdrawal {
    poolId: Long;
    depositId: Long;
    withdrawalId: Long;
    state: WithdrawalState;
    errorState: WithdrawalState;
    depositorAddress: string;
    toAddress: string;
    amount: Coin | undefined;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    unbondingEndsAt?: Date | undefined;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
export interface WithdrawalProtoMsg {
    typeUrl: "/lum.network.millions.Withdrawal";
    value: Uint8Array;
}
export interface WithdrawalAmino {
    pool_id: string;
    deposit_id: string;
    withdrawal_id: string;
    state: WithdrawalState;
    error_state: WithdrawalState;
    depositor_address: string;
    to_address: string;
    amount?: CoinAmino | undefined;
    created_at_height: string;
    updated_at_height: string;
    unbonding_ends_at?: Date | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
export interface WithdrawalAminoMsg {
    type: "/lum.network.millions.Withdrawal";
    value: WithdrawalAmino;
}
export interface WithdrawalSDKType {
    pool_id: Long;
    deposit_id: Long;
    withdrawal_id: Long;
    state: WithdrawalState;
    error_state: WithdrawalState;
    depositor_address: string;
    to_address: string;
    amount: CoinSDKType | undefined;
    created_at_height: Long;
    updated_at_height: Long;
    unbonding_ends_at?: Date | undefined;
    created_at: Date | undefined;
    updated_at: Date | undefined;
}
export interface WithdrawalIDs {
    poolId: Long;
    withdrawalId: Long;
}
export interface WithdrawalIDsProtoMsg {
    typeUrl: "/lum.network.millions.WithdrawalIDs";
    value: Uint8Array;
}
export interface WithdrawalIDsAmino {
    pool_id: string;
    withdrawal_id: string;
}
export interface WithdrawalIDsAminoMsg {
    type: "/lum.network.millions.WithdrawalIDs";
    value: WithdrawalIDsAmino;
}
export interface WithdrawalIDsSDKType {
    pool_id: Long;
    withdrawal_id: Long;
}
export interface WithdrawalIDsCollection {
    withdrawalsIds: WithdrawalIDs[];
}
export interface WithdrawalIDsCollectionProtoMsg {
    typeUrl: "/lum.network.millions.WithdrawalIDsCollection";
    value: Uint8Array;
}
export interface WithdrawalIDsCollectionAmino {
    withdrawals_ids: WithdrawalIDsAmino[];
}
export interface WithdrawalIDsCollectionAminoMsg {
    type: "/lum.network.millions.WithdrawalIDsCollection";
    value: WithdrawalIDsCollectionAmino;
}
export interface WithdrawalIDsCollectionSDKType {
    withdrawals_ids: WithdrawalIDsSDKType[];
}
export declare const Withdrawal: {
    encode(message: Withdrawal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Withdrawal;
    fromPartial(object: DeepPartial<Withdrawal>): Withdrawal;
    fromAmino(object: WithdrawalAmino): Withdrawal;
    toAmino(message: Withdrawal): WithdrawalAmino;
    fromAminoMsg(object: WithdrawalAminoMsg): Withdrawal;
    fromProtoMsg(message: WithdrawalProtoMsg): Withdrawal;
    toProto(message: Withdrawal): Uint8Array;
    toProtoMsg(message: Withdrawal): WithdrawalProtoMsg;
};
export declare const WithdrawalIDs: {
    encode(message: WithdrawalIDs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalIDs;
    fromPartial(object: DeepPartial<WithdrawalIDs>): WithdrawalIDs;
    fromAmino(object: WithdrawalIDsAmino): WithdrawalIDs;
    toAmino(message: WithdrawalIDs): WithdrawalIDsAmino;
    fromAminoMsg(object: WithdrawalIDsAminoMsg): WithdrawalIDs;
    fromProtoMsg(message: WithdrawalIDsProtoMsg): WithdrawalIDs;
    toProto(message: WithdrawalIDs): Uint8Array;
    toProtoMsg(message: WithdrawalIDs): WithdrawalIDsProtoMsg;
};
export declare const WithdrawalIDsCollection: {
    encode(message: WithdrawalIDsCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalIDsCollection;
    fromPartial(object: DeepPartial<WithdrawalIDsCollection>): WithdrawalIDsCollection;
    fromAmino(object: WithdrawalIDsCollectionAmino): WithdrawalIDsCollection;
    toAmino(message: WithdrawalIDsCollection): WithdrawalIDsCollectionAmino;
    fromAminoMsg(object: WithdrawalIDsCollectionAminoMsg): WithdrawalIDsCollection;
    fromProtoMsg(message: WithdrawalIDsCollectionProtoMsg): WithdrawalIDsCollection;
    toProto(message: WithdrawalIDsCollection): Uint8Array;
    toProtoMsg(message: WithdrawalIDsCollection): WithdrawalIDsCollectionProtoMsg;
};
