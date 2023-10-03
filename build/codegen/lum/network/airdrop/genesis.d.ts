import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisState {
    moduleAccountBalance: Coin | undefined;
    params: Params | undefined;
    claimRecords: ClaimRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/lum.network.airdrop.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateAmino {
    module_account_balance?: CoinAmino | undefined;
    params?: ParamsAmino | undefined;
    claim_records: ClaimRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/lum.network.airdrop.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateSDKType {
    module_account_balance: CoinSDKType | undefined;
    params: ParamsSDKType | undefined;
    claim_records: ClaimRecordSDKType[];
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
