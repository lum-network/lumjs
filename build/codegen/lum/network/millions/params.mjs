import { Duration } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
    return {
        minDepositAmount: "",
        maxPrizeStrategyBatches: Long.UZERO,
        maxPrizeBatchQuantity: Long.UZERO,
        minDrawScheduleDelta: Duration.fromPartial({}),
        maxDrawScheduleDelta: Duration.fromPartial({}),
        prizeExpirationDelta: Duration.fromPartial({}),
        feesStakers: "",
        minDepositDrawDelta: Duration.fromPartial({})
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.minDepositAmount !== "") {
            writer.uint32(10).string(message.minDepositAmount);
        }
        if (!message.maxPrizeStrategyBatches.isZero()) {
            writer.uint32(16).uint64(message.maxPrizeStrategyBatches);
        }
        if (!message.maxPrizeBatchQuantity.isZero()) {
            writer.uint32(24).uint64(message.maxPrizeBatchQuantity);
        }
        if (message.minDrawScheduleDelta !== undefined) {
            Duration.encode(message.minDrawScheduleDelta, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxDrawScheduleDelta !== undefined) {
            Duration.encode(message.maxDrawScheduleDelta, writer.uint32(42).fork()).ldelim();
        }
        if (message.prizeExpirationDelta !== undefined) {
            Duration.encode(message.prizeExpirationDelta, writer.uint32(50).fork()).ldelim();
        }
        if (message.feesStakers !== "") {
            writer.uint32(58).string(message.feesStakers);
        }
        if (message.minDepositDrawDelta !== undefined) {
            Duration.encode(message.minDepositDrawDelta, writer.uint32(66).fork()).ldelim();
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
                    message.minDepositAmount = reader.string();
                    break;
                case 2:
                    message.maxPrizeStrategyBatches = reader.uint64();
                    break;
                case 3:
                    message.maxPrizeBatchQuantity = reader.uint64();
                    break;
                case 4:
                    message.minDrawScheduleDelta = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.maxDrawScheduleDelta = Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.prizeExpirationDelta = Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.feesStakers = reader.string();
                    break;
                case 8:
                    message.minDepositDrawDelta = Duration.decode(reader, reader.uint32());
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
        message.minDepositAmount = object.minDepositAmount ?? "";
        message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches !== undefined && object.maxPrizeStrategyBatches !== null ? Long.fromValue(object.maxPrizeStrategyBatches) : Long.UZERO;
        message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity !== undefined && object.maxPrizeBatchQuantity !== null ? Long.fromValue(object.maxPrizeBatchQuantity) : Long.UZERO;
        message.minDrawScheduleDelta = object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null ? Duration.fromPartial(object.minDrawScheduleDelta) : undefined;
        message.maxDrawScheduleDelta = object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null ? Duration.fromPartial(object.maxDrawScheduleDelta) : undefined;
        message.prizeExpirationDelta = object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null ? Duration.fromPartial(object.prizeExpirationDelta) : undefined;
        message.feesStakers = object.feesStakers ?? "";
        message.minDepositDrawDelta = object.minDepositDrawDelta !== undefined && object.minDepositDrawDelta !== null ? Duration.fromPartial(object.minDepositDrawDelta) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            minDepositAmount: object.min_deposit_amount,
            maxPrizeStrategyBatches: Long.fromString(object.max_prize_strategy_batches),
            maxPrizeBatchQuantity: Long.fromString(object.max_prize_batch_quantity),
            minDrawScheduleDelta: object?.min_draw_schedule_delta ? Duration.fromAmino(object.min_draw_schedule_delta) : undefined,
            maxDrawScheduleDelta: object?.max_draw_schedule_delta ? Duration.fromAmino(object.max_draw_schedule_delta) : undefined,
            prizeExpirationDelta: object?.prize_expiration_delta ? Duration.fromAmino(object.prize_expiration_delta) : undefined,
            feesStakers: object.fees_stakers,
            minDepositDrawDelta: object?.min_deposit_draw_delta ? Duration.fromAmino(object.min_deposit_draw_delta) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.min_deposit_amount = message.minDepositAmount;
        obj.max_prize_strategy_batches = message.maxPrizeStrategyBatches ? message.maxPrizeStrategyBatches.toString() : undefined;
        obj.max_prize_batch_quantity = message.maxPrizeBatchQuantity ? message.maxPrizeBatchQuantity.toString() : undefined;
        obj.min_draw_schedule_delta = message.minDrawScheduleDelta ? Duration.toAmino(message.minDrawScheduleDelta) : undefined;
        obj.max_draw_schedule_delta = message.maxDrawScheduleDelta ? Duration.toAmino(message.maxDrawScheduleDelta) : undefined;
        obj.prize_expiration_delta = message.prizeExpirationDelta ? Duration.toAmino(message.prizeExpirationDelta) : undefined;
        obj.fees_stakers = message.feesStakers;
        obj.min_deposit_draw_delta = message.minDepositDrawDelta ? Duration.toAmino(message.minDepositDrawDelta) : undefined;
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
            typeUrl: "/lum.network.millions.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map