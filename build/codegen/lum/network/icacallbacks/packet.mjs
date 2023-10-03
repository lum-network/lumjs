import * as _m0 from "protobufjs/minimal";
function createBaseIcacallbacksPacketData() {
    return {
        noData: undefined
    };
}
export const IcacallbacksPacketData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseIcacallbacksPacketData();
        message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            noData: object?.no_data ? NoData.fromAmino(object.no_data) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.no_data = message.noData ? NoData.toAmino(message.noData) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return IcacallbacksPacketData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IcacallbacksPacketData.decode(message.value);
    },
    toProto(message) {
        return IcacallbacksPacketData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.IcacallbacksPacketData",
            value: IcacallbacksPacketData.encode(message).finish()
        };
    }
};
function createBaseNoData() {
    return {};
}
export const NoData = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseNoData();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return NoData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NoData.decode(message.value);
    },
    toProto(message) {
        return NoData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.NoData",
            value: NoData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=packet.js.map