"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const duration_1 = require("../../../google/protobuf/duration");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams() {
    return {
        minDepositAmount: "",
        maxPrizeStrategyBatches: helpers_1.Long.UZERO,
        maxPrizeBatchQuantity: helpers_1.Long.UZERO,
        minDrawScheduleDelta: duration_1.Duration.fromPartial({}),
        maxDrawScheduleDelta: duration_1.Duration.fromPartial({}),
        prizeExpirationDelta: duration_1.Duration.fromPartial({}),
        feesStakers: "",
        minDepositDrawDelta: duration_1.Duration.fromPartial({})
    };
}
exports.Params = {
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
            duration_1.Duration.encode(message.minDrawScheduleDelta, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxDrawScheduleDelta !== undefined) {
            duration_1.Duration.encode(message.maxDrawScheduleDelta, writer.uint32(42).fork()).ldelim();
        }
        if (message.prizeExpirationDelta !== undefined) {
            duration_1.Duration.encode(message.prizeExpirationDelta, writer.uint32(50).fork()).ldelim();
        }
        if (message.feesStakers !== "") {
            writer.uint32(58).string(message.feesStakers);
        }
        if (message.minDepositDrawDelta !== undefined) {
            duration_1.Duration.encode(message.minDepositDrawDelta, writer.uint32(66).fork()).ldelim();
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
                    message.minDrawScheduleDelta = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.maxDrawScheduleDelta = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.prizeExpirationDelta = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.feesStakers = reader.string();
                    break;
                case 8:
                    message.minDepositDrawDelta = duration_1.Duration.decode(reader, reader.uint32());
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
        message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches !== undefined && object.maxPrizeStrategyBatches !== null ? helpers_1.Long.fromValue(object.maxPrizeStrategyBatches) : helpers_1.Long.UZERO;
        message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity !== undefined && object.maxPrizeBatchQuantity !== null ? helpers_1.Long.fromValue(object.maxPrizeBatchQuantity) : helpers_1.Long.UZERO;
        message.minDrawScheduleDelta = object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null ? duration_1.Duration.fromPartial(object.minDrawScheduleDelta) : undefined;
        message.maxDrawScheduleDelta = object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null ? duration_1.Duration.fromPartial(object.maxDrawScheduleDelta) : undefined;
        message.prizeExpirationDelta = object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null ? duration_1.Duration.fromPartial(object.prizeExpirationDelta) : undefined;
        message.feesStakers = object.feesStakers ?? "";
        message.minDepositDrawDelta = object.minDepositDrawDelta !== undefined && object.minDepositDrawDelta !== null ? duration_1.Duration.fromPartial(object.minDepositDrawDelta) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            minDepositAmount: object.min_deposit_amount,
            maxPrizeStrategyBatches: helpers_1.Long.fromString(object.max_prize_strategy_batches),
            maxPrizeBatchQuantity: helpers_1.Long.fromString(object.max_prize_batch_quantity),
            minDrawScheduleDelta: object?.min_draw_schedule_delta ? duration_1.Duration.fromAmino(object.min_draw_schedule_delta) : undefined,
            maxDrawScheduleDelta: object?.max_draw_schedule_delta ? duration_1.Duration.fromAmino(object.max_draw_schedule_delta) : undefined,
            prizeExpirationDelta: object?.prize_expiration_delta ? duration_1.Duration.fromAmino(object.prize_expiration_delta) : undefined,
            feesStakers: object.fees_stakers,
            minDepositDrawDelta: object?.min_deposit_draw_delta ? duration_1.Duration.fromAmino(object.min_deposit_draw_delta) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.min_deposit_amount = message.minDepositAmount;
        obj.max_prize_strategy_batches = message.maxPrizeStrategyBatches ? message.maxPrizeStrategyBatches.toString() : undefined;
        obj.max_prize_batch_quantity = message.maxPrizeBatchQuantity ? message.maxPrizeBatchQuantity.toString() : undefined;
        obj.min_draw_schedule_delta = message.minDrawScheduleDelta ? duration_1.Duration.toAmino(message.minDrawScheduleDelta) : undefined;
        obj.max_draw_schedule_delta = message.maxDrawScheduleDelta ? duration_1.Duration.toAmino(message.maxDrawScheduleDelta) : undefined;
        obj.prize_expiration_delta = message.prizeExpirationDelta ? duration_1.Duration.toAmino(message.prizeExpirationDelta) : undefined;
        obj.fees_stakers = message.feesStakers;
        obj.min_deposit_draw_delta = message.minDepositDrawDelta ? duration_1.Duration.toAmino(message.minDepositDrawDelta) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map