import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface GenesisState {
  moduleAccountBalance: Coin[];
  params: Params | undefined;
  depositsPendingWithdrawal: Deposit[];
  depositsPendingMint: Deposit[];
  depositsMinted: Deposit[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lum.network.dfract.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  module_account_balance?: CoinAmino[];
  params?: ParamsAmino | undefined;
  deposits_pending_withdrawal?: DepositAmino[];
  deposits_pending_mint?: DepositAmino[];
  deposits_minted?: DepositAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lum.network.dfract.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  module_account_balance: CoinSDKType[];
  params: ParamsSDKType | undefined;
  deposits_pending_withdrawal: DepositSDKType[];
  deposits_pending_mint: DepositSDKType[];
  deposits_minted: DepositSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    moduleAccountBalance: [],
    params: Params.fromPartial({}),
    depositsPendingWithdrawal: [],
    depositsPendingMint: [],
    depositsMinted: []
  };
}
export const GenesisState = {
  typeUrl: "/lum.network.dfract.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.moduleAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.depositsPendingWithdrawal) {
      Deposit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.depositsPendingMint) {
      Deposit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.depositsMinted) {
      Deposit.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.depositsPendingWithdrawal.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.depositsPendingMint.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.depositsMinted.push(Deposit.decode(reader, reader.uint32()));
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
    message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.depositsPendingWithdrawal = object.depositsPendingWithdrawal?.map(e => Deposit.fromPartial(e)) || [];
    message.depositsPendingMint = object.depositsPendingMint?.map(e => Deposit.fromPartial(e)) || [];
    message.depositsMinted = object.depositsMinted?.map(e => Deposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.moduleAccountBalance = object.module_account_balance?.map(e => Coin.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.depositsPendingWithdrawal = object.deposits_pending_withdrawal?.map(e => Deposit.fromAmino(e)) || [];
    message.depositsPendingMint = object.deposits_pending_mint?.map(e => Deposit.fromAmino(e)) || [];
    message.depositsMinted = object.deposits_minted?.map(e => Deposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.moduleAccountBalance) {
      obj.module_account_balance = message.moduleAccountBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.module_account_balance = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.depositsPendingWithdrawal) {
      obj.deposits_pending_withdrawal = message.depositsPendingWithdrawal.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits_pending_withdrawal = [];
    }
    if (message.depositsPendingMint) {
      obj.deposits_pending_mint = message.depositsPendingMint.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits_pending_mint = [];
    }
    if (message.depositsMinted) {
      obj.deposits_minted = message.depositsMinted.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits_minted = [];
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
      typeUrl: "/lum.network.dfract.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};