import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
export enum DepositState {
  DEPOSIT_STATE_UNSPECIFIED = 0,
  DEPOSIT_STATE_IBC_TRANSFER = 1,
  DEPOSIT_STATE_ICA_DELEGATE = 2,
  DEPOSIT_STATE_SUCCESS = 3,
  DEPOSIT_STATE_FAILURE = 4,
  UNRECOGNIZED = -1,
}
export const DepositStateSDKType = DepositState;
export const DepositStateAmino = DepositState;
export function depositStateFromJSON(object: any): DepositState {
  switch (object) {
    case 0:
    case "DEPOSIT_STATE_UNSPECIFIED":
      return DepositState.DEPOSIT_STATE_UNSPECIFIED;
    case 1:
    case "DEPOSIT_STATE_IBC_TRANSFER":
      return DepositState.DEPOSIT_STATE_IBC_TRANSFER;
    case 2:
    case "DEPOSIT_STATE_ICA_DELEGATE":
      return DepositState.DEPOSIT_STATE_ICA_DELEGATE;
    case 3:
    case "DEPOSIT_STATE_SUCCESS":
      return DepositState.DEPOSIT_STATE_SUCCESS;
    case 4:
    case "DEPOSIT_STATE_FAILURE":
      return DepositState.DEPOSIT_STATE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositState.UNRECOGNIZED;
  }
}
export function depositStateToJSON(object: DepositState): string {
  switch (object) {
    case DepositState.DEPOSIT_STATE_UNSPECIFIED:
      return "DEPOSIT_STATE_UNSPECIFIED";
    case DepositState.DEPOSIT_STATE_IBC_TRANSFER:
      return "DEPOSIT_STATE_IBC_TRANSFER";
    case DepositState.DEPOSIT_STATE_ICA_DELEGATE:
      return "DEPOSIT_STATE_ICA_DELEGATE";
    case DepositState.DEPOSIT_STATE_SUCCESS:
      return "DEPOSIT_STATE_SUCCESS";
    case DepositState.DEPOSIT_STATE_FAILURE:
      return "DEPOSIT_STATE_FAILURE";
    case DepositState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Deposit {
  poolId: bigint;
  depositId: bigint;
  state: DepositState;
  errorState: DepositState;
  depositorAddress: string;
  amount: Coin | undefined;
  winnerAddress: string;
  isSponsor: boolean;
  createdAtHeight: bigint;
  updatedAtHeight: bigint;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface DepositProtoMsg {
  typeUrl: "/lum.network.millions.Deposit";
  value: Uint8Array;
}
export interface DepositAmino {
  pool_id?: string;
  deposit_id?: string;
  state?: DepositState;
  error_state?: DepositState;
  depositor_address?: string;
  amount?: CoinAmino | undefined;
  winner_address?: string;
  is_sponsor?: boolean;
  created_at_height?: string;
  updated_at_height?: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}
export interface DepositAminoMsg {
  type: "/lum.network.millions.Deposit";
  value: DepositAmino;
}
export interface DepositSDKType {
  pool_id: bigint;
  deposit_id: bigint;
  state: DepositState;
  error_state: DepositState;
  depositor_address: string;
  amount: CoinSDKType | undefined;
  winner_address: string;
  is_sponsor: boolean;
  created_at_height: bigint;
  updated_at_height: bigint;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
function createBaseDeposit(): Deposit {
  return {
    poolId: BigInt(0),
    depositId: BigInt(0),
    state: 0,
    errorState: 0,
    depositorAddress: "",
    amount: Coin.fromPartial({}),
    winnerAddress: "",
    isSponsor: false,
    createdAtHeight: BigInt(0),
    updatedAtHeight: BigInt(0),
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const Deposit = {
  typeUrl: "/lum.network.millions.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.depositId !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositId);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.errorState !== 0) {
      writer.uint32(32).int32(message.errorState);
    }
    if (message.depositorAddress !== "") {
      writer.uint32(42).string(message.depositorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    if (message.winnerAddress !== "") {
      writer.uint32(58).string(message.winnerAddress);
    }
    if (message.isSponsor === true) {
      writer.uint32(64).bool(message.isSponsor);
    }
    if (message.createdAtHeight !== BigInt(0)) {
      writer.uint32(80).int64(message.createdAtHeight);
    }
    if (message.updatedAtHeight !== BigInt(0)) {
      writer.uint32(88).int64(message.updatedAtHeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(98).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
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
          message.state = (reader.int32() as any);
          break;
        case 4:
          message.errorState = (reader.int32() as any);
          break;
        case 5:
          message.depositorAddress = reader.string();
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.winnerAddress = reader.string();
          break;
        case 8:
          message.isSponsor = reader.bool();
          break;
        case 10:
          message.createdAtHeight = reader.int64();
          break;
        case 11:
          message.updatedAtHeight = reader.int64();
          break;
        case 12:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 13:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.depositId = object.depositId !== undefined && object.depositId !== null ? BigInt(object.depositId.toString()) : BigInt(0);
    message.state = object.state ?? 0;
    message.errorState = object.errorState ?? 0;
    message.depositorAddress = object.depositorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.winnerAddress = object.winnerAddress ?? "";
    message.isSponsor = object.isSponsor ?? false;
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? BigInt(object.createdAtHeight.toString()) : BigInt(0);
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? BigInt(object.updatedAtHeight.toString()) : BigInt(0);
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.deposit_id !== undefined && object.deposit_id !== null) {
      message.depositId = BigInt(object.deposit_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.error_state !== undefined && object.error_state !== null) {
      message.errorState = object.error_state;
    }
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.winner_address !== undefined && object.winner_address !== null) {
      message.winnerAddress = object.winner_address;
    }
    if (object.is_sponsor !== undefined && object.is_sponsor !== null) {
      message.isSponsor = object.is_sponsor;
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
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId !== BigInt(0) ? message.depositId.toString() : undefined;
    obj.state = message.state === 0 ? undefined : message.state;
    obj.error_state = message.errorState === 0 ? undefined : message.errorState;
    obj.depositor_address = message.depositorAddress === "" ? undefined : message.depositorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.winner_address = message.winnerAddress === "" ? undefined : message.winnerAddress;
    obj.is_sponsor = message.isSponsor === false ? undefined : message.isSponsor;
    obj.created_at_height = message.createdAtHeight !== BigInt(0) ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight !== BigInt(0) ? message.updatedAtHeight.toString() : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.updated_at = message.updatedAt ? Timestamp.toAmino(toTimestamp(message.updatedAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/lum.network.millions.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};