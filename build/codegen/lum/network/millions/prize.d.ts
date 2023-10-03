/// <reference types="long" />
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum PrizeState {
    PRIZE_STATE_UNSPECIFIED = 0,
    PRIZE_STATE_PENDING = 1,
    UNRECOGNIZED = -1
}
export declare const PrizeStateSDKType: typeof PrizeState;
export declare const PrizeStateAmino: typeof PrizeState;
export declare function prizeStateFromJSON(object: any): PrizeState;
export declare function prizeStateToJSON(object: PrizeState): string;
export interface Prize {
    poolId: Long;
    drawId: Long;
    prizeId: Long;
    state: PrizeState;
    winnerAddress: string;
    amount: Coin | undefined;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    expiresAt: Date | undefined;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
export interface PrizeProtoMsg {
    typeUrl: "/lum.network.millions.Prize";
    value: Uint8Array;
}
export interface PrizeAmino {
    pool_id: string;
    draw_id: string;
    prize_id: string;
    state: PrizeState;
    winner_address: string;
    amount?: CoinAmino | undefined;
    created_at_height: string;
    updated_at_height: string;
    expires_at?: Date | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
export interface PrizeAminoMsg {
    type: "/lum.network.millions.Prize";
    value: PrizeAmino;
}
export interface PrizeSDKType {
    pool_id: Long;
    draw_id: Long;
    prize_id: Long;
    state: PrizeState;
    winner_address: string;
    amount: CoinSDKType | undefined;
    created_at_height: Long;
    updated_at_height: Long;
    expires_at: Date | undefined;
    created_at: Date | undefined;
    updated_at: Date | undefined;
}
export interface PrizeIDs {
    poolId: Long;
    drawId: Long;
    prizeId: Long;
}
export interface PrizeIDsProtoMsg {
    typeUrl: "/lum.network.millions.PrizeIDs";
    value: Uint8Array;
}
export interface PrizeIDsAmino {
    pool_id: string;
    draw_id: string;
    prize_id: string;
}
export interface PrizeIDsAminoMsg {
    type: "/lum.network.millions.PrizeIDs";
    value: PrizeIDsAmino;
}
export interface PrizeIDsSDKType {
    pool_id: Long;
    draw_id: Long;
    prize_id: Long;
}
export interface PrizeIDsCollection {
    prizesIds: PrizeIDs[];
}
export interface PrizeIDsCollectionProtoMsg {
    typeUrl: "/lum.network.millions.PrizeIDsCollection";
    value: Uint8Array;
}
export interface PrizeIDsCollectionAmino {
    prizes_ids: PrizeIDsAmino[];
}
export interface PrizeIDsCollectionAminoMsg {
    type: "/lum.network.millions.PrizeIDsCollection";
    value: PrizeIDsCollectionAmino;
}
export interface PrizeIDsCollectionSDKType {
    prizes_ids: PrizeIDsSDKType[];
}
export declare const Prize: {
    encode(message: Prize, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Prize;
    fromPartial(object: DeepPartial<Prize>): Prize;
    fromAmino(object: PrizeAmino): Prize;
    toAmino(message: Prize): PrizeAmino;
    fromAminoMsg(object: PrizeAminoMsg): Prize;
    fromProtoMsg(message: PrizeProtoMsg): Prize;
    toProto(message: Prize): Uint8Array;
    toProtoMsg(message: Prize): PrizeProtoMsg;
};
export declare const PrizeIDs: {
    encode(message: PrizeIDs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeIDs;
    fromPartial(object: DeepPartial<PrizeIDs>): PrizeIDs;
    fromAmino(object: PrizeIDsAmino): PrizeIDs;
    toAmino(message: PrizeIDs): PrizeIDsAmino;
    fromAminoMsg(object: PrizeIDsAminoMsg): PrizeIDs;
    fromProtoMsg(message: PrizeIDsProtoMsg): PrizeIDs;
    toProto(message: PrizeIDs): Uint8Array;
    toProtoMsg(message: PrizeIDs): PrizeIDsProtoMsg;
};
export declare const PrizeIDsCollection: {
    encode(message: PrizeIDsCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeIDsCollection;
    fromPartial(object: DeepPartial<PrizeIDsCollection>): PrizeIDsCollection;
    fromAmino(object: PrizeIDsCollectionAmino): PrizeIDsCollection;
    toAmino(message: PrizeIDsCollection): PrizeIDsCollectionAmino;
    fromAminoMsg(object: PrizeIDsCollectionAminoMsg): PrizeIDsCollection;
    fromProtoMsg(message: PrizeIDsCollectionProtoMsg): PrizeIDsCollection;
    toProto(message: PrizeIDsCollection): Uint8Array;
    toProtoMsg(message: PrizeIDsCollection): PrizeIDsCollectionProtoMsg;
};
