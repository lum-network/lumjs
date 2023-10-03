import * as _m0 from "protobufjs/minimal";
function createBaseMsgVerifyInvariant() {
    return {
        sender: "",
        invariantModuleName: "",
        invariantRoute: ""
    };
}
export const MsgVerifyInvariant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invariantModuleName !== "") {
            writer.uint32(18).string(message.invariantModuleName);
        }
        if (message.invariantRoute !== "") {
            writer.uint32(26).string(message.invariantRoute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invariantModuleName = reader.string();
                    break;
                case 3:
                    message.invariantRoute = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgVerifyInvariant();
        message.sender = object.sender ?? "";
        message.invariantModuleName = object.invariantModuleName ?? "";
        message.invariantRoute = object.invariantRoute ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            invariantModuleName: object.invariant_module_name,
            invariantRoute: object.invariant_route
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.invariant_module_name = message.invariantModuleName;
        obj.invariant_route = message.invariantRoute;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVerifyInvariant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariant",
            value: MsgVerifyInvariant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVerifyInvariant.decode(message.value);
    },
    toProto(message) {
        return MsgVerifyInvariant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
            value: MsgVerifyInvariant.encode(message).finish()
        };
    }
};
function createBaseMsgVerifyInvariantResponse() {
    return {};
}
export const MsgVerifyInvariantResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariantResponse();
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
        const message = createBaseMsgVerifyInvariantResponse();
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
        return MsgVerifyInvariantResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariantResponse",
            value: MsgVerifyInvariantResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVerifyInvariantResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVerifyInvariantResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
            value: MsgVerifyInvariantResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map