/// <reference types="long" />
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PrizeRef {
    amount: string;
    prizeId?: Long;
    winnerAddress?: string;
}
export interface PrizeRefProtoMsg {
    typeUrl: "/lum.network.millions.PrizeRef";
    value: Uint8Array;
}
export interface PrizeRefAmino {
    amount: string;
    prize_id: string;
    winner_address: string;
}
export interface PrizeRefAminoMsg {
    type: "/lum.network.millions.PrizeRef";
    value: PrizeRefAmino;
}
export interface PrizeRefSDKType {
    amount: string;
    prize_id?: Long;
    winner_address?: string;
}
export declare const PrizeRef: {
    encode(message: PrizeRef, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeRef;
    fromPartial(object: DeepPartial<PrizeRef>): PrizeRef;
    fromAmino(object: PrizeRefAmino): PrizeRef;
    toAmino(message: PrizeRef): PrizeRefAmino;
    fromAminoMsg(object: PrizeRefAminoMsg): PrizeRef;
    fromProtoMsg(message: PrizeRefProtoMsg): PrizeRef;
    toProto(message: PrizeRef): Uint8Array;
    toProtoMsg(message: PrizeRef): PrizeRefProtoMsg;
};
