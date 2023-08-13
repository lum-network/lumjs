import { BoolValue, BoolValueAmino, BoolValueSDKType } from "../../../google/protobuf/wrappers";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProposalUpdateParams {
  title: string;
  description: string;
  withdrawalAddress: string;
  isDepositEnabled: BoolValue | undefined;
  depositDenoms?: string[];
  minDepositAmount?: string;
}
export interface ProposalUpdateParamsProtoMsg {
  typeUrl: "/lum.network.dfract.ProposalUpdateParams";
  value: Uint8Array;
}
export interface ProposalUpdateParamsAmino {
  title: string;
  description: string;
  withdrawal_address: string;
  is_deposit_enabled?: BoolValueAmino | undefined;
  deposit_denoms: string[];
  min_deposit_amount: string;
}
export interface ProposalUpdateParamsAminoMsg {
  type: "/lum.network.dfract.ProposalUpdateParams";
  value: ProposalUpdateParamsAmino;
}
export interface ProposalUpdateParamsSDKType {
  title: string;
  description: string;
  withdrawal_address: string;
  is_deposit_enabled: BoolValueSDKType | undefined;
  deposit_denoms?: string[];
  min_deposit_amount?: string;
}
function createBaseProposalUpdateParams(): ProposalUpdateParams {
  return {
    title: "",
    description: "",
    withdrawalAddress: "",
    isDepositEnabled: BoolValue.fromPartial({}),
    depositDenoms: undefined,
    minDepositAmount: undefined
  };
}
export const ProposalUpdateParams = {
  encode(message: ProposalUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.withdrawalAddress !== "") {
      writer.uint32(26).string(message.withdrawalAddress);
    }
    if (message.isDepositEnabled !== undefined) {
      BoolValue.encode(message.isDepositEnabled, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.depositDenoms) {
      writer.uint32(42).string(v!);
    }
    if (message.minDepositAmount !== undefined) {
      writer.uint32(50).string(message.minDepositAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.withdrawalAddress = reader.string();
          break;
        case 4:
          message.isDepositEnabled = BoolValue.decode(reader, reader.uint32());
          break;
        case 5:
          message.depositDenoms.push(reader.string());
          break;
        case 6:
          message.minDepositAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProposalUpdateParams>): ProposalUpdateParams {
    const message = createBaseProposalUpdateParams();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.withdrawalAddress = object.withdrawalAddress ?? "";
    message.isDepositEnabled = object.isDepositEnabled !== undefined && object.isDepositEnabled !== null ? BoolValue.fromPartial(object.isDepositEnabled) : undefined;
    message.depositDenoms = object.depositDenoms?.map(e => e) || [];
    message.minDepositAmount = object.minDepositAmount ?? undefined;
    return message;
  },
  fromAmino(object: ProposalUpdateParamsAmino): ProposalUpdateParams {
    return {
      title: object.title,
      description: object.description,
      withdrawalAddress: object.withdrawal_address,
      isDepositEnabled: object?.is_deposit_enabled ? BoolValue.fromAmino(object.is_deposit_enabled) : undefined,
      depositDenoms: Array.isArray(object?.deposit_denoms) ? object.deposit_denoms.map((e: any) => e) : [],
      minDepositAmount: object?.min_deposit_amount
    };
  },
  toAmino(message: ProposalUpdateParams): ProposalUpdateParamsAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.withdrawal_address = message.withdrawalAddress;
    obj.is_deposit_enabled = message.isDepositEnabled ? BoolValue.toAmino(message.isDepositEnabled) : undefined;
    if (message.depositDenoms) {
      obj.deposit_denoms = message.depositDenoms.map(e => e);
    } else {
      obj.deposit_denoms = [];
    }
    obj.min_deposit_amount = message.minDepositAmount;
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
      typeUrl: "/lum.network.dfract.ProposalUpdateParams",
      value: ProposalUpdateParams.encode(message).finish()
    };
  }
};