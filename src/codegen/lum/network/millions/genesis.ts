import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import { Draw, DrawAmino, DrawSDKType } from "./draw";
import { Prize, PrizeAmino, PrizeSDKType } from "./prize";
import { Withdrawal, WithdrawalAmino, WithdrawalSDKType } from "./withdrawal";
import { EpochTracker, EpochTrackerAmino, EpochTrackerSDKType } from "./epoch";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
  params: Params | undefined;
  nextPoolId: Long;
  nextDepositId: Long;
  nextPrizeId: Long;
  nextWithdrawalId: Long;
  pools: Pool[];
  deposits: Deposit[];
  draws: Draw[];
  prizes: Prize[];
  withdrawals: Withdrawal[];
  epochTrackers: EpochTracker[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lum.network.millions.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino | undefined;
  next_pool_id: string;
  next_deposit_id: string;
  next_prize_id: string;
  next_withdrawal_id: string;
  pools: PoolAmino[];
  deposits: DepositAmino[];
  draws: DrawAmino[];
  prizes: PrizeAmino[];
  withdrawals: WithdrawalAmino[];
  epoch_trackers: EpochTrackerAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lum.network.millions.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType | undefined;
  next_pool_id: Long;
  next_deposit_id: Long;
  next_prize_id: Long;
  next_withdrawal_id: Long;
  pools: PoolSDKType[];
  deposits: DepositSDKType[];
  draws: DrawSDKType[];
  prizes: PrizeSDKType[];
  withdrawals: WithdrawalSDKType[];
  epoch_trackers: EpochTrackerSDKType[];
}
function createBaseGenesisState(): GenesisState {
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Pool.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.draws) {
      Draw.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.prizes) {
      Prize.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.withdrawals) {
      Withdrawal.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.epochTrackers) {
      EpochTracker.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
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
          message.nextPoolId = (reader.uint64() as Long);
          break;
        case 3:
          message.nextDepositId = (reader.uint64() as Long);
          break;
        case 4:
          message.nextPrizeId = (reader.uint64() as Long);
          break;
        case 5:
          message.nextWithdrawalId = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
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
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      nextPoolId: Long.fromString(object.next_pool_id),
      nextDepositId: Long.fromString(object.next_deposit_id),
      nextPrizeId: Long.fromString(object.next_prize_id),
      nextWithdrawalId: Long.fromString(object.next_withdrawal_id),
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromAmino(e)) : [],
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromAmino(e)) : [],
      draws: Array.isArray(object?.draws) ? object.draws.map((e: any) => Draw.fromAmino(e)) : [],
      prizes: Array.isArray(object?.prizes) ? object.prizes.map((e: any) => Prize.fromAmino(e)) : [],
      withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e: any) => Withdrawal.fromAmino(e)) : [],
      epochTrackers: Array.isArray(object?.epoch_trackers) ? object.epoch_trackers.map((e: any) => EpochTracker.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.next_pool_id = message.nextPoolId ? message.nextPoolId.toString() : undefined;
    obj.next_deposit_id = message.nextDepositId ? message.nextDepositId.toString() : undefined;
    obj.next_prize_id = message.nextPrizeId ? message.nextPrizeId.toString() : undefined;
    obj.next_withdrawal_id = message.nextWithdrawalId ? message.nextWithdrawalId.toString() : undefined;
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = [];
    }
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    if (message.draws) {
      obj.draws = message.draws.map(e => e ? Draw.toAmino(e) : undefined);
    } else {
      obj.draws = [];
    }
    if (message.prizes) {
      obj.prizes = message.prizes.map(e => e ? Prize.toAmino(e) : undefined);
    } else {
      obj.prizes = [];
    }
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map(e => e ? Withdrawal.toAmino(e) : undefined);
    } else {
      obj.withdrawals = [];
    }
    if (message.epochTrackers) {
      obj.epoch_trackers = message.epochTrackers.map(e => e ? EpochTracker.toAmino(e) : undefined);
    } else {
      obj.epoch_trackers = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/lum.network.millions.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};