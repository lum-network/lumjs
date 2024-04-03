import { DrawSchedule, DrawScheduleAmino, DrawScheduleSDKType } from "./draw_schedule";
import { PrizeStrategy, PrizeStrategyAmino, PrizeStrategySDKType } from "./prize_strategy";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { DrawState } from "./draw";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
  POOL_STATE_CLOSING = 4,
  POOL_STATE_CLOSED = 5,
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
    case "POOL_STATE_CLOSING":
      return PoolState.POOL_STATE_CLOSING;
    case 5:
    case "POOL_STATE_CLOSED":
      return PoolState.POOL_STATE_CLOSED;
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
    case PoolState.POOL_STATE_CLOSING:
      return "POOL_STATE_CLOSING";
    case PoolState.POOL_STATE_CLOSED:
      return "POOL_STATE_CLOSED";
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
export enum FeeTakerType {
  FEE_TAKER_TYPE_UNSPECIFIED = 0,
  FEE_TAKER_TYPE_LOCAL_ADDR = 1,
  FEE_TAKER_TYPE_LOCAL_MODULE_ACCOUNT = 2,
  FEE_TAKER_TYPE_REMOTE_ADDR = 3,
  UNRECOGNIZED = -1,
}
export const FeeTakerTypeSDKType = FeeTakerType;
export const FeeTakerTypeAmino = FeeTakerType;
export function feeTakerTypeFromJSON(object: any): FeeTakerType {
  switch (object) {
    case 0:
    case "FEE_TAKER_TYPE_UNSPECIFIED":
      return FeeTakerType.FEE_TAKER_TYPE_UNSPECIFIED;
    case 1:
    case "FEE_TAKER_TYPE_LOCAL_ADDR":
      return FeeTakerType.FEE_TAKER_TYPE_LOCAL_ADDR;
    case 2:
    case "FEE_TAKER_TYPE_LOCAL_MODULE_ACCOUNT":
      return FeeTakerType.FEE_TAKER_TYPE_LOCAL_MODULE_ACCOUNT;
    case 3:
    case "FEE_TAKER_TYPE_REMOTE_ADDR":
      return FeeTakerType.FEE_TAKER_TYPE_REMOTE_ADDR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeeTakerType.UNRECOGNIZED;
  }
}
export function feeTakerTypeToJSON(object: FeeTakerType): string {
  switch (object) {
    case FeeTakerType.FEE_TAKER_TYPE_UNSPECIFIED:
      return "FEE_TAKER_TYPE_UNSPECIFIED";
    case FeeTakerType.FEE_TAKER_TYPE_LOCAL_ADDR:
      return "FEE_TAKER_TYPE_LOCAL_ADDR";
    case FeeTakerType.FEE_TAKER_TYPE_LOCAL_MODULE_ACCOUNT:
      return "FEE_TAKER_TYPE_LOCAL_MODULE_ACCOUNT";
    case FeeTakerType.FEE_TAKER_TYPE_REMOTE_ADDR:
      return "FEE_TAKER_TYPE_REMOTE_ADDR";
    case FeeTakerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface FeeTaker {
  destination: string;
  amount: string;
  type: FeeTakerType;
}
export interface FeeTakerProtoMsg {
  typeUrl: "/lum.network.millions.FeeTaker";
  value: Uint8Array;
}
export interface FeeTakerAmino {
  destination?: string;
  amount?: string;
  type?: FeeTakerType;
}
export interface FeeTakerAminoMsg {
  type: "/lum.network.millions.FeeTaker";
  value: FeeTakerAmino;
}
export interface FeeTakerSDKType {
  destination: string;
  amount: string;
  type: FeeTakerType;
}
export interface Pool {
  poolId: bigint;
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
  nextDrawId: bigint;
  tvlAmount: string;
  depositorsCount: bigint;
  sponsorshipAmount: string;
  lastDrawCreatedAt?: Date | undefined;
  lastDrawState: DrawState;
  availablePrizePool: Coin | undefined;
  feeTakers: FeeTaker[];
  state: PoolState;
  createdAtHeight: bigint;
  updatedAtHeight: bigint;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface PoolProtoMsg {
  typeUrl: "/lum.network.millions.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  pool_id?: string;
  denom?: string;
  native_denom?: string;
  chain_id?: string;
  connection_id?: string;
  transfer_channel_id?: string;
  ica_deposit_port_id?: string;
  ica_prizepool_port_id?: string;
  pool_type?: PoolType;
  validators?: PoolValidatorAmino[];
  bech32_prefix_acc_addr?: string;
  bech32_prefix_val_addr?: string;
  min_deposit_amount?: string;
  draw_schedule?: DrawScheduleAmino | undefined;
  prize_strategy?: PrizeStrategyAmino | undefined;
  unbonding_duration?: DurationAmino | undefined;
  max_unbonding_entries?: string;
  local_address?: string;
  ica_deposit_address?: string;
  ica_prizepool_address?: string;
  next_draw_id?: string;
  tvl_amount?: string;
  depositors_count?: string;
  sponsorship_amount?: string;
  last_draw_created_at?: string | undefined;
  last_draw_state?: DrawState;
  available_prize_pool?: CoinAmino | undefined;
  fee_takers?: FeeTakerAmino[];
  state?: PoolState;
  created_at_height?: string;
  updated_at_height?: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}
export interface PoolAminoMsg {
  type: "/lum.network.millions.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  pool_id: bigint;
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
  next_draw_id: bigint;
  tvl_amount: string;
  depositors_count: bigint;
  sponsorship_amount: string;
  last_draw_created_at?: Date | undefined;
  last_draw_state: DrawState;
  available_prize_pool: CoinSDKType | undefined;
  fee_takers: FeeTakerSDKType[];
  state: PoolState;
  created_at_height: bigint;
  updated_at_height: bigint;
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
  operator_address?: string;
  is_enabled?: boolean;
  bonded_amount?: string;
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
function createBaseFeeTaker(): FeeTaker {
  return {
    destination: "",
    amount: "",
    type: 0
  };
}
export const FeeTaker = {
  typeUrl: "/lum.network.millions.FeeTaker",
  encode(message: FeeTaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.destination !== "") {
      writer.uint32(10).string(message.destination);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeTaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeTaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destination = reader.string();
          break;
        case 2:
          message.amount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.type = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeeTaker>): FeeTaker {
    const message = createBaseFeeTaker();
    message.destination = object.destination ?? "";
    message.amount = object.amount ?? "";
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: FeeTakerAmino): FeeTaker {
    const message = createBaseFeeTaker();
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: FeeTaker): FeeTakerAmino {
    const obj: any = {};
    obj.destination = message.destination === "" ? undefined : message.destination;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.type = message.type === 0 ? undefined : message.type;
    return obj;
  },
  fromAminoMsg(object: FeeTakerAminoMsg): FeeTaker {
    return FeeTaker.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeTakerProtoMsg): FeeTaker {
    return FeeTaker.decode(message.value);
  },
  toProto(message: FeeTaker): Uint8Array {
    return FeeTaker.encode(message).finish();
  },
  toProtoMsg(message: FeeTaker): FeeTakerProtoMsg {
    return {
      typeUrl: "/lum.network.millions.FeeTaker",
      value: FeeTaker.encode(message).finish()
    };
  }
};
function createBasePool(): Pool {
  return {
    poolId: BigInt(0),
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
    nextDrawId: BigInt(0),
    tvlAmount: "",
    depositorsCount: BigInt(0),
    sponsorshipAmount: "",
    lastDrawCreatedAt: undefined,
    lastDrawState: 0,
    availablePrizePool: Coin.fromPartial({}),
    feeTakers: [],
    state: 0,
    createdAtHeight: BigInt(0),
    updatedAtHeight: BigInt(0),
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const Pool = {
  typeUrl: "/lum.network.millions.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
    if (message.nextDrawId !== BigInt(0)) {
      writer.uint32(176).uint64(message.nextDrawId);
    }
    if (message.tvlAmount !== "") {
      writer.uint32(186).string(message.tvlAmount);
    }
    if (message.depositorsCount !== BigInt(0)) {
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
    for (const v of message.feeTakers) {
      FeeTaker.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(256).int32(message.state);
    }
    if (message.createdAtHeight !== BigInt(0)) {
      writer.uint32(264).int64(message.createdAtHeight);
    }
    if (message.updatedAtHeight !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
          message.nextDrawId = reader.uint64();
          break;
        case 23:
          message.tvlAmount = reader.string();
          break;
        case 24:
          message.depositorsCount = reader.uint64();
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
        case 30:
          message.feeTakers.push(FeeTaker.decode(reader, reader.uint32()));
          break;
        case 32:
          message.state = (reader.int32() as any);
          break;
        case 33:
          message.createdAtHeight = reader.int64();
          break;
        case 34:
          message.updatedAtHeight = reader.int64();
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
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
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
    message.nextDrawId = object.nextDrawId !== undefined && object.nextDrawId !== null ? BigInt(object.nextDrawId.toString()) : BigInt(0);
    message.tvlAmount = object.tvlAmount ?? "";
    message.depositorsCount = object.depositorsCount !== undefined && object.depositorsCount !== null ? BigInt(object.depositorsCount.toString()) : BigInt(0);
    message.sponsorshipAmount = object.sponsorshipAmount ?? "";
    message.lastDrawCreatedAt = object.lastDrawCreatedAt ?? undefined;
    message.lastDrawState = object.lastDrawState ?? 0;
    message.availablePrizePool = object.availablePrizePool !== undefined && object.availablePrizePool !== null ? Coin.fromPartial(object.availablePrizePool) : undefined;
    message.feeTakers = object.feeTakers?.map(e => FeeTaker.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? BigInt(object.createdAtHeight.toString()) : BigInt(0);
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? BigInt(object.updatedAtHeight.toString()) : BigInt(0);
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.native_denom !== undefined && object.native_denom !== null) {
      message.nativeDenom = object.native_denom;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.transfer_channel_id !== undefined && object.transfer_channel_id !== null) {
      message.transferChannelId = object.transfer_channel_id;
    }
    if (object.ica_deposit_port_id !== undefined && object.ica_deposit_port_id !== null) {
      message.icaDepositPortId = object.ica_deposit_port_id;
    }
    if (object.ica_prizepool_port_id !== undefined && object.ica_prizepool_port_id !== null) {
      message.icaPrizepoolPortId = object.ica_prizepool_port_id;
    }
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = object.pool_type;
    }
    message.validators = object.validators?.map(e => PoolValidator.fromAmino(e)) || [];
    if (object.bech32_prefix_acc_addr !== undefined && object.bech32_prefix_acc_addr !== null) {
      message.bech32PrefixAccAddr = object.bech32_prefix_acc_addr;
    }
    if (object.bech32_prefix_val_addr !== undefined && object.bech32_prefix_val_addr !== null) {
      message.bech32PrefixValAddr = object.bech32_prefix_val_addr;
    }
    if (object.min_deposit_amount !== undefined && object.min_deposit_amount !== null) {
      message.minDepositAmount = object.min_deposit_amount;
    }
    if (object.draw_schedule !== undefined && object.draw_schedule !== null) {
      message.drawSchedule = DrawSchedule.fromAmino(object.draw_schedule);
    }
    if (object.prize_strategy !== undefined && object.prize_strategy !== null) {
      message.prizeStrategy = PrizeStrategy.fromAmino(object.prize_strategy);
    }
    if (object.unbonding_duration !== undefined && object.unbonding_duration !== null) {
      message.unbondingDuration = Duration.fromAmino(object.unbonding_duration);
    }
    if (object.max_unbonding_entries !== undefined && object.max_unbonding_entries !== null) {
      message.maxUnbondingEntries = object.max_unbonding_entries;
    }
    if (object.local_address !== undefined && object.local_address !== null) {
      message.localAddress = object.local_address;
    }
    if (object.ica_deposit_address !== undefined && object.ica_deposit_address !== null) {
      message.icaDepositAddress = object.ica_deposit_address;
    }
    if (object.ica_prizepool_address !== undefined && object.ica_prizepool_address !== null) {
      message.icaPrizepoolAddress = object.ica_prizepool_address;
    }
    if (object.next_draw_id !== undefined && object.next_draw_id !== null) {
      message.nextDrawId = BigInt(object.next_draw_id);
    }
    if (object.tvl_amount !== undefined && object.tvl_amount !== null) {
      message.tvlAmount = object.tvl_amount;
    }
    if (object.depositors_count !== undefined && object.depositors_count !== null) {
      message.depositorsCount = BigInt(object.depositors_count);
    }
    if (object.sponsorship_amount !== undefined && object.sponsorship_amount !== null) {
      message.sponsorshipAmount = object.sponsorship_amount;
    }
    if (object.last_draw_created_at !== undefined && object.last_draw_created_at !== null) {
      message.lastDrawCreatedAt = fromTimestamp(Timestamp.fromAmino(object.last_draw_created_at));
    }
    if (object.last_draw_state !== undefined && object.last_draw_state !== null) {
      message.lastDrawState = object.last_draw_state;
    }
    if (object.available_prize_pool !== undefined && object.available_prize_pool !== null) {
      message.availablePrizePool = Coin.fromAmino(object.available_prize_pool);
    }
    message.feeTakers = object.fee_takers?.map(e => FeeTaker.fromAmino(e)) || [];
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.created_at_height !== undefined && object.created_at_height !== null) {
      message.createdAtHeight = BigInt(object.created_at_height);
    }
    if (object.updated_at_height !== undefined && object.updated_at_height !== null) {
      message.updatedAtHeight = BigInt(object.updated_at_height);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = fromTimestamp(Timestamp.fromAmino(object.updated_at));
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.native_denom = message.nativeDenom === "" ? undefined : message.nativeDenom;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.transfer_channel_id = message.transferChannelId === "" ? undefined : message.transferChannelId;
    obj.ica_deposit_port_id = message.icaDepositPortId === "" ? undefined : message.icaDepositPortId;
    obj.ica_prizepool_port_id = message.icaPrizepoolPortId === "" ? undefined : message.icaPrizepoolPortId;
    obj.pool_type = message.poolType === 0 ? undefined : message.poolType;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? PoolValidator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.bech32_prefix_acc_addr = message.bech32PrefixAccAddr === "" ? undefined : message.bech32PrefixAccAddr;
    obj.bech32_prefix_val_addr = message.bech32PrefixValAddr === "" ? undefined : message.bech32PrefixValAddr;
    obj.min_deposit_amount = message.minDepositAmount === "" ? undefined : message.minDepositAmount;
    obj.draw_schedule = message.drawSchedule ? DrawSchedule.toAmino(message.drawSchedule) : undefined;
    obj.prize_strategy = message.prizeStrategy ? PrizeStrategy.toAmino(message.prizeStrategy) : undefined;
    obj.unbonding_duration = message.unbondingDuration ? Duration.toAmino(message.unbondingDuration) : undefined;
    obj.max_unbonding_entries = message.maxUnbondingEntries === "" ? undefined : message.maxUnbondingEntries;
    obj.local_address = message.localAddress === "" ? undefined : message.localAddress;
    obj.ica_deposit_address = message.icaDepositAddress === "" ? undefined : message.icaDepositAddress;
    obj.ica_prizepool_address = message.icaPrizepoolAddress === "" ? undefined : message.icaPrizepoolAddress;
    obj.next_draw_id = message.nextDrawId !== BigInt(0) ? message.nextDrawId.toString() : undefined;
    obj.tvl_amount = message.tvlAmount === "" ? undefined : message.tvlAmount;
    obj.depositors_count = message.depositorsCount !== BigInt(0) ? message.depositorsCount.toString() : undefined;
    obj.sponsorship_amount = message.sponsorshipAmount === "" ? undefined : message.sponsorshipAmount;
    obj.last_draw_created_at = message.lastDrawCreatedAt ? Timestamp.toAmino(toTimestamp(message.lastDrawCreatedAt)) : undefined;
    obj.last_draw_state = message.lastDrawState === 0 ? undefined : message.lastDrawState;
    obj.available_prize_pool = message.availablePrizePool ? Coin.toAmino(message.availablePrizePool) : undefined;
    if (message.feeTakers) {
      obj.fee_takers = message.feeTakers.map(e => e ? FeeTaker.toAmino(e) : undefined);
    } else {
      obj.fee_takers = message.feeTakers;
    }
    obj.state = message.state === 0 ? undefined : message.state;
    obj.created_at_height = message.createdAtHeight !== BigInt(0) ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight !== BigInt(0) ? message.updatedAtHeight.toString() : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.updated_at = message.updatedAt ? Timestamp.toAmino(toTimestamp(message.updatedAt)) : undefined;
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
  typeUrl: "/lum.network.millions.PoolValidator",
  encode(message: PoolValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): PoolValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<PoolValidator>): PoolValidator {
    const message = createBasePoolValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.isEnabled = object.isEnabled ?? false;
    message.bondedAmount = object.bondedAmount ?? "";
    return message;
  },
  fromAmino(object: PoolValidatorAmino): PoolValidator {
    const message = createBasePoolValidator();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.is_enabled !== undefined && object.is_enabled !== null) {
      message.isEnabled = object.is_enabled;
    }
    if (object.bonded_amount !== undefined && object.bonded_amount !== null) {
      message.bondedAmount = object.bonded_amount;
    }
    return message;
  },
  toAmino(message: PoolValidator): PoolValidatorAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.is_enabled = message.isEnabled === false ? undefined : message.isEnabled;
    obj.bonded_amount = message.bondedAmount === "" ? undefined : message.bondedAmount;
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