/// <reference types="long" />
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EpochUnbonding {
    epochIdentifier: string;
    epochNumber: Long;
    poolId: Long;
    withdrawalIds: Long[];
    withdrawalIdsCount: Long;
    totalAmount: Coin | undefined;
    /** metadata */
    createdAtHeight: Long;
    updatedAtHeight: Long;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
export interface EpochUnbondingProtoMsg {
    typeUrl: "/lum.network.millions.EpochUnbonding";
    value: Uint8Array;
}
export interface EpochUnbondingAmino {
    epoch_identifier: string;
    epoch_number: string;
    pool_id: string;
    withdrawal_ids: string[];
    withdrawal_ids_count: string;
    total_amount?: CoinAmino | undefined;
    /** metadata */
    created_at_height: string;
    updated_at_height: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
export interface EpochUnbondingAminoMsg {
    type: "/lum.network.millions.EpochUnbonding";
    value: EpochUnbondingAmino;
}
export interface EpochUnbondingSDKType {
    epoch_identifier: string;
    epoch_number: Long;
    pool_id: Long;
    withdrawal_ids: Long[];
    withdrawal_ids_count: Long;
    total_amount: CoinSDKType | undefined;
    created_at_height: Long;
    updated_at_height: Long;
    created_at: Date | undefined;
    updated_at: Date | undefined;
}
export interface EpochTracker {
    epochTrackerType: string;
    epochIdentifier: string;
    epochNumber: Long;
    nextEpochNumber: Long;
    previousEpochNumber: Long;
    nextEpochStartTime: Date | undefined;
}
export interface EpochTrackerProtoMsg {
    typeUrl: "/lum.network.millions.EpochTracker";
    value: Uint8Array;
}
export interface EpochTrackerAmino {
    epoch_tracker_type: string;
    epoch_identifier: string;
    epoch_number: string;
    next_epoch_number: string;
    previous_epoch_number: string;
    next_epoch_start_time?: Date | undefined;
}
export interface EpochTrackerAminoMsg {
    type: "/lum.network.millions.EpochTracker";
    value: EpochTrackerAmino;
}
export interface EpochTrackerSDKType {
    epoch_tracker_type: string;
    epoch_identifier: string;
    epoch_number: Long;
    next_epoch_number: Long;
    previous_epoch_number: Long;
    next_epoch_start_time: Date | undefined;
}
export declare const EpochUnbonding: {
    encode(message: EpochUnbonding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochUnbonding;
    fromPartial(object: DeepPartial<EpochUnbonding>): EpochUnbonding;
    fromAmino(object: EpochUnbondingAmino): EpochUnbonding;
    toAmino(message: EpochUnbonding): EpochUnbondingAmino;
    fromAminoMsg(object: EpochUnbondingAminoMsg): EpochUnbonding;
    fromProtoMsg(message: EpochUnbondingProtoMsg): EpochUnbonding;
    toProto(message: EpochUnbonding): Uint8Array;
    toProtoMsg(message: EpochUnbonding): EpochUnbondingProtoMsg;
};
export declare const EpochTracker: {
    encode(message: EpochTracker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochTracker;
    fromPartial(object: DeepPartial<EpochTracker>): EpochTracker;
    fromAmino(object: EpochTrackerAmino): EpochTracker;
    toAmino(message: EpochTracker): EpochTrackerAmino;
    fromAminoMsg(object: EpochTrackerAminoMsg): EpochTracker;
    fromProtoMsg(message: EpochTrackerProtoMsg): EpochTracker;
    toProto(message: EpochTracker): Uint8Array;
    toProtoMsg(message: EpochTracker): EpochTrackerProtoMsg;
};
