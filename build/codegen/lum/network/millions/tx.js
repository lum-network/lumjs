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
exports.MsgGenerateSeedResponse = exports.MsgGenerateSeed = exports.MsgRestoreInterchainAccountsResponse = exports.MsgRestoreInterchainAccounts = exports.MsgDrawRetryResponse = exports.MsgDrawRetry = exports.MsgWithdrawDepositRetryResponse = exports.MsgWithdrawDepositRetry = exports.MsgWithdrawDepositResponse = exports.MsgWithdrawDeposit = exports.MsgClaimPrizeResponse = exports.MsgClaimPrize = exports.MsgDepositRetryResponse = exports.MsgDepositEditResponse = exports.MsgDepositEdit = exports.MsgDepositRetry = exports.MsgDepositResponse = exports.MsgDeposit = exports.MsgUpdatePoolResponse = exports.MsgUpdatePool = exports.MsgRegisterPoolResponse = exports.MsgRegisterPool = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const wrappers_1 = require("../../../google/protobuf/wrappers");
const duration_1 = require("../../../google/protobuf/duration");
const draw_schedule_1 = require("./draw_schedule");
const prize_strategy_1 = require("./prize_strategy");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgUpdateParams() {
    return {
        minDepositAmount: undefined,
        maxPrizeStrategyBatches: undefined,
        maxPrizeBatchQuantity: undefined,
        minDrawScheduleDelta: undefined,
        maxDrawScheduleDelta: undefined,
        prizeExpirationDelta: undefined,
        feesStakers: undefined,
        minDepositDrawDelta: undefined,
        updaterAddress: ""
    };
}
exports.MsgUpdateParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.minDepositAmount !== undefined) {
            writer.uint32(10).string(message.minDepositAmount);
        }
        if (message.maxPrizeStrategyBatches !== undefined) {
            writer.uint32(18).string(message.maxPrizeStrategyBatches);
        }
        if (message.maxPrizeBatchQuantity !== undefined) {
            writer.uint32(26).string(message.maxPrizeBatchQuantity);
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
        if (message.feesStakers !== undefined) {
            writer.uint32(58).string(message.feesStakers);
        }
        if (message.minDepositDrawDelta !== undefined) {
            duration_1.Duration.encode(message.minDepositDrawDelta, writer.uint32(66).fork()).ldelim();
        }
        if (message.updaterAddress !== "") {
            writer.uint32(74).string(message.updaterAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDepositAmount = reader.string();
                    break;
                case 2:
                    message.maxPrizeStrategyBatches = reader.string();
                    break;
                case 3:
                    message.maxPrizeBatchQuantity = reader.string();
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
                case 9:
                    message.updaterAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.minDepositAmount = object.minDepositAmount ?? undefined;
        message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches ?? undefined;
        message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity ?? undefined;
        message.minDrawScheduleDelta = object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null ? duration_1.Duration.fromPartial(object.minDrawScheduleDelta) : undefined;
        message.maxDrawScheduleDelta = object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null ? duration_1.Duration.fromPartial(object.maxDrawScheduleDelta) : undefined;
        message.prizeExpirationDelta = object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null ? duration_1.Duration.fromPartial(object.prizeExpirationDelta) : undefined;
        message.feesStakers = object.feesStakers ?? undefined;
        message.minDepositDrawDelta = object.minDepositDrawDelta !== undefined && object.minDepositDrawDelta !== null ? duration_1.Duration.fromPartial(object.minDepositDrawDelta) : undefined;
        message.updaterAddress = object.updaterAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            minDepositAmount: object?.min_deposit_amount,
            maxPrizeStrategyBatches: object?.max_prize_strategy_batches,
            maxPrizeBatchQuantity: object?.max_prize_batch_quantity,
            minDrawScheduleDelta: object?.min_draw_schedule_delta ? duration_1.Duration.fromAmino(object.min_draw_schedule_delta) : undefined,
            maxDrawScheduleDelta: object?.max_draw_schedule_delta ? duration_1.Duration.fromAmino(object.max_draw_schedule_delta) : undefined,
            prizeExpirationDelta: object?.prize_expiration_delta ? duration_1.Duration.fromAmino(object.prize_expiration_delta) : undefined,
            feesStakers: object?.fees_stakers,
            minDepositDrawDelta: object?.min_deposit_draw_delta ? duration_1.Duration.fromAmino(object.min_deposit_draw_delta) : undefined,
            updaterAddress: object.updater_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.min_deposit_amount = message.minDepositAmount;
        obj.max_prize_strategy_batches = message.maxPrizeStrategyBatches;
        obj.max_prize_batch_quantity = message.maxPrizeBatchQuantity;
        obj.min_draw_schedule_delta = message.minDrawScheduleDelta ? duration_1.Duration.toAmino(message.minDrawScheduleDelta) : undefined;
        obj.max_draw_schedule_delta = message.maxDrawScheduleDelta ? duration_1.Duration.toAmino(message.maxDrawScheduleDelta) : undefined;
        obj.prize_expiration_delta = message.prizeExpirationDelta ? duration_1.Duration.toAmino(message.prizeExpirationDelta) : undefined;
        obj.fees_stakers = message.feesStakers;
        obj.min_deposit_draw_delta = message.minDepositDrawDelta ? duration_1.Duration.toAmino(message.minDepositDrawDelta) : undefined;
        obj.updater_address = message.updaterAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
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
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterPool() {
    return {
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
        creatorAddress: ""
    };
}
exports.MsgRegisterPool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.nativeDenom !== "") {
            writer.uint32(26).string(message.nativeDenom);
        }
        if (message.connectionId !== "") {
            writer.uint32(34).string(message.connectionId);
        }
        for (const v of message.validators) {
            writer.uint32(42).string(v);
        }
        if (message.minDepositAmount !== "") {
            writer.uint32(50).string(message.minDepositAmount);
        }
        if (message.drawSchedule !== undefined) {
            draw_schedule_1.DrawSchedule.encode(message.drawSchedule, writer.uint32(58).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            prize_strategy_1.PrizeStrategy.encode(message.prizeStrategy, writer.uint32(66).fork()).ldelim();
        }
        if (message.bech32PrefixAccAddr !== "") {
            writer.uint32(74).string(message.bech32PrefixAccAddr);
        }
        if (message.bech32PrefixValAddr !== "") {
            writer.uint32(82).string(message.bech32PrefixValAddr);
        }
        if (message.creatorAddress !== "") {
            writer.uint32(90).string(message.creatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.nativeDenom = reader.string();
                    break;
                case 4:
                    message.connectionId = reader.string();
                    break;
                case 5:
                    message.validators.push(reader.string());
                    break;
                case 6:
                    message.minDepositAmount = reader.string();
                    break;
                case 7:
                    message.drawSchedule = draw_schedule_1.DrawSchedule.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.prizeStrategy = prize_strategy_1.PrizeStrategy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.bech32PrefixAccAddr = reader.string();
                    break;
                case 10:
                    message.bech32PrefixValAddr = reader.string();
                    break;
                case 11:
                    message.creatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterPool();
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
        message.creatorAddress = object.creatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
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
            creatorAddress: object.creator_address
        };
    },
    toAmino(message) {
        const obj = {};
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
        obj.creator_address = message.creatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterPool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgRegisterPool",
            value: exports.MsgRegisterPool.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterPoolResponse() {
    return {
        poolId: helpers_1.Long.UZERO
    };
}
exports.MsgRegisterPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterPoolResponse();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgRegisterPoolResponse",
            value: exports.MsgRegisterPoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePool() {
    return {
        poolId: helpers_1.Long.UZERO,
        validators: undefined,
        minDepositAmount: undefined,
        drawSchedule: undefined,
        prizeStrategy: undefined,
        updaterAddress: ""
    };
}
exports.MsgUpdatePool = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.validators) {
            writer.uint32(18).string(v);
        }
        if (message.minDepositAmount !== undefined) {
            writer.uint32(26).string(message.minDepositAmount);
        }
        if (message.drawSchedule !== undefined) {
            draw_schedule_1.DrawSchedule.encode(message.drawSchedule, writer.uint32(34).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            prize_strategy_1.PrizeStrategy.encode(message.prizeStrategy, writer.uint32(42).fork()).ldelim();
        }
        if (message.updaterAddress !== "") {
            writer.uint32(50).string(message.updaterAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.validators.push(reader.string());
                    break;
                case 3:
                    message.minDepositAmount = reader.string();
                    break;
                case 4:
                    message.drawSchedule = draw_schedule_1.DrawSchedule.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.prizeStrategy = prize_strategy_1.PrizeStrategy.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.updaterAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdatePool();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.validators = object.validators?.map(e => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? undefined;
        message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? draw_schedule_1.DrawSchedule.fromPartial(object.drawSchedule) : undefined;
        message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? prize_strategy_1.PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
        message.updaterAddress = object.updaterAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => e) : [],
            minDepositAmount: object?.min_deposit_amount,
            drawSchedule: object?.draw_schedule ? draw_schedule_1.DrawSchedule.fromAmino(object.draw_schedule) : undefined,
            prizeStrategy: object?.prize_strategy ? prize_strategy_1.PrizeStrategy.fromAmino(object.prize_strategy) : undefined,
            updaterAddress: object.updater_address
        };
    },
    toAmino(message) {
        const obj = {};
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
        obj.updater_address = message.updaterAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdatePool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdatePool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdatePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgUpdatePool",
            value: exports.MsgUpdatePool.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePoolResponse() {
    return {};
}
exports.MsgUpdatePoolResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePoolResponse();
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
        const message = createBaseMsgUpdatePoolResponse();
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
        return exports.MsgUpdatePoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdatePoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdatePoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgUpdatePoolResponse",
            value: exports.MsgUpdatePoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeposit() {
    return {
        poolId: helpers_1.Long.UZERO,
        amount: coin_1.Coin.fromPartial({}),
        depositorAddress: "",
        winnerAddress: "",
        isSponsor: false
    };
}
exports.MsgDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositorAddress !== "") {
            writer.uint32(26).string(message.depositorAddress);
        }
        if (message.winnerAddress !== "") {
            writer.uint32(34).string(message.winnerAddress);
        }
        if (message.isSponsor === true) {
            writer.uint32(40).bool(message.isSponsor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositorAddress = reader.string();
                    break;
                case 4:
                    message.winnerAddress = reader.string();
                    break;
                case 5:
                    message.isSponsor = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDeposit();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.depositorAddress = object.depositorAddress ?? "";
        message.winnerAddress = object.winnerAddress ?? "";
        message.isSponsor = object.isSponsor ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            depositorAddress: object.depositor_address,
            winnerAddress: object.winner_address,
            isSponsor: object.is_sponsor
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.depositor_address = message.depositorAddress;
        obj.winner_address = message.winnerAddress;
        obj.is_sponsor = message.isSponsor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDeposit",
            value: exports.MsgDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {
        depositId: helpers_1.Long.UZERO
    };
}
exports.MsgDepositResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.depositId.isZero()) {
            writer.uint32(8).uint64(message.depositId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositResponse();
        message.depositId = object.depositId !== undefined && object.depositId !== null ? helpers_1.Long.fromValue(object.depositId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            depositId: helpers_1.Long.fromString(object.deposit_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositResponse",
            value: exports.MsgDepositResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositRetry() {
    return {
        poolId: helpers_1.Long.UZERO,
        depositId: helpers_1.Long.UZERO,
        depositorAddress: ""
    };
}
exports.MsgDepositRetry = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        if (message.depositorAddress !== "") {
            writer.uint32(26).string(message.depositorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositRetry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.depositId = reader.uint64();
                    break;
                case 3:
                    message.depositorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositRetry();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? helpers_1.Long.fromValue(object.depositId) : helpers_1.Long.UZERO;
        message.depositorAddress = object.depositorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            depositId: helpers_1.Long.fromString(object.deposit_id),
            depositorAddress: object.depositor_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        obj.depositor_address = message.depositorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositRetry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositRetry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositRetry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositRetry",
            value: exports.MsgDepositRetry.encode(message).finish()
        };
    }
};
function createBaseMsgDepositEdit() {
    return {
        poolId: helpers_1.Long.UZERO,
        depositId: helpers_1.Long.UZERO,
        winnerAddress: "",
        isSponsor: wrappers_1.BoolValue.fromPartial({}),
        depositorAddress: ""
    };
}
exports.MsgDepositEdit = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        if (message.winnerAddress !== "") {
            writer.uint32(26).string(message.winnerAddress);
        }
        if (message.isSponsor !== undefined) {
            wrappers_1.BoolValue.encode(message.isSponsor, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositorAddress !== "") {
            writer.uint32(42).string(message.depositorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositEdit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.depositId = reader.uint64();
                    break;
                case 3:
                    message.winnerAddress = reader.string();
                    break;
                case 4:
                    message.isSponsor = wrappers_1.BoolValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.depositorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositEdit();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? helpers_1.Long.fromValue(object.depositId) : helpers_1.Long.UZERO;
        message.winnerAddress = object.winnerAddress ?? "";
        message.isSponsor = object.isSponsor !== undefined && object.isSponsor !== null ? wrappers_1.BoolValue.fromPartial(object.isSponsor) : undefined;
        message.depositorAddress = object.depositorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            depositId: helpers_1.Long.fromString(object.deposit_id),
            winnerAddress: object.winner_address,
            isSponsor: object?.is_sponsor ? wrappers_1.BoolValue.fromAmino(object.is_sponsor) : undefined,
            depositorAddress: object.depositor_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        obj.winner_address = message.winnerAddress;
        obj.is_sponsor = message.isSponsor ? wrappers_1.BoolValue.toAmino(message.isSponsor) : undefined;
        obj.depositor_address = message.depositorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositEdit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositEdit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositEdit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositEdit",
            value: exports.MsgDepositEdit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositEditResponse() {
    return {};
}
exports.MsgDepositEditResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositEditResponse();
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
        const message = createBaseMsgDepositEditResponse();
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
        return exports.MsgDepositEditResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositEditResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositEditResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositEditResponse",
            value: exports.MsgDepositEditResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositRetryResponse() {
    return {};
}
exports.MsgDepositRetryResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositRetryResponse();
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
        const message = createBaseMsgDepositRetryResponse();
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
        return exports.MsgDepositRetryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositRetryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositRetryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositRetryResponse",
            value: exports.MsgDepositRetryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgClaimPrize() {
    return {
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO,
        prizeId: helpers_1.Long.UZERO,
        winnerAddress: ""
    };
}
exports.MsgClaimPrize = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (!message.prizeId.isZero()) {
            writer.uint32(24).uint64(message.prizeId);
        }
        if (message.winnerAddress !== "") {
            writer.uint32(34).string(message.winnerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimPrize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.drawId = reader.uint64();
                    break;
                case 3:
                    message.prizeId = reader.uint64();
                    break;
                case 4:
                    message.winnerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimPrize();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? helpers_1.Long.fromValue(object.prizeId) : helpers_1.Long.UZERO;
        message.winnerAddress = object.winnerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id),
            prizeId: helpers_1.Long.fromString(object.prize_id),
            winnerAddress: object.winner_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.prize_id = message.prizeId ? message.prizeId.toString() : undefined;
        obj.winner_address = message.winnerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgClaimPrize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaimPrize.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaimPrize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgClaimPrize",
            value: exports.MsgClaimPrize.encode(message).finish()
        };
    }
};
function createBaseMsgClaimPrizeResponse() {
    return {};
}
exports.MsgClaimPrizeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimPrizeResponse();
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
        const message = createBaseMsgClaimPrizeResponse();
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
        return exports.MsgClaimPrizeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaimPrizeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaimPrizeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgClaimPrizeResponse",
            value: exports.MsgClaimPrizeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDeposit() {
    return {
        poolId: helpers_1.Long.UZERO,
        depositId: helpers_1.Long.UZERO,
        depositorAddress: "",
        toAddress: ""
    };
}
exports.MsgWithdrawDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        if (message.depositorAddress !== "") {
            writer.uint32(26).string(message.depositorAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(34).string(message.toAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.depositId = reader.uint64();
                    break;
                case 3:
                    message.depositorAddress = reader.string();
                    break;
                case 4:
                    message.toAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDeposit();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? helpers_1.Long.fromValue(object.depositId) : helpers_1.Long.UZERO;
        message.depositorAddress = object.depositorAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            depositId: helpers_1.Long.fromString(object.deposit_id),
            depositorAddress: object.depositor_address,
            toAddress: object.to_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        obj.depositor_address = message.depositorAddress;
        obj.to_address = message.toAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
            value: exports.MsgWithdrawDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDepositResponse() {
    return {
        withdrawalId: helpers_1.Long.UZERO
    };
}
exports.MsgWithdrawDepositResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.withdrawalId.isZero()) {
            writer.uint32(8).uint64(message.withdrawalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDepositResponse();
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? helpers_1.Long.fromValue(object.withdrawalId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            withdrawalId: helpers_1.Long.fromString(object.withdrawal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgWithdrawDepositResponse",
            value: exports.MsgWithdrawDepositResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDepositRetry() {
    return {
        poolId: helpers_1.Long.UZERO,
        withdrawalId: helpers_1.Long.UZERO,
        depositorAddress: ""
    };
}
exports.MsgWithdrawDepositRetry = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.withdrawalId.isZero()) {
            writer.uint32(16).uint64(message.withdrawalId);
        }
        if (message.depositorAddress !== "") {
            writer.uint32(26).string(message.depositorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDepositRetry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.withdrawalId = reader.uint64();
                    break;
                case 3:
                    message.depositorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDepositRetry();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? helpers_1.Long.fromValue(object.withdrawalId) : helpers_1.Long.UZERO;
        message.depositorAddress = object.depositorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            withdrawalId: helpers_1.Long.fromString(object.withdrawal_id),
            depositorAddress: object.depositor_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
        obj.depositor_address = message.depositorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawDepositRetry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDepositRetry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDepositRetry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
            value: exports.MsgWithdrawDepositRetry.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDepositRetryResponse() {
    return {};
}
exports.MsgWithdrawDepositRetryResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDepositRetryResponse();
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
        const message = createBaseMsgWithdrawDepositRetryResponse();
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
        return exports.MsgWithdrawDepositRetryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDepositRetryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDepositRetryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgWithdrawDepositRetryResponse",
            value: exports.MsgWithdrawDepositRetryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDrawRetry() {
    return {
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO,
        drawRetryAddress: ""
    };
}
exports.MsgDrawRetry = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (message.drawRetryAddress !== "") {
            writer.uint32(26).string(message.drawRetryAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawRetry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.drawId = reader.uint64();
                    break;
                case 3:
                    message.drawRetryAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDrawRetry();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        message.drawRetryAddress = object.drawRetryAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id),
            drawRetryAddress: object.draw_retry_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.draw_retry_address = message.drawRetryAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDrawRetry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDrawRetry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDrawRetry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDrawRetry",
            value: exports.MsgDrawRetry.encode(message).finish()
        };
    }
};
function createBaseMsgDrawRetryResponse() {
    return {};
}
exports.MsgDrawRetryResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawRetryResponse();
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
        const message = createBaseMsgDrawRetryResponse();
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
        return exports.MsgDrawRetryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDrawRetryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDrawRetryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDrawRetryResponse",
            value: exports.MsgDrawRetryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRestoreInterchainAccounts() {
    return {
        poolId: helpers_1.Long.UZERO,
        restorerAddress: ""
    };
}
exports.MsgRestoreInterchainAccounts = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.restorerAddress !== "") {
            writer.uint32(18).string(message.restorerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRestoreInterchainAccounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.restorerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRestoreInterchainAccounts();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.restorerAddress = object.restorerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            restorerAddress: object.restorer_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.restorer_address = message.restorerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRestoreInterchainAccounts.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRestoreInterchainAccounts.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRestoreInterchainAccounts.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
            value: exports.MsgRestoreInterchainAccounts.encode(message).finish()
        };
    }
};
function createBaseMsgRestoreInterchainAccountsResponse() {
    return {};
}
exports.MsgRestoreInterchainAccountsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRestoreInterchainAccountsResponse();
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
        const message = createBaseMsgRestoreInterchainAccountsResponse();
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
        return exports.MsgRestoreInterchainAccountsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRestoreInterchainAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRestoreInterchainAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgRestoreInterchainAccountsResponse",
            value: exports.MsgRestoreInterchainAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgGenerateSeed() {
    return {
        requesterAddress: ""
    };
}
exports.MsgGenerateSeed = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.requesterAddress !== "") {
            writer.uint32(10).string(message.requesterAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGenerateSeed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requesterAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgGenerateSeed();
        message.requesterAddress = object.requesterAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            requesterAddress: object.requester_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.requester_address = message.requesterAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGenerateSeed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGenerateSeed.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGenerateSeed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgGenerateSeed",
            value: exports.MsgGenerateSeed.encode(message).finish()
        };
    }
};
function createBaseMsgGenerateSeedResponse() {
    return {
        seed: helpers_1.Long.ZERO
    };
}
exports.MsgGenerateSeedResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.seed.isZero()) {
            writer.uint32(8).int64(message.seed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGenerateSeedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seed = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgGenerateSeedResponse();
        message.seed = object.seed !== undefined && object.seed !== null ? helpers_1.Long.fromValue(object.seed) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            seed: helpers_1.Long.fromString(object.seed)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.seed = message.seed ? message.seed.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGenerateSeedResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGenerateSeedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGenerateSeedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgGenerateSeedResponse",
            value: exports.MsgGenerateSeedResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map