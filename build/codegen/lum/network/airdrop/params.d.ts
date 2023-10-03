import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Params {
    airdropStartTime: Date | undefined;
    durationUntilDecay: Duration | undefined;
    durationOfDecay: Duration | undefined;
    claimDenom: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/lum.network.airdrop.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    airdrop_start_time?: Date | undefined;
    duration_until_decay?: DurationAmino | undefined;
    duration_of_decay?: DurationAmino | undefined;
    claim_denom: string;
}
export interface ParamsAminoMsg {
    type: "/lum.network.airdrop.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    airdrop_start_time: Date | undefined;
    duration_until_decay: DurationSDKType | undefined;
    duration_of_decay: DurationSDKType | undefined;
    claim_denom: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
