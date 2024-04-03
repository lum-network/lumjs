import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import { Draw, DrawAmino, DrawSDKType } from "./draw";
import { Prize, PrizeAmino, PrizeSDKType } from "./prize";
import { Withdrawal, WithdrawalAmino, WithdrawalSDKType } from "./withdrawal";
import { EpochTracker, EpochTrackerAmino, EpochTrackerSDKType, EpochUnbonding, EpochUnbondingAmino, EpochUnbondingSDKType } from "./epoch";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface GenesisState {
  params: Params | undefined;
  nextPoolId: bigint;
  nextDepositId: bigint;
  nextPrizeId: bigint;
  nextWithdrawalId: bigint;
  pools: Pool[];
  deposits: Deposit[];
  draws: Draw[];
  prizes: Prize[];
  withdrawals: Withdrawal[];
  epochTrackers: EpochTracker[];
  epochUnbondings: EpochUnbonding[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lum.network.millions.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino | undefined;
  next_pool_id?: string;
  next_deposit_id?: string;
  next_prize_id?: string;
  next_withdrawal_id?: string;
  pools?: PoolAmino[];
  deposits?: DepositAmino[];
  draws?: DrawAmino[];
  prizes?: PrizeAmino[];
  withdrawals?: WithdrawalAmino[];
  epoch_trackers?: EpochTrackerAmino[];
  epoch_unbondings?: EpochUnbondingAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lum.network.millions.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType | undefined;
  next_pool_id: bigint;
  next_deposit_id: bigint;
  next_prize_id: bigint;
  next_withdrawal_id: bigint;
  pools: PoolSDKType[];
  deposits: DepositSDKType[];
  draws: DrawSDKType[];
  prizes: PrizeSDKType[];
  withdrawals: WithdrawalSDKType[];
  epoch_trackers: EpochTrackerSDKType[];
  epoch_unbondings: EpochUnbondingSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nextPoolId: BigInt(0),
    nextDepositId: BigInt(0),
    nextPrizeId: BigInt(0),
    nextWithdrawalId: BigInt(0),
    pools: [],
    deposits: [],
    draws: [],
    prizes: [],
    withdrawals: [],
    epochTrackers: [],
    epochUnbondings: []
  };
}
export const GenesisState = {
  typeUrl: "/lum.network.millions.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextPoolId);
    }
    if (message.nextDepositId !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextDepositId);
    }
    if (message.nextPrizeId !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextPrizeId);
    }
    if (message.nextWithdrawalId !== BigInt(0)) {
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
    for (const v of message.epochUnbondings) {
      EpochUnbonding.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        case 12:
          message.epochUnbondings.push(EpochUnbonding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? BigInt(object.nextPoolId.toString()) : BigInt(0);
    message.nextDepositId = object.nextDepositId !== undefined && object.nextDepositId !== null ? BigInt(object.nextDepositId.toString()) : BigInt(0);
    message.nextPrizeId = object.nextPrizeId !== undefined && object.nextPrizeId !== null ? BigInt(object.nextPrizeId.toString()) : BigInt(0);
    message.nextWithdrawalId = object.nextWithdrawalId !== undefined && object.nextWithdrawalId !== null ? BigInt(object.nextWithdrawalId.toString()) : BigInt(0);
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.draws = object.draws?.map(e => Draw.fromPartial(e)) || [];
    message.prizes = object.prizes?.map(e => Prize.fromPartial(e)) || [];
    message.withdrawals = object.withdrawals?.map(e => Withdrawal.fromPartial(e)) || [];
    message.epochTrackers = object.epochTrackers?.map(e => EpochTracker.fromPartial(e)) || [];
    message.epochUnbondings = object.epochUnbondings?.map(e => EpochUnbonding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.next_pool_id !== undefined && object.next_pool_id !== null) {
      message.nextPoolId = BigInt(object.next_pool_id);
    }
    if (object.next_deposit_id !== undefined && object.next_deposit_id !== null) {
      message.nextDepositId = BigInt(object.next_deposit_id);
    }
    if (object.next_prize_id !== undefined && object.next_prize_id !== null) {
      message.nextPrizeId = BigInt(object.next_prize_id);
    }
    if (object.next_withdrawal_id !== undefined && object.next_withdrawal_id !== null) {
      message.nextWithdrawalId = BigInt(object.next_withdrawal_id);
    }
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    message.draws = object.draws?.map(e => Draw.fromAmino(e)) || [];
    message.prizes = object.prizes?.map(e => Prize.fromAmino(e)) || [];
    message.withdrawals = object.withdrawals?.map(e => Withdrawal.fromAmino(e)) || [];
    message.epochTrackers = object.epoch_trackers?.map(e => EpochTracker.fromAmino(e)) || [];
    message.epochUnbondings = object.epoch_unbondings?.map(e => EpochUnbonding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.next_pool_id = message.nextPoolId !== BigInt(0) ? message.nextPoolId.toString() : undefined;
    obj.next_deposit_id = message.nextDepositId !== BigInt(0) ? message.nextDepositId.toString() : undefined;
    obj.next_prize_id = message.nextPrizeId !== BigInt(0) ? message.nextPrizeId.toString() : undefined;
    obj.next_withdrawal_id = message.nextWithdrawalId !== BigInt(0) ? message.nextWithdrawalId.toString() : undefined;
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    if (message.draws) {
      obj.draws = message.draws.map(e => e ? Draw.toAmino(e) : undefined);
    } else {
      obj.draws = message.draws;
    }
    if (message.prizes) {
      obj.prizes = message.prizes.map(e => e ? Prize.toAmino(e) : undefined);
    } else {
      obj.prizes = message.prizes;
    }
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map(e => e ? Withdrawal.toAmino(e) : undefined);
    } else {
      obj.withdrawals = message.withdrawals;
    }
    if (message.epochTrackers) {
      obj.epoch_trackers = message.epochTrackers.map(e => e ? EpochTracker.toAmino(e) : undefined);
    } else {
      obj.epoch_trackers = message.epochTrackers;
    }
    if (message.epochUnbondings) {
      obj.epoch_unbondings = message.epochUnbondings.map(e => e ? EpochUnbonding.toAmino(e) : undefined);
    } else {
      obj.epoch_unbondings = message.epochUnbondings;
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