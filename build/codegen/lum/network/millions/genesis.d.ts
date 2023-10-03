/// <reference types="long" />
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import { Draw, DrawAmino, DrawSDKType } from "./draw";
import { Prize, PrizeAmino, PrizeSDKType } from "./prize";
import { Withdrawal, WithdrawalAmino, WithdrawalSDKType } from "./withdrawal";
import { EpochTracker, EpochTrackerAmino, EpochTrackerSDKType } from "./epoch";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    params: Params | undefined;
    nextPoolId: Long;
    nextDepositId: Long;
    nextPrizeId: Long;
    nextWithdrawalId: Long;
    pools: Pool[];
    deposits: Deposit[];
    draws: Draw[];
    prizes: Prize[];
    withdrawals: Withdrawal[];
    epochTrackers: EpochTracker[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/lum.network.millions.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    params?: ParamsAmino | undefined;
    next_pool_id: string;
    next_deposit_id: string;
    next_prize_id: string;
    next_withdrawal_id: string;
    pools: PoolAmino[];
    deposits: DepositAmino[];
    draws: DrawAmino[];
    prizes: PrizeAmino[];
    withdrawals: WithdrawalAmino[];
    epoch_trackers: EpochTrackerAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/lum.network.millions.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    params: ParamsSDKType | undefined;
    next_pool_id: Long;
    next_deposit_id: Long;
    next_prize_id: Long;
    next_withdrawal_id: Long;
    pools: PoolSDKType[];
    deposits: DepositSDKType[];
    draws: DrawSDKType[];
    prizes: PrizeSDKType[];
    withdrawals: WithdrawalSDKType[];
    epoch_trackers: EpochTrackerSDKType[];
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
