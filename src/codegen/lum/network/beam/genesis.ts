import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Beam, BeamAmino, BeamSDKType } from "./beam";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  moduleAccountBalance: Coin | undefined;
  beams: Beam[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lum.network.beam.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateAmino {
  module_account_balance?: CoinAmino | undefined;
  beams?: BeamAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lum.network.beam.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
  module_account_balance: CoinSDKType | undefined;
  beams: BeamSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    moduleAccountBalance: Coin.fromPartial({}),
    beams: []
  };
}
export const GenesisState = {
  typeUrl: "/lum.network.beam.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleAccountBalance !== undefined) {
      Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.beams) {
      Beam.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.moduleAccountBalance = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.beams.push(Beam.decode(reader, reader.uint32()));
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
    message.moduleAccountBalance = object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null ? Coin.fromPartial(object.moduleAccountBalance) : undefined;
    message.beams = object.beams?.map(e => Beam.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.module_account_balance !== undefined && object.module_account_balance !== null) {
      message.moduleAccountBalance = Coin.fromAmino(object.module_account_balance);
    }
    message.beams = object.beams?.map(e => Beam.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.module_account_balance = message.moduleAccountBalance ? Coin.toAmino(message.moduleAccountBalance) : undefined;
    if (message.beams) {
      obj.beams = message.beams.map(e => e ? Beam.toAmino(e) : undefined);
    } else {
      obj.beams = [];
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
      typeUrl: "/lum.network.beam.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};