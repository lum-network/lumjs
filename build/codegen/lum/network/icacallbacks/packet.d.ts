import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface IcacallbacksPacketData {
    noData?: NoData | undefined;
}
export interface IcacallbacksPacketDataProtoMsg {
    typeUrl: "/lum.network.icacallbacks.IcacallbacksPacketData";
    value: Uint8Array;
}
export interface IcacallbacksPacketDataAmino {
    no_data?: NoDataAmino | undefined;
}
export interface IcacallbacksPacketDataAminoMsg {
    type: "/lum.network.icacallbacks.IcacallbacksPacketData";
    value: IcacallbacksPacketDataAmino;
}
export interface IcacallbacksPacketDataSDKType {
    no_data?: NoDataSDKType | undefined;
}
export interface NoData {
}
export interface NoDataProtoMsg {
    typeUrl: "/lum.network.icacallbacks.NoData";
    value: Uint8Array;
}
export interface NoDataAmino {
}
export interface NoDataAminoMsg {
    type: "/lum.network.icacallbacks.NoData";
    value: NoDataAmino;
}
export interface NoDataSDKType {
}
export declare const IcacallbacksPacketData: {
    encode(message: IcacallbacksPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcacallbacksPacketData;
    fromPartial(object: DeepPartial<IcacallbacksPacketData>): IcacallbacksPacketData;
    fromAmino(object: IcacallbacksPacketDataAmino): IcacallbacksPacketData;
    toAmino(message: IcacallbacksPacketData): IcacallbacksPacketDataAmino;
    fromAminoMsg(object: IcacallbacksPacketDataAminoMsg): IcacallbacksPacketData;
    fromProtoMsg(message: IcacallbacksPacketDataProtoMsg): IcacallbacksPacketData;
    toProto(message: IcacallbacksPacketData): Uint8Array;
    toProtoMsg(message: IcacallbacksPacketData): IcacallbacksPacketDataProtoMsg;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromPartial(_: DeepPartial<NoData>): NoData;
    fromAmino(_: NoDataAmino): NoData;
    toAmino(_: NoData): NoDataAmino;
    fromAminoMsg(object: NoDataAminoMsg): NoData;
    fromProtoMsg(message: NoDataProtoMsg): NoData;
    toProto(message: NoData): Uint8Array;
    toProtoMsg(message: NoData): NoDataProtoMsg;
};
