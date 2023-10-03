/// <reference types="long" />
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PrizeRef, PrizeRefAmino, PrizeRefSDKType } from "./prize_ref";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum DrawState {
    DRAW_STATE_UNSPECIFIED = 0,
    DRAW_STATE_ICA_WITHDRAWREWARDS = 1,
    DRAW_STATE_QUERY_BALANCE = 2,
    DRAW_STATE_IBC_TRANSFER = 3,
    DRAW_STATE_DRAWING = 4,
    DRAW_STATE_SUCCESS = 5,
    DRAW_STATE_FAILURE = 6,
    UNRECOGNIZED = -1
}
export declare const DrawStateSDKType: typeof DrawState;
export declare const DrawStateAmino: typeof DrawState;
export declare function drawStateFromJSON(object: any): DrawState;
export declare function drawStateToJSON(object: DrawState): string;
export interface Draw {
    /** Draw IDs */
    poolId: Long;
    drawId: Long;
    /**
     * Draw states
     * error_state is only set in case of failure
     */
    state: DrawState;
    errorState: DrawState;
    /** Draw state done data */
    randSeed: Long;
    prizePool: Coin | undefined;
    prizePoolFreshAmount: string;
    prizePoolRemainsAmount: string;
    prizesRefs: PrizeRef[];
    totalWinCount: Long;
    totalWinAmount: string;
    /** Draw creation and updates */
    createdAtHeight: Long;
    updatedAtHeight: Long;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
export interface DrawProtoMsg {
    typeUrl: "/lum.network.millions.Draw";
    value: Uint8Array;
}
export interface DrawAmino {
    /** Draw IDs */
    pool_id: string;
    draw_id: string;
    /**
     * Draw states
     * error_state is only set in case of failure
     */
    state: DrawState;
    error_state: DrawState;
    /** Draw state done data */
    rand_seed: string;
    prize_pool?: CoinAmino | undefined;
    prize_pool_fresh_amount: string;
    prize_pool_remains_amount: string;
    prizes_refs: PrizeRefAmino[];
    total_win_count: string;
    total_win_amount: string;
    /** Draw creation and updates */
    created_at_height: string;
    updated_at_height: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
export interface DrawAminoMsg {
    type: "/lum.network.millions.Draw";
    value: DrawAmino;
}
export interface DrawSDKType {
    pool_id: Long;
    draw_id: Long;
    state: DrawState;
    error_state: DrawState;
    rand_seed: Long;
    prize_pool: CoinSDKType | undefined;
    prize_pool_fresh_amount: string;
    prize_pool_remains_amount: string;
    prizes_refs: PrizeRefSDKType[];
    total_win_count: Long;
    total_win_amount: string;
    created_at_height: Long;
    updated_at_height: Long;
    created_at: Date | undefined;
    updated_at: Date | undefined;
}
export declare const Draw: {
    encode(message: Draw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Draw;
    fromPartial(object: DeepPartial<Draw>): Draw;
    fromAmino(object: DrawAmino): Draw;
    toAmino(message: Draw): DrawAmino;
    fromAminoMsg(object: DrawAminoMsg): Draw;
    fromProtoMsg(message: DrawProtoMsg): Draw;
    toProto(message: Draw): Uint8Array;
    toProtoMsg(message: Draw): DrawProtoMsg;
};
