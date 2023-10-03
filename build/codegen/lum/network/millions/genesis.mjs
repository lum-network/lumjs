import { Params } from "./params";
import { Pool } from "./pool";
import { Deposit } from "./deposit";
import { Draw } from "./draw";
import { Prize } from "./prize";
import { Withdrawal } from "./withdrawal";
import { EpochTracker } from "./epoch";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        nextPoolId: Long.UZERO,
        nextDepositId: Long.UZERO,
        nextPrizeId: Long.UZERO,
        nextWithdrawalId: Long.UZERO,
        pools: [],
        deposits: [],
        draws: [],
        prizes: [],
        withdrawals: [],
        epochTrackers: []
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
            Pool.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.deposits) {
            Deposit.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.draws) {
            Draw.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.prizes) {
            Prize.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.withdrawals) {
            Withdrawal.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.epochTrackers) {
            EpochTracker.encode(v, writer.uint32(90).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
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
                    message.pools.push(Pool.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.deposits.push(Deposit.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.draws.push(Draw.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.prizes.push(Prize.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.withdrawals.push(Withdrawal.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.epochTrackers.push(EpochTracker.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? Long.fromValue(object.nextPoolId) : Long.UZERO;
        message.nextDepositId = object.nextDepositId !== undefined && object.nextDepositId !== null ? Long.fromValue(object.nextDepositId) : Long.UZERO;
        message.nextPrizeId = object.nextPrizeId !== undefined && object.nextPrizeId !== null ? Long.fromValue(object.nextPrizeId) : Long.UZERO;
        message.nextWithdrawalId = object.nextWithdrawalId !== undefined && object.nextWithdrawalId !== null ? Long.fromValue(object.nextWithdrawalId) : Long.UZERO;
        message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
        message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
        message.draws = object.draws?.map(e => Draw.fromPartial(e)) || [];
        message.prizes = object.prizes?.map(e => Prize.fromPartial(e)) || [];
        message.withdrawals = object.withdrawals?.map(e => Withdrawal.fromPartial(e)) || [];
        message.epochTrackers = object.epochTrackers?.map(e => EpochTracker.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            nextPoolId: Long.fromString(object.next_pool_id),
            nextDepositId: Long.fromString(object.next_deposit_id),
            nextPrizeId: Long.fromString(object.next_prize_id),
            nextWithdrawalId: Long.fromString(object.next_withdrawal_id),
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => Pool.fromAmino(e)) : [],
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => Deposit.fromAmino(e)) : [],
            draws: Array.isArray(object?.draws) ? object.draws.map((e) => Draw.fromAmino(e)) : [],
            prizes: Array.isArray(object?.prizes) ? object.prizes.map((e) => Prize.fromAmino(e)) : [],
            withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => Withdrawal.fromAmino(e)) : [],
            epochTrackers: Array.isArray(object?.epoch_trackers) ? object.epoch_trackers.map((e) => EpochTracker.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.next_pool_id = message.nextPoolId ? message.nextPoolId.toString() : undefined;
        obj.next_deposit_id = message.nextDepositId ? message.nextDepositId.toString() : undefined;
        obj.next_prize_id = message.nextPrizeId ? message.nextPrizeId.toString() : undefined;
        obj.next_withdrawal_id = message.nextWithdrawalId ? message.nextWithdrawalId.toString() : undefined;
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.draws) {
            obj.draws = message.draws.map(e => e ? Draw.toAmino(e) : undefined);
        }
        else {
            obj.draws = [];
        }
        if (message.prizes) {
            obj.prizes = message.prizes.map(e => e ? Prize.toAmino(e) : undefined);
        }
        else {
            obj.prizes = [];
        }
        if (message.withdrawals) {
            obj.withdrawals = message.withdrawals.map(e => e ? Withdrawal.toAmino(e) : undefined);
        }
        else {
            obj.withdrawals = [];
        }
        if (message.epochTrackers) {
            obj.epoch_trackers = message.epochTrackers.map(e => e ? EpochTracker.toAmino(e) : undefined);
        }
        else {
            obj.epoch_trackers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map