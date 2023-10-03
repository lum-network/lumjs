/// <reference types="long" />
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgDeposit {
    depositorAddress: string;
    amount: Coin | undefined;
}
export interface MsgDepositProtoMsg {
    typeUrl: "/lum.network.dfract.MsgDeposit";
    value: Uint8Array;
}
export interface MsgDepositAmino {
    depositor_address: string;
    amount?: CoinAmino | undefined;
}
export interface MsgDepositAminoMsg {
    type: "/lum.network.dfract.MsgDeposit";
    value: MsgDepositAmino;
}
export interface MsgDepositSDKType {
    depositor_address: string;
    amount: CoinSDKType | undefined;
}
export interface MsgDepositResponse {
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/lum.network.dfract.MsgDepositResponse";
    value: Uint8Array;
}
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "/lum.network.dfract.MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
export interface MsgDepositResponseSDKType {
}
export interface MsgWithdrawAndMint {
    address: string;
    microMintRate: Long;
}
export interface MsgWithdrawAndMintProtoMsg {
    typeUrl: "/lum.network.dfract.MsgWithdrawAndMint";
    value: Uint8Array;
}
export interface MsgWithdrawAndMintAmino {
    address: string;
    micro_mint_rate: string;
}
export interface MsgWithdrawAndMintAminoMsg {
    type: "/lum.network.dfract.MsgWithdrawAndMint";
    value: MsgWithdrawAndMintAmino;
}
export interface MsgWithdrawAndMintSDKType {
    address: string;
    micro_mint_rate: Long;
}
export interface MsgWithdrawAndMintResponse {
}
export interface MsgWithdrawAndMintResponseProtoMsg {
    typeUrl: "/lum.network.dfract.MsgWithdrawAndMintResponse";
    value: Uint8Array;
}
export interface MsgWithdrawAndMintResponseAmino {
}
export interface MsgWithdrawAndMintResponseAminoMsg {
    type: "/lum.network.dfract.MsgWithdrawAndMintResponse";
    value: MsgWithdrawAndMintResponseAmino;
}
export interface MsgWithdrawAndMintResponseSDKType {
}
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
    fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit;
    fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit;
    toProto(message: MsgDeposit): Uint8Array;
    toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(_: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
export declare const MsgWithdrawAndMint: {
    encode(message: MsgWithdrawAndMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAndMint;
    fromPartial(object: DeepPartial<MsgWithdrawAndMint>): MsgWithdrawAndMint;
    fromAmino(object: MsgWithdrawAndMintAmino): MsgWithdrawAndMint;
    toAmino(message: MsgWithdrawAndMint): MsgWithdrawAndMintAmino;
    fromAminoMsg(object: MsgWithdrawAndMintAminoMsg): MsgWithdrawAndMint;
    fromProtoMsg(message: MsgWithdrawAndMintProtoMsg): MsgWithdrawAndMint;
    toProto(message: MsgWithdrawAndMint): Uint8Array;
    toProtoMsg(message: MsgWithdrawAndMint): MsgWithdrawAndMintProtoMsg;
};
export declare const MsgWithdrawAndMintResponse: {
    encode(_: MsgWithdrawAndMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAndMintResponse;
    fromPartial(_: DeepPartial<MsgWithdrawAndMintResponse>): MsgWithdrawAndMintResponse;
    fromAmino(_: MsgWithdrawAndMintResponseAmino): MsgWithdrawAndMintResponse;
    toAmino(_: MsgWithdrawAndMintResponse): MsgWithdrawAndMintResponseAmino;
    fromAminoMsg(object: MsgWithdrawAndMintResponseAminoMsg): MsgWithdrawAndMintResponse;
    fromProtoMsg(message: MsgWithdrawAndMintResponseProtoMsg): MsgWithdrawAndMintResponse;
    toProto(message: MsgWithdrawAndMintResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawAndMintResponse): MsgWithdrawAndMintResponseProtoMsg;
};
