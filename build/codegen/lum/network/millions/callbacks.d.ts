/// <reference types="long" />
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum TransferType {
    TRANSFER_TYPE_UNSPECIFIED = 0,
    TRANSFER_TYPE_CLAIM = 1,
    TRANSFER_TYPE_WITHDRAW = 2,
    UNRECOGNIZED = -1
}
export declare const TransferTypeSDKType: typeof TransferType;
export declare const TransferTypeAmino: typeof TransferType;
export declare function transferTypeFromJSON(object: any): TransferType;
export declare function transferTypeToJSON(object: TransferType): string;
export interface SplitDelegation {
    validatorAddress: string;
    amount: string;
}
export interface SplitDelegationProtoMsg {
    typeUrl: "/lum.network.millions.SplitDelegation";
    value: Uint8Array;
}
export interface SplitDelegationAmino {
    validator_address: string;
    amount: string;
}
export interface SplitDelegationAminoMsg {
    type: "/lum.network.millions.SplitDelegation";
    value: SplitDelegationAmino;
}
export interface SplitDelegationSDKType {
    validator_address: string;
    amount: string;
}
export interface DelegateCallback {
    poolId: Long;
    depositId: Long;
    splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackProtoMsg {
    typeUrl: "/lum.network.millions.DelegateCallback";
    value: Uint8Array;
}
export interface DelegateCallbackAmino {
    pool_id: string;
    deposit_id: string;
    split_delegations: SplitDelegationAmino[];
}
export interface DelegateCallbackAminoMsg {
    type: "/lum.network.millions.DelegateCallback";
    value: DelegateCallbackAmino;
}
export interface DelegateCallbackSDKType {
    pool_id: Long;
    deposit_id: Long;
    split_delegations: SplitDelegationSDKType[];
}
export interface UndelegateCallback {
    poolId: Long;
    withdrawalIds: Long[];
}
export interface UndelegateCallbackProtoMsg {
    typeUrl: "/lum.network.millions.UndelegateCallback";
    value: Uint8Array;
}
export interface UndelegateCallbackAmino {
    pool_id: string;
    withdrawal_ids: string[];
}
export interface UndelegateCallbackAminoMsg {
    type: "/lum.network.millions.UndelegateCallback";
    value: UndelegateCallbackAmino;
}
export interface UndelegateCallbackSDKType {
    pool_id: Long;
    withdrawal_ids: Long[];
}
export interface RedelegateCallback {
    poolId: Long;
    operatorAddress: string;
    splitDelegations: SplitDelegation[];
}
export interface RedelegateCallbackProtoMsg {
    typeUrl: "/lum.network.millions.RedelegateCallback";
    value: Uint8Array;
}
export interface RedelegateCallbackAmino {
    pool_id: string;
    operator_address: string;
    split_delegations: SplitDelegationAmino[];
}
export interface RedelegateCallbackAminoMsg {
    type: "/lum.network.millions.RedelegateCallback";
    value: RedelegateCallbackAmino;
}
export interface RedelegateCallbackSDKType {
    pool_id: Long;
    operator_address: string;
    split_delegations: SplitDelegationSDKType[];
}
export interface ClaimRewardsCallback {
    poolId: Long;
    drawId: Long;
}
export interface ClaimRewardsCallbackProtoMsg {
    typeUrl: "/lum.network.millions.ClaimRewardsCallback";
    value: Uint8Array;
}
export interface ClaimRewardsCallbackAmino {
    pool_id: string;
    draw_id: string;
}
export interface ClaimRewardsCallbackAminoMsg {
    type: "/lum.network.millions.ClaimRewardsCallback";
    value: ClaimRewardsCallbackAmino;
}
export interface ClaimRewardsCallbackSDKType {
    pool_id: Long;
    draw_id: Long;
}
export interface TransferToNativeCallback {
    poolId: Long;
    depositId: Long;
}
export interface TransferToNativeCallbackProtoMsg {
    typeUrl: "/lum.network.millions.TransferToNativeCallback";
    value: Uint8Array;
}
export interface TransferToNativeCallbackAmino {
    pool_id: string;
    deposit_id: string;
}
export interface TransferToNativeCallbackAminoMsg {
    type: "/lum.network.millions.TransferToNativeCallback";
    value: TransferToNativeCallbackAmino;
}
export interface TransferToNativeCallbackSDKType {
    pool_id: Long;
    deposit_id: Long;
}
export interface TransferFromNativeCallback {
    type: TransferType;
    poolId: Long;
    drawId: Long;
    withdrawalId: Long;
}
export interface TransferFromNativeCallbackProtoMsg {
    typeUrl: "/lum.network.millions.TransferFromNativeCallback";
    value: Uint8Array;
}
export interface TransferFromNativeCallbackAmino {
    type: TransferType;
    pool_id: string;
    draw_id: string;
    withdrawal_id: string;
}
export interface TransferFromNativeCallbackAminoMsg {
    type: "/lum.network.millions.TransferFromNativeCallback";
    value: TransferFromNativeCallbackAmino;
}
export interface TransferFromNativeCallbackSDKType {
    type: TransferType;
    pool_id: Long;
    draw_id: Long;
    withdrawal_id: Long;
}
export interface SetWithdrawAddressCallback {
    poolId: Long;
}
export interface SetWithdrawAddressCallbackProtoMsg {
    typeUrl: "/lum.network.millions.SetWithdrawAddressCallback";
    value: Uint8Array;
}
export interface SetWithdrawAddressCallbackAmino {
    pool_id: string;
}
export interface SetWithdrawAddressCallbackAminoMsg {
    type: "/lum.network.millions.SetWithdrawAddressCallback";
    value: SetWithdrawAddressCallbackAmino;
}
export interface SetWithdrawAddressCallbackSDKType {
    pool_id: Long;
}
export interface BankSendCallback {
    poolId: Long;
    withdrawalId: Long;
}
export interface BankSendCallbackProtoMsg {
    typeUrl: "/lum.network.millions.BankSendCallback";
    value: Uint8Array;
}
export interface BankSendCallbackAmino {
    pool_id: string;
    withdrawal_id: string;
}
export interface BankSendCallbackAminoMsg {
    type: "/lum.network.millions.BankSendCallback";
    value: BankSendCallbackAmino;
}
export interface BankSendCallbackSDKType {
    pool_id: Long;
    withdrawal_id: Long;
}
export declare const SplitDelegation: {
    encode(message: SplitDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SplitDelegation;
    fromPartial(object: DeepPartial<SplitDelegation>): SplitDelegation;
    fromAmino(object: SplitDelegationAmino): SplitDelegation;
    toAmino(message: SplitDelegation): SplitDelegationAmino;
    fromAminoMsg(object: SplitDelegationAminoMsg): SplitDelegation;
    fromProtoMsg(message: SplitDelegationProtoMsg): SplitDelegation;
    toProto(message: SplitDelegation): Uint8Array;
    toProtoMsg(message: SplitDelegation): SplitDelegationProtoMsg;
};
export declare const DelegateCallback: {
    encode(message: DelegateCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegateCallback;
    fromPartial(object: DeepPartial<DelegateCallback>): DelegateCallback;
    fromAmino(object: DelegateCallbackAmino): DelegateCallback;
    toAmino(message: DelegateCallback): DelegateCallbackAmino;
    fromAminoMsg(object: DelegateCallbackAminoMsg): DelegateCallback;
    fromProtoMsg(message: DelegateCallbackProtoMsg): DelegateCallback;
    toProto(message: DelegateCallback): Uint8Array;
    toProtoMsg(message: DelegateCallback): DelegateCallbackProtoMsg;
};
export declare const UndelegateCallback: {
    encode(message: UndelegateCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateCallback;
    fromPartial(object: DeepPartial<UndelegateCallback>): UndelegateCallback;
    fromAmino(object: UndelegateCallbackAmino): UndelegateCallback;
    toAmino(message: UndelegateCallback): UndelegateCallbackAmino;
    fromAminoMsg(object: UndelegateCallbackAminoMsg): UndelegateCallback;
    fromProtoMsg(message: UndelegateCallbackProtoMsg): UndelegateCallback;
    toProto(message: UndelegateCallback): Uint8Array;
    toProtoMsg(message: UndelegateCallback): UndelegateCallbackProtoMsg;
};
export declare const RedelegateCallback: {
    encode(message: RedelegateCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegateCallback;
    fromPartial(object: DeepPartial<RedelegateCallback>): RedelegateCallback;
    fromAmino(object: RedelegateCallbackAmino): RedelegateCallback;
    toAmino(message: RedelegateCallback): RedelegateCallbackAmino;
    fromAminoMsg(object: RedelegateCallbackAminoMsg): RedelegateCallback;
    fromProtoMsg(message: RedelegateCallbackProtoMsg): RedelegateCallback;
    toProto(message: RedelegateCallback): Uint8Array;
    toProtoMsg(message: RedelegateCallback): RedelegateCallbackProtoMsg;
};
export declare const ClaimRewardsCallback: {
    encode(message: ClaimRewardsCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRewardsCallback;
    fromPartial(object: DeepPartial<ClaimRewardsCallback>): ClaimRewardsCallback;
    fromAmino(object: ClaimRewardsCallbackAmino): ClaimRewardsCallback;
    toAmino(message: ClaimRewardsCallback): ClaimRewardsCallbackAmino;
    fromAminoMsg(object: ClaimRewardsCallbackAminoMsg): ClaimRewardsCallback;
    fromProtoMsg(message: ClaimRewardsCallbackProtoMsg): ClaimRewardsCallback;
    toProto(message: ClaimRewardsCallback): Uint8Array;
    toProtoMsg(message: ClaimRewardsCallback): ClaimRewardsCallbackProtoMsg;
};
export declare const TransferToNativeCallback: {
    encode(message: TransferToNativeCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferToNativeCallback;
    fromPartial(object: DeepPartial<TransferToNativeCallback>): TransferToNativeCallback;
    fromAmino(object: TransferToNativeCallbackAmino): TransferToNativeCallback;
    toAmino(message: TransferToNativeCallback): TransferToNativeCallbackAmino;
    fromAminoMsg(object: TransferToNativeCallbackAminoMsg): TransferToNativeCallback;
    fromProtoMsg(message: TransferToNativeCallbackProtoMsg): TransferToNativeCallback;
    toProto(message: TransferToNativeCallback): Uint8Array;
    toProtoMsg(message: TransferToNativeCallback): TransferToNativeCallbackProtoMsg;
};
export declare const TransferFromNativeCallback: {
    encode(message: TransferFromNativeCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferFromNativeCallback;
    fromPartial(object: DeepPartial<TransferFromNativeCallback>): TransferFromNativeCallback;
    fromAmino(object: TransferFromNativeCallbackAmino): TransferFromNativeCallback;
    toAmino(message: TransferFromNativeCallback): TransferFromNativeCallbackAmino;
    fromAminoMsg(object: TransferFromNativeCallbackAminoMsg): TransferFromNativeCallback;
    fromProtoMsg(message: TransferFromNativeCallbackProtoMsg): TransferFromNativeCallback;
    toProto(message: TransferFromNativeCallback): Uint8Array;
    toProtoMsg(message: TransferFromNativeCallback): TransferFromNativeCallbackProtoMsg;
};
export declare const SetWithdrawAddressCallback: {
    encode(message: SetWithdrawAddressCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetWithdrawAddressCallback;
    fromPartial(object: DeepPartial<SetWithdrawAddressCallback>): SetWithdrawAddressCallback;
    fromAmino(object: SetWithdrawAddressCallbackAmino): SetWithdrawAddressCallback;
    toAmino(message: SetWithdrawAddressCallback): SetWithdrawAddressCallbackAmino;
    fromAminoMsg(object: SetWithdrawAddressCallbackAminoMsg): SetWithdrawAddressCallback;
    fromProtoMsg(message: SetWithdrawAddressCallbackProtoMsg): SetWithdrawAddressCallback;
    toProto(message: SetWithdrawAddressCallback): Uint8Array;
    toProtoMsg(message: SetWithdrawAddressCallback): SetWithdrawAddressCallbackProtoMsg;
};
export declare const BankSendCallback: {
    encode(message: BankSendCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BankSendCallback;
    fromPartial(object: DeepPartial<BankSendCallback>): BankSendCallback;
    fromAmino(object: BankSendCallbackAmino): BankSendCallback;
    toAmino(message: BankSendCallback): BankSendCallbackAmino;
    fromAminoMsg(object: BankSendCallbackAminoMsg): BankSendCallback;
    fromProtoMsg(message: BankSendCallbackProtoMsg): BankSendCallback;
    toProto(message: BankSendCallback): Uint8Array;
    toProtoMsg(message: BankSendCallback): BankSendCallbackProtoMsg;
};
