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
exports.ProposalUpdateParams = exports.ProposalUpdatePool = exports.ProposalRegisterPool = void 0;
const draw_schedule_1 = require("./draw_schedule");
const prize_strategy_1 = require("./prize_strategy");
const duration_1 = require("../../../google/protobuf/duration");
const pool_1 = require("./pool");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseProposalRegisterPool() {
    return {
        title: "",
        description: "",
        chainId: "",
        denom: "",
        nativeDenom: "",
        connectionId: "",
        validators: [],
        minDepositAmount: "",
        drawSchedule: draw_schedule_1.DrawSchedule.fromPartial({}),
        prizeStrategy: prize_strategy_1.PrizeStrategy.fromPartial({}),
        bech32PrefixAccAddr: "",
        bech32PrefixValAddr: "",
        transferChannelId: "",
        unbondingDuration: duration_1.Duration.fromPartial({}),
        maxUnbondingEntries: "",
        poolType: 0
    };
}
exports.ProposalRegisterPool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.nativeDenom !== "") {
            writer.uint32(42).string(message.nativeDenom);
        }
        if (message.connectionId !== "") {
            writer.uint32(50).string(message.connectionId);
        }
        for (const v of message.validators) {
            writer.uint32(58).string(v);
        }
        if (message.minDepositAmount !== "") {
            writer.uint32(66).string(message.minDepositAmount);
        }
        if (message.drawSchedule !== undefined) {
            draw_schedule_1.DrawSchedule.encode(message.drawSchedule, writer.uint32(74).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            prize_strategy_1.PrizeStrategy.encode(message.prizeStrategy, writer.uint32(82).fork()).ldelim();
        }
        if (message.bech32PrefixAccAddr !== "") {
            writer.uint32(90).string(message.bech32PrefixAccAddr);
        }
        if (message.bech32PrefixValAddr !== "") {
            writer.uint32(98).string(message.bech32PrefixValAddr);
        }
        if (message.transferChannelId !== "") {
            writer.uint32(106).string(message.transferChannelId);
        }
        if (message.unbondingDuration !== undefined) {
            duration_1.Duration.encode(message.unbondingDuration, writer.uint32(114).fork()).ldelim();
        }
        if (message.maxUnbondingEntries !== "") {
            writer.uint32(122).string(message.maxUnbondingEntries);
        }
        if (message.poolType !== 0) {
            writer.uint32(128).int32(message.poolType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalRegisterPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.nativeDenom = reader.string();
                    break;
                case 6:
                    message.connectionId = reader.string();
                    break;
                case 7:
                    message.validators.push(reader.string());
                    break;
                case 8:
                    message.minDepositAmount = reader.string();
                    break;
                case 9:
                    message.drawSchedule = draw_schedule_1.DrawSchedule.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.prizeStrategy = prize_strategy_1.PrizeStrategy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.bech32PrefixAccAddr = reader.string();
                    break;
                case 12:
                    message.bech32PrefixValAddr = reader.string();
                    break;
                case 13:
                    message.transferChannelId = reader.string();
                    break;
                case 14:
                    message.unbondingDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.maxUnbondingEntries = reader.string();
                    break;
                case 16:
                    message.poolType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProposalRegisterPool();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.chainId = object.chainId ?? "";
        message.denom = object.denom ?? "";
        message.nativeDenom = object.nativeDenom ?? "";
        message.connectionId = object.connectionId ?? "";
        message.validators = object.validators?.map(e => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? "";
        message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? draw_schedule_1.DrawSchedule.fromPartial(object.drawSchedule) : undefined;
        message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? prize_strategy_1.PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
        message.bech32PrefixAccAddr = object.bech32PrefixAccAddr ?? "";
        message.bech32PrefixValAddr = object.bech32PrefixValAddr ?? "";
        message.transferChannelId = object.transferChannelId ?? "";
        message.unbondingDuration = object.unbondingDuration !== undefined && object.unbondingDuration !== null ? duration_1.Duration.fromPartial(object.unbondingDuration) : undefined;
        message.maxUnbondingEntries = object.maxUnbondingEntries ?? "";
        message.poolType = object.poolType ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chainId: object.chain_id,
            denom: object.denom,
            nativeDenom: object.native_denom,
            connectionId: object.connection_id,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => e) : [],
            minDepositAmount: object.min_deposit_amount,
            drawSchedule: object?.draw_schedule ? draw_schedule_1.DrawSchedule.fromAmino(object.draw_schedule) : undefined,
            prizeStrategy: object?.prize_strategy ? prize_strategy_1.PrizeStrategy.fromAmino(object.prize_strategy) : undefined,
            bech32PrefixAccAddr: object.bech32_prefix_acc_addr,
            bech32PrefixValAddr: object.bech32_prefix_val_addr,
            transferChannelId: object.transfer_channel_id,
            unbondingDuration: object?.unbonding_duration ? duration_1.Duration.fromAmino(object.unbonding_duration) : undefined,
            maxUnbondingEntries: object.max_unbonding_entries,
            poolType: (0, helpers_1.isSet)(object.pool_type) ? (0, pool_1.poolTypeFromJSON)(object.pool_type) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chainId;
        obj.denom = message.denom;
        obj.native_denom = message.nativeDenom;
        obj.connection_id = message.connectionId;
        if (message.validators) {
            obj.validators = message.validators.map(e => e);
        }
        else {
            obj.validators = [];
        }
        obj.min_deposit_amount = message.minDepositAmount;
        obj.draw_schedule = message.drawSchedule ? draw_schedule_1.DrawSchedule.toAmino(message.drawSchedule) : undefined;
        obj.prize_strategy = message.prizeStrategy ? prize_strategy_1.PrizeStrategy.toAmino(message.prizeStrategy) : undefined;
        obj.bech32_prefix_acc_addr = message.bech32PrefixAccAddr;
        obj.bech32_prefix_val_addr = message.bech32PrefixValAddr;
        obj.transfer_channel_id = message.transferChannelId;
        obj.unbonding_duration = message.unbondingDuration ? duration_1.Duration.toAmino(message.unbondingDuration) : undefined;
        obj.max_unbonding_entries = message.maxUnbondingEntries;
        obj.pool_type = message.poolType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProposalRegisterPool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProposalRegisterPool.decode(message.value);
    },
    toProto(message) {
        return exports.ProposalRegisterPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.ProposalRegisterPool",
            value: exports.ProposalRegisterPool.encode(message).finish()
        };
    }
};
function createBaseProposalUpdatePool() {
    return {
        title: "",
        description: "",
        poolId: helpers_1.Long.UZERO,
        validators: undefined,
        minDepositAmount: undefined,
        drawSchedule: undefined,
        prizeStrategy: undefined,
        state: 0,
        unbondingDuration: undefined,
        maxUnbondingEntries: undefined
    };
}
exports.ProposalUpdatePool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(24).uint64(message.poolId);
        }
        for (const v of message.validators) {
            writer.uint32(34).string(v);
        }
        if (message.minDepositAmount !== undefined) {
            writer.uint32(42).string(message.minDepositAmount);
        }
        if (message.drawSchedule !== undefined) {
            draw_schedule_1.DrawSchedule.encode(message.drawSchedule, writer.uint32(50).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            prize_strategy_1.PrizeStrategy.encode(message.prizeStrategy, writer.uint32(58).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(64).int32(message.state);
        }
        if (message.unbondingDuration !== undefined) {
            duration_1.Duration.encode(message.unbondingDuration, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxUnbondingEntries !== undefined) {
            writer.uint32(82).string(message.maxUnbondingEntries);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalUpdatePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.validators.push(reader.string());
                    break;
                case 5:
                    message.minDepositAmount = reader.string();
                    break;
                case 6:
                    message.drawSchedule = draw_schedule_1.DrawSchedule.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.prizeStrategy = prize_strategy_1.PrizeStrategy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.state = reader.int32();
                    break;
                case 9:
                    message.unbondingDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.maxUnbondingEntries = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProposalUpdatePool();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.validators = object.validators?.map(e => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? undefined;
        message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? draw_schedule_1.DrawSchedule.fromPartial(object.drawSchedule) : undefined;
        message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? prize_strategy_1.PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
        message.state = object.state ?? 0;
        message.unbondingDuration = object.unbondingDuration !== undefined && object.unbondingDuration !== null ? duration_1.Duration.fromPartial(object.unbondingDuration) : undefined;
        message.maxUnbondingEntries = object.maxUnbondingEntries ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            poolId: helpers_1.Long.fromString(object.pool_id),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => e) : [],
            minDepositAmount: object?.min_deposit_amount,
            drawSchedule: object?.draw_schedule ? draw_schedule_1.DrawSchedule.fromAmino(object.draw_schedule) : undefined,
            prizeStrategy: object?.prize_strategy ? prize_strategy_1.PrizeStrategy.fromAmino(object.prize_strategy) : undefined,
            state: (0, helpers_1.isSet)(object.state) ? (0, pool_1.poolStateFromJSON)(object.state) : -1,
            unbondingDuration: object?.unbonding_duration ? duration_1.Duration.fromAmino(object.unbonding_duration) : undefined,
            maxUnbondingEntries: object?.max_unbonding_entries
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e);
        }
        else {
            obj.validators = [];
        }
        obj.min_deposit_amount = message.minDepositAmount;
        obj.draw_schedule = message.drawSchedule ? draw_schedule_1.DrawSchedule.toAmino(message.drawSchedule) : undefined;
        obj.prize_strategy = message.prizeStrategy ? prize_strategy_1.PrizeStrategy.toAmino(message.prizeStrategy) : undefined;
        obj.state = message.state;
        obj.unbonding_duration = message.unbondingDuration ? duration_1.Duration.toAmino(message.unbondingDuration) : undefined;
        obj.max_unbonding_entries = message.maxUnbondingEntries;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProposalUpdatePool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProposalUpdatePool.decode(message.value);
    },
    toProto(message) {
        return exports.ProposalUpdatePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.ProposalUpdatePool",
            value: exports.ProposalUpdatePool.encode(message).finish()
        };
    }
};
function createBaseProposalUpdateParams() {
    return {
        title: "",
        description: "",
        minDepositAmount: undefined,
        maxPrizeStrategyBatches: undefined,
        maxPrizeBatchQuantity: undefined,
        minDrawScheduleDelta: undefined,
        maxDrawScheduleDelta: undefined,
        prizeExpirationDelta: undefined,
        feesStakers: undefined,
        minDepositDrawDelta: undefined
    };
}
exports.ProposalUpdateParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.minDepositAmount !== undefined) {
            writer.uint32(26).string(message.minDepositAmount);
        }
        if (message.maxPrizeStrategyBatches !== undefined) {
            writer.uint32(34).string(message.maxPrizeStrategyBatches);
        }
        if (message.maxPrizeBatchQuantity !== undefined) {
            writer.uint32(42).string(message.maxPrizeBatchQuantity);
        }
        if (message.minDrawScheduleDelta !== undefined) {
            duration_1.Duration.encode(message.minDrawScheduleDelta, writer.uint32(50).fork()).ldelim();
        }
        if (message.maxDrawScheduleDelta !== undefined) {
            duration_1.Duration.encode(message.maxDrawScheduleDelta, writer.uint32(58).fork()).ldelim();
        }
        if (message.prizeExpirationDelta !== undefined) {
            duration_1.Duration.encode(message.prizeExpirationDelta, writer.uint32(66).fork()).ldelim();
        }
        if (message.feesStakers !== undefined) {
            writer.uint32(74).string(message.feesStakers);
        }
        if (message.minDepositDrawDelta !== undefined) {
            duration_1.Duration.encode(message.minDepositDrawDelta, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.minDepositAmount = reader.string();
                    break;
                case 4:
                    message.maxPrizeStrategyBatches = reader.string();
                    break;
                case 5:
                    message.maxPrizeBatchQuantity = reader.string();
                    break;
                case 6:
                    message.minDrawScheduleDelta = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.maxDrawScheduleDelta = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.prizeExpirationDelta = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.feesStakers = reader.string();
                    break;
                case 10:
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
        const message = createBaseProposalUpdateParams();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.minDepositAmount = object.minDepositAmount ?? undefined;
        message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches ?? undefined;
        message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity ?? undefined;
        message.minDrawScheduleDelta = object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null ? duration_1.Duration.fromPartial(object.minDrawScheduleDelta) : undefined;
        message.maxDrawScheduleDelta = object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null ? duration_1.Duration.fromPartial(object.maxDrawScheduleDelta) : undefined;
        message.prizeExpirationDelta = object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null ? duration_1.Duration.fromPartial(object.prizeExpirationDelta) : undefined;
        message.feesStakers = object.feesStakers ?? undefined;
        message.minDepositDrawDelta = object.minDepositDrawDelta !== undefined && object.minDepositDrawDelta !== null ? duration_1.Duration.fromPartial(object.minDepositDrawDelta) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            minDepositAmount: object?.min_deposit_amount,
            maxPrizeStrategyBatches: object?.max_prize_strategy_batches,
            maxPrizeBatchQuantity: object?.max_prize_batch_quantity,
            minDrawScheduleDelta: object?.min_draw_schedule_delta ? duration_1.Duration.fromAmino(object.min_draw_schedule_delta) : undefined,
            maxDrawScheduleDelta: object?.max_draw_schedule_delta ? duration_1.Duration.fromAmino(object.max_draw_schedule_delta) : undefined,
            prizeExpirationDelta: object?.prize_expiration_delta ? duration_1.Duration.fromAmino(object.prize_expiration_delta) : undefined,
            feesStakers: object?.fees_stakers,
            minDepositDrawDelta: object?.min_deposit_draw_delta ? duration_1.Duration.fromAmino(object.min_deposit_draw_delta) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.min_deposit_amount = message.minDepositAmount;
        obj.max_prize_strategy_batches = message.maxPrizeStrategyBatches;
        obj.max_prize_batch_quantity = message.maxPrizeBatchQuantity;
        obj.min_draw_schedule_delta = message.minDrawScheduleDelta ? duration_1.Duration.toAmino(message.minDrawScheduleDelta) : undefined;
        obj.max_draw_schedule_delta = message.maxDrawScheduleDelta ? duration_1.Duration.toAmino(message.maxDrawScheduleDelta) : undefined;
        obj.prize_expiration_delta = message.prizeExpirationDelta ? duration_1.Duration.toAmino(message.prizeExpirationDelta) : undefined;
        obj.fees_stakers = message.feesStakers;
        obj.min_deposit_draw_delta = message.minDepositDrawDelta ? duration_1.Duration.toAmino(message.minDepositDrawDelta) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProposalUpdateParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProposalUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.ProposalUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.ProposalUpdateParams",
            value: exports.ProposalUpdateParams.encode(message).finish()
        };
    }
};
//# sourceMappingURL=gov.js.map