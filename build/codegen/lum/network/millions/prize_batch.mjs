import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBasePrizeBatch() {
    return {
        poolPercent: Long.UZERO,
        quantity: Long.UZERO,
        drawProbability: "",
        isUnique: false
    };
}
export const PrizeBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolPercent.isZero()) {
            writer.uint32(8).uint64(message.poolPercent);
        }
        if (!message.quantity.isZero()) {
            writer.uint32(16).uint64(message.quantity);
        }
        if (message.drawProbability !== "") {
            writer.uint32(26).string(message.drawProbability);
        }
        if (message.isUnique === true) {
            writer.uint32(32).bool(message.isUnique);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolPercent = reader.uint64();
                    break;
                case 2:
                    message.quantity = reader.uint64();
                    break;
                case 3:
                    message.drawProbability = reader.string();
                    break;
                case 4:
                    message.isUnique = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrizeBatch();
        message.poolPercent = object.poolPercent !== undefined && object.poolPercent !== null ? Long.fromValue(object.poolPercent) : Long.UZERO;
        message.quantity = object.quantity !== undefined && object.quantity !== null ? Long.fromValue(object.quantity) : Long.UZERO;
        message.drawProbability = object.drawProbability ?? "";
        message.isUnique = object.isUnique ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            poolPercent: Long.fromString(object.pool_percent),
            quantity: Long.fromString(object.quantity),
            drawProbability: object.draw_probability,
            isUnique: object.is_unique
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_percent = message.poolPercent ? message.poolPercent.toString() : undefined;
        obj.quantity = message.quantity ? message.quantity.toString() : undefined;
        obj.draw_probability = message.drawProbability;
        obj.is_unique = message.isUnique;
        return obj;
    },
    fromAminoMsg(object) {
        return PrizeBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PrizeBatch.decode(message.value);
    },
    toProto(message) {
        return PrizeBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.PrizeBatch",
            value: PrizeBatch.encode(message).finish()
        };
    }
};
//# sourceMappingURL=prize_batch.js.map