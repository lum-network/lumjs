import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Params {
  depositDenoms: string[];
  minDepositAmount: string;
  withdrawalAddress: string;
  isDepositEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/lum.network.dfract.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  deposit_denoms?: string[];
  min_deposit_amount?: string;
  withdrawal_address?: string;
  is_deposit_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/lum.network.dfract.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  deposit_denoms: string[];
  min_deposit_amount: string;
  withdrawal_address: string;
  is_deposit_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    depositDenoms: [],
    minDepositAmount: "",
    withdrawalAddress: "",
    isDepositEnabled: false
  };
}
export const Params = {
  typeUrl: "/lum.network.dfract.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.depositDenoms) {
      writer.uint32(10).string(v!);
    }
    if (message.minDepositAmount !== "") {
      writer.uint32(18).string(message.minDepositAmount);
    }
    if (message.withdrawalAddress !== "") {
      writer.uint32(26).string(message.withdrawalAddress);
    }
    if (message.isDepositEnabled === true) {
      writer.uint32(32).bool(message.isDepositEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositDenoms.push(reader.string());
          break;
        case 2:
          message.minDepositAmount = reader.string();
          break;
        case 3:
          message.withdrawalAddress = reader.string();
          break;
        case 4:
          message.isDepositEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.depositDenoms = object.depositDenoms?.map(e => e) || [];
    message.minDepositAmount = object.minDepositAmount ?? "";
    message.withdrawalAddress = object.withdrawalAddress ?? "";
    message.isDepositEnabled = object.isDepositEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.depositDenoms = object.deposit_denoms?.map(e => e) || [];
    if (object.min_deposit_amount !== undefined && object.min_deposit_amount !== null) {
      message.minDepositAmount = object.min_deposit_amount;
    }
    if (object.withdrawal_address !== undefined && object.withdrawal_address !== null) {
      message.withdrawalAddress = object.withdrawal_address;
    }
    if (object.is_deposit_enabled !== undefined && object.is_deposit_enabled !== null) {
      message.isDepositEnabled = object.is_deposit_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.depositDenoms) {
      obj.deposit_denoms = message.depositDenoms.map(e => e);
    } else {
      obj.deposit_denoms = [];
    }
    obj.min_deposit_amount = message.minDepositAmount;
    obj.withdrawal_address = message.withdrawalAddress;
    obj.is_deposit_enabled = message.isDepositEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.Params",
      value: Params.encode(message).finish()
    };
  }
};