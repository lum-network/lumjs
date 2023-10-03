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
exports.StoreKVPair = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseStoreKVPair() {
    return {
        storeKey: "",
        delete: false,
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.StoreKVPair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.storeKey !== "") {
            writer.uint32(10).string(message.storeKey);
        }
        if (message.delete === true) {
            writer.uint32(16).bool(message.delete);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeKey = reader.string();
                    break;
                case 2:
                    message.delete = reader.bool();
                    break;
                case 3:
                    message.key = reader.bytes();
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
        const message = createBaseStoreKVPair();
        message.storeKey = object.storeKey ?? "";
        message.delete = object.delete ?? false;
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            storeKey: object.store_key,
            delete: object.delete,
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.store_key = message.storeKey;
        obj.delete = message.delete;
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreKVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreKVPair",
            value: exports.StoreKVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StoreKVPair.decode(message.value);
    },
    toProto(message) {
        return exports.StoreKVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
            value: exports.StoreKVPair.encode(message).finish()
        };
    }
};
//# sourceMappingURL=listening.js.map