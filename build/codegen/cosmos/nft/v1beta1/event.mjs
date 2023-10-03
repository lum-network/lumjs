import * as _m0 from "protobufjs/minimal";
function createBaseEventSend() {
    return {
        classId: "",
        id: "",
        sender: "",
        receiver: ""
    };
}
export const EventSend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                case 4:
                    message.receiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSend();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            classId: object.class_id,
            id: object.id,
            sender: object.sender,
            receiver: object.receiver
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventSend",
            value: EventSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventSend.decode(message.value);
    },
    toProto(message) {
        return EventSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventSend",
            value: EventSend.encode(message).finish()
        };
    }
};
function createBaseEventMint() {
    return {
        classId: "",
        id: "",
        owner: ""
    };
}
export const EventMint = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventMint();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            classId: object.class_id,
            id: object.id,
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return EventMint.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventMint",
            value: EventMint.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventMint.decode(message.value);
    },
    toProto(message) {
        return EventMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventMint",
            value: EventMint.encode(message).finish()
        };
    }
};
function createBaseEventBurn() {
    return {
        classId: "",
        id: "",
        owner: ""
    };
}
export const EventBurn = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBurn();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            classId: object.class_id,
            id: object.id,
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBurn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventBurn",
            value: EventBurn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventBurn.decode(message.value);
    },
    toProto(message) {
        return EventBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventBurn",
            value: EventBurn.encode(message).finish()
        };
    }
};
//# sourceMappingURL=event.js.map