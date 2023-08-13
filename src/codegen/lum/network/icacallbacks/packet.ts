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
export interface NoData {}
export interface NoDataProtoMsg {
  typeUrl: "/lum.network.icacallbacks.NoData";
  value: Uint8Array;
}
export interface NoDataAmino {}
export interface NoDataAminoMsg {
  type: "/lum.network.icacallbacks.NoData";
  value: NoDataAmino;
}
export interface NoDataSDKType {}
function createBaseIcacallbacksPacketData(): IcacallbacksPacketData {
  return {
    noData: undefined
  };
}
export const IcacallbacksPacketData = {
  encode(message: IcacallbacksPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IcacallbacksPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIcacallbacksPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IcacallbacksPacketData>): IcacallbacksPacketData {
    const message = createBaseIcacallbacksPacketData();
    message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
    return message;
  },
  fromAmino(object: IcacallbacksPacketDataAmino): IcacallbacksPacketData {
    return {
      noData: object?.no_data ? NoData.fromAmino(object.no_data) : undefined
    };
  },
  toAmino(message: IcacallbacksPacketData): IcacallbacksPacketDataAmino {
    const obj: any = {};
    obj.no_data = message.noData ? NoData.toAmino(message.noData) : undefined;
    return obj;
  },
  fromAminoMsg(object: IcacallbacksPacketDataAminoMsg): IcacallbacksPacketData {
    return IcacallbacksPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: IcacallbacksPacketDataProtoMsg): IcacallbacksPacketData {
    return IcacallbacksPacketData.decode(message.value);
  },
  toProto(message: IcacallbacksPacketData): Uint8Array {
    return IcacallbacksPacketData.encode(message).finish();
  },
  toProtoMsg(message: IcacallbacksPacketData): IcacallbacksPacketDataProtoMsg {
    return {
      typeUrl: "/lum.network.icacallbacks.IcacallbacksPacketData",
      value: IcacallbacksPacketData.encode(message).finish()
    };
  }
};
function createBaseNoData(): NoData {
  return {};
}
export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_: NoDataAmino): NoData {
    return {};
  },
  toAmino(_: NoData): NoDataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NoDataAminoMsg): NoData {
    return NoData.fromAmino(object.value);
  },
  fromProtoMsg(message: NoDataProtoMsg): NoData {
    return NoData.decode(message.value);
  },
  toProto(message: NoData): Uint8Array {
    return NoData.encode(message).finish();
  },
  toProtoMsg(message: NoData): NoDataProtoMsg {
    return {
      typeUrl: "/lum.network.icacallbacks.NoData",
      value: NoData.encode(message).finish()
    };
  }
};