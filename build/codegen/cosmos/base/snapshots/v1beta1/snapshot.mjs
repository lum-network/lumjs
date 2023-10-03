import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseSnapshot() {
    return {
        height: Long.UZERO,
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: Metadata.fromPartial({})
    };
}
export const Snapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: Long.fromString(object.height),
            format: object.format,
            chunks: object.chunks,
            hash: object.hash,
            metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Snapshot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Snapshot",
            value: Snapshot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Snapshot.decode(message.value);
    },
    toProto(message) {
        return Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
            value: Snapshot.encode(message).finish()
        };
    }
};
function createBaseMetadata() {
    return {
        chunkHashes: []
    };
}
export const Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chunkHashes) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunkHashes.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.chunkHashes = object.chunkHashes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chunkHashes: Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.chunkHashes) {
            obj.chunk_hashes = message.chunkHashes.map(e => e);
        }
        else {
            obj.chunk_hashes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Metadata.decode(message.value);
    },
    toProto(message) {
        return Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
            value: Metadata.encode(message).finish()
        };
    }
};
function createBaseSnapshotItem() {
    return {
        store: undefined,
        iavl: undefined,
        extension: undefined,
        extensionPayload: undefined,
        kv: undefined,
        schema: undefined
    };
}
export const SnapshotItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.store !== undefined) {
            SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extensionPayload !== undefined) {
            SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
        }
        if (message.kv !== undefined) {
            SnapshotKVItem.encode(message.kv, writer.uint32(42).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            SnapshotSchema.encode(message.schema, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store = SnapshotStoreItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extensionPayload = SnapshotExtensionPayload.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.kv = SnapshotKVItem.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.schema = SnapshotSchema.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotItem();
        message.store = object.store !== undefined && object.store !== null ? SnapshotStoreItem.fromPartial(object.store) : undefined;
        message.iavl = object.iavl !== undefined && object.iavl !== null ? SnapshotIAVLItem.fromPartial(object.iavl) : undefined;
        message.extension = object.extension !== undefined && object.extension !== null ? SnapshotExtensionMeta.fromPartial(object.extension) : undefined;
        message.extensionPayload = object.extensionPayload !== undefined && object.extensionPayload !== null ? SnapshotExtensionPayload.fromPartial(object.extensionPayload) : undefined;
        message.kv = object.kv !== undefined && object.kv !== null ? SnapshotKVItem.fromPartial(object.kv) : undefined;
        message.schema = object.schema !== undefined && object.schema !== null ? SnapshotSchema.fromPartial(object.schema) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            store: object?.store ? SnapshotStoreItem.fromAmino(object.store) : undefined,
            iavl: object?.iavl ? SnapshotIAVLItem.fromAmino(object.iavl) : undefined,
            extension: object?.extension ? SnapshotExtensionMeta.fromAmino(object.extension) : undefined,
            extensionPayload: object?.extension_payload ? SnapshotExtensionPayload.fromAmino(object.extension_payload) : undefined,
            kv: object?.kv ? SnapshotKVItem.fromAmino(object.kv) : undefined,
            schema: object?.schema ? SnapshotSchema.fromAmino(object.schema) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.store = message.store ? SnapshotStoreItem.toAmino(message.store) : undefined;
        obj.iavl = message.iavl ? SnapshotIAVLItem.toAmino(message.iavl) : undefined;
        obj.extension = message.extension ? SnapshotExtensionMeta.toAmino(message.extension) : undefined;
        obj.extension_payload = message.extensionPayload ? SnapshotExtensionPayload.toAmino(message.extensionPayload) : undefined;
        obj.kv = message.kv ? SnapshotKVItem.toAmino(message.kv) : undefined;
        obj.schema = message.schema ? SnapshotSchema.toAmino(message.schema) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotItem",
            value: SnapshotItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
            value: SnapshotItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotStoreItem() {
    return {
        name: ""
    };
}
export const SnapshotStoreItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotStoreItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotStoreItem();
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotStoreItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotStoreItem",
            value: SnapshotStoreItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotStoreItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotStoreItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
            value: SnapshotStoreItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotIAVLItem() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        version: Long.ZERO,
        height: 0
    };
}
export const SnapshotIAVLItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (!message.version.isZero()) {
            writer.uint32(24).int64(message.version);
        }
        if (message.height !== 0) {
            writer.uint32(32).int32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotIAVLItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.version = reader.int64();
                    break;
                case 4:
                    message.height = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotIAVLItem();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
        message.height = object.height ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            version: Long.fromString(object.version),
            height: object.height
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.version = message.version ? message.version.toString() : undefined;
        obj.height = message.height;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotIAVLItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotIAVLItem",
            value: SnapshotIAVLItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotIAVLItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotIAVLItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
            value: SnapshotIAVLItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionMeta() {
    return {
        name: "",
        format: 0
    };
}
export const SnapshotExtensionMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionMeta();
        message.name = object.name ?? "";
        message.format = object.format ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            format: object.format
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.format = message.format;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotExtensionMeta.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionMeta",
            value: SnapshotExtensionMeta.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotExtensionMeta.decode(message.value);
    },
    toProto(message) {
        return SnapshotExtensionMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
            value: SnapshotExtensionMeta.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionPayload() {
    return {
        payload: new Uint8Array()
    };
}
export const SnapshotExtensionPayload = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionPayload();
        message.payload = object.payload ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            payload: object.payload
        };
    },
    toAmino(message) {
        const obj = {};
        obj.payload = message.payload;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotExtensionPayload.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionPayload",
            value: SnapshotExtensionPayload.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotExtensionPayload.decode(message.value);
    },
    toProto(message) {
        return SnapshotExtensionPayload.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
            value: SnapshotExtensionPayload.encode(message).finish()
        };
    }
};
function createBaseSnapshotKVItem() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const SnapshotKVItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotKVItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
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
        const message = createBaseSnapshotKVItem();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotKVItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotKVItem",
            value: SnapshotKVItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotKVItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotKVItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem",
            value: SnapshotKVItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotSchema() {
    return {
        keys: []
    };
}
export const SnapshotSchema = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotSchema();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotSchema();
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            keys: Array.isArray(object?.keys) ? object.keys.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotSchema.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotSchema",
            value: SnapshotSchema.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotSchema.decode(message.value);
    },
    toProto(message) {
        return SnapshotSchema.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema",
            value: SnapshotSchema.encode(message).finish()
        };
    }
};
//# sourceMappingURL=snapshot.js.map