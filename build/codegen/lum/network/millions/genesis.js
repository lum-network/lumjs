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
exports.GenesisState = void 0;
const params_1 = require("./params");
const pool_1 = require("./pool");
const deposit_1 = require("./deposit");
const draw_1 = require("./draw");
const prize_1 = require("./prize");
const withdrawal_1 = require("./withdrawal");
const epoch_1 = require("./epoch");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        nextPoolId: helpers_1.Long.UZERO,
        nextDepositId: helpers_1.Long.UZERO,
        nextPrizeId: helpers_1.Long.UZERO,
        nextWithdrawalId: helpers_1.Long.UZERO,
        pools: [],
        deposits: [],
        draws: [],
        prizes: [],
        withdrawals: [],
        epochTrackers: []
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (!message.nextPoolId.isZero()) {
            writer.uint32(16).uint64(message.nextPoolId);
        }
        if (!message.nextDepositId.isZero()) {
            writer.uint32(24).uint64(message.nextDepositId);
        }
        if (!message.nextPrizeId.isZero()) {
            writer.uint32(32).uint64(message.nextPrizeId);
        }
        if (!message.nextWithdrawalId.isZero()) {
            writer.uint32(40).uint64(message.nextWithdrawalId);
        }
        for (const v of message.pools) {
            pool_1.Pool.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.deposits) {
            deposit_1.Deposit.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.draws) {
            draw_1.Draw.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.prizes) {
            prize_1.Prize.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.withdrawals) {
            withdrawal_1.Withdrawal.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.epochTrackers) {
            epoch_1.EpochTracker.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nextPoolId = reader.uint64();
                    break;
                case 3:
                    message.nextDepositId = reader.uint64();
                    break;
                case 4:
                    message.nextPrizeId = reader.uint64();
                    break;
                case 5:
                    message.nextWithdrawalId = reader.uint64();
                    break;
                case 6:
                    message.pools.push(pool_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.deposits.push(deposit_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.draws.push(draw_1.Draw.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.prizes.push(prize_1.Prize.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.withdrawals.push(withdrawal_1.Withdrawal.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.epochTrackers.push(epoch_1.EpochTracker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? helpers_1.Long.fromValue(object.nextPoolId) : helpers_1.Long.UZERO;
        message.nextDepositId = object.nextDepositId !== undefined && object.nextDepositId !== null ? helpers_1.Long.fromValue(object.nextDepositId) : helpers_1.Long.UZERO;
        message.nextPrizeId = object.nextPrizeId !== undefined && object.nextPrizeId !== null ? helpers_1.Long.fromValue(object.nextPrizeId) : helpers_1.Long.UZERO;
        message.nextWithdrawalId = object.nextWithdrawalId !== undefined && object.nextWithdrawalId !== null ? helpers_1.Long.fromValue(object.nextWithdrawalId) : helpers_1.Long.UZERO;
        message.pools = object.pools?.map(e => pool_1.Pool.fromPartial(e)) || [];
        message.deposits = object.deposits?.map(e => deposit_1.Deposit.fromPartial(e)) || [];
        message.draws = object.draws?.map(e => draw_1.Draw.fromPartial(e)) || [];
        message.prizes = object.prizes?.map(e => prize_1.Prize.fromPartial(e)) || [];
        message.withdrawals = object.withdrawals?.map(e => withdrawal_1.Withdrawal.fromPartial(e)) || [];
        message.epochTrackers = object.epochTrackers?.map(e => epoch_1.EpochTracker.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined,
            nextPoolId: helpers_1.Long.fromString(object.next_pool_id),
            nextDepositId: helpers_1.Long.fromString(object.next_deposit_id),
            nextPrizeId: helpers_1.Long.fromString(object.next_prize_id),
            nextWithdrawalId: helpers_1.Long.fromString(object.next_withdrawal_id),
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => pool_1.Pool.fromAmino(e)) : [],
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => deposit_1.Deposit.fromAmino(e)) : [],
            draws: Array.isArray(object?.draws) ? object.draws.map((e) => draw_1.Draw.fromAmino(e)) : [],
            prizes: Array.isArray(object?.prizes) ? object.prizes.map((e) => prize_1.Prize.fromAmino(e)) : [],
            withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => withdrawal_1.Withdrawal.fromAmino(e)) : [],
            epochTrackers: Array.isArray(object?.epoch_trackers) ? object.epoch_trackers.map((e) => epoch_1.EpochTracker.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        obj.next_pool_id = message.nextPoolId ? message.nextPoolId.toString() : undefined;
        obj.next_deposit_id = message.nextDepositId ? message.nextDepositId.toString() : undefined;
        obj.next_prize_id = message.nextPrizeId ? message.nextPrizeId.toString() : undefined;
        obj.next_withdrawal_id = message.nextWithdrawalId ? message.nextWithdrawalId.toString() : undefined;
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? pool_1.Pool.toAmino(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? deposit_1.Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.draws) {
            obj.draws = message.draws.map(e => e ? draw_1.Draw.toAmino(e) : undefined);
        }
        else {
            obj.draws = [];
        }
        if (message.prizes) {
            obj.prizes = message.prizes.map(e => e ? prize_1.Prize.toAmino(e) : undefined);
        }
        else {
            obj.prizes = [];
        }
        if (message.withdrawals) {
            obj.withdrawals = message.withdrawals.map(e => e ? withdrawal_1.Withdrawal.toAmino(e) : undefined);
        }
        else {
            obj.withdrawals = [];
        }
        if (message.epochTrackers) {
            obj.epoch_trackers = message.epochTrackers.map(e => e ? epoch_1.EpochTracker.toAmino(e) : undefined);
        }
        else {
            obj.epoch_trackers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map