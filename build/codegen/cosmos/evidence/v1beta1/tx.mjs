import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgSubmitEvidence() {
    return {
        submitter: "",
        evidence: Any.fromPartial({})
    };
}
export const MsgSubmitEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.submitter !== "") {
            writer.uint32(10).string(message.submitter);
        }
        if (message.evidence !== undefined) {
            Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.submitter = reader.string();
                    break;
                case 2:
                    message.evidence = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitEvidence();
        message.submitter = object.submitter ?? "";
        message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            submitter: object.submitter,
            evidence: object?.evidence ? Any.fromAmino(object.evidence) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.submitter = message.submitter;
        obj.evidence = message.evidence ? Any.toAmino(message.evidence) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitEvidence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitEvidence",
            value: MsgSubmitEvidence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitEvidence.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
            value: MsgSubmitEvidence.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitEvidenceResponse() {
    return {
        hash: new Uint8Array()
    };
}
export const MsgSubmitEvidenceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
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
        const message = createBaseMsgSubmitEvidenceResponse();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitEvidenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitEvidenceResponse",
            value: MsgSubmitEvidenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
            value: MsgSubmitEvidenceResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map