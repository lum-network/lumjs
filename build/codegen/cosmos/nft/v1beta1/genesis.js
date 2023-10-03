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
exports.Entry = exports.GenesisState = void 0;
const nft_1 = require("./nft");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        classes: [],
        entries: []
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.classes) {
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.Entry.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.entries.push(exports.Entry.decode(reader, reader.uint32()));
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
        message.classes = object.classes?.map(e => nft_1.Class.fromPartial(e)) || [];
        message.entries = object.entries?.map(e => exports.Entry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => nft_1.Class.fromAmino(e)) : [],
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.Entry.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toAmino(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.Entry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseEntry() {
    return {
        owner: "",
        nfts: []
    };
}
exports.Entry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.nfts) {
            nft_1.NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEntry();
        message.owner = object.owner ?? "";
        message.nfts = object.nfts?.map(e => nft_1.NFT.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => nft_1.NFT.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toAmino(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Entry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Entry",
            value: exports.Entry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Entry.decode(message.value);
    },
    toProto(message) {
        return exports.Entry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.Entry",
            value: exports.Entry.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map