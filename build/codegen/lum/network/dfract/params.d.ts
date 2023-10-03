import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Params {
    depositDenoms: string[];
    minDepositAmount: string;
    withdrawalAddress: string;
    isDepositEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/lum.network.dfract.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    deposit_denoms: string[];
    min_deposit_amount: string;
    withdrawal_address: string;
    is_deposit_enabled: boolean;
}
export interface ParamsAminoMsg {
    type: "/lum.network.dfract.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    deposit_denoms: string[];
    min_deposit_amount: string;
    withdrawal_address: string;
    is_deposit_enabled: boolean;
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
