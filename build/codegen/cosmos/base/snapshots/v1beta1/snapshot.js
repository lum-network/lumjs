"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotSchema = exports.SnapshotKVItem = exports.SnapshotExtensionPayload = exports.SnapshotExtensionMeta = exports.SnapshotIAVLItem = exports.SnapshotStoreItem = exports.SnapshotItem = exports.Metadata = exports.Snapshot = void 0;
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseSnapshot() {
    return {
        height: helpers_1.Long.UZERO,
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: exports.Metadata.fromPartial({})
    };
}
exports.Snapshot = {
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
            exports.Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
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
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? exports.Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: helpers_1.Long.fromString(object.height),
            format: object.format,
            chunks: object.chunks,
            hash: object.hash,
            metadata: object?.metadata ? exports.Metadata.fromAmino(object.metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata ? exports.Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Snapshot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Snapshot",
            value: exports.Snapshot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Snapshot.decode(message.value);
    },
    toProto(message) {
        return exports.Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
            value: exports.Snapshot.encode(message).finish()
        };
    }
};
function createBaseMetadata() {
    return {
        chunkHashes: []
    };
}
exports.Metadata = {
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
        return exports.Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: exports.Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Metadata.decode(message.value);
    },
    toProto(message) {
        return exports.Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
            value: exports.Metadata.encode(message).finish()
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
exports.SnapshotItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.store !== undefined) {
            exports.SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            exports.SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            exports.SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extensionPayload !== undefined) {
            exports.SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
        }
        if (message.kv !== undefined) {
            exports.SnapshotKVItem.encode(message.kv, writer.uint32(42).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            exports.SnapshotSchema.encode(message.schema, writer.uint32(50).fork()).ldelim();
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
                    message.store = exports.SnapshotStoreItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iavl = exports.SnapshotIAVLItem.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.extension = exports.SnapshotExtensionMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extensionPayload = exports.SnapshotExtensionPayload.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.kv = exports.SnapshotKVItem.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.schema = exports.SnapshotSchema.decode(reader, reader.uint32());
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
        message.store = object.store !== undefined && object.store !== null ? exports.SnapshotStoreItem.fromPartial(object.store) : undefined;
        message.iavl = object.iavl !== undefined && object.iavl !== null ? exports.SnapshotIAVLItem.fromPartial(object.iavl) : undefined;
        message.extension = object.extension !== undefined && object.extension !== null ? exports.SnapshotExtensionMeta.fromPartial(object.extension) : undefined;
        message.extensionPayload = object.extensionPayload !== undefined && object.extensionPayload !== null ? exports.SnapshotExtensionPayload.fromPartial(object.extensionPayload) : undefined;
        message.kv = object.kv !== undefined && object.kv !== null ? exports.SnapshotKVItem.fromPartial(object.kv) : undefined;
        message.schema = object.schema !== undefined && object.schema !== null ? exports.SnapshotSchema.fromPartial(object.schema) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            store: object?.store ? exports.SnapshotStoreItem.fromAmino(object.store) : undefined,
            iavl: object?.iavl ? exports.SnapshotIAVLItem.fromAmino(object.iavl) : undefined,
            extension: object?.extension ? exports.SnapshotExtensionMeta.fromAmino(object.extension) : undefined,
            extensionPayload: object?.extension_payload ? exports.SnapshotExtensionPayload.fromAmino(object.extension_payload) : undefined,
            kv: object?.kv ? exports.SnapshotKVItem.fromAmino(object.kv) : undefined,
            schema: object?.schema ? exports.SnapshotSchema.fromAmino(object.schema) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.store = message.store ? exports.SnapshotStoreItem.toAmino(message.store) : undefined;
        obj.iavl = message.iavl ? exports.SnapshotIAVLItem.toAmino(message.iavl) : undefined;
        obj.extension = message.extension ? exports.SnapshotExtensionMeta.toAmino(message.extension) : undefined;
        obj.extension_payload = message.extensionPayload ? exports.SnapshotExtensionPayload.toAmino(message.extensionPayload) : undefined;
        obj.kv = message.kv ? exports.SnapshotKVItem.toAmino(message.kv) : undefined;
        obj.schema = message.schema ? exports.SnapshotSchema.toAmino(message.schema) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotItem",
            value: exports.SnapshotItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
            value: exports.SnapshotItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotStoreItem() {
    return {
        name: ""
    };
}
exports.SnapshotStoreItem = {
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
        return exports.SnapshotStoreItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotStoreItem",
            value: exports.SnapshotStoreItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotStoreItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotStoreItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
            value: exports.SnapshotStoreItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotIAVLItem() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        version: helpers_1.Long.ZERO,
        height: 0
    };
}
exports.SnapshotIAVLItem = {
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
        message.version = object.version !== undefined && object.version !== null ? helpers_1.Long.fromValue(object.version) : helpers_1.Long.ZERO;
        message.height = object.height ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            version: helpers_1.Long.fromString(object.version),
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
        return exports.SnapshotIAVLItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotIAVLItem",
            value: exports.SnapshotIAVLItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotIAVLItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotIAVLItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
            value: exports.SnapshotIAVLItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionMeta() {
    return {
        name: "",
        format: 0
    };
}
exports.SnapshotExtensionMeta = {
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
        return exports.SnapshotExtensionMeta.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionMeta",
            value: exports.SnapshotExtensionMeta.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotExtensionMeta.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotExtensionMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
            value: exports.SnapshotExtensionMeta.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionPayload() {
    return {
        payload: new Uint8Array()
    };
}
exports.SnapshotExtensionPayload = {
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
        return exports.SnapshotExtensionPayload.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionPayload",
            value: exports.SnapshotExtensionPayload.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotExtensionPayload.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotExtensionPayload.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
            value: exports.SnapshotExtensionPayload.encode(message).finish()
        };
    }
};
function createBaseSnapshotKVItem() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.SnapshotKVItem = {
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
        return exports.SnapshotKVItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotKVItem",
            value: exports.SnapshotKVItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotKVItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotKVItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem",
            value: exports.SnapshotKVItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotSchema() {
    return {
        keys: []
    };
}
exports.SnapshotSchema = {
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
        return exports.SnapshotSchema.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotSchema",
            value: exports.SnapshotSchema.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotSchema.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotSchema.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema",
            value: exports.SnapshotSchema.encode(message).finish()
        };
    }
};
//# sourceMappingURL=snapshot.js.map