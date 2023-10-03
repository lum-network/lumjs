import { Description, DescriptionAmino, DescriptionSDKType, CommissionRates, CommissionRatesAmino, CommissionRatesSDKType } from "./staking";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
    description: Description | undefined;
    commission: CommissionRates | undefined;
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey: Any | undefined;
    value: Coin | undefined;
}
export interface MsgCreateValidatorProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator";
    value: Uint8Array;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorAmino {
    description?: DescriptionAmino | undefined;
    commission?: CommissionRatesAmino | undefined;
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey?: AnyAmino | undefined;
    value?: CoinAmino | undefined;
}
export interface MsgCreateValidatorAminoMsg {
    type: "cosmos-sdk/MsgCreateValidator";
    value: MsgCreateValidatorAmino;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorSDKType {
    description: DescriptionSDKType | undefined;
    commission: CommissionRatesSDKType | undefined;
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey: AnySDKType | undefined;
    value: CoinSDKType | undefined;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
}
export interface MsgCreateValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse";
    value: Uint8Array;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseAmino {
}
export interface MsgCreateValidatorResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateValidatorResponse";
    value: MsgCreateValidatorResponseAmino;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseSDKType {
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
    description: Description | undefined;
    validatorAddress: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commissionRate: string;
    minSelfDelegation: string;
}
export interface MsgEditValidatorProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator";
    value: Uint8Array;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorAmino {
    description?: DescriptionAmino | undefined;
    validator_address: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commission_rate: string;
    min_self_delegation: string;
}
export interface MsgEditValidatorAminoMsg {
    type: "cosmos-sdk/MsgEditValidator";
    value: MsgEditValidatorAmino;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorSDKType {
    description: DescriptionSDKType | undefined;
    validator_address: string;
    commission_rate: string;
    min_self_delegation: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
}
export interface MsgEditValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse";
    value: Uint8Array;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseAmino {
}
export interface MsgEditValidatorResponseAminoMsg {
    type: "cosmos-sdk/MsgEditValidatorResponse";
    value: MsgEditValidatorResponseAmino;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseSDKType {
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin | undefined;
}
export interface MsgDelegateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate";
    value: Uint8Array;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateAmino {
    delegator_address: string;
    validator_address: string;
    amount?: CoinAmino | undefined;
}
export interface MsgDelegateAminoMsg {
    type: "cosmos-sdk/MsgDelegate";
    value: MsgDelegateAmino;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateSDKType {
    delegator_address: string;
    validator_address: string;
    amount: CoinSDKType | undefined;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}
export interface MsgDelegateResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse";
    value: Uint8Array;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseAmino {
}
export interface MsgDelegateResponseAminoMsg {
    type: "cosmos-sdk/MsgDelegateResponse";
    value: MsgDelegateResponseAmino;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseSDKType {
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount: Coin | undefined;
}
export interface MsgBeginRedelegateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate";
    value: Uint8Array;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateAmino {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount?: CoinAmino | undefined;
}
export interface MsgBeginRedelegateAminoMsg {
    type: "cosmos-sdk/MsgBeginRedelegate";
    value: MsgBeginRedelegateAmino;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateSDKType {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount: CoinSDKType | undefined;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
    completionTime: Date | undefined;
}
export interface MsgBeginRedelegateResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse";
    value: Uint8Array;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseAmino {
    completion_time?: Date | undefined;
}
export interface MsgBeginRedelegateResponseAminoMsg {
    type: "cosmos-sdk/MsgBeginRedelegateResponse";
    value: MsgBeginRedelegateResponseAmino;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseSDKType {
    completion_time: Date | undefined;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin | undefined;
}
export interface MsgUndelegateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate";
    value: Uint8Array;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateAmino {
    delegator_address: string;
    validator_address: string;
    amount?: CoinAmino | undefined;
}
export interface MsgUndelegateAminoMsg {
    type: "cosmos-sdk/MsgUndelegate";
    value: MsgUndelegateAmino;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateSDKType {
    delegator_address: string;
    validator_address: string;
    amount: CoinSDKType | undefined;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
    completionTime: Date | undefined;
}
export interface MsgUndelegateResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse";
    value: Uint8Array;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseAmino {
    completion_time?: Date | undefined;
}
export interface MsgUndelegateResponseAminoMsg {
    type: "cosmos-sdk/MsgUndelegateResponse";
    value: MsgUndelegateResponseAmino;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseSDKType {
    completion_time: Date | undefined;
}
export declare const MsgCreateValidator: {
    encode(message: MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator;
    fromPartial(object: DeepPartial<MsgCreateValidator>): MsgCreateValidator;
    fromAmino(object: MsgCreateValidatorAmino): MsgCreateValidator;
    toAmino(message: MsgCreateValidator): MsgCreateValidatorAmino;
    fromAminoMsg(object: MsgCreateValidatorAminoMsg): MsgCreateValidator;
    toAminoMsg(message: MsgCreateValidator): MsgCreateValidatorAminoMsg;
    fromProtoMsg(message: MsgCreateValidatorProtoMsg): MsgCreateValidator;
    toProto(message: MsgCreateValidator): Uint8Array;
    toProtoMsg(message: MsgCreateValidator): MsgCreateValidatorProtoMsg;
};
export declare const MsgCreateValidatorResponse: {
    encode(_: MsgCreateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse;
    fromPartial(_: DeepPartial<MsgCreateValidatorResponse>): MsgCreateValidatorResponse;
    fromAmino(_: MsgCreateValidatorResponseAmino): MsgCreateValidatorResponse;
    toAmino(_: MsgCreateValidatorResponse): MsgCreateValidatorResponseAmino;
    fromAminoMsg(object: MsgCreateValidatorResponseAminoMsg): MsgCreateValidatorResponse;
    toAminoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseAminoMsg;
    fromProtoMsg(message: MsgCreateValidatorResponseProtoMsg): MsgCreateValidatorResponse;
    toProto(message: MsgCreateValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseProtoMsg;
};
export declare const MsgEditValidator: {
    encode(message: MsgEditValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator;
    fromPartial(object: DeepPartial<MsgEditValidator>): MsgEditValidator;
    fromAmino(object: MsgEditValidatorAmino): MsgEditValidator;
    toAmino(message: MsgEditValidator): MsgEditValidatorAmino;
    fromAminoMsg(object: MsgEditValidatorAminoMsg): MsgEditValidator;
    toAminoMsg(message: MsgEditValidator): MsgEditValidatorAminoMsg;
    fromProtoMsg(message: MsgEditValidatorProtoMsg): MsgEditValidator;
    toProto(message: MsgEditValidator): Uint8Array;
    toProtoMsg(message: MsgEditValidator): MsgEditValidatorProtoMsg;
};
export declare const MsgEditValidatorResponse: {
    encode(_: MsgEditValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse;
    fromPartial(_: DeepPartial<MsgEditValidatorResponse>): MsgEditValidatorResponse;
    fromAmino(_: MsgEditValidatorResponseAmino): MsgEditValidatorResponse;
    toAmino(_: MsgEditValidatorResponse): MsgEditValidatorResponseAmino;
    fromAminoMsg(object: MsgEditValidatorResponseAminoMsg): MsgEditValidatorResponse;
    toAminoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseAminoMsg;
    fromProtoMsg(message: MsgEditValidatorResponseProtoMsg): MsgEditValidatorResponse;
    toProto(message: MsgEditValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseProtoMsg;
};
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
    fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate;
    fromAmino(object: MsgDelegateAmino): MsgDelegate;
    toAmino(message: MsgDelegate): MsgDelegateAmino;
    fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate;
    toAminoMsg(message: MsgDelegate): MsgDelegateAminoMsg;
    fromProtoMsg(message: MsgDelegateProtoMsg): MsgDelegate;
    toProto(message: MsgDelegate): Uint8Array;
    toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
    fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse;
    fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse;
    toAmino(_: MsgDelegateResponse): MsgDelegateResponseAmino;
    fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse;
    toAminoMsg(message: MsgDelegateResponse): MsgDelegateResponseAminoMsg;
    fromProtoMsg(message: MsgDelegateResponseProtoMsg): MsgDelegateResponse;
    toProto(message: MsgDelegateResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg;
};
export declare const MsgBeginRedelegate: {
    encode(message: MsgBeginRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate;
    fromPartial(object: DeepPartial<MsgBeginRedelegate>): MsgBeginRedelegate;
    fromAmino(object: MsgBeginRedelegateAmino): MsgBeginRedelegate;
    toAmino(message: MsgBeginRedelegate): MsgBeginRedelegateAmino;
    fromAminoMsg(object: MsgBeginRedelegateAminoMsg): MsgBeginRedelegate;
    toAminoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateAminoMsg;
    fromProtoMsg(message: MsgBeginRedelegateProtoMsg): MsgBeginRedelegate;
    toProto(message: MsgBeginRedelegate): Uint8Array;
    toProtoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateProtoMsg;
};
export declare const MsgBeginRedelegateResponse: {
    encode(message: MsgBeginRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegateResponse;
    fromPartial(object: DeepPartial<MsgBeginRedelegateResponse>): MsgBeginRedelegateResponse;
    fromAmino(object: MsgBeginRedelegateResponseAmino): MsgBeginRedelegateResponse;
    toAmino(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAmino;
    fromAminoMsg(object: MsgBeginRedelegateResponseAminoMsg): MsgBeginRedelegateResponse;
    toAminoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAminoMsg;
    fromProtoMsg(message: MsgBeginRedelegateResponseProtoMsg): MsgBeginRedelegateResponse;
    toProto(message: MsgBeginRedelegateResponse): Uint8Array;
    toProtoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseProtoMsg;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
    fromPartial(object: DeepPartial<MsgUndelegate>): MsgUndelegate;
    fromAmino(object: MsgUndelegateAmino): MsgUndelegate;
    toAmino(message: MsgUndelegate): MsgUndelegateAmino;
    fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate;
    toAminoMsg(message: MsgUndelegate): MsgUndelegateAminoMsg;
    fromProtoMsg(message: MsgUndelegateProtoMsg): MsgUndelegate;
    toProto(message: MsgUndelegate): Uint8Array;
    toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg;
};
export declare const MsgUndelegateResponse: {
    encode(message: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromPartial(object: DeepPartial<MsgUndelegateResponse>): MsgUndelegateResponse;
    fromAmino(object: MsgUndelegateResponseAmino): MsgUndelegateResponse;
    toAmino(message: MsgUndelegateResponse): MsgUndelegateResponseAmino;
    fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse;
    toAminoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseAminoMsg;
    fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse;
    toProto(message: MsgUndelegateResponse): Uint8Array;
    toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg;
};
