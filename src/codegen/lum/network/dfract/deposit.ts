import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
export interface Deposit {
  depositorAddress: string;
  amount: Coin | undefined;
  createdAt: Date | undefined;
}
export interface DepositProtoMsg {
  typeUrl: "/lum.network.dfract.Deposit";
  value: Uint8Array;
}
export interface DepositAmino {
  depositor_address?: string;
  amount?: CoinAmino | undefined;
  created_at?: string | undefined;
}
export interface DepositAminoMsg {
  type: "/lum.network.dfract.Deposit";
  value: DepositAmino;
}
export interface DepositSDKType {
  depositor_address: string;
  amount: CoinSDKType | undefined;
  created_at: Date | undefined;
}
function createBaseDeposit(): Deposit {
  return {
    depositorAddress: "",
    amount: Coin.fromPartial({}),
    createdAt: new Date()
  };
}
export const Deposit = {
  typeUrl: "/lum.network.dfract.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
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
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    message.depositorAddress = object.depositorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    return message;
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.depositor_address = message.depositorAddress === "" ? undefined : message.depositorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
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
      typeUrl: "/lum.network.dfract.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};