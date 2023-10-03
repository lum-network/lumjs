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
exports.CommitID = exports.StoreInfo = exports.CommitInfo = void 0;
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseCommitInfo() {
    return {
        version: helpers_1.Long.ZERO,
        storeInfos: []
    };
}
exports.CommitInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        for (const v of message.storeInfos) {
            exports.StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.storeInfos.push(exports.StoreInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.version = object.version !== undefined && object.version !== null ? helpers_1.Long.fromValue(object.version) : helpers_1.Long.ZERO;
        message.storeInfos = object.storeInfos?.map(e => exports.StoreInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            version: helpers_1.Long.fromString(object.version),
            storeInfos: Array.isArray(object?.store_infos) ? object.store_infos.map((e) => exports.StoreInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        if (message.storeInfos) {
            obj.store_infos = message.storeInfos.map(e => e ? exports.StoreInfo.toAmino(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitInfo",
            value: exports.CommitInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommitInfo.decode(message.value);
    },
    toProto(message) {
        return exports.CommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
            value: exports.CommitInfo.encode(message).finish()
        };
    }
};
function createBaseStoreInfo() {
    return {
        name: "",
        commitId: exports.CommitID.fromPartial({})
    };
}
exports.StoreInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commitId !== undefined) {
            exports.CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commitId = exports.CommitID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStoreInfo();
        message.name = object.name ?? "";
        message.commitId = object.commitId !== undefined && object.commitId !== null ? exports.CommitID.fromPartial(object.commitId) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            commitId: object?.commit_id ? exports.CommitID.fromAmino(object.commit_id) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.commit_id = message.commitId ? exports.CommitID.toAmino(message.commitId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreInfo",
            value: exports.StoreInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StoreInfo.decode(message.value);
    },
    toProto(message) {
        return exports.StoreInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
            value: exports.StoreInfo.encode(message).finish()
        };
    }
};
function createBaseCommitID() {
    return {
        version: helpers_1.Long.ZERO,
        hash: new Uint8Array()
    };
}
exports.CommitID = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommitID();
        message.version = object.version !== undefined && object.version !== null ? helpers_1.Long.fromValue(object.version) : helpers_1.Long.ZERO;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            version: helpers_1.Long.fromString(object.version),
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitID.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitID",
            value: exports.CommitID.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommitID.decode(message.value);
    },
    toProto(message) {
        return exports.CommitID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.CommitID",
            value: exports.CommitID.encode(message).finish()
        };
    }
};
//# sourceMappingURL=commit_info.js.map