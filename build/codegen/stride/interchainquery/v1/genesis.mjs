import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQuery() {
    return {
        id: "",
        connectionId: "",
        chainId: "",
        queryType: "",
        request: new Uint8Array(),
        callbackId: "",
        ttl: Long.UZERO,
        requestSent: false,
        extraId: ""
    };
}
export const Query = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.queryType !== "") {
            writer.uint32(34).string(message.queryType);
        }
        if (message.request.length !== 0) {
            writer.uint32(42).bytes(message.request);
        }
        if (message.callbackId !== "") {
            writer.uint32(66).string(message.callbackId);
        }
        if (!message.ttl.isZero()) {
            writer.uint32(72).uint64(message.ttl);
        }
        if (message.requestSent === true) {
            writer.uint32(88).bool(message.requestSent);
        }
        if (message.extraId !== "") {
            writer.uint32(98).string(message.extraId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.queryType = reader.string();
                    break;
                case 5:
                    message.request = reader.bytes();
                    break;
                case 8:
                    message.callbackId = reader.string();
                    break;
                case 9:
                    message.ttl = reader.uint64();
                    break;
                case 11:
                    message.requestSent = reader.bool();
                    break;
                case 12:
                    message.extraId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuery();
        message.id = object.id ?? "";
        message.connectionId = object.connectionId ?? "";
        message.chainId = object.chainId ?? "";
        message.queryType = object.queryType ?? "";
        message.request = object.request ?? new Uint8Array();
        message.callbackId = object.callbackId ?? "";
        message.ttl = object.ttl !== undefined && object.ttl !== null ? Long.fromValue(object.ttl) : Long.UZERO;
        message.requestSent = object.requestSent ?? false;
        message.extraId = object.extraId ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            connectionId: object.connection_id,
            chainId: object.chain_id,
            queryType: object.query_type,
            request: object.request,
            callbackId: object.callback_id,
            ttl: Long.fromString(object.ttl),
            requestSent: object.request_sent,
            extraId: object.extra_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.connection_id = message.connectionId;
        obj.chain_id = message.chainId;
        obj.query_type = message.queryType;
        obj.request = message.request;
        obj.callback_id = message.callbackId;
        obj.ttl = message.ttl ? message.ttl.toString() : undefined;
        obj.request_sent = message.requestSent;
        obj.extra_id = message.extraId;
        return obj;
    },
    fromAminoMsg(object) {
        return Query.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Query.decode(message.value);
    },
    toProto(message) {
        return Query.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.Query",
            value: Query.encode(message).finish()
        };
    }
};
function createBaseDataPoint() {
    return {
        id: "",
        remoteHeight: "",
        localHeight: "",
        value: new Uint8Array()
    };
}
export const DataPoint = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.remoteHeight !== "") {
            writer.uint32(18).string(message.remoteHeight);
        }
        if (message.localHeight !== "") {
            writer.uint32(26).string(message.localHeight);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataPoint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.remoteHeight = reader.string();
                    break;
                case 3:
                    message.localHeight = reader.string();
                    break;
                case 4:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDataPoint();
        message.id = object.id ?? "";
        message.remoteHeight = object.remoteHeight ?? "";
        message.localHeight = object.localHeight ?? "";
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            remoteHeight: object.remote_height,
            localHeight: object.local_height,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.remote_height = message.remoteHeight;
        obj.local_height = message.localHeight;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return DataPoint.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DataPoint.decode(message.value);
    },
    toProto(message) {
        return DataPoint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.DataPoint",
            value: DataPoint.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        queries: []
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.queries) {
            Query.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries.push(Query.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => Query.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map(e => e ? Query.toAmino(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map