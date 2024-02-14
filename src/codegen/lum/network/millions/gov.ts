import { DrawSchedule, DrawScheduleAmino, DrawScheduleSDKType } from "./draw_schedule";
import { PrizeStrategy, PrizeStrategyAmino, PrizeStrategySDKType } from "./prize_strategy";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { PoolType, FeeTaker, FeeTakerAmino, FeeTakerSDKType, PoolState, poolTypeFromJSON, poolStateFromJSON } from "./pool";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface ProposalRegisterPool {
  title: string;
  description: string;
  chainId: string;
  denom: string;
  nativeDenom: string;
  connectionId: string;
  validators: string[];
  minDepositAmount: string;
  drawSchedule: DrawSchedule | undefined;
  prizeStrategy: PrizeStrategy | undefined;
  bech32PrefixAccAddr: string;
  bech32PrefixValAddr: string;
  transferChannelId: string;
  unbondingDuration: Duration | undefined;
  maxUnbondingEntries: string;
  poolType: PoolType;
  feeTakers: FeeTaker[];
}
export interface ProposalRegisterPoolProtoMsg {
  typeUrl: "/lum.network.millions.ProposalRegisterPool";
  value: Uint8Array;
}
export interface ProposalRegisterPoolAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  denom?: string;
  native_denom?: string;
  connection_id?: string;
  validators?: string[];
  min_deposit_amount?: string;
  draw_schedule?: DrawScheduleAmino | undefined;
  prize_strategy?: PrizeStrategyAmino | undefined;
  bech32_prefix_acc_addr?: string;
  bech32_prefix_val_addr?: string;
  transfer_channel_id?: string;
  unbonding_duration?: DurationAmino | undefined;
  max_unbonding_entries?: string;
  pool_type?: PoolType;
  fee_takers?: FeeTakerAmino[];
}
export interface ProposalRegisterPoolAminoMsg {
  type: "/lum.network.millions.ProposalRegisterPool";
  value: ProposalRegisterPoolAmino;
}
export interface ProposalRegisterPoolSDKType {
  title: string;
  description: string;
  chain_id: string;
  denom: string;
  native_denom: string;
  connection_id: string;
  validators: string[];
  min_deposit_amount: string;
  draw_schedule: DrawScheduleSDKType | undefined;
  prize_strategy: PrizeStrategySDKType | undefined;
  bech32_prefix_acc_addr: string;
  bech32_prefix_val_addr: string;
  transfer_channel_id: string;
  unbonding_duration: DurationSDKType | undefined;
  max_unbonding_entries: string;
  pool_type: PoolType;
  fee_takers: FeeTakerSDKType[];
}
export interface ProposalUpdatePool {
  title: string;
  description: string;
  poolId: bigint;
  validators?: string[];
  minDepositAmount?: string;
  drawSchedule?: DrawSchedule | undefined;
  prizeStrategy?: PrizeStrategy | undefined;
  state: PoolState;
  unbondingDuration?: Duration | undefined;
  maxUnbondingEntries?: string;
  feeTakers: FeeTaker[];
}
export interface ProposalUpdatePoolProtoMsg {
  typeUrl: "/lum.network.millions.ProposalUpdatePool";
  value: Uint8Array;
}
export interface ProposalUpdatePoolAmino {
  title?: string;
  description?: string;
  pool_id?: string;
  validators?: string[];
  min_deposit_amount?: string;
  draw_schedule?: DrawScheduleAmino | undefined;
  prize_strategy?: PrizeStrategyAmino | undefined;
  state?: PoolState;
  unbonding_duration?: DurationAmino | undefined;
  max_unbonding_entries?: string;
  fee_takers?: FeeTakerAmino[];
}
export interface ProposalUpdatePoolAminoMsg {
  type: "/lum.network.millions.ProposalUpdatePool";
  value: ProposalUpdatePoolAmino;
}
export interface ProposalUpdatePoolSDKType {
  title: string;
  description: string;
  pool_id: bigint;
  validators?: string[];
  min_deposit_amount?: string;
  draw_schedule?: DrawScheduleSDKType | undefined;
  prize_strategy?: PrizeStrategySDKType | undefined;
  state: PoolState;
  unbonding_duration?: DurationSDKType | undefined;
  max_unbonding_entries?: string;
  fee_takers: FeeTakerSDKType[];
}
export interface ProposalUpdateParams {
  title: string;
  description: string;
  minDepositAmount?: string;
  maxPrizeStrategyBatches?: string;
  maxPrizeBatchQuantity?: string;
  minDrawScheduleDelta?: Duration | undefined;
  maxDrawScheduleDelta?: Duration | undefined;
  prizeExpirationDelta?: Duration | undefined;
  minDepositDrawDelta?: Duration | undefined;
}
export interface ProposalUpdateParamsProtoMsg {
  typeUrl: "/lum.network.millions.ProposalUpdateParams";
  value: Uint8Array;
}
export interface ProposalUpdateParamsAmino {
  title?: string;
  description?: string;
  min_deposit_amount?: string;
  max_prize_strategy_batches?: string;
  max_prize_batch_quantity?: string;
  min_draw_schedule_delta?: DurationAmino | undefined;
  max_draw_schedule_delta?: DurationAmino | undefined;
  prize_expiration_delta?: DurationAmino | undefined;
  min_deposit_draw_delta?: DurationAmino | undefined;
}
export interface ProposalUpdateParamsAminoMsg {
  type: "/lum.network.millions.ProposalUpdateParams";
  value: ProposalUpdateParamsAmino;
}
export interface ProposalUpdateParamsSDKType {
  title: string;
  description: string;
  min_deposit_amount?: string;
  max_prize_strategy_batches?: string;
  max_prize_batch_quantity?: string;
  min_draw_schedule_delta?: DurationSDKType | undefined;
  max_draw_schedule_delta?: DurationSDKType | undefined;
  prize_expiration_delta?: DurationSDKType | undefined;
  min_deposit_draw_delta?: DurationSDKType | undefined;
}
function createBaseProposalRegisterPool(): ProposalRegisterPool {
  return {
    title: "",
    description: "",
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
    transferChannelId: "",
    unbondingDuration: Duration.fromPartial({}),
    maxUnbondingEntries: "",
    poolType: 0,
    feeTakers: []
  };
}
export const ProposalRegisterPool = {
  typeUrl: "/lum.network.millions.ProposalRegisterPool",
  encode(message: ProposalRegisterPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(58).string(v!);
    }
    if (message.minDepositAmount !== "") {
      writer.uint32(66).string(message.minDepositAmount);
    }
    if (message.drawSchedule !== undefined) {
      DrawSchedule.encode(message.drawSchedule, writer.uint32(74).fork()).ldelim();
    }
    if (message.prizeStrategy !== undefined) {
      PrizeStrategy.encode(message.prizeStrategy, writer.uint32(82).fork()).ldelim();
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
      Duration.encode(message.unbondingDuration, writer.uint32(114).fork()).ldelim();
    }
    if (message.maxUnbondingEntries !== "") {
      writer.uint32(122).string(message.maxUnbondingEntries);
    }
    if (message.poolType !== 0) {
      writer.uint32(128).int32(message.poolType);
    }
    for (const v of message.feeTakers) {
      FeeTaker.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalRegisterPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
          break;
        case 10:
          message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
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
          message.unbondingDuration = Duration.decode(reader, reader.uint32());
          break;
        case 15:
          message.maxUnbondingEntries = reader.string();
          break;
        case 16:
          message.poolType = (reader.int32() as any);
          break;
        case 17:
          message.feeTakers.push(FeeTaker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalRegisterPool>): ProposalRegisterPool {
    const message = createBaseProposalRegisterPool();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
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
    message.transferChannelId = object.transferChannelId ?? "";
    message.unbondingDuration = object.unbondingDuration !== undefined && object.unbondingDuration !== null ? Duration.fromPartial(object.unbondingDuration) : undefined;
    message.maxUnbondingEntries = object.maxUnbondingEntries ?? "";
    message.poolType = object.poolType ?? 0;
    message.feeTakers = object.feeTakers?.map(e => FeeTaker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalRegisterPoolAmino): ProposalRegisterPool {
    const message = createBaseProposalRegisterPool();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.native_denom !== undefined && object.native_denom !== null) {
      message.nativeDenom = object.native_denom;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    message.validators = object.validators?.map(e => e) || [];
    if (object.min_deposit_amount !== undefined && object.min_deposit_amount !== null) {
      message.minDepositAmount = object.min_deposit_amount;
    }
    if (object.draw_schedule !== undefined && object.draw_schedule !== null) {
      message.drawSchedule = DrawSchedule.fromAmino(object.draw_schedule);
    }
    if (object.prize_strategy !== undefined && object.prize_strategy !== null) {
      message.prizeStrategy = PrizeStrategy.fromAmino(object.prize_strategy);
    }
    if (object.bech32_prefix_acc_addr !== undefined && object.bech32_prefix_acc_addr !== null) {
      message.bech32PrefixAccAddr = object.bech32_prefix_acc_addr;
    }
    if (object.bech32_prefix_val_addr !== undefined && object.bech32_prefix_val_addr !== null) {
      message.bech32PrefixValAddr = object.bech32_prefix_val_addr;
    }
    if (object.transfer_channel_id !== undefined && object.transfer_channel_id !== null) {
      message.transferChannelId = object.transfer_channel_id;
    }
    if (object.unbonding_duration !== undefined && object.unbonding_duration !== null) {
      message.unbondingDuration = Duration.fromAmino(object.unbonding_duration);
    }
    if (object.max_unbonding_entries !== undefined && object.max_unbonding_entries !== null) {
      message.maxUnbondingEntries = object.max_unbonding_entries;
    }
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = poolTypeFromJSON(object.pool_type);
    }
    message.feeTakers = object.fee_takers?.map(e => FeeTaker.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProposalRegisterPool): ProposalRegisterPoolAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId;
    obj.denom = message.denom;
    obj.native_denom = message.nativeDenom;
    obj.connection_id = message.connectionId;
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = [];
    }
    obj.min_deposit_amount = message.minDepositAmount;
    obj.draw_schedule = message.drawSchedule ? DrawSchedule.toAmino(message.drawSchedule) : undefined;
    obj.prize_strategy = message.prizeStrategy ? PrizeStrategy.toAmino(message.prizeStrategy) : undefined;
    obj.bech32_prefix_acc_addr = message.bech32PrefixAccAddr;
    obj.bech32_prefix_val_addr = message.bech32PrefixValAddr;
    obj.transfer_channel_id = message.transferChannelId;
    obj.unbonding_duration = message.unbondingDuration ? Duration.toAmino(message.unbondingDuration) : undefined;
    obj.max_unbonding_entries = message.maxUnbondingEntries;
    obj.pool_type = message.poolType;
    if (message.feeTakers) {
      obj.fee_takers = message.feeTakers.map(e => e ? FeeTaker.toAmino(e) : undefined);
    } else {
      obj.fee_takers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProposalRegisterPoolAminoMsg): ProposalRegisterPool {
    return ProposalRegisterPool.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalRegisterPoolProtoMsg): ProposalRegisterPool {
    return ProposalRegisterPool.decode(message.value);
  },
  toProto(message: ProposalRegisterPool): Uint8Array {
    return ProposalRegisterPool.encode(message).finish();
  },
  toProtoMsg(message: ProposalRegisterPool): ProposalRegisterPoolProtoMsg {
    return {
      typeUrl: "/lum.network.millions.ProposalRegisterPool",
      value: ProposalRegisterPool.encode(message).finish()
    };
  }
};
function createBaseProposalUpdatePool(): ProposalUpdatePool {
  return {
    title: "",
    description: "",
    poolId: BigInt(0),
    validators: [],
    minDepositAmount: undefined,
    drawSchedule: undefined,
    prizeStrategy: undefined,
    state: 0,
    unbondingDuration: undefined,
    maxUnbondingEntries: undefined,
    feeTakers: []
  };
}
export const ProposalUpdatePool = {
  typeUrl: "/lum.network.millions.ProposalUpdatePool",
  encode(message: ProposalUpdatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    for (const v of message.validators) {
      writer.uint32(34).string(v!);
    }
    if (message.minDepositAmount !== undefined) {
      writer.uint32(42).string(message.minDepositAmount);
    }
    if (message.drawSchedule !== undefined) {
      DrawSchedule.encode(message.drawSchedule, writer.uint32(50).fork()).ldelim();
    }
    if (message.prizeStrategy !== undefined) {
      PrizeStrategy.encode(message.prizeStrategy, writer.uint32(58).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(64).int32(message.state);
    }
    if (message.unbondingDuration !== undefined) {
      Duration.encode(message.unbondingDuration, writer.uint32(74).fork()).ldelim();
    }
    if (message.maxUnbondingEntries !== undefined) {
      writer.uint32(82).string(message.maxUnbondingEntries);
    }
    for (const v of message.feeTakers) {
      FeeTaker.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalUpdatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
          break;
        case 7:
          message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
          break;
        case 8:
          message.state = (reader.int32() as any);
          break;
        case 9:
          message.unbondingDuration = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.maxUnbondingEntries = reader.string();
          break;
        case 11:
          message.feeTakers.push(FeeTaker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalUpdatePool>): ProposalUpdatePool {
    const message = createBaseProposalUpdatePool();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => e) || [];
    message.minDepositAmount = object.minDepositAmount ?? undefined;
    message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? DrawSchedule.fromPartial(object.drawSchedule) : undefined;
    message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
    message.state = object.state ?? 0;
    message.unbondingDuration = object.unbondingDuration !== undefined && object.unbondingDuration !== null ? Duration.fromPartial(object.unbondingDuration) : undefined;
    message.maxUnbondingEntries = object.maxUnbondingEntries ?? undefined;
    message.feeTakers = object.feeTakers?.map(e => FeeTaker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalUpdatePoolAmino): ProposalUpdatePool {
    const message = createBaseProposalUpdatePool();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.validators = object.validators?.map(e => e) || [];
    if (object.min_deposit_amount !== undefined && object.min_deposit_amount !== null) {
      message.minDepositAmount = object.min_deposit_amount;
    }
    if (object.draw_schedule !== undefined && object.draw_schedule !== null) {
      message.drawSchedule = DrawSchedule.fromAmino(object.draw_schedule);
    }
    if (object.prize_strategy !== undefined && object.prize_strategy !== null) {
      message.prizeStrategy = PrizeStrategy.fromAmino(object.prize_strategy);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = poolStateFromJSON(object.state);
    }
    if (object.unbonding_duration !== undefined && object.unbonding_duration !== null) {
      message.unbondingDuration = Duration.fromAmino(object.unbonding_duration);
    }
    if (object.max_unbonding_entries !== undefined && object.max_unbonding_entries !== null) {
      message.maxUnbondingEntries = object.max_unbonding_entries;
    }
    message.feeTakers = object.fee_takers?.map(e => FeeTaker.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProposalUpdatePool): ProposalUpdatePoolAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = [];
    }
    obj.min_deposit_amount = message.minDepositAmount;
    obj.draw_schedule = message.drawSchedule ? DrawSchedule.toAmino(message.drawSchedule) : undefined;
    obj.prize_strategy = message.prizeStrategy ? PrizeStrategy.toAmino(message.prizeStrategy) : undefined;
    obj.state = message.state;
    obj.unbonding_duration = message.unbondingDuration ? Duration.toAmino(message.unbondingDuration) : undefined;
    obj.max_unbonding_entries = message.maxUnbondingEntries;
    if (message.feeTakers) {
      obj.fee_takers = message.feeTakers.map(e => e ? FeeTaker.toAmino(e) : undefined);
    } else {
      obj.fee_takers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProposalUpdatePoolAminoMsg): ProposalUpdatePool {
    return ProposalUpdatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalUpdatePoolProtoMsg): ProposalUpdatePool {
    return ProposalUpdatePool.decode(message.value);
  },
  toProto(message: ProposalUpdatePool): Uint8Array {
    return ProposalUpdatePool.encode(message).finish();
  },
  toProtoMsg(message: ProposalUpdatePool): ProposalUpdatePoolProtoMsg {
    return {
      typeUrl: "/lum.network.millions.ProposalUpdatePool",
      value: ProposalUpdatePool.encode(message).finish()
    };
  }
};
function createBaseProposalUpdateParams(): ProposalUpdateParams {
  return {
    title: "",
    description: "",
    minDepositAmount: undefined,
    maxPrizeStrategyBatches: undefined,
    maxPrizeBatchQuantity: undefined,
    minDrawScheduleDelta: undefined,
    maxDrawScheduleDelta: undefined,
    prizeExpirationDelta: undefined,
    minDepositDrawDelta: undefined
  };
}
export const ProposalUpdateParams = {
  typeUrl: "/lum.network.millions.ProposalUpdateParams",
  encode(message: ProposalUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      Duration.encode(message.minDrawScheduleDelta, writer.uint32(50).fork()).ldelim();
    }
    if (message.maxDrawScheduleDelta !== undefined) {
      Duration.encode(message.maxDrawScheduleDelta, writer.uint32(58).fork()).ldelim();
    }
    if (message.prizeExpirationDelta !== undefined) {
      Duration.encode(message.prizeExpirationDelta, writer.uint32(66).fork()).ldelim();
    }
    if (message.minDepositDrawDelta !== undefined) {
      Duration.encode(message.minDepositDrawDelta, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.minDrawScheduleDelta = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.maxDrawScheduleDelta = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.prizeExpirationDelta = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.minDepositDrawDelta = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalUpdateParams>): ProposalUpdateParams {
    const message = createBaseProposalUpdateParams();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.minDepositAmount = object.minDepositAmount ?? undefined;
    message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches ?? undefined;
    message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity ?? undefined;
    message.minDrawScheduleDelta = object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null ? Duration.fromPartial(object.minDrawScheduleDelta) : undefined;
    message.maxDrawScheduleDelta = object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null ? Duration.fromPartial(object.maxDrawScheduleDelta) : undefined;
    message.prizeExpirationDelta = object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null ? Duration.fromPartial(object.prizeExpirationDelta) : undefined;
    message.minDepositDrawDelta = object.minDepositDrawDelta !== undefined && object.minDepositDrawDelta !== null ? Duration.fromPartial(object.minDepositDrawDelta) : undefined;
    return message;
  },
  fromAmino(object: ProposalUpdateParamsAmino): ProposalUpdateParams {
    const message = createBaseProposalUpdateParams();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.min_deposit_amount !== undefined && object.min_deposit_amount !== null) {
      message.minDepositAmount = object.min_deposit_amount;
    }
    if (object.max_prize_strategy_batches !== undefined && object.max_prize_strategy_batches !== null) {
      message.maxPrizeStrategyBatches = object.max_prize_strategy_batches;
    }
    if (object.max_prize_batch_quantity !== undefined && object.max_prize_batch_quantity !== null) {
      message.maxPrizeBatchQuantity = object.max_prize_batch_quantity;
    }
    if (object.min_draw_schedule_delta !== undefined && object.min_draw_schedule_delta !== null) {
      message.minDrawScheduleDelta = Duration.fromAmino(object.min_draw_schedule_delta);
    }
    if (object.max_draw_schedule_delta !== undefined && object.max_draw_schedule_delta !== null) {
      message.maxDrawScheduleDelta = Duration.fromAmino(object.max_draw_schedule_delta);
    }
    if (object.prize_expiration_delta !== undefined && object.prize_expiration_delta !== null) {
      message.prizeExpirationDelta = Duration.fromAmino(object.prize_expiration_delta);
    }
    if (object.min_deposit_draw_delta !== undefined && object.min_deposit_draw_delta !== null) {
      message.minDepositDrawDelta = Duration.fromAmino(object.min_deposit_draw_delta);
    }
    return message;
  },
  toAmino(message: ProposalUpdateParams): ProposalUpdateParamsAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.min_deposit_amount = message.minDepositAmount;
    obj.max_prize_strategy_batches = message.maxPrizeStrategyBatches;
    obj.max_prize_batch_quantity = message.maxPrizeBatchQuantity;
    obj.min_draw_schedule_delta = message.minDrawScheduleDelta ? Duration.toAmino(message.minDrawScheduleDelta) : undefined;
    obj.max_draw_schedule_delta = message.maxDrawScheduleDelta ? Duration.toAmino(message.maxDrawScheduleDelta) : undefined;
    obj.prize_expiration_delta = message.prizeExpirationDelta ? Duration.toAmino(message.prizeExpirationDelta) : undefined;
    obj.min_deposit_draw_delta = message.minDepositDrawDelta ? Duration.toAmino(message.minDepositDrawDelta) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalUpdateParamsAminoMsg): ProposalUpdateParams {
    return ProposalUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalUpdateParamsProtoMsg): ProposalUpdateParams {
    return ProposalUpdateParams.decode(message.value);
  },
  toProto(message: ProposalUpdateParams): Uint8Array {
    return ProposalUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: ProposalUpdateParams): ProposalUpdateParamsProtoMsg {
    return {
      typeUrl: "/lum.network.millions.ProposalUpdateParams",
      value: ProposalUpdateParams.encode(message).finish()
    };
  }
};