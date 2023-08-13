import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BeamData, BeamDataAmino, BeamDataSDKType, BeamState, beamStateFromJSON } from "./beam";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../../helpers";
export interface MsgOpenBeam {
  id: string;
  creatorAddress: string;
  secret: string;
  amount?: Coin | undefined;
  schema: string;
  data?: BeamData | undefined;
  claimAddress: string;
  claimExpiresAtBlock: number;
  closesAtBlock: number;
}
export interface MsgOpenBeamProtoMsg {
  typeUrl: "/lum.network.beam.MsgOpenBeam";
  value: Uint8Array;
}
export interface MsgOpenBeamAmino {
  id: string;
  creator_address: string;
  secret: string;
  amount?: CoinAmino | undefined;
  schema: string;
  data?: BeamDataAmino | undefined;
  claim_address: string;
  claim_expires_at_block: number;
  closes_at_block: number;
}
export interface MsgOpenBeamAminoMsg {
  type: "/lum.network.beam.MsgOpenBeam";
  value: MsgOpenBeamAmino;
}
export interface MsgOpenBeamSDKType {
  id: string;
  creator_address: string;
  secret: string;
  amount?: CoinSDKType | undefined;
  schema: string;
  data?: BeamDataSDKType | undefined;
  claim_address: string;
  claim_expires_at_block: number;
  closes_at_block: number;
}
export interface MsgOpenBeamResponse {}
export interface MsgOpenBeamResponseProtoMsg {
  typeUrl: "/lum.network.beam.MsgOpenBeamResponse";
  value: Uint8Array;
}
export interface MsgOpenBeamResponseAmino {}
export interface MsgOpenBeamResponseAminoMsg {
  type: "/lum.network.beam.MsgOpenBeamResponse";
  value: MsgOpenBeamResponseAmino;
}
export interface MsgOpenBeamResponseSDKType {}
export interface MsgUpdateBeam {
  id: string;
  updaterAddress: string;
  amount?: Coin | undefined;
  status: BeamState;
  cancelReason: string;
  hideContent: boolean;
  data?: BeamData | undefined;
  claimAddress: string;
  claimExpiresAtBlock: number;
  closesAtBlock: number;
}
export interface MsgUpdateBeamProtoMsg {
  typeUrl: "/lum.network.beam.MsgUpdateBeam";
  value: Uint8Array;
}
export interface MsgUpdateBeamAmino {
  id: string;
  updater_address: string;
  amount?: CoinAmino | undefined;
  status: BeamState;
  cancel_reason: string;
  hide_content: boolean;
  data?: BeamDataAmino | undefined;
  claim_address: string;
  claim_expires_at_block: number;
  closes_at_block: number;
}
export interface MsgUpdateBeamAminoMsg {
  type: "/lum.network.beam.MsgUpdateBeam";
  value: MsgUpdateBeamAmino;
}
export interface MsgUpdateBeamSDKType {
  id: string;
  updater_address: string;
  amount?: CoinSDKType | undefined;
  status: BeamState;
  cancel_reason: string;
  hide_content: boolean;
  data?: BeamDataSDKType | undefined;
  claim_address: string;
  claim_expires_at_block: number;
  closes_at_block: number;
}
export interface MsgUpdateBeamResponse {}
export interface MsgUpdateBeamResponseProtoMsg {
  typeUrl: "/lum.network.beam.MsgUpdateBeamResponse";
  value: Uint8Array;
}
export interface MsgUpdateBeamResponseAmino {}
export interface MsgUpdateBeamResponseAminoMsg {
  type: "/lum.network.beam.MsgUpdateBeamResponse";
  value: MsgUpdateBeamResponseAmino;
}
export interface MsgUpdateBeamResponseSDKType {}
export interface MsgClaimBeam {
  id: string;
  claimerAddress: string;
  secret: string;
}
export interface MsgClaimBeamProtoMsg {
  typeUrl: "/lum.network.beam.MsgClaimBeam";
  value: Uint8Array;
}
export interface MsgClaimBeamAmino {
  id: string;
  claimer_address: string;
  secret: string;
}
export interface MsgClaimBeamAminoMsg {
  type: "/lum.network.beam.MsgClaimBeam";
  value: MsgClaimBeamAmino;
}
export interface MsgClaimBeamSDKType {
  id: string;
  claimer_address: string;
  secret: string;
}
export interface MsgClaimBeamResponse {}
export interface MsgClaimBeamResponseProtoMsg {
  typeUrl: "/lum.network.beam.MsgClaimBeamResponse";
  value: Uint8Array;
}
export interface MsgClaimBeamResponseAmino {}
export interface MsgClaimBeamResponseAminoMsg {
  type: "/lum.network.beam.MsgClaimBeamResponse";
  value: MsgClaimBeamResponseAmino;
}
export interface MsgClaimBeamResponseSDKType {}
function createBaseMsgOpenBeam(): MsgOpenBeam {
  return {
    id: "",
    creatorAddress: "",
    secret: "",
    amount: undefined,
    schema: "",
    data: undefined,
    claimAddress: "",
    claimExpiresAtBlock: 0,
    closesAtBlock: 0
  };
}
export const MsgOpenBeam = {
  encode(message: MsgOpenBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.creatorAddress !== "") {
      writer.uint32(18).string(message.creatorAddress);
    }
    if (message.secret !== "") {
      writer.uint32(26).string(message.secret);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.schema !== "") {
      writer.uint32(42).string(message.schema);
    }
    if (message.data !== undefined) {
      BeamData.encode(message.data, writer.uint32(50).fork()).ldelim();
    }
    if (message.claimAddress !== "") {
      writer.uint32(58).string(message.claimAddress);
    }
    if (message.claimExpiresAtBlock !== 0) {
      writer.uint32(64).int32(message.claimExpiresAtBlock);
    }
    if (message.closesAtBlock !== 0) {
      writer.uint32(72).int32(message.closesAtBlock);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenBeam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenBeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.creatorAddress = reader.string();
          break;
        case 3:
          message.secret = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.schema = reader.string();
          break;
        case 6:
          message.data = BeamData.decode(reader, reader.uint32());
          break;
        case 7:
          message.claimAddress = reader.string();
          break;
        case 8:
          message.claimExpiresAtBlock = reader.int32();
          break;
        case 9:
          message.closesAtBlock = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgOpenBeam>): MsgOpenBeam {
    const message = createBaseMsgOpenBeam();
    message.id = object.id ?? "";
    message.creatorAddress = object.creatorAddress ?? "";
    message.secret = object.secret ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.schema = object.schema ?? "";
    message.data = object.data !== undefined && object.data !== null ? BeamData.fromPartial(object.data) : undefined;
    message.claimAddress = object.claimAddress ?? "";
    message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
    message.closesAtBlock = object.closesAtBlock ?? 0;
    return message;
  },
  fromAmino(object: MsgOpenBeamAmino): MsgOpenBeam {
    return {
      id: object.id,
      creatorAddress: object.creator_address,
      secret: object.secret,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      schema: object.schema,
      data: object?.data ? BeamData.fromAmino(object.data) : undefined,
      claimAddress: object.claim_address,
      claimExpiresAtBlock: object.claim_expires_at_block,
      closesAtBlock: object.closes_at_block
    };
  },
  toAmino(message: MsgOpenBeam): MsgOpenBeamAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.creator_address = message.creatorAddress;
    obj.secret = message.secret;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.schema = message.schema;
    obj.data = message.data ? BeamData.toAmino(message.data) : undefined;
    obj.claim_address = message.claimAddress;
    obj.claim_expires_at_block = message.claimExpiresAtBlock;
    obj.closes_at_block = message.closesAtBlock;
    return obj;
  },
  fromAminoMsg(object: MsgOpenBeamAminoMsg): MsgOpenBeam {
    return MsgOpenBeam.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOpenBeamProtoMsg): MsgOpenBeam {
    return MsgOpenBeam.decode(message.value);
  },
  toProto(message: MsgOpenBeam): Uint8Array {
    return MsgOpenBeam.encode(message).finish();
  },
  toProtoMsg(message: MsgOpenBeam): MsgOpenBeamProtoMsg {
    return {
      typeUrl: "/lum.network.beam.MsgOpenBeam",
      value: MsgOpenBeam.encode(message).finish()
    };
  }
};
function createBaseMsgOpenBeamResponse(): MsgOpenBeamResponse {
  return {};
}
export const MsgOpenBeamResponse = {
  encode(_: MsgOpenBeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenBeamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenBeamResponse();
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
  fromPartial(_: DeepPartial<MsgOpenBeamResponse>): MsgOpenBeamResponse {
    const message = createBaseMsgOpenBeamResponse();
    return message;
  },
  fromAmino(_: MsgOpenBeamResponseAmino): MsgOpenBeamResponse {
    return {};
  },
  toAmino(_: MsgOpenBeamResponse): MsgOpenBeamResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgOpenBeamResponseAminoMsg): MsgOpenBeamResponse {
    return MsgOpenBeamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOpenBeamResponseProtoMsg): MsgOpenBeamResponse {
    return MsgOpenBeamResponse.decode(message.value);
  },
  toProto(message: MsgOpenBeamResponse): Uint8Array {
    return MsgOpenBeamResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgOpenBeamResponse): MsgOpenBeamResponseProtoMsg {
    return {
      typeUrl: "/lum.network.beam.MsgOpenBeamResponse",
      value: MsgOpenBeamResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBeam(): MsgUpdateBeam {
  return {
    id: "",
    updaterAddress: "",
    amount: undefined,
    status: 0,
    cancelReason: "",
    hideContent: false,
    data: undefined,
    claimAddress: "",
    claimExpiresAtBlock: 0,
    closesAtBlock: 0
  };
}
export const MsgUpdateBeam = {
  encode(message: MsgUpdateBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.updaterAddress !== "") {
      writer.uint32(18).string(message.updaterAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.cancelReason !== "") {
      writer.uint32(42).string(message.cancelReason);
    }
    if (message.hideContent === true) {
      writer.uint32(48).bool(message.hideContent);
    }
    if (message.data !== undefined) {
      BeamData.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    if (message.claimAddress !== "") {
      writer.uint32(66).string(message.claimAddress);
    }
    if (message.claimExpiresAtBlock !== 0) {
      writer.uint32(72).int32(message.claimExpiresAtBlock);
    }
    if (message.closesAtBlock !== 0) {
      writer.uint32(80).int32(message.closesAtBlock);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBeam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.updaterAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.status = (reader.int32() as any);
          break;
        case 5:
          message.cancelReason = reader.string();
          break;
        case 6:
          message.hideContent = reader.bool();
          break;
        case 7:
          message.data = BeamData.decode(reader, reader.uint32());
          break;
        case 8:
          message.claimAddress = reader.string();
          break;
        case 9:
          message.claimExpiresAtBlock = reader.int32();
          break;
        case 10:
          message.closesAtBlock = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateBeam>): MsgUpdateBeam {
    const message = createBaseMsgUpdateBeam();
    message.id = object.id ?? "";
    message.updaterAddress = object.updaterAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.status = object.status ?? 0;
    message.cancelReason = object.cancelReason ?? "";
    message.hideContent = object.hideContent ?? false;
    message.data = object.data !== undefined && object.data !== null ? BeamData.fromPartial(object.data) : undefined;
    message.claimAddress = object.claimAddress ?? "";
    message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
    message.closesAtBlock = object.closesAtBlock ?? 0;
    return message;
  },
  fromAmino(object: MsgUpdateBeamAmino): MsgUpdateBeam {
    return {
      id: object.id,
      updaterAddress: object.updater_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      status: isSet(object.status) ? beamStateFromJSON(object.status) : -1,
      cancelReason: object.cancel_reason,
      hideContent: object.hide_content,
      data: object?.data ? BeamData.fromAmino(object.data) : undefined,
      claimAddress: object.claim_address,
      claimExpiresAtBlock: object.claim_expires_at_block,
      closesAtBlock: object.closes_at_block
    };
  },
  toAmino(message: MsgUpdateBeam): MsgUpdateBeamAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.updater_address = message.updaterAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.status = message.status;
    obj.cancel_reason = message.cancelReason;
    obj.hide_content = message.hideContent;
    obj.data = message.data ? BeamData.toAmino(message.data) : undefined;
    obj.claim_address = message.claimAddress;
    obj.claim_expires_at_block = message.claimExpiresAtBlock;
    obj.closes_at_block = message.closesAtBlock;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBeamAminoMsg): MsgUpdateBeam {
    return MsgUpdateBeam.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBeamProtoMsg): MsgUpdateBeam {
    return MsgUpdateBeam.decode(message.value);
  },
  toProto(message: MsgUpdateBeam): Uint8Array {
    return MsgUpdateBeam.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBeam): MsgUpdateBeamProtoMsg {
    return {
      typeUrl: "/lum.network.beam.MsgUpdateBeam",
      value: MsgUpdateBeam.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBeamResponse(): MsgUpdateBeamResponse {
  return {};
}
export const MsgUpdateBeamResponse = {
  encode(_: MsgUpdateBeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBeamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBeamResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateBeamResponse>): MsgUpdateBeamResponse {
    const message = createBaseMsgUpdateBeamResponse();
    return message;
  },
  fromAmino(_: MsgUpdateBeamResponseAmino): MsgUpdateBeamResponse {
    return {};
  },
  toAmino(_: MsgUpdateBeamResponse): MsgUpdateBeamResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBeamResponseAminoMsg): MsgUpdateBeamResponse {
    return MsgUpdateBeamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBeamResponseProtoMsg): MsgUpdateBeamResponse {
    return MsgUpdateBeamResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBeamResponse): Uint8Array {
    return MsgUpdateBeamResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBeamResponse): MsgUpdateBeamResponseProtoMsg {
    return {
      typeUrl: "/lum.network.beam.MsgUpdateBeamResponse",
      value: MsgUpdateBeamResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimBeam(): MsgClaimBeam {
  return {
    id: "",
    claimerAddress: "",
    secret: ""
  };
}
export const MsgClaimBeam = {
  encode(message: MsgClaimBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.claimerAddress !== "") {
      writer.uint32(18).string(message.claimerAddress);
    }
    if (message.secret !== "") {
      writer.uint32(26).string(message.secret);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBeam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimBeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.claimerAddress = reader.string();
          break;
        case 3:
          message.secret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimBeam>): MsgClaimBeam {
    const message = createBaseMsgClaimBeam();
    message.id = object.id ?? "";
    message.claimerAddress = object.claimerAddress ?? "";
    message.secret = object.secret ?? "";
    return message;
  },
  fromAmino(object: MsgClaimBeamAmino): MsgClaimBeam {
    return {
      id: object.id,
      claimerAddress: object.claimer_address,
      secret: object.secret
    };
  },
  toAmino(message: MsgClaimBeam): MsgClaimBeamAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.claimer_address = message.claimerAddress;
    obj.secret = message.secret;
    return obj;
  },
  fromAminoMsg(object: MsgClaimBeamAminoMsg): MsgClaimBeam {
    return MsgClaimBeam.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimBeamProtoMsg): MsgClaimBeam {
    return MsgClaimBeam.decode(message.value);
  },
  toProto(message: MsgClaimBeam): Uint8Array {
    return MsgClaimBeam.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimBeam): MsgClaimBeamProtoMsg {
    return {
      typeUrl: "/lum.network.beam.MsgClaimBeam",
      value: MsgClaimBeam.encode(message).finish()
    };
  }
};
function createBaseMsgClaimBeamResponse(): MsgClaimBeamResponse {
  return {};
}
export const MsgClaimBeamResponse = {
  encode(_: MsgClaimBeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBeamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimBeamResponse();
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
  fromPartial(_: DeepPartial<MsgClaimBeamResponse>): MsgClaimBeamResponse {
    const message = createBaseMsgClaimBeamResponse();
    return message;
  },
  fromAmino(_: MsgClaimBeamResponseAmino): MsgClaimBeamResponse {
    return {};
  },
  toAmino(_: MsgClaimBeamResponse): MsgClaimBeamResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimBeamResponseAminoMsg): MsgClaimBeamResponse {
    return MsgClaimBeamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimBeamResponseProtoMsg): MsgClaimBeamResponse {
    return MsgClaimBeamResponse.decode(message.value);
  },
  toProto(message: MsgClaimBeamResponse): Uint8Array {
    return MsgClaimBeamResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimBeamResponse): MsgClaimBeamResponseProtoMsg {
    return {
      typeUrl: "/lum.network.beam.MsgClaimBeamResponse",
      value: MsgClaimBeamResponse.encode(message).finish()
    };
  }
};