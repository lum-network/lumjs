import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
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
    depositor_address: string;
    amount?: CoinAmino | undefined;
    created_at?: Date | undefined;
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
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromPartial(object: DeepPartial<Deposit>): Deposit;
    fromAmino(object: DepositAmino): Deposit;
    toAmino(message: Deposit): DepositAmino;
    fromAminoMsg(object: DepositAminoMsg): Deposit;
    fromProtoMsg(message: DepositProtoMsg): Deposit;
    toProto(message: Deposit): Uint8Array;
    toProtoMsg(message: Deposit): DepositProtoMsg;
};
