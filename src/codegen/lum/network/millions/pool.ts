import { DrawSchedule, DrawScheduleAmino, DrawScheduleSDKType } from "./draw_schedule";
import { PrizeStrategy, PrizeStrategyAmino, PrizeStrategySDKType } from "./prize_strategy";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { DrawState, drawStateFromJSON } from "./draw";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, DeepPartial, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * PoolState the state of a Pool
 * Deposits are only accepted for Pools in a Ready state
 * 
 * TODO:
 * Pool state KILLED is not available in the current implementation
 * Introduce the capability to:
 * - Kill a Pool and withdraw or migrate all deposits to another Pool via
 * Governance proposal
 */
export enum PoolState {
  POOL_STATE_UNSPECIFIED = 0,
  POOL_STATE_CREATED = 1,
  POOL_STATE_READY = 2,
  POOL_STATE_PAUSED = 3,
  POOL_STATE_KILLED = 4,
  UNRECOGNIZED = -1,
}
export const PoolStateSDKType = PoolState;
export const PoolStateAmino = PoolState;
export function poolStateFromJSON(object: any): PoolState {
  switch (object) {
    case 0:
    case "POOL_STATE_UNSPECIFIED":
      return PoolState.POOL_STATE_UNSPECIFIED;
    case 1:
    case "POOL_STATE_CREATED":
      return PoolState.POOL_STATE_CREATED;
    case 2:
    case "POOL_STATE_READY":
      return PoolState.POOL_STATE_READY;
    case 3:
    case "POOL_STATE_PAUSED":
      return PoolState.POOL_STATE_PAUSED;
    case 4:
    case "POOL_STATE_KILLED":
      return PoolState.POOL_STATE_KILLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolState.UNRECOGNIZED;
  }
}
export function poolStateToJSON(object: PoolState): string {
  switch (object) {
    case PoolState.POOL_STATE_UNSPECIFIED:
      return "POOL_STATE_UNSPECIFIED";
    case PoolState.POOL_STATE_CREATED:
      return "POOL_STATE_CREATED";
    case PoolState.POOL_STATE_READY:
      return "POOL_STATE_READY";
    case PoolState.POOL_STATE_PAUSED:
      return "POOL_STATE_PAUSED";
    case PoolState.POOL_STATE_KILLED:
      return "POOL_STATE_KILLED";
    case PoolState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PoolType the type of Pool
 * Each PoolType implements a dedicated runner which applies its own Pool
 * Lifecycle in order to deliver yield and distribute prizes
 */
export enum PoolType {
  POOL_TYPE_UNSPECIFIED = 0,
  POOL_TYPE_STAKING = 1,
  UNRECOGNIZED = -1,
}
export const PoolTypeSDKType = PoolType;
export const PoolTypeAmino = PoolType;
export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "POOL_TYPE_UNSPECIFIED":
      return PoolType.POOL_TYPE_UNSPECIFIED;
    case 1:
    case "POOL_TYPE_STAKING":
      return PoolType.POOL_TYPE_STAKING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}
export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.POOL_TYPE_UNSPECIFIED:
      return "POOL_TYPE_UNSPECIFIED";
    case PoolType.POOL_TYPE_STAKING:
      return "POOL_TYPE_STAKING";
    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Pool {
  poolId: Long;
  denom: string;
  nativeDenom: string;
  chainId: string;
  connectionId: string;
  transferChannelId: string;
  icaDepositPortId: string;
  icaPrizepoolPortId: string;
  poolType: PoolType;
  validators: PoolValidator[];
  bech32PrefixAccAddr: string;
  bech32PrefixValAddr: string;
  minDepositAmount: string;
  drawSchedule: DrawSchedule | undefined;
  prizeStrategy: PrizeStrategy | undefined;
  unbondingDuration: Duration | undefined;
  maxUnbondingEntries: string;
  localAddress: string;
  icaDepositAddress: string;
  icaPrizepoolAddress: string;
  nextDrawId: Long;
  tvlAmount: string;
  depositorsCount: Long;
  sponsorshipAmount: string;
  lastDrawCreatedAt?: Date | undefined;
  lastDrawState: DrawState;
  availablePrizePool: Coin | undefined;
  state: PoolState;
  createdAtHeight: Long;
  updatedAtHeight: Long;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface PoolProtoMsg {
  typeUrl: "/lum.network.millions.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  pool_id: string;
  denom: string;
  native_denom: string;
  chain_id: string;
  connection_id: string;
  transfer_channel_id: string;
  ica_deposit_port_id: string;
  ica_prizepool_port_id: string;
  pool_type: PoolType;
  validators: PoolValidatorAmino[];
  bech32_prefix_acc_addr: string;
  bech32_prefix_val_addr: string;
  min_deposit_amount: string;
  draw_schedule?: DrawScheduleAmino | undefined;
  prize_strategy?: PrizeStrategyAmino | undefined;
  unbonding_duration?: DurationAmino | undefined;
  max_unbonding_entries: string;
  local_address: string;
  ica_deposit_address: string;
  ica_prizepool_address: string;
  next_draw_id: string;
  tvl_amount: string;
  depositors_count: string;
  sponsorship_amount: string;
  last_draw_created_at?: Date | undefined;
  last_draw_state: DrawState;
  available_prize_pool?: CoinAmino | undefined;
  state: PoolState;
  created_at_height: string;
  updated_at_height: string;
  created_at?: Date | undefined;
  updated_at?: Date | undefined;
}
export interface PoolAminoMsg {
  type: "/lum.network.millions.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  pool_id: Long;
  denom: string;
  native_denom: string;
  chain_id: string;
  connection_id: string;
  transfer_channel_id: string;
  ica_deposit_port_id: string;
  ica_prizepool_port_id: string;
  pool_type: PoolType;
  validators: PoolValidatorSDKType[];
  bech32_prefix_acc_addr: string;
  bech32_prefix_val_addr: string;
  min_deposit_amount: string;
  draw_schedule: DrawScheduleSDKType | undefined;
  prize_strategy: PrizeStrategySDKType | undefined;
  unbonding_duration: DurationSDKType | undefined;
  max_unbonding_entries: string;
  local_address: string;
  ica_deposit_address: string;
  ica_prizepool_address: string;
  next_draw_id: Long;
  tvl_amount: string;
  depositors_count: Long;
  sponsorship_amount: string;
  last_draw_created_at?: Date | undefined;
  last_draw_state: DrawState;
  available_prize_pool: CoinSDKType | undefined;
  state: PoolState;
  created_at_height: Long;
  updated_at_height: Long;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
export interface PoolValidator {
  operatorAddress: string;
  isEnabled: boolean;
  bondedAmount: string;
}
export interface PoolValidatorProtoMsg {
  typeUrl: "/lum.network.millions.PoolValidator";
  value: Uint8Array;
}
export interface PoolValidatorAmino {
  operator_address: string;
  is_enabled: boolean;
  bonded_amount: string;
}
export interface PoolValidatorAminoMsg {
  type: "/lum.network.millions.PoolValidator";
  value: PoolValidatorAmino;
}
export interface PoolValidatorSDKType {
  operator_address: string;
  is_enabled: boolean;
  bonded_amount: string;
}
function createBasePool(): Pool {
  return {
    poolId: Long.UZERO,
    denom: "",
    nativeDenom: "",
    chainId: "",
    connectionId: "",
    transferChannelId: "",
    icaDepositPortId: "",
    icaPrizepoolPortId: "",
    poolType: 0,
    validators: [],
    bech32PrefixAccAddr: "",
    bech32PrefixValAddr: "",
    minDepositAmount: "",
    drawSchedule: DrawSchedule.fromPartial({}),
    prizeStrategy: PrizeStrategy.fromPartial({}),
    unbondingDuration: Duration.fromPartial({}),
    maxUnbondingEntries: "",
    localAddress: "",
    icaDepositAddress: "",
    icaPrizepoolAddress: "",
    nextDrawId: Long.UZERO,
    tvlAmount: "",
    depositorsCount: Long.UZERO,
    sponsorshipAmount: "",
    lastDrawCreatedAt: undefined,
    lastDrawState: 0,
    availablePrizePool: Coin.fromPartial({}),
    state: 0,
    createdAtHeight: Long.ZERO,
    updatedAtHeight: Long.ZERO,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.nativeDenom !== "") {
      writer.uint32(26).string(message.nativeDenom);
    }
    if (message.chainId !== "") {
      writer.uint32(34).string(message.chainId);
    }
    if (message.connectionId !== "") {
      writer.uint32(42).string(message.connectionId);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(50).string(message.transferChannelId);
    }
    if (message.icaDepositPortId !== "") {
      writer.uint32(58).string(message.icaDepositPortId);
    }
    if (message.icaPrizepoolPortId !== "") {
      writer.uint32(66).string(message.icaPrizepoolPortId);
    }
    if (message.poolType !== 0) {
      writer.uint32(72).int32(message.poolType);
    }
    for (const v of message.validators) {
      PoolValidator.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.bech32PrefixAccAddr !== "") {
      writer.uint32(90).string(message.bech32PrefixAccAddr);
    }
    if (message.bech32PrefixValAddr !== "") {
      writer.uint32(98).string(message.bech32PrefixValAddr);
    }
    if (message.minDepositAmount !== "") {
      writer.uint32(106).string(message.minDepositAmount);
    }
    if (message.drawSchedule !== undefined) {
      DrawSchedule.encode(message.drawSchedule, writer.uint32(114).fork()).ldelim();
    }
    if (message.prizeStrategy !== undefined) {
      PrizeStrategy.encode(message.prizeStrategy, writer.uint32(122).fork()).ldelim();
    }
    if (message.unbondingDuration !== undefined) {
      Duration.encode(message.unbondingDuration, writer.uint32(130).fork()).ldelim();
    }
    if (message.maxUnbondingEntries !== "") {
      writer.uint32(138).string(message.maxUnbondingEntries);
    }
    if (message.localAddress !== "") {
      writer.uint32(146).string(message.localAddress);
    }
    if (message.icaDepositAddress !== "") {
      writer.uint32(154).string(message.icaDepositAddress);
    }
    if (message.icaPrizepoolAddress !== "") {
      writer.uint32(162).string(message.icaPrizepoolAddress);
    }
    if (!message.nextDrawId.isZero()) {
      writer.uint32(176).uint64(message.nextDrawId);
    }
    if (message.tvlAmount !== "") {
      writer.uint32(186).string(message.tvlAmount);
    }
    if (!message.depositorsCount.isZero()) {
      writer.uint32(192).uint64(message.depositorsCount);
    }
    if (message.sponsorshipAmount !== "") {
      writer.uint32(202).string(message.sponsorshipAmount);
    }
    if (message.lastDrawCreatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDrawCreatedAt), writer.uint32(218).fork()).ldelim();
    }
    if (message.lastDrawState !== 0) {
      writer.uint32(224).int32(message.lastDrawState);
    }
    if (message.availablePrizePool !== undefined) {
      Coin.encode(message.availablePrizePool, writer.uint32(234).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(256).int32(message.state);
    }
    if (!message.createdAtHeight.isZero()) {
      writer.uint32(264).int64(message.createdAtHeight);
    }
    if (!message.updatedAtHeight.isZero()) {
      writer.uint32(272).int64(message.updatedAtHeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(282).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(290).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.nativeDenom = reader.string();
          break;
        case 4:
          message.chainId = reader.string();
          break;
        case 5:
          message.connectionId = reader.string();
          break;
        case 6:
          message.transferChannelId = reader.string();
          break;
        case 7:
          message.icaDepositPortId = reader.string();
          break;
        case 8:
          message.icaPrizepoolPortId = reader.string();
          break;
        case 9:
          message.poolType = (reader.int32() as any);
          break;
        case 10:
          message.validators.push(PoolValidator.decode(reader, reader.uint32()));
          break;
        case 11:
          message.bech32PrefixAccAddr = reader.string();
          break;
        case 12:
          message.bech32PrefixValAddr = reader.string();
          break;
        case 13:
          message.minDepositAmount = reader.string();
          break;
        case 14:
          message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
          break;
        case 15:
          message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
          break;
        case 16:
          message.unbondingDuration = Duration.decode(reader, reader.uint32());
          break;
        case 17:
          message.maxUnbondingEntries = reader.string();
          break;
        case 18:
          message.localAddress = reader.string();
          break;
        case 19:
          message.icaDepositAddress = reader.string();
          break;
        case 20:
          message.icaPrizepoolAddress = reader.string();
          break;
        case 22:
          message.nextDrawId = (reader.uint64() as Long);
          break;
        case 23:
          message.tvlAmount = reader.string();
          break;
        case 24:
          message.depositorsCount = (reader.uint64() as Long);
          break;
        case 25:
          message.sponsorshipAmount = reader.string();
          break;
        case 27:
          message.lastDrawCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 28:
          message.lastDrawState = (reader.int32() as any);
          break;
        case 29:
          message.availablePrizePool = Coin.decode(reader, reader.uint32());
          break;
        case 32:
          message.state = (reader.int32() as any);
          break;
        case 33:
          message.createdAtHeight = (reader.int64() as Long);
          break;
        case 34:
          message.updatedAtHeight = (reader.int64() as Long);
          break;
        case 35:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 36:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.nativeDenom = object.nativeDenom ?? "";
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.icaDepositPortId = object.icaDepositPortId ?? "";
    message.icaPrizepoolPortId = object.icaPrizepoolPortId ?? "";
    message.poolType = object.poolType ?? 0;
    message.validators = object.validators?.map(e => PoolValidator.fromPartial(e)) || [];
    message.bech32PrefixAccAddr = object.bech32PrefixAccAddr ?? "";
    message.bech32PrefixValAddr = object.bech32PrefixValAddr ?? "";
    message.minDepositAmount = object.minDepositAmount ?? "";
    message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? DrawSchedule.fromPartial(object.drawSchedule) : undefined;
    message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
    message.unbondingDuration = object.unbondingDuration !== undefined && object.unbondingDuration !== null ? Duration.fromPartial(object.unbondingDuration) : undefined;
    message.maxUnbondingEntries = object.maxUnbondingEntries ?? "";
    message.localAddress = object.localAddress ?? "";
    message.icaDepositAddress = object.icaDepositAddress ?? "";
    message.icaPrizepoolAddress = object.icaPrizepoolAddress ?? "";
    message.nextDrawId = object.nextDrawId !== undefined && object.nextDrawId !== null ? Long.fromValue(object.nextDrawId) : Long.UZERO;
    message.tvlAmount = object.tvlAmount ?? "";
    message.depositorsCount = object.depositorsCount !== undefined && object.depositorsCount !== null ? Long.fromValue(object.depositorsCount) : Long.UZERO;
    message.sponsorshipAmount = object.sponsorshipAmount ?? "";
    message.lastDrawCreatedAt = object.lastDrawCreatedAt ?? undefined;
    message.lastDrawState = object.lastDrawState ?? 0;
    message.availablePrizePool = object.availablePrizePool !== undefined && object.availablePrizePool !== null ? Coin.fromPartial(object.availablePrizePool) : undefined;
    message.state = object.state ?? 0;
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      poolId: Long.fromString(object.pool_id),
      denom: object.denom,
      nativeDenom: object.native_denom,
      chainId: object.chain_id,
      connectionId: object.connection_id,
      transferChannelId: object.transfer_channel_id,
      icaDepositPortId: object.ica_deposit_port_id,
      icaPrizepoolPortId: object.ica_prizepool_port_id,
      poolType: isSet(object.pool_type) ? poolTypeFromJSON(object.pool_type) : -1,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => PoolValidator.fromAmino(e)) : [],
      bech32PrefixAccAddr: object.bech32_prefix_acc_addr,
      bech32PrefixValAddr: object.bech32_prefix_val_addr,
      minDepositAmount: object.min_deposit_amount,
      drawSchedule: object?.draw_schedule ? DrawSchedule.fromAmino(object.draw_schedule) : undefined,
      prizeStrategy: object?.prize_strategy ? PrizeStrategy.fromAmino(object.prize_strategy) : undefined,
      unbondingDuration: object?.unbonding_duration ? Duration.fromAmino(object.unbonding_duration) : undefined,
      maxUnbondingEntries: object.max_unbonding_entries,
      localAddress: object.local_address,
      icaDepositAddress: object.ica_deposit_address,
      icaPrizepoolAddress: object.ica_prizepool_address,
      nextDrawId: Long.fromString(object.next_draw_id),
      tvlAmount: object.tvl_amount,
      depositorsCount: Long.fromString(object.depositors_count),
      sponsorshipAmount: object.sponsorship_amount,
      lastDrawCreatedAt: object?.last_draw_created_at,
      lastDrawState: isSet(object.last_draw_state) ? drawStateFromJSON(object.last_draw_state) : -1,
      availablePrizePool: object?.available_prize_pool ? Coin.fromAmino(object.available_prize_pool) : undefined,
      state: isSet(object.state) ? poolStateFromJSON(object.state) : -1,
      createdAtHeight: Long.fromString(object.created_at_height),
      updatedAtHeight: Long.fromString(object.updated_at_height),
      createdAt: object.created_at,
      updatedAt: object.updated_at
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom;
    obj.native_denom = message.nativeDenom;
    obj.chain_id = message.chainId;
    obj.connection_id = message.connectionId;
    obj.transfer_channel_id = message.transferChannelId;
    obj.ica_deposit_port_id = message.icaDepositPortId;
    obj.ica_prizepool_port_id = message.icaPrizepoolPortId;
    obj.pool_type = message.poolType;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? PoolValidator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.bech32_prefix_acc_addr = message.bech32PrefixAccAddr;
    obj.bech32_prefix_val_addr = message.bech32PrefixValAddr;
    obj.min_deposit_amount = message.minDepositAmount;
    obj.draw_schedule = message.drawSchedule ? DrawSchedule.toAmino(message.drawSchedule) : undefined;
    obj.prize_strategy = message.prizeStrategy ? PrizeStrategy.toAmino(message.prizeStrategy) : undefined;
    obj.unbonding_duration = message.unbondingDuration ? Duration.toAmino(message.unbondingDuration) : undefined;
    obj.max_unbonding_entries = message.maxUnbondingEntries;
    obj.local_address = message.localAddress;
    obj.ica_deposit_address = message.icaDepositAddress;
    obj.ica_prizepool_address = message.icaPrizepoolAddress;
    obj.next_draw_id = message.nextDrawId ? message.nextDrawId.toString() : undefined;
    obj.tvl_amount = message.tvlAmount;
    obj.depositors_count = message.depositorsCount ? message.depositorsCount.toString() : undefined;
    obj.sponsorship_amount = message.sponsorshipAmount;
    obj.last_draw_created_at = message.lastDrawCreatedAt;
    obj.last_draw_state = message.lastDrawState;
    obj.available_prize_pool = message.availablePrizePool ? Coin.toAmino(message.availablePrizePool) : undefined;
    obj.state = message.state;
    obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
    obj.created_at = message.createdAt;
    obj.updated_at = message.updatedAt;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/lum.network.millions.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBasePoolValidator(): PoolValidator {
  return {
    operatorAddress: "",
    isEnabled: false,
    bondedAmount: ""
  };
}
export const PoolValidator = {
  encode(message: PoolValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.isEnabled === true) {
      writer.uint32(16).bool(message.isEnabled);
    }
    if (message.bondedAmount !== "") {
      writer.uint32(26).string(message.bondedAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.isEnabled = reader.bool();
          break;
        case 3:
          message.bondedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PoolValidator>): PoolValidator {
    const message = createBasePoolValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.isEnabled = object.isEnabled ?? false;
    message.bondedAmount = object.bondedAmount ?? "";
    return message;
  },
  fromAmino(object: PoolValidatorAmino): PoolValidator {
    return {
      operatorAddress: object.operator_address,
      isEnabled: object.is_enabled,
      bondedAmount: object.bonded_amount
    };
  },
  toAmino(message: PoolValidator): PoolValidatorAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    obj.is_enabled = message.isEnabled;
    obj.bonded_amount = message.bondedAmount;
    return obj;
  },
  fromAminoMsg(object: PoolValidatorAminoMsg): PoolValidator {
    return PoolValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolValidatorProtoMsg): PoolValidator {
    return PoolValidator.decode(message.value);
  },
  toProto(message: PoolValidator): Uint8Array {
    return PoolValidator.encode(message).finish();
  },
  toProtoMsg(message: PoolValidator): PoolValidatorProtoMsg {
    return {
      typeUrl: "/lum.network.millions.PoolValidator",
      value: PoolValidator.encode(message).finish()
    };
  }
};