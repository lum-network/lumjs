import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BoolValue } from "../../../google/protobuf/wrappers";
import { Duration } from "../../../google/protobuf/duration";
import { DrawSchedule } from "./draw_schedule";
import { PrizeStrategy } from "./prize_strategy";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export const MsgUpdateParams = {
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
            Duration.encode(message.minDrawScheduleDelta, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxDrawScheduleDelta !== undefined) {
            Duration.encode(message.maxDrawScheduleDelta, writer.uint32(42).fork()).ldelim();
        }
        if (message.prizeExpirationDelta !== undefined) {
            Duration.encode(message.prizeExpirationDelta, writer.uint32(50).fork()).ldelim();
        }
        if (message.feesStakers !== undefined) {
            writer.uint32(58).string(message.feesStakers);
        }
        if (message.minDepositDrawDelta !== undefined) {
            Duration.encode(message.minDepositDrawDelta, writer.uint32(66).fork()).ldelim();
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
        message.minDrawScheduleDelta = object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null ? Duration.fromPartial(object.minDrawScheduleDelta) : undefined;
        message.maxDrawScheduleDelta = object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null ? Duration.fromPartial(object.maxDrawScheduleDelta) : undefined;
        message.prizeExpirationDelta = object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null ? Duration.fromPartial(object.prizeExpirationDelta) : undefined;
        message.feesStakers = object.feesStakers ?? undefined;
        message.minDepositDrawDelta = object.minDepositDrawDelta !== undefined && object.minDepositDrawDelta !== null ? Duration.fromPartial(object.minDepositDrawDelta) : undefined;
        message.updaterAddress = object.updaterAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            minDepositAmount: object?.min_deposit_amount,
            maxPrizeStrategyBatches: object?.max_prize_strategy_batches,
            maxPrizeBatchQuantity: object?.max_prize_batch_quantity,
            minDrawScheduleDelta: object?.min_draw_schedule_delta ? Duration.fromAmino(object.min_draw_schedule_delta) : undefined,
            maxDrawScheduleDelta: object?.max_draw_schedule_delta ? Duration.fromAmino(object.max_draw_schedule_delta) : undefined,
            prizeExpirationDelta: object?.prize_expiration_delta ? Duration.fromAmino(object.prize_expiration_delta) : undefined,
            feesStakers: object?.fees_stakers,
            minDepositDrawDelta: object?.min_deposit_draw_delta ? Duration.fromAmino(object.min_deposit_draw_delta) : undefined,
            updaterAddress: object.updater_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.min_deposit_amount = message.minDepositAmount;
        obj.max_prize_strategy_batches = message.maxPrizeStrategyBatches;
        obj.max_prize_batch_quantity = message.maxPrizeBatchQuantity;
        obj.min_draw_schedule_delta = message.minDrawScheduleDelta ? Duration.toAmino(message.minDrawScheduleDelta) : undefined;
        obj.max_draw_schedule_delta = message.maxDrawScheduleDelta ? Duration.toAmino(message.maxDrawScheduleDelta) : undefined;
        obj.prize_expiration_delta = message.prizeExpirationDelta ? Duration.toAmino(message.prizeExpirationDelta) : undefined;
        obj.fees_stakers = message.feesStakers;
        obj.min_deposit_draw_delta = message.minDepositDrawDelta ? Duration.toAmino(message.minDepositDrawDelta) : undefined;
        obj.updater_address = message.updaterAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
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
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
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
        drawSchedule: DrawSchedule.fromPartial({}),
        prizeStrategy: PrizeStrategy.fromPartial({}),
        bech32PrefixAccAddr: "",
        bech32PrefixValAddr: "",
        creatorAddress: ""
    };
}
export const MsgRegisterPool = {
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
            DrawSchedule.encode(message.drawSchedule, writer.uint32(58).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            PrizeStrategy.encode(message.prizeStrategy, writer.uint32(66).fork()).ldelim();
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
                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
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
        message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? DrawSchedule.fromPartial(object.drawSchedule) : undefined;
        message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
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
            drawSchedule: object?.draw_schedule ? DrawSchedule.fromAmino(object.draw_schedule) : undefined,
            prizeStrategy: object?.prize_strategy ? PrizeStrategy.fromAmino(object.prize_strategy) : undefined,
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
        obj.draw_schedule = message.drawSchedule ? DrawSchedule.toAmino(message.drawSchedule) : undefined;
        obj.prize_strategy = message.prizeStrategy ? PrizeStrategy.toAmino(message.prizeStrategy) : undefined;
        obj.bech32_prefix_acc_addr = message.bech32PrefixAccAddr;
        obj.bech32_prefix_val_addr = message.bech32PrefixValAddr;
        obj.creator_address = message.creatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterPool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRegisterPool.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgRegisterPool",
            value: MsgRegisterPool.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterPoolResponse() {
    return {
        poolId: Long.UZERO
    };
}
export const MsgRegisterPoolResponse = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRegisterPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgRegisterPoolResponse",
            value: MsgRegisterPoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePool() {
    return {
        poolId: Long.UZERO,
        validators: undefined,
        minDepositAmount: undefined,
        drawSchedule: undefined,
        prizeStrategy: undefined,
        updaterAddress: ""
    };
}
export const MsgUpdatePool = {
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
            DrawSchedule.encode(message.drawSchedule, writer.uint32(34).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            PrizeStrategy.encode(message.prizeStrategy, writer.uint32(42).fork()).ldelim();
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
                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.validators = object.validators?.map(e => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? undefined;
        message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? DrawSchedule.fromPartial(object.drawSchedule) : undefined;
        message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
        message.updaterAddress = object.updaterAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => e) : [],
            minDepositAmount: object?.min_deposit_amount,
            drawSchedule: object?.draw_schedule ? DrawSchedule.fromAmino(object.draw_schedule) : undefined,
            prizeStrategy: object?.prize_strategy ? PrizeStrategy.fromAmino(object.prize_strategy) : undefined,
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
        obj.draw_schedule = message.drawSchedule ? DrawSchedule.toAmino(message.drawSchedule) : undefined;
        obj.prize_strategy = message.prizeStrategy ? PrizeStrategy.toAmino(message.prizeStrategy) : undefined;
        obj.updater_address = message.updaterAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdatePool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdatePool.decode(message.value);
    },
    toProto(message) {
        return MsgUpdatePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgUpdatePool",
            value: MsgUpdatePool.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePoolResponse() {
    return {};
}
export const MsgUpdatePoolResponse = {
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
        return MsgUpdatePoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdatePoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdatePoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgUpdatePoolResponse",
            value: MsgUpdatePoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeposit() {
    return {
        poolId: Long.UZERO,
        amount: Coin.fromPartial({}),
        depositorAddress: "",
        winnerAddress: "",
        isSponsor: false
    };
}
export const MsgDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.depositorAddress = object.depositorAddress ?? "";
        message.winnerAddress = object.winnerAddress ?? "";
        message.isSponsor = object.isSponsor ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            depositorAddress: object.depositor_address,
            winnerAddress: object.winner_address,
            isSponsor: object.is_sponsor
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.depositor_address = message.depositorAddress;
        obj.winner_address = message.winnerAddress;
        obj.is_sponsor = message.isSponsor;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDeposit",
            value: MsgDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {
        depositId: Long.UZERO
    };
}
export const MsgDepositResponse = {
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
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            depositId: Long.fromString(object.deposit_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositResponse",
            value: MsgDepositResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositRetry() {
    return {
        poolId: Long.UZERO,
        depositId: Long.UZERO,
        depositorAddress: ""
    };
}
export const MsgDepositRetry = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        message.depositorAddress = object.depositorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            depositId: Long.fromString(object.deposit_id),
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
        return MsgDepositRetry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositRetry.decode(message.value);
    },
    toProto(message) {
        return MsgDepositRetry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositRetry",
            value: MsgDepositRetry.encode(message).finish()
        };
    }
};
function createBaseMsgDepositEdit() {
    return {
        poolId: Long.UZERO,
        depositId: Long.UZERO,
        winnerAddress: "",
        isSponsor: BoolValue.fromPartial({}),
        depositorAddress: ""
    };
}
export const MsgDepositEdit = {
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
            BoolValue.encode(message.isSponsor, writer.uint32(34).fork()).ldelim();
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
                    message.isSponsor = BoolValue.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        message.winnerAddress = object.winnerAddress ?? "";
        message.isSponsor = object.isSponsor !== undefined && object.isSponsor !== null ? BoolValue.fromPartial(object.isSponsor) : undefined;
        message.depositorAddress = object.depositorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            depositId: Long.fromString(object.deposit_id),
            winnerAddress: object.winner_address,
            isSponsor: object?.is_sponsor ? BoolValue.fromAmino(object.is_sponsor) : undefined,
            depositorAddress: object.depositor_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        obj.winner_address = message.winnerAddress;
        obj.is_sponsor = message.isSponsor ? BoolValue.toAmino(message.isSponsor) : undefined;
        obj.depositor_address = message.depositorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositEdit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositEdit.decode(message.value);
    },
    toProto(message) {
        return MsgDepositEdit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositEdit",
            value: MsgDepositEdit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositEditResponse() {
    return {};
}
export const MsgDepositEditResponse = {
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
        return MsgDepositEditResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositEditResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositEditResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositEditResponse",
            value: MsgDepositEditResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositRetryResponse() {
    return {};
}
export const MsgDepositRetryResponse = {
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
        return MsgDepositRetryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositRetryResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositRetryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDepositRetryResponse",
            value: MsgDepositRetryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgClaimPrize() {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        prizeId: Long.UZERO,
        winnerAddress: ""
    };
}
export const MsgClaimPrize = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
        message.winnerAddress = object.winnerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id),
            prizeId: Long.fromString(object.prize_id),
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
        return MsgClaimPrize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimPrize.decode(message.value);
    },
    toProto(message) {
        return MsgClaimPrize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgClaimPrize",
            value: MsgClaimPrize.encode(message).finish()
        };
    }
};
function createBaseMsgClaimPrizeResponse() {
    return {};
}
export const MsgClaimPrizeResponse = {
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
        return MsgClaimPrizeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimPrizeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClaimPrizeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgClaimPrizeResponse",
            value: MsgClaimPrizeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDeposit() {
    return {
        poolId: Long.UZERO,
        depositId: Long.UZERO,
        depositorAddress: "",
        toAddress: ""
    };
}
export const MsgWithdrawDeposit = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        message.depositorAddress = object.depositorAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            depositId: Long.fromString(object.deposit_id),
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
        return MsgWithdrawDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawDeposit.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
            value: MsgWithdrawDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDepositResponse() {
    return {
        withdrawalId: Long.UZERO
    };
}
export const MsgWithdrawDepositResponse = {
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
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            withdrawalId: Long.fromString(object.withdrawal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawDepositResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgWithdrawDepositResponse",
            value: MsgWithdrawDepositResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDepositRetry() {
    return {
        poolId: Long.UZERO,
        withdrawalId: Long.UZERO,
        depositorAddress: ""
    };
}
export const MsgWithdrawDepositRetry = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        message.depositorAddress = object.depositorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            withdrawalId: Long.fromString(object.withdrawal_id),
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
        return MsgWithdrawDepositRetry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawDepositRetry.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDepositRetry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
            value: MsgWithdrawDepositRetry.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDepositRetryResponse() {
    return {};
}
export const MsgWithdrawDepositRetryResponse = {
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
        return MsgWithdrawDepositRetryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawDepositRetryResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDepositRetryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgWithdrawDepositRetryResponse",
            value: MsgWithdrawDepositRetryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDrawRetry() {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        drawRetryAddress: ""
    };
}
export const MsgDrawRetry = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.drawRetryAddress = object.drawRetryAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id),
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
        return MsgDrawRetry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDrawRetry.decode(message.value);
    },
    toProto(message) {
        return MsgDrawRetry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDrawRetry",
            value: MsgDrawRetry.encode(message).finish()
        };
    }
};
function createBaseMsgDrawRetryResponse() {
    return {};
}
export const MsgDrawRetryResponse = {
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
        return MsgDrawRetryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDrawRetryResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDrawRetryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgDrawRetryResponse",
            value: MsgDrawRetryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRestoreInterchainAccounts() {
    return {
        poolId: Long.UZERO,
        restorerAddress: ""
    };
}
export const MsgRestoreInterchainAccounts = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.restorerAddress = object.restorerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
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
        return MsgRestoreInterchainAccounts.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRestoreInterchainAccounts.decode(message.value);
    },
    toProto(message) {
        return MsgRestoreInterchainAccounts.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
            value: MsgRestoreInterchainAccounts.encode(message).finish()
        };
    }
};
function createBaseMsgRestoreInterchainAccountsResponse() {
    return {};
}
export const MsgRestoreInterchainAccountsResponse = {
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
        return MsgRestoreInterchainAccountsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRestoreInterchainAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRestoreInterchainAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgRestoreInterchainAccountsResponse",
            value: MsgRestoreInterchainAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgGenerateSeed() {
    return {
        requesterAddress: ""
    };
}
export const MsgGenerateSeed = {
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
        return MsgGenerateSeed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGenerateSeed.decode(message.value);
    },
    toProto(message) {
        return MsgGenerateSeed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgGenerateSeed",
            value: MsgGenerateSeed.encode(message).finish()
        };
    }
};
function createBaseMsgGenerateSeedResponse() {
    return {
        seed: Long.ZERO
    };
}
export const MsgGenerateSeedResponse = {
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
        message.seed = object.seed !== undefined && object.seed !== null ? Long.fromValue(object.seed) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            seed: Long.fromString(object.seed)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.seed = message.seed ? message.seed.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGenerateSeedResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGenerateSeedResponse.decode(message.value);
    },
    toProto(message) {
        return MsgGenerateSeedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.MsgGenerateSeedResponse",
            value: MsgGenerateSeedResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map