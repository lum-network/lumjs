import { BinaryReader, BinaryWriter } from "../../../binary";
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
  typeUrl: "/lum.network.icacallbacks.IcacallbacksPacketData",
  encode(message: IcacallbacksPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IcacallbacksPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<IcacallbacksPacketData>): IcacallbacksPacketData {
    const message = createBaseIcacallbacksPacketData();
    message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
    return message;
  },
  fromAmino(object: IcacallbacksPacketDataAmino): IcacallbacksPacketData {
    const message = createBaseIcacallbacksPacketData();
    if (object.no_data !== undefined && object.no_data !== null) {
      message.noData = NoData.fromAmino(object.no_data);
    }
    return message;
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
  typeUrl: "/lum.network.icacallbacks.NoData",
  encode(_: NoData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NoData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_: NoDataAmino): NoData {
    const message = createBaseNoData();
    return message;
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