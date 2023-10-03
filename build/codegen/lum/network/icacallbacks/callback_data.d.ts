/// <reference types="long" />
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CallbackData {
    callbackKey: string;
    portId: string;
    channelId: string;
    sequence: Long;
    callbackId: string;
    callbackArgs: Uint8Array;
}
export interface CallbackDataProtoMsg {
    typeUrl: "/lum.network.icacallbacks.CallbackData";
    value: Uint8Array;
}
export interface CallbackDataAmino {
    callback_key: string;
    port_id: string;
    channel_id: string;
    sequence: string;
    callback_id: string;
    callback_args: Uint8Array;
}
export interface CallbackDataAminoMsg {
    type: "/lum.network.icacallbacks.CallbackData";
    value: CallbackDataAmino;
}
export interface CallbackDataSDKType {
    callback_key: string;
    port_id: string;
    channel_id: string;
    sequence: Long;
    callback_id: string;
    callback_args: Uint8Array;
}
export declare const CallbackData: {
    encode(message: CallbackData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallbackData;
    fromPartial(object: DeepPartial<CallbackData>): CallbackData;
    fromAmino(object: CallbackDataAmino): CallbackData;
    toAmino(message: CallbackData): CallbackDataAmino;
    fromAminoMsg(object: CallbackDataAminoMsg): CallbackData;
    fromProtoMsg(message: CallbackDataProtoMsg): CallbackData;
    toProto(message: CallbackData): Uint8Array;
    toProtoMsg(message: CallbackData): CallbackDataProtoMsg;
};
