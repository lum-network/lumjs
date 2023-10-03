import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseEquivocation() {
    return {
        height: Long.ZERO,
        time: new Date(),
        power: Long.ZERO,
        consensusAddress: ""
    };
}
export const Equivocation = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (!message.power.isZero()) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEquivocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                case 4:
                    message.consensusAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEquivocation();
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.time = object.time ?? undefined;
        message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
        message.consensusAddress = object.consensusAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            height: Long.fromString(object.height),
            time: object.time,
            power: Long.fromString(object.power),
            consensusAddress: object.consensus_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.power = message.power ? message.power.toString() : undefined;
        obj.consensus_address = message.consensusAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return Equivocation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Equivocation",
            value: Equivocation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Equivocation.decode(message.value);
    },
    toProto(message) {
        return Equivocation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
            value: Equivocation.encode(message).finish()
        };
    }
};
//# sourceMappingURL=evidence.js.map