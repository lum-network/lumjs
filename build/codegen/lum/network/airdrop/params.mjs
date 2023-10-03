import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseParams() {
    return {
        airdropStartTime: new Date(),
        durationUntilDecay: Duration.fromPartial({}),
        durationOfDecay: Duration.fromPartial({}),
        claimDenom: ""
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.airdropStartTime !== undefined) {
            Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.durationUntilDecay !== undefined) {
            Duration.encode(message.durationUntilDecay, writer.uint32(18).fork()).ldelim();
        }
        if (message.durationOfDecay !== undefined) {
            Duration.encode(message.durationOfDecay, writer.uint32(26).fork()).ldelim();
        }
        if (message.claimDenom !== "") {
            writer.uint32(34).string(message.claimDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.durationUntilDecay = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.durationOfDecay = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.claimDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.airdropStartTime = object.airdropStartTime ?? undefined;
        message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
        message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
        message.claimDenom = object.claimDenom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            airdropStartTime: object.airdrop_start_time,
            durationUntilDecay: object?.duration_until_decay ? Duration.fromAmino(object.duration_until_decay) : undefined,
            durationOfDecay: object?.duration_of_decay ? Duration.fromAmino(object.duration_of_decay) : undefined,
            claimDenom: object.claim_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.airdrop_start_time = message.airdropStartTime;
        obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
        obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
        obj.claim_denom = message.claimDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map