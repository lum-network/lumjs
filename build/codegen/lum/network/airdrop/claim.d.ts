import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export declare enum Action {
    ACTION_VOTE = 0,
    ACTION_DELEGATE_STAKE = 1,
    UNRECOGNIZED = -1
}
export declare const ActionSDKType: typeof Action;
export declare const ActionAmino: typeof Action;
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
export interface ClaimRecord {
    address: string;
    initialClaimableAmount: Coin[];
    actionCompleted: boolean[];
}
export interface ClaimRecordProtoMsg {
    typeUrl: "/lum.network.airdrop.ClaimRecord";
    value: Uint8Array;
}
export interface ClaimRecordAmino {
    address: string;
    initial_claimable_amount: CoinAmino[];
    action_completed: boolean[];
}
export interface ClaimRecordAminoMsg {
    type: "/lum.network.airdrop.ClaimRecord";
    value: ClaimRecordAmino;
}
export interface ClaimRecordSDKType {
    address: string;
    initial_claimable_amount: CoinSDKType[];
    action_completed: boolean[];
}
export declare const ClaimRecord: {
    encode(message: ClaimRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord;
    fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord;
    fromAmino(object: ClaimRecordAmino): ClaimRecord;
    toAmino(message: ClaimRecord): ClaimRecordAmino;
    fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord;
    fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord;
    toProto(message: ClaimRecord): Uint8Array;
    toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg;
};
