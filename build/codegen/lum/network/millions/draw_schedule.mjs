import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseDrawSchedule() {
    return {
        initialDrawAt: new Date(),
        drawDelta: Duration.fromPartial({})
    };
}
export const DrawSchedule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.initialDrawAt !== undefined) {
            Timestamp.encode(toTimestamp(message.initialDrawAt), writer.uint32(10).fork()).ldelim();
        }
        if (message.drawDelta !== undefined) {
            Duration.encode(message.drawDelta, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDrawSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initialDrawAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.drawDelta = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDrawSchedule();
        message.initialDrawAt = object.initialDrawAt ?? undefined;
        message.drawDelta = object.drawDelta !== undefined && object.drawDelta !== null ? Duration.fromPartial(object.drawDelta) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            initialDrawAt: object.initial_draw_at,
            drawDelta: object?.draw_delta ? Duration.fromAmino(object.draw_delta) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.initial_draw_at = message.initialDrawAt;
        obj.draw_delta = message.drawDelta ? Duration.toAmino(message.drawDelta) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DrawSchedule.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DrawSchedule.decode(message.value);
    },
    toProto(message) {
        return DrawSchedule.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.DrawSchedule",
            value: DrawSchedule.encode(message).finish()
        };
    }
};
//# sourceMappingURL=draw_schedule.js.map