import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
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
    module_account_balance: CoinAmino[];
    params?: ParamsAmino | undefined;
    deposits_pending_withdrawal: DepositAmino[];
    deposits_pending_mint: DepositAmino[];
    deposits_minted: DepositAmino[];
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
