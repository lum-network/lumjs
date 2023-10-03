import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BeamData, BeamDataAmino, BeamDataSDKType, BeamState } from "./beam";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface MsgOpenBeam {
    id: string;
    creatorAddress: string;
    secret: string;
    amount?: Coin | undefined;
    schema: string;
    data?: BeamData | undefined;
    claimAddress: string;
    claimExpiresAtBlock: number;
    closesAtBlock: number;
}
export interface MsgOpenBeamProtoMsg {
    typeUrl: "/lum.network.beam.MsgOpenBeam";
    value: Uint8Array;
}
export interface MsgOpenBeamAmino {
    id: string;
    creator_address: string;
    secret: string;
    amount?: CoinAmino | undefined;
    schema: string;
    data?: BeamDataAmino | undefined;
    claim_address: string;
    claim_expires_at_block: number;
    closes_at_block: number;
}
export interface MsgOpenBeamAminoMsg {
    type: "/lum.network.beam.MsgOpenBeam";
    value: MsgOpenBeamAmino;
}
export interface MsgOpenBeamSDKType {
    id: string;
    creator_address: string;
    secret: string;
    amount?: CoinSDKType | undefined;
    schema: string;
    data?: BeamDataSDKType | undefined;
    claim_address: string;
    claim_expires_at_block: number;
    closes_at_block: number;
}
export interface MsgOpenBeamResponse {
}
export interface MsgOpenBeamResponseProtoMsg {
    typeUrl: "/lum.network.beam.MsgOpenBeamResponse";
    value: Uint8Array;
}
export interface MsgOpenBeamResponseAmino {
}
export interface MsgOpenBeamResponseAminoMsg {
    type: "/lum.network.beam.MsgOpenBeamResponse";
    value: MsgOpenBeamResponseAmino;
}
export interface MsgOpenBeamResponseSDKType {
}
export interface MsgUpdateBeam {
    id: string;
    updaterAddress: string;
    amount?: Coin | undefined;
    status: BeamState;
    cancelReason: string;
    hideContent: boolean;
    data?: BeamData | undefined;
    claimAddress: string;
    claimExpiresAtBlock: number;
    closesAtBlock: number;
}
export interface MsgUpdateBeamProtoMsg {
    typeUrl: "/lum.network.beam.MsgUpdateBeam";
    value: Uint8Array;
}
export interface MsgUpdateBeamAmino {
    id: string;
    updater_address: string;
    amount?: CoinAmino | undefined;
    status: BeamState;
    cancel_reason: string;
    hide_content: boolean;
    data?: BeamDataAmino | undefined;
    claim_address: string;
    claim_expires_at_block: number;
    closes_at_block: number;
}
export interface MsgUpdateBeamAminoMsg {
    type: "/lum.network.beam.MsgUpdateBeam";
    value: MsgUpdateBeamAmino;
}
export interface MsgUpdateBeamSDKType {
    id: string;
    updater_address: string;
    amount?: CoinSDKType | undefined;
    status: BeamState;
    cancel_reason: string;
    hide_content: boolean;
    data?: BeamDataSDKType | undefined;
    claim_address: string;
    claim_expires_at_block: number;
    closes_at_block: number;
}
export interface MsgUpdateBeamResponse {
}
export interface MsgUpdateBeamResponseProtoMsg {
    typeUrl: "/lum.network.beam.MsgUpdateBeamResponse";
    value: Uint8Array;
}
export interface MsgUpdateBeamResponseAmino {
}
export interface MsgUpdateBeamResponseAminoMsg {
    type: "/lum.network.beam.MsgUpdateBeamResponse";
    value: MsgUpdateBeamResponseAmino;
}
export interface MsgUpdateBeamResponseSDKType {
}
export interface MsgClaimBeam {
    id: string;
    claimerAddress: string;
    secret: string;
}
export interface MsgClaimBeamProtoMsg {
    typeUrl: "/lum.network.beam.MsgClaimBeam";
    value: Uint8Array;
}
export interface MsgClaimBeamAmino {
    id: string;
    claimer_address: string;
    secret: string;
}
export interface MsgClaimBeamAminoMsg {
    type: "/lum.network.beam.MsgClaimBeam";
    value: MsgClaimBeamAmino;
}
export interface MsgClaimBeamSDKType {
    id: string;
    claimer_address: string;
    secret: string;
}
export interface MsgClaimBeamResponse {
}
export interface MsgClaimBeamResponseProtoMsg {
    typeUrl: "/lum.network.beam.MsgClaimBeamResponse";
    value: Uint8Array;
}
export interface MsgClaimBeamResponseAmino {
}
export interface MsgClaimBeamResponseAminoMsg {
    type: "/lum.network.beam.MsgClaimBeamResponse";
    value: MsgClaimBeamResponseAmino;
}
export interface MsgClaimBeamResponseSDKType {
}
export declare const MsgOpenBeam: {
    encode(message: MsgOpenBeam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenBeam;
    fromPartial(object: DeepPartial<MsgOpenBeam>): MsgOpenBeam;
    fromAmino(object: MsgOpenBeamAmino): MsgOpenBeam;
    toAmino(message: MsgOpenBeam): MsgOpenBeamAmino;
    fromAminoMsg(object: MsgOpenBeamAminoMsg): MsgOpenBeam;
    fromProtoMsg(message: MsgOpenBeamProtoMsg): MsgOpenBeam;
    toProto(message: MsgOpenBeam): Uint8Array;
    toProtoMsg(message: MsgOpenBeam): MsgOpenBeamProtoMsg;
};
export declare const MsgOpenBeamResponse: {
    encode(_: MsgOpenBeamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenBeamResponse;
    fromPartial(_: DeepPartial<MsgOpenBeamResponse>): MsgOpenBeamResponse;
    fromAmino(_: MsgOpenBeamResponseAmino): MsgOpenBeamResponse;
    toAmino(_: MsgOpenBeamResponse): MsgOpenBeamResponseAmino;
    fromAminoMsg(object: MsgOpenBeamResponseAminoMsg): MsgOpenBeamResponse;
    fromProtoMsg(message: MsgOpenBeamResponseProtoMsg): MsgOpenBeamResponse;
    toProto(message: MsgOpenBeamResponse): Uint8Array;
    toProtoMsg(message: MsgOpenBeamResponse): MsgOpenBeamResponseProtoMsg;
};
export declare const MsgUpdateBeam: {
    encode(message: MsgUpdateBeam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBeam;
    fromPartial(object: DeepPartial<MsgUpdateBeam>): MsgUpdateBeam;
    fromAmino(object: MsgUpdateBeamAmino): MsgUpdateBeam;
    toAmino(message: MsgUpdateBeam): MsgUpdateBeamAmino;
    fromAminoMsg(object: MsgUpdateBeamAminoMsg): MsgUpdateBeam;
    fromProtoMsg(message: MsgUpdateBeamProtoMsg): MsgUpdateBeam;
    toProto(message: MsgUpdateBeam): Uint8Array;
    toProtoMsg(message: MsgUpdateBeam): MsgUpdateBeamProtoMsg;
};
export declare const MsgUpdateBeamResponse: {
    encode(_: MsgUpdateBeamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBeamResponse;
    fromPartial(_: DeepPartial<MsgUpdateBeamResponse>): MsgUpdateBeamResponse;
    fromAmino(_: MsgUpdateBeamResponseAmino): MsgUpdateBeamResponse;
    toAmino(_: MsgUpdateBeamResponse): MsgUpdateBeamResponseAmino;
    fromAminoMsg(object: MsgUpdateBeamResponseAminoMsg): MsgUpdateBeamResponse;
    fromProtoMsg(message: MsgUpdateBeamResponseProtoMsg): MsgUpdateBeamResponse;
    toProto(message: MsgUpdateBeamResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateBeamResponse): MsgUpdateBeamResponseProtoMsg;
};
export declare const MsgClaimBeam: {
    encode(message: MsgClaimBeam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBeam;
    fromPartial(object: DeepPartial<MsgClaimBeam>): MsgClaimBeam;
    fromAmino(object: MsgClaimBeamAmino): MsgClaimBeam;
    toAmino(message: MsgClaimBeam): MsgClaimBeamAmino;
    fromAminoMsg(object: MsgClaimBeamAminoMsg): MsgClaimBeam;
    fromProtoMsg(message: MsgClaimBeamProtoMsg): MsgClaimBeam;
    toProto(message: MsgClaimBeam): Uint8Array;
    toProtoMsg(message: MsgClaimBeam): MsgClaimBeamProtoMsg;
};
export declare const MsgClaimBeamResponse: {
    encode(_: MsgClaimBeamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBeamResponse;
    fromPartial(_: DeepPartial<MsgClaimBeamResponse>): MsgClaimBeamResponse;
    fromAmino(_: MsgClaimBeamResponseAmino): MsgClaimBeamResponse;
    toAmino(_: MsgClaimBeamResponse): MsgClaimBeamResponseAmino;
    fromAminoMsg(object: MsgClaimBeamResponseAminoMsg): MsgClaimBeamResponse;
    fromProtoMsg(message: MsgClaimBeamResponseProtoMsg): MsgClaimBeamResponse;
    toProto(message: MsgClaimBeamResponse): Uint8Array;
    toProtoMsg(message: MsgClaimBeamResponse): MsgClaimBeamResponseProtoMsg;
};
