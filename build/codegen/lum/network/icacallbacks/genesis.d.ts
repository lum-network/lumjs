import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataAmino, CallbackDataSDKType } from "./callback_data";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    portId: string;
    callbackDataList: CallbackData[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/lum.network.icacallbacks.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino | undefined;
    port_id: string;
    callback_data_list: CallbackDataAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/lum.network.icacallbacks.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType | undefined;
    port_id: string;
    callback_data_list: CallbackDataSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
