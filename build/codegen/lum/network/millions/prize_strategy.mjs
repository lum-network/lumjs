import { PrizeBatch } from "./prize_batch";
import * as _m0 from "protobufjs/minimal";
function createBasePrizeStrategy() {
    return {
        prizeBatches: []
    };
}
export const PrizeStrategy = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prizeBatches) {
            PrizeBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeStrategy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prizeBatches.push(PrizeBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrizeStrategy();
        message.prizeBatches = object.prizeBatches?.map(e => PrizeBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            prizeBatches: Array.isArray(object?.prize_batches) ? object.prize_batches.map((e) => PrizeBatch.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.prizeBatches) {
            obj.prize_batches = message.prizeBatches.map(e => e ? PrizeBatch.toAmino(e) : undefined);
        }
        else {
            obj.prize_batches = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PrizeStrategy.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PrizeStrategy.decode(message.value);
    },
    toProto(message) {
        return PrizeStrategy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.PrizeStrategy",
            value: PrizeStrategy.encode(message).finish()
        };
    }
};
//# sourceMappingURL=prize_strategy.js.map