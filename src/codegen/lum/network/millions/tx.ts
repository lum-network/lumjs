import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BoolValue, BoolValueAmino, BoolValueSDKType } from "../../../google/protobuf/wrappers";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DrawSchedule, DrawScheduleAmino, DrawScheduleSDKType } from "./draw_schedule";
import { PrizeStrategy, PrizeStrategyAmino, PrizeStrategySDKType } from "./prize_strategy";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export interface MsgUpdateParams {
  minDepositAmount?: string;
  maxPrizeStrategyBatches?: string;
  maxPrizeBatchQuantity?: string;
  minDrawScheduleDelta?: Duration | undefined;
  maxDrawScheduleDelta?: Duration | undefined;
  prizeExpirationDelta?: Duration | undefined;
  feesStakers?: string;
  minDepositDrawDelta?: Duration | undefined;
  updaterAddress: string;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/lum.network.millions.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  min_deposit_amount?: string;
  max_prize_strategy_batches?: string;
  max_prize_batch_quantity?: string;
  min_draw_schedule_delta?: DurationAmino | undefined;
  max_draw_schedule_delta?: DurationAmino | undefined;
  prize_expiration_delta?: DurationAmino | undefined;
  fees_stakers?: string;
  min_deposit_draw_delta?: DurationAmino | undefined;
  updater_address?: string;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/lum.network.millions.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  min_deposit_amount?: string;
  max_prize_strategy_batches?: string;
  max_prize_batch_quantity?: string;
  min_draw_schedule_delta?: DurationSDKType | undefined;
  max_draw_schedule_delta?: DurationSDKType | undefined;
  prize_expiration_delta?: DurationSDKType | undefined;
  fees_stakers?: string;
  min_deposit_draw_delta?: DurationSDKType | undefined;
  updater_address: string;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lum.network.millions.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgRegisterPool {
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
  creatorAddress: string;
}
export interface MsgRegisterPoolProtoMsg {
  typeUrl: "/lum.network.millions.MsgRegisterPool";
  value: Uint8Array;
}
export interface MsgRegisterPoolAmino {
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
  creator_address?: string;
}
export interface MsgRegisterPoolAminoMsg {
  type: "/lum.network.millions.MsgRegisterPool";
  value: MsgRegisterPoolAmino;
}
export interface MsgRegisterPoolSDKType {
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
  creator_address: string;
}
export interface MsgRegisterPoolResponse {
  poolId: bigint;
}
export interface MsgRegisterPoolResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgRegisterPoolResponse";
  value: Uint8Array;
}
export interface MsgRegisterPoolResponseAmino {
  pool_id?: string;
}
export interface MsgRegisterPoolResponseAminoMsg {
  type: "/lum.network.millions.MsgRegisterPoolResponse";
  value: MsgRegisterPoolResponseAmino;
}
export interface MsgRegisterPoolResponseSDKType {
  pool_id: bigint;
}
export interface MsgUpdatePool {
  poolId: bigint;
  validators?: string[];
  minDepositAmount?: string;
  drawSchedule?: DrawSchedule | undefined;
  prizeStrategy?: PrizeStrategy | undefined;
  updaterAddress: string;
}
export interface MsgUpdatePoolProtoMsg {
  typeUrl: "/lum.network.millions.MsgUpdatePool";
  value: Uint8Array;
}
export interface MsgUpdatePoolAmino {
  pool_id?: string;
  validators?: string[];
  min_deposit_amount?: string;
  draw_schedule?: DrawScheduleAmino | undefined;
  prize_strategy?: PrizeStrategyAmino | undefined;
  updater_address?: string;
}
export interface MsgUpdatePoolAminoMsg {
  type: "/lum.network.millions.MsgUpdatePool";
  value: MsgUpdatePoolAmino;
}
export interface MsgUpdatePoolSDKType {
  pool_id: bigint;
  validators?: string[];
  min_deposit_amount?: string;
  draw_schedule?: DrawScheduleSDKType | undefined;
  prize_strategy?: PrizeStrategySDKType | undefined;
  updater_address: string;
}
export interface MsgUpdatePoolResponse {}
export interface MsgUpdatePoolResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgUpdatePoolResponse";
  value: Uint8Array;
}
export interface MsgUpdatePoolResponseAmino {}
export interface MsgUpdatePoolResponseAminoMsg {
  type: "/lum.network.millions.MsgUpdatePoolResponse";
  value: MsgUpdatePoolResponseAmino;
}
export interface MsgUpdatePoolResponseSDKType {}
export interface MsgDeposit {
  poolId: bigint;
  amount: Coin | undefined;
  depositorAddress: string;
  winnerAddress: string;
  isSponsor: boolean;
}
export interface MsgDepositProtoMsg {
  typeUrl: "/lum.network.millions.MsgDeposit";
  value: Uint8Array;
}
export interface MsgDepositAmino {
  pool_id?: string;
  amount?: CoinAmino | undefined;
  depositor_address?: string;
  winner_address?: string;
  is_sponsor?: boolean;
}
export interface MsgDepositAminoMsg {
  type: "/lum.network.millions.MsgDeposit";
  value: MsgDepositAmino;
}
export interface MsgDepositSDKType {
  pool_id: bigint;
  amount: CoinSDKType | undefined;
  depositor_address: string;
  winner_address: string;
  is_sponsor: boolean;
}
export interface MsgDepositResponse {
  depositId: bigint;
}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgDepositResponse";
  value: Uint8Array;
}
export interface MsgDepositResponseAmino {
  deposit_id?: string;
}
export interface MsgDepositResponseAminoMsg {
  type: "/lum.network.millions.MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
export interface MsgDepositResponseSDKType {
  deposit_id: bigint;
}
export interface MsgDepositRetry {
  poolId: bigint;
  depositId: bigint;
  depositorAddress: string;
}
export interface MsgDepositRetryProtoMsg {
  typeUrl: "/lum.network.millions.MsgDepositRetry";
  value: Uint8Array;
}
export interface MsgDepositRetryAmino {
  pool_id?: string;
  deposit_id?: string;
  depositor_address?: string;
}
export interface MsgDepositRetryAminoMsg {
  type: "/lum.network.millions.MsgDepositRetry";
  value: MsgDepositRetryAmino;
}
export interface MsgDepositRetrySDKType {
  pool_id: bigint;
  deposit_id: bigint;
  depositor_address: string;
}
export interface MsgDepositEdit {
  poolId: bigint;
  depositId: bigint;
  winnerAddress: string;
  isSponsor?: BoolValue | undefined;
  depositorAddress: string;
}
export interface MsgDepositEditProtoMsg {
  typeUrl: "/lum.network.millions.MsgDepositEdit";
  value: Uint8Array;
}
export interface MsgDepositEditAmino {
  pool_id?: string;
  deposit_id?: string;
  winner_address?: string;
  is_sponsor?: BoolValueAmino | undefined;
  depositor_address?: string;
}
export interface MsgDepositEditAminoMsg {
  type: "/lum.network.millions.MsgDepositEdit";
  value: MsgDepositEditAmino;
}
export interface MsgDepositEditSDKType {
  pool_id: bigint;
  deposit_id: bigint;
  winner_address: string;
  is_sponsor?: BoolValueSDKType | undefined;
  depositor_address: string;
}
export interface MsgDepositEditResponse {}
export interface MsgDepositEditResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgDepositEditResponse";
  value: Uint8Array;
}
export interface MsgDepositEditResponseAmino {}
export interface MsgDepositEditResponseAminoMsg {
  type: "/lum.network.millions.MsgDepositEditResponse";
  value: MsgDepositEditResponseAmino;
}
export interface MsgDepositEditResponseSDKType {}
export interface MsgDepositRetryResponse {}
export interface MsgDepositRetryResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgDepositRetryResponse";
  value: Uint8Array;
}
export interface MsgDepositRetryResponseAmino {}
export interface MsgDepositRetryResponseAminoMsg {
  type: "/lum.network.millions.MsgDepositRetryResponse";
  value: MsgDepositRetryResponseAmino;
}
export interface MsgDepositRetryResponseSDKType {}
export interface MsgClaimPrize {
  poolId: bigint;
  drawId: bigint;
  prizeId: bigint;
  winnerAddress: string;
}
export interface MsgClaimPrizeProtoMsg {
  typeUrl: "/lum.network.millions.MsgClaimPrize";
  value: Uint8Array;
}
export interface MsgClaimPrizeAmino {
  pool_id?: string;
  draw_id?: string;
  prize_id?: string;
  winner_address?: string;
}
export interface MsgClaimPrizeAminoMsg {
  type: "/lum.network.millions.MsgClaimPrize";
  value: MsgClaimPrizeAmino;
}
export interface MsgClaimPrizeSDKType {
  pool_id: bigint;
  draw_id: bigint;
  prize_id: bigint;
  winner_address: string;
}
export interface MsgClaimPrizeResponse {}
export interface MsgClaimPrizeResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgClaimPrizeResponse";
  value: Uint8Array;
}
export interface MsgClaimPrizeResponseAmino {}
export interface MsgClaimPrizeResponseAminoMsg {
  type: "/lum.network.millions.MsgClaimPrizeResponse";
  value: MsgClaimPrizeResponseAmino;
}
export interface MsgClaimPrizeResponseSDKType {}
export interface MsgWithdrawDeposit {
  poolId: bigint;
  depositId: bigint;
  depositorAddress: string;
  toAddress: string;
}
export interface MsgWithdrawDepositProtoMsg {
  typeUrl: "/lum.network.millions.MsgWithdrawDeposit";
  value: Uint8Array;
}
export interface MsgWithdrawDepositAmino {
  pool_id?: string;
  deposit_id?: string;
  depositor_address?: string;
  to_address?: string;
}
export interface MsgWithdrawDepositAminoMsg {
  type: "/lum.network.millions.MsgWithdrawDeposit";
  value: MsgWithdrawDepositAmino;
}
export interface MsgWithdrawDepositSDKType {
  pool_id: bigint;
  deposit_id: bigint;
  depositor_address: string;
  to_address: string;
}
export interface MsgWithdrawDepositResponse {
  withdrawalId: bigint;
}
export interface MsgWithdrawDepositResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgWithdrawDepositResponse";
  value: Uint8Array;
}
export interface MsgWithdrawDepositResponseAmino {
  withdrawal_id?: string;
}
export interface MsgWithdrawDepositResponseAminoMsg {
  type: "/lum.network.millions.MsgWithdrawDepositResponse";
  value: MsgWithdrawDepositResponseAmino;
}
export interface MsgWithdrawDepositResponseSDKType {
  withdrawal_id: bigint;
}
export interface MsgWithdrawDepositRetry {
  poolId: bigint;
  withdrawalId: bigint;
  depositorAddress: string;
}
export interface MsgWithdrawDepositRetryProtoMsg {
  typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry";
  value: Uint8Array;
}
export interface MsgWithdrawDepositRetryAmino {
  pool_id?: string;
  withdrawal_id?: string;
  depositor_address?: string;
}
export interface MsgWithdrawDepositRetryAminoMsg {
  type: "/lum.network.millions.MsgWithdrawDepositRetry";
  value: MsgWithdrawDepositRetryAmino;
}
export interface MsgWithdrawDepositRetrySDKType {
  pool_id: bigint;
  withdrawal_id: bigint;
  depositor_address: string;
}
export interface MsgWithdrawDepositRetryResponse {}
export interface MsgWithdrawDepositRetryResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgWithdrawDepositRetryResponse";
  value: Uint8Array;
}
export interface MsgWithdrawDepositRetryResponseAmino {}
export interface MsgWithdrawDepositRetryResponseAminoMsg {
  type: "/lum.network.millions.MsgWithdrawDepositRetryResponse";
  value: MsgWithdrawDepositRetryResponseAmino;
}
export interface MsgWithdrawDepositRetryResponseSDKType {}
export interface MsgDrawRetry {
  poolId: bigint;
  drawId: bigint;
  drawRetryAddress: string;
}
export interface MsgDrawRetryProtoMsg {
  typeUrl: "/lum.network.millions.MsgDrawRetry";
  value: Uint8Array;
}
export interface MsgDrawRetryAmino {
  pool_id?: string;
  draw_id?: string;
  draw_retry_address?: string;
}
export interface MsgDrawRetryAminoMsg {
  type: "/lum.network.millions.MsgDrawRetry";
  value: MsgDrawRetryAmino;
}
export interface MsgDrawRetrySDKType {
  pool_id: bigint;
  draw_id: bigint;
  draw_retry_address: string;
}
export interface MsgDrawRetryResponse {}
export interface MsgDrawRetryResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgDrawRetryResponse";
  value: Uint8Array;
}
export interface MsgDrawRetryResponseAmino {}
export interface MsgDrawRetryResponseAminoMsg {
  type: "/lum.network.millions.MsgDrawRetryResponse";
  value: MsgDrawRetryResponseAmino;
}
export interface MsgDrawRetryResponseSDKType {}
export interface MsgRestoreInterchainAccounts {
  poolId: bigint;
  restorerAddress: string;
}
export interface MsgRestoreInterchainAccountsProtoMsg {
  typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts";
  value: Uint8Array;
}
export interface MsgRestoreInterchainAccountsAmino {
  pool_id?: string;
  restorer_address?: string;
}
export interface MsgRestoreInterchainAccountsAminoMsg {
  type: "/lum.network.millions.MsgRestoreInterchainAccounts";
  value: MsgRestoreInterchainAccountsAmino;
}
export interface MsgRestoreInterchainAccountsSDKType {
  pool_id: bigint;
  restorer_address: string;
}
export interface MsgRestoreInterchainAccountsResponse {}
export interface MsgRestoreInterchainAccountsResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgRestoreInterchainAccountsResponse";
  value: Uint8Array;
}
export interface MsgRestoreInterchainAccountsResponseAmino {}
export interface MsgRestoreInterchainAccountsResponseAminoMsg {
  type: "/lum.network.millions.MsgRestoreInterchainAccountsResponse";
  value: MsgRestoreInterchainAccountsResponseAmino;
}
export interface MsgRestoreInterchainAccountsResponseSDKType {}
export interface MsgGenerateSeed {
  requesterAddress: string;
}
export interface MsgGenerateSeedProtoMsg {
  typeUrl: "/lum.network.millions.MsgGenerateSeed";
  value: Uint8Array;
}
export interface MsgGenerateSeedAmino {
  requester_address?: string;
}
export interface MsgGenerateSeedAminoMsg {
  type: "/lum.network.millions.MsgGenerateSeed";
  value: MsgGenerateSeedAmino;
}
export interface MsgGenerateSeedSDKType {
  requester_address: string;
}
export interface MsgGenerateSeedResponse {
  seed: bigint;
}
export interface MsgGenerateSeedResponseProtoMsg {
  typeUrl: "/lum.network.millions.MsgGenerateSeedResponse";
  value: Uint8Array;
}
export interface MsgGenerateSeedResponseAmino {
  seed?: string;
}
export interface MsgGenerateSeedResponseAminoMsg {
  type: "/lum.network.millions.MsgGenerateSeedResponse";
  value: MsgGenerateSeedResponseAmino;
}
export interface MsgGenerateSeedResponseSDKType {
  seed: bigint;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
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
  typeUrl: "/lum.network.millions.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(58).string(Decimal.fromUserInput(message.feesStakers, 18).atomics);
    }
    if (message.minDepositDrawDelta !== undefined) {
      Duration.encode(message.minDepositDrawDelta, writer.uint32(66).fork()).ldelim();
    }
    if (message.updaterAddress !== "") {
      writer.uint32(74).string(message.updaterAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.feesStakers = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
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
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
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
    if (object.fees_stakers !== undefined && object.fees_stakers !== null) {
      message.feesStakers = object.fees_stakers;
    }
    if (object.min_deposit_draw_delta !== undefined && object.min_deposit_draw_delta !== null) {
      message.minDepositDrawDelta = Duration.fromAmino(object.min_deposit_draw_delta);
    }
    if (object.updater_address !== undefined && object.updater_address !== null) {
      message.updaterAddress = object.updater_address;
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
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
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/lum.network.millions.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterPool(): MsgRegisterPool {
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
  typeUrl: "/lum.network.millions.MsgRegisterPool",
  encode(message: MsgRegisterPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(42).string(v!);
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgRegisterPool>): MsgRegisterPool {
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
  fromAmino(object: MsgRegisterPoolAmino): MsgRegisterPool {
    const message = createBaseMsgRegisterPool();
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
    if (object.creator_address !== undefined && object.creator_address !== null) {
      message.creatorAddress = object.creator_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterPool): MsgRegisterPoolAmino {
    const obj: any = {};
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
    obj.creator_address = message.creatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPoolAminoMsg): MsgRegisterPool {
    return MsgRegisterPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterPoolProtoMsg): MsgRegisterPool {
    return MsgRegisterPool.decode(message.value);
  },
  toProto(message: MsgRegisterPool): Uint8Array {
    return MsgRegisterPool.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPool): MsgRegisterPoolProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgRegisterPool",
      value: MsgRegisterPool.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterPoolResponse(): MsgRegisterPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgRegisterPoolResponse = {
  typeUrl: "/lum.network.millions.MsgRegisterPoolResponse",
  encode(message: MsgRegisterPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgRegisterPoolResponse>): MsgRegisterPoolResponse {
    const message = createBaseMsgRegisterPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRegisterPoolResponseAmino): MsgRegisterPoolResponse {
    const message = createBaseMsgRegisterPoolResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgRegisterPoolResponse): MsgRegisterPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPoolResponseAminoMsg): MsgRegisterPoolResponse {
    return MsgRegisterPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterPoolResponseProtoMsg): MsgRegisterPoolResponse {
    return MsgRegisterPoolResponse.decode(message.value);
  },
  toProto(message: MsgRegisterPoolResponse): Uint8Array {
    return MsgRegisterPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPoolResponse): MsgRegisterPoolResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgRegisterPoolResponse",
      value: MsgRegisterPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePool(): MsgUpdatePool {
  return {
    poolId: BigInt(0),
    validators: [],
    minDepositAmount: undefined,
    drawSchedule: undefined,
    prizeStrategy: undefined,
    updaterAddress: ""
  };
}
export const MsgUpdatePool = {
  typeUrl: "/lum.network.millions.MsgUpdatePool",
  encode(message: MsgUpdatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.validators) {
      writer.uint32(18).string(v!);
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => e) || [];
    message.minDepositAmount = object.minDepositAmount ?? undefined;
    message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? DrawSchedule.fromPartial(object.drawSchedule) : undefined;
    message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
    message.updaterAddress = object.updaterAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUpdatePoolAmino): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
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
    if (object.updater_address !== undefined && object.updater_address !== null) {
      message.updaterAddress = object.updater_address;
    }
    return message;
  },
  toAmino(message: MsgUpdatePool): MsgUpdatePoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = [];
    }
    obj.min_deposit_amount = message.minDepositAmount;
    obj.draw_schedule = message.drawSchedule ? DrawSchedule.toAmino(message.drawSchedule) : undefined;
    obj.prize_strategy = message.prizeStrategy ? PrizeStrategy.toAmino(message.prizeStrategy) : undefined;
    obj.updater_address = message.updaterAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolAminoMsg): MsgUpdatePool {
    return MsgUpdatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolProtoMsg): MsgUpdatePool {
    return MsgUpdatePool.decode(message.value);
  },
  toProto(message: MsgUpdatePool): Uint8Array {
    return MsgUpdatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePool): MsgUpdatePoolProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgUpdatePool",
      value: MsgUpdatePool.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return {};
}
export const MsgUpdatePoolResponse = {
  typeUrl: "/lum.network.millions.MsgUpdatePoolResponse",
  encode(_: MsgUpdatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePoolResponseAmino): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
  toAmino(_: MsgUpdatePoolResponse): MsgUpdatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolResponseAminoMsg): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolResponseProtoMsg): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePoolResponse): Uint8Array {
    return MsgUpdatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolResponse): MsgUpdatePoolResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgUpdatePoolResponse",
      value: MsgUpdatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    poolId: BigInt(0),
    amount: Coin.fromPartial({}),
    depositorAddress: "",
    winnerAddress: "",
    isSponsor: false
  };
}
export const MsgDeposit = {
  typeUrl: "/lum.network.millions.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.depositorAddress = object.depositorAddress ?? "";
    message.winnerAddress = object.winnerAddress ?? "";
    message.isSponsor = object.isSponsor ?? false;
    return message;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.winner_address !== undefined && object.winner_address !== null) {
      message.winnerAddress = object.winner_address;
    }
    if (object.is_sponsor !== undefined && object.is_sponsor !== null) {
      message.isSponsor = object.is_sponsor;
    }
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.depositor_address = message.depositorAddress;
    obj.winner_address = message.winnerAddress;
    obj.is_sponsor = message.isSponsor;
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {
    depositId: BigInt(0)
  };
}
export const MsgDepositResponse = {
  typeUrl: "/lum.network.millions.MsgDepositResponse",
  encode(message: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositId !== BigInt(0)) {
      writer.uint32(8).uint64(message.depositId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    message.depositId = object.depositId !== undefined && object.depositId !== null ? BigInt(object.depositId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    if (object.deposit_id !== undefined && object.deposit_id !== null) {
      message.depositId = BigInt(object.deposit_id);
    }
    return message;
  },
  toAmino(message: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDepositRetry(): MsgDepositRetry {
  return {
    poolId: BigInt(0),
    depositId: BigInt(0),
    depositorAddress: ""
  };
}
export const MsgDepositRetry = {
  typeUrl: "/lum.network.millions.MsgDepositRetry",
  encode(message: MsgDepositRetry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.depositId !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositId);
    }
    if (message.depositorAddress !== "") {
      writer.uint32(26).string(message.depositorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositRetry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgDepositRetry>): MsgDepositRetry {
    const message = createBaseMsgDepositRetry();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.depositId = object.depositId !== undefined && object.depositId !== null ? BigInt(object.depositId.toString()) : BigInt(0);
    message.depositorAddress = object.depositorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDepositRetryAmino): MsgDepositRetry {
    const message = createBaseMsgDepositRetry();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.deposit_id !== undefined && object.deposit_id !== null) {
      message.depositId = BigInt(object.deposit_id);
    }
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    return message;
  },
  toAmino(message: MsgDepositRetry): MsgDepositRetryAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
    obj.depositor_address = message.depositorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDepositRetryAminoMsg): MsgDepositRetry {
    return MsgDepositRetry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositRetryProtoMsg): MsgDepositRetry {
    return MsgDepositRetry.decode(message.value);
  },
  toProto(message: MsgDepositRetry): Uint8Array {
    return MsgDepositRetry.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositRetry): MsgDepositRetryProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgDepositRetry",
      value: MsgDepositRetry.encode(message).finish()
    };
  }
};
function createBaseMsgDepositEdit(): MsgDepositEdit {
  return {
    poolId: BigInt(0),
    depositId: BigInt(0),
    winnerAddress: "",
    isSponsor: undefined,
    depositorAddress: ""
  };
}
export const MsgDepositEdit = {
  typeUrl: "/lum.network.millions.MsgDepositEdit",
  encode(message: MsgDepositEdit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.depositId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositEdit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgDepositEdit>): MsgDepositEdit {
    const message = createBaseMsgDepositEdit();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.depositId = object.depositId !== undefined && object.depositId !== null ? BigInt(object.depositId.toString()) : BigInt(0);
    message.winnerAddress = object.winnerAddress ?? "";
    message.isSponsor = object.isSponsor !== undefined && object.isSponsor !== null ? BoolValue.fromPartial(object.isSponsor) : undefined;
    message.depositorAddress = object.depositorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDepositEditAmino): MsgDepositEdit {
    const message = createBaseMsgDepositEdit();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.deposit_id !== undefined && object.deposit_id !== null) {
      message.depositId = BigInt(object.deposit_id);
    }
    if (object.winner_address !== undefined && object.winner_address !== null) {
      message.winnerAddress = object.winner_address;
    }
    if (object.is_sponsor !== undefined && object.is_sponsor !== null) {
      message.isSponsor = BoolValue.fromAmino(object.is_sponsor);
    }
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    return message;
  },
  toAmino(message: MsgDepositEdit): MsgDepositEditAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
    obj.winner_address = message.winnerAddress;
    obj.is_sponsor = message.isSponsor ? BoolValue.toAmino(message.isSponsor) : undefined;
    obj.depositor_address = message.depositorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDepositEditAminoMsg): MsgDepositEdit {
    return MsgDepositEdit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositEditProtoMsg): MsgDepositEdit {
    return MsgDepositEdit.decode(message.value);
  },
  toProto(message: MsgDepositEdit): Uint8Array {
    return MsgDepositEdit.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositEdit): MsgDepositEditProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgDepositEdit",
      value: MsgDepositEdit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositEditResponse(): MsgDepositEditResponse {
  return {};
}
export const MsgDepositEditResponse = {
  typeUrl: "/lum.network.millions.MsgDepositEditResponse",
  encode(_: MsgDepositEditResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositEditResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgDepositEditResponse>): MsgDepositEditResponse {
    const message = createBaseMsgDepositEditResponse();
    return message;
  },
  fromAmino(_: MsgDepositEditResponseAmino): MsgDepositEditResponse {
    const message = createBaseMsgDepositEditResponse();
    return message;
  },
  toAmino(_: MsgDepositEditResponse): MsgDepositEditResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositEditResponseAminoMsg): MsgDepositEditResponse {
    return MsgDepositEditResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositEditResponseProtoMsg): MsgDepositEditResponse {
    return MsgDepositEditResponse.decode(message.value);
  },
  toProto(message: MsgDepositEditResponse): Uint8Array {
    return MsgDepositEditResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositEditResponse): MsgDepositEditResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgDepositEditResponse",
      value: MsgDepositEditResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDepositRetryResponse(): MsgDepositRetryResponse {
  return {};
}
export const MsgDepositRetryResponse = {
  typeUrl: "/lum.network.millions.MsgDepositRetryResponse",
  encode(_: MsgDepositRetryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositRetryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgDepositRetryResponse>): MsgDepositRetryResponse {
    const message = createBaseMsgDepositRetryResponse();
    return message;
  },
  fromAmino(_: MsgDepositRetryResponseAmino): MsgDepositRetryResponse {
    const message = createBaseMsgDepositRetryResponse();
    return message;
  },
  toAmino(_: MsgDepositRetryResponse): MsgDepositRetryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositRetryResponseAminoMsg): MsgDepositRetryResponse {
    return MsgDepositRetryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositRetryResponseProtoMsg): MsgDepositRetryResponse {
    return MsgDepositRetryResponse.decode(message.value);
  },
  toProto(message: MsgDepositRetryResponse): Uint8Array {
    return MsgDepositRetryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositRetryResponse): MsgDepositRetryResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgDepositRetryResponse",
      value: MsgDepositRetryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimPrize(): MsgClaimPrize {
  return {
    poolId: BigInt(0),
    drawId: BigInt(0),
    prizeId: BigInt(0),
    winnerAddress: ""
  };
}
export const MsgClaimPrize = {
  typeUrl: "/lum.network.millions.MsgClaimPrize",
  encode(message: MsgClaimPrize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (message.prizeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.prizeId);
    }
    if (message.winnerAddress !== "") {
      writer.uint32(34).string(message.winnerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimPrize {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgClaimPrize>): MsgClaimPrize {
    const message = createBaseMsgClaimPrize();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? BigInt(object.prizeId.toString()) : BigInt(0);
    message.winnerAddress = object.winnerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgClaimPrizeAmino): MsgClaimPrize {
    const message = createBaseMsgClaimPrize();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    if (object.prize_id !== undefined && object.prize_id !== null) {
      message.prizeId = BigInt(object.prize_id);
    }
    if (object.winner_address !== undefined && object.winner_address !== null) {
      message.winnerAddress = object.winner_address;
    }
    return message;
  },
  toAmino(message: MsgClaimPrize): MsgClaimPrizeAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
    obj.prize_id = message.prizeId ? message.prizeId.toString() : undefined;
    obj.winner_address = message.winnerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgClaimPrizeAminoMsg): MsgClaimPrize {
    return MsgClaimPrize.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimPrizeProtoMsg): MsgClaimPrize {
    return MsgClaimPrize.decode(message.value);
  },
  toProto(message: MsgClaimPrize): Uint8Array {
    return MsgClaimPrize.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimPrize): MsgClaimPrizeProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgClaimPrize",
      value: MsgClaimPrize.encode(message).finish()
    };
  }
};
function createBaseMsgClaimPrizeResponse(): MsgClaimPrizeResponse {
  return {};
}
export const MsgClaimPrizeResponse = {
  typeUrl: "/lum.network.millions.MsgClaimPrizeResponse",
  encode(_: MsgClaimPrizeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimPrizeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgClaimPrizeResponse>): MsgClaimPrizeResponse {
    const message = createBaseMsgClaimPrizeResponse();
    return message;
  },
  fromAmino(_: MsgClaimPrizeResponseAmino): MsgClaimPrizeResponse {
    const message = createBaseMsgClaimPrizeResponse();
    return message;
  },
  toAmino(_: MsgClaimPrizeResponse): MsgClaimPrizeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimPrizeResponseAminoMsg): MsgClaimPrizeResponse {
    return MsgClaimPrizeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimPrizeResponseProtoMsg): MsgClaimPrizeResponse {
    return MsgClaimPrizeResponse.decode(message.value);
  },
  toProto(message: MsgClaimPrizeResponse): Uint8Array {
    return MsgClaimPrizeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimPrizeResponse): MsgClaimPrizeResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgClaimPrizeResponse",
      value: MsgClaimPrizeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDeposit(): MsgWithdrawDeposit {
  return {
    poolId: BigInt(0),
    depositId: BigInt(0),
    depositorAddress: "",
    toAddress: ""
  };
}
export const MsgWithdrawDeposit = {
  typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
  encode(message: MsgWithdrawDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.depositId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgWithdrawDeposit>): MsgWithdrawDeposit {
    const message = createBaseMsgWithdrawDeposit();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.depositId = object.depositId !== undefined && object.depositId !== null ? BigInt(object.depositId.toString()) : BigInt(0);
    message.depositorAddress = object.depositorAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawDepositAmino): MsgWithdrawDeposit {
    const message = createBaseMsgWithdrawDeposit();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.deposit_id !== undefined && object.deposit_id !== null) {
      message.depositId = BigInt(object.deposit_id);
    }
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawDeposit): MsgWithdrawDepositAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
    obj.depositor_address = message.depositorAddress;
    obj.to_address = message.toAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDepositAminoMsg): MsgWithdrawDeposit {
    return MsgWithdrawDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawDepositProtoMsg): MsgWithdrawDeposit {
    return MsgWithdrawDeposit.decode(message.value);
  },
  toProto(message: MsgWithdrawDeposit): Uint8Array {
    return MsgWithdrawDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDeposit): MsgWithdrawDepositProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
      value: MsgWithdrawDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDepositResponse(): MsgWithdrawDepositResponse {
  return {
    withdrawalId: BigInt(0)
  };
}
export const MsgWithdrawDepositResponse = {
  typeUrl: "/lum.network.millions.MsgWithdrawDepositResponse",
  encode(message: MsgWithdrawDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.withdrawalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgWithdrawDepositResponse>): MsgWithdrawDepositResponse {
    const message = createBaseMsgWithdrawDepositResponse();
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? BigInt(object.withdrawalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawDepositResponseAmino): MsgWithdrawDepositResponse {
    const message = createBaseMsgWithdrawDepositResponse();
    if (object.withdrawal_id !== undefined && object.withdrawal_id !== null) {
      message.withdrawalId = BigInt(object.withdrawal_id);
    }
    return message;
  },
  toAmino(message: MsgWithdrawDepositResponse): MsgWithdrawDepositResponseAmino {
    const obj: any = {};
    obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDepositResponseAminoMsg): MsgWithdrawDepositResponse {
    return MsgWithdrawDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawDepositResponseProtoMsg): MsgWithdrawDepositResponse {
    return MsgWithdrawDepositResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawDepositResponse): Uint8Array {
    return MsgWithdrawDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDepositResponse): MsgWithdrawDepositResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgWithdrawDepositResponse",
      value: MsgWithdrawDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDepositRetry(): MsgWithdrawDepositRetry {
  return {
    poolId: BigInt(0),
    withdrawalId: BigInt(0),
    depositorAddress: ""
  };
}
export const MsgWithdrawDepositRetry = {
  typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
  encode(message: MsgWithdrawDepositRetry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.withdrawalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.withdrawalId);
    }
    if (message.depositorAddress !== "") {
      writer.uint32(26).string(message.depositorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDepositRetry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgWithdrawDepositRetry>): MsgWithdrawDepositRetry {
    const message = createBaseMsgWithdrawDepositRetry();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? BigInt(object.withdrawalId.toString()) : BigInt(0);
    message.depositorAddress = object.depositorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawDepositRetryAmino): MsgWithdrawDepositRetry {
    const message = createBaseMsgWithdrawDepositRetry();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.withdrawal_id !== undefined && object.withdrawal_id !== null) {
      message.withdrawalId = BigInt(object.withdrawal_id);
    }
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawDepositRetry): MsgWithdrawDepositRetryAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
    obj.depositor_address = message.depositorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDepositRetryAminoMsg): MsgWithdrawDepositRetry {
    return MsgWithdrawDepositRetry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawDepositRetryProtoMsg): MsgWithdrawDepositRetry {
    return MsgWithdrawDepositRetry.decode(message.value);
  },
  toProto(message: MsgWithdrawDepositRetry): Uint8Array {
    return MsgWithdrawDepositRetry.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDepositRetry): MsgWithdrawDepositRetryProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
      value: MsgWithdrawDepositRetry.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDepositRetryResponse(): MsgWithdrawDepositRetryResponse {
  return {};
}
export const MsgWithdrawDepositRetryResponse = {
  typeUrl: "/lum.network.millions.MsgWithdrawDepositRetryResponse",
  encode(_: MsgWithdrawDepositRetryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDepositRetryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgWithdrawDepositRetryResponse>): MsgWithdrawDepositRetryResponse {
    const message = createBaseMsgWithdrawDepositRetryResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawDepositRetryResponseAmino): MsgWithdrawDepositRetryResponse {
    const message = createBaseMsgWithdrawDepositRetryResponse();
    return message;
  },
  toAmino(_: MsgWithdrawDepositRetryResponse): MsgWithdrawDepositRetryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDepositRetryResponseAminoMsg): MsgWithdrawDepositRetryResponse {
    return MsgWithdrawDepositRetryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawDepositRetryResponseProtoMsg): MsgWithdrawDepositRetryResponse {
    return MsgWithdrawDepositRetryResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawDepositRetryResponse): Uint8Array {
    return MsgWithdrawDepositRetryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDepositRetryResponse): MsgWithdrawDepositRetryResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgWithdrawDepositRetryResponse",
      value: MsgWithdrawDepositRetryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDrawRetry(): MsgDrawRetry {
  return {
    poolId: BigInt(0),
    drawId: BigInt(0),
    drawRetryAddress: ""
  };
}
export const MsgDrawRetry = {
  typeUrl: "/lum.network.millions.MsgDrawRetry",
  encode(message: MsgDrawRetry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (message.drawRetryAddress !== "") {
      writer.uint32(26).string(message.drawRetryAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDrawRetry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgDrawRetry>): MsgDrawRetry {
    const message = createBaseMsgDrawRetry();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    message.drawRetryAddress = object.drawRetryAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDrawRetryAmino): MsgDrawRetry {
    const message = createBaseMsgDrawRetry();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    if (object.draw_retry_address !== undefined && object.draw_retry_address !== null) {
      message.drawRetryAddress = object.draw_retry_address;
    }
    return message;
  },
  toAmino(message: MsgDrawRetry): MsgDrawRetryAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
    obj.draw_retry_address = message.drawRetryAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDrawRetryAminoMsg): MsgDrawRetry {
    return MsgDrawRetry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDrawRetryProtoMsg): MsgDrawRetry {
    return MsgDrawRetry.decode(message.value);
  },
  toProto(message: MsgDrawRetry): Uint8Array {
    return MsgDrawRetry.encode(message).finish();
  },
  toProtoMsg(message: MsgDrawRetry): MsgDrawRetryProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgDrawRetry",
      value: MsgDrawRetry.encode(message).finish()
    };
  }
};
function createBaseMsgDrawRetryResponse(): MsgDrawRetryResponse {
  return {};
}
export const MsgDrawRetryResponse = {
  typeUrl: "/lum.network.millions.MsgDrawRetryResponse",
  encode(_: MsgDrawRetryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDrawRetryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgDrawRetryResponse>): MsgDrawRetryResponse {
    const message = createBaseMsgDrawRetryResponse();
    return message;
  },
  fromAmino(_: MsgDrawRetryResponseAmino): MsgDrawRetryResponse {
    const message = createBaseMsgDrawRetryResponse();
    return message;
  },
  toAmino(_: MsgDrawRetryResponse): MsgDrawRetryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDrawRetryResponseAminoMsg): MsgDrawRetryResponse {
    return MsgDrawRetryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDrawRetryResponseProtoMsg): MsgDrawRetryResponse {
    return MsgDrawRetryResponse.decode(message.value);
  },
  toProto(message: MsgDrawRetryResponse): Uint8Array {
    return MsgDrawRetryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDrawRetryResponse): MsgDrawRetryResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgDrawRetryResponse",
      value: MsgDrawRetryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreInterchainAccounts(): MsgRestoreInterchainAccounts {
  return {
    poolId: BigInt(0),
    restorerAddress: ""
  };
}
export const MsgRestoreInterchainAccounts = {
  typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
  encode(message: MsgRestoreInterchainAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.restorerAddress !== "") {
      writer.uint32(18).string(message.restorerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRestoreInterchainAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgRestoreInterchainAccounts>): MsgRestoreInterchainAccounts {
    const message = createBaseMsgRestoreInterchainAccounts();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.restorerAddress = object.restorerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRestoreInterchainAccountsAmino): MsgRestoreInterchainAccounts {
    const message = createBaseMsgRestoreInterchainAccounts();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.restorer_address !== undefined && object.restorer_address !== null) {
      message.restorerAddress = object.restorer_address;
    }
    return message;
  },
  toAmino(message: MsgRestoreInterchainAccounts): MsgRestoreInterchainAccountsAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.restorer_address = message.restorerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRestoreInterchainAccountsAminoMsg): MsgRestoreInterchainAccounts {
    return MsgRestoreInterchainAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRestoreInterchainAccountsProtoMsg): MsgRestoreInterchainAccounts {
    return MsgRestoreInterchainAccounts.decode(message.value);
  },
  toProto(message: MsgRestoreInterchainAccounts): Uint8Array {
    return MsgRestoreInterchainAccounts.encode(message).finish();
  },
  toProtoMsg(message: MsgRestoreInterchainAccounts): MsgRestoreInterchainAccountsProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
      value: MsgRestoreInterchainAccounts.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreInterchainAccountsResponse(): MsgRestoreInterchainAccountsResponse {
  return {};
}
export const MsgRestoreInterchainAccountsResponse = {
  typeUrl: "/lum.network.millions.MsgRestoreInterchainAccountsResponse",
  encode(_: MsgRestoreInterchainAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRestoreInterchainAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgRestoreInterchainAccountsResponse>): MsgRestoreInterchainAccountsResponse {
    const message = createBaseMsgRestoreInterchainAccountsResponse();
    return message;
  },
  fromAmino(_: MsgRestoreInterchainAccountsResponseAmino): MsgRestoreInterchainAccountsResponse {
    const message = createBaseMsgRestoreInterchainAccountsResponse();
    return message;
  },
  toAmino(_: MsgRestoreInterchainAccountsResponse): MsgRestoreInterchainAccountsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRestoreInterchainAccountsResponseAminoMsg): MsgRestoreInterchainAccountsResponse {
    return MsgRestoreInterchainAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRestoreInterchainAccountsResponseProtoMsg): MsgRestoreInterchainAccountsResponse {
    return MsgRestoreInterchainAccountsResponse.decode(message.value);
  },
  toProto(message: MsgRestoreInterchainAccountsResponse): Uint8Array {
    return MsgRestoreInterchainAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRestoreInterchainAccountsResponse): MsgRestoreInterchainAccountsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgRestoreInterchainAccountsResponse",
      value: MsgRestoreInterchainAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGenerateSeed(): MsgGenerateSeed {
  return {
    requesterAddress: ""
  };
}
export const MsgGenerateSeed = {
  typeUrl: "/lum.network.millions.MsgGenerateSeed",
  encode(message: MsgGenerateSeed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requesterAddress !== "") {
      writer.uint32(10).string(message.requesterAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGenerateSeed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgGenerateSeed>): MsgGenerateSeed {
    const message = createBaseMsgGenerateSeed();
    message.requesterAddress = object.requesterAddress ?? "";
    return message;
  },
  fromAmino(object: MsgGenerateSeedAmino): MsgGenerateSeed {
    const message = createBaseMsgGenerateSeed();
    if (object.requester_address !== undefined && object.requester_address !== null) {
      message.requesterAddress = object.requester_address;
    }
    return message;
  },
  toAmino(message: MsgGenerateSeed): MsgGenerateSeedAmino {
    const obj: any = {};
    obj.requester_address = message.requesterAddress;
    return obj;
  },
  fromAminoMsg(object: MsgGenerateSeedAminoMsg): MsgGenerateSeed {
    return MsgGenerateSeed.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGenerateSeedProtoMsg): MsgGenerateSeed {
    return MsgGenerateSeed.decode(message.value);
  },
  toProto(message: MsgGenerateSeed): Uint8Array {
    return MsgGenerateSeed.encode(message).finish();
  },
  toProtoMsg(message: MsgGenerateSeed): MsgGenerateSeedProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgGenerateSeed",
      value: MsgGenerateSeed.encode(message).finish()
    };
  }
};
function createBaseMsgGenerateSeedResponse(): MsgGenerateSeedResponse {
  return {
    seed: BigInt(0)
  };
}
export const MsgGenerateSeedResponse = {
  typeUrl: "/lum.network.millions.MsgGenerateSeedResponse",
  encode(message: MsgGenerateSeedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seed !== BigInt(0)) {
      writer.uint32(8).int64(message.seed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGenerateSeedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgGenerateSeedResponse>): MsgGenerateSeedResponse {
    const message = createBaseMsgGenerateSeedResponse();
    message.seed = object.seed !== undefined && object.seed !== null ? BigInt(object.seed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgGenerateSeedResponseAmino): MsgGenerateSeedResponse {
    const message = createBaseMsgGenerateSeedResponse();
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = BigInt(object.seed);
    }
    return message;
  },
  toAmino(message: MsgGenerateSeedResponse): MsgGenerateSeedResponseAmino {
    const obj: any = {};
    obj.seed = message.seed ? message.seed.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGenerateSeedResponseAminoMsg): MsgGenerateSeedResponse {
    return MsgGenerateSeedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGenerateSeedResponseProtoMsg): MsgGenerateSeedResponse {
    return MsgGenerateSeedResponse.decode(message.value);
  },
  toProto(message: MsgGenerateSeedResponse): Uint8Array {
    return MsgGenerateSeedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGenerateSeedResponse): MsgGenerateSeedResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.MsgGenerateSeedResponse",
      value: MsgGenerateSeedResponse.encode(message).finish()
    };
  }
};