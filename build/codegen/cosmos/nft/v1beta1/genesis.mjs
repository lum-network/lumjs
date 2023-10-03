import { Class, NFT } from "./nft";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        classes: [],
        entries: []
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.classes) {
            Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            Entry.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.classes.push(Class.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.entries.push(Entry.decode(reader, reader.uint32()));
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
        message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
        message.entries = object.entries?.map(e => Entry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => Class.fromAmino(e)) : [],
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => Entry.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? Entry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseEntry() {
    return {
        owner: "",
        nfts: []
    };
}
export const Entry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.nfts) {
            NFT.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.nfts.push(NFT.decode(reader, reader.uint32()));
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
        message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => NFT.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? NFT.toAmino(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Entry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Entry",
            value: Entry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Entry.decode(message.value);
    },
    toProto(message) {
        return Entry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.Entry",
            value: Entry.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map