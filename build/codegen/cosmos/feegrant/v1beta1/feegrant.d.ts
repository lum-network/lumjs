import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
    /**
     * spend_limit specifies the maximum amount of tokens that can be spent
     * by this allowance and will be updated as tokens are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spendLimit: Coin[];
    /** expiration specifies an optional time when this allowance expires */
    expiration: Date | undefined;
}
export interface BasicAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance";
    value: Uint8Array;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceAmino {
    /**
     * spend_limit specifies the maximum amount of tokens that can be spent
     * by this allowance and will be updated as tokens are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spend_limit: CoinAmino[];
    /** expiration specifies an optional time when this allowance expires */
    expiration?: Date | undefined;
}
export interface BasicAllowanceAminoMsg {
    type: "cosmos-sdk/BasicAllowance";
    value: BasicAllowanceAmino;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceSDKType {
    spend_limit: CoinSDKType[];
    expiration: Date | undefined;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
    /** basic specifies a struct of `BasicAllowance` */
    basic: BasicAllowance | undefined;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period: Duration | undefined;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    periodSpendLimit: Coin[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    periodCanSpend: Coin[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    periodReset: Date | undefined;
}
export interface PeriodicAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance";
    value: Uint8Array;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceAmino {
    /** basic specifies a struct of `BasicAllowance` */
    basic?: BasicAllowanceAmino | undefined;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period?: DurationAmino | undefined;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    period_spend_limit: CoinAmino[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    period_can_spend: CoinAmino[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    period_reset?: Date | undefined;
}
export interface PeriodicAllowanceAminoMsg {
    type: "cosmos-sdk/PeriodicAllowance";
    value: PeriodicAllowanceAmino;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceSDKType {
    basic: BasicAllowanceSDKType | undefined;
    period: DurationSDKType | undefined;
    period_spend_limit: CoinSDKType[];
    period_can_spend: CoinSDKType[];
    period_reset: Date | undefined;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance: Any | undefined;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowedMessages: string[];
}
export interface AllowedMsgAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
    value: Uint8Array;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceAmino {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: AnyAmino | undefined;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowed_messages: string[];
}
export interface AllowedMsgAllowanceAminoMsg {
    type: "cosmos-sdk/AllowedMsgAllowance";
    value: AllowedMsgAllowanceAmino;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceSDKType {
    allowance: AnySDKType | undefined;
    allowed_messages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance: Any | undefined;
}
export interface GrantProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant";
    value: Uint8Array;
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: AnyAmino | undefined;
}
export interface GrantAminoMsg {
    type: "cosmos-sdk/Grant";
    value: GrantAmino;
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantSDKType {
    granter: string;
    grantee: string;
    allowance: AnySDKType | undefined;
}
export declare const BasicAllowance: {
    encode(message: BasicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasicAllowance;
    fromPartial(object: DeepPartial<BasicAllowance>): BasicAllowance;
    fromAmino(object: BasicAllowanceAmino): BasicAllowance;
    toAmino(message: BasicAllowance): BasicAllowanceAmino;
    fromAminoMsg(object: BasicAllowanceAminoMsg): BasicAllowance;
    toAminoMsg(message: BasicAllowance): BasicAllowanceAminoMsg;
    fromProtoMsg(message: BasicAllowanceProtoMsg): BasicAllowance;
    toProto(message: BasicAllowance): Uint8Array;
    toProtoMsg(message: BasicAllowance): BasicAllowanceProtoMsg;
};
export declare const PeriodicAllowance: {
    encode(message: PeriodicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicAllowance;
    fromPartial(object: DeepPartial<PeriodicAllowance>): PeriodicAllowance;
    fromAmino(object: PeriodicAllowanceAmino): PeriodicAllowance;
    toAmino(message: PeriodicAllowance): PeriodicAllowanceAmino;
    fromAminoMsg(object: PeriodicAllowanceAminoMsg): PeriodicAllowance;
    toAminoMsg(message: PeriodicAllowance): PeriodicAllowanceAminoMsg;
    fromProtoMsg(message: PeriodicAllowanceProtoMsg): PeriodicAllowance;
    toProto(message: PeriodicAllowance): Uint8Array;
    toProtoMsg(message: PeriodicAllowance): PeriodicAllowanceProtoMsg;
};
export declare const AllowedMsgAllowance: {
    encode(message: AllowedMsgAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedMsgAllowance;
    fromPartial(object: DeepPartial<AllowedMsgAllowance>): AllowedMsgAllowance;
    fromAmino(object: AllowedMsgAllowanceAmino): AllowedMsgAllowance;
    toAmino(message: AllowedMsgAllowance): AllowedMsgAllowanceAmino;
    fromAminoMsg(object: AllowedMsgAllowanceAminoMsg): AllowedMsgAllowance;
    toAminoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceAminoMsg;
    fromProtoMsg(message: AllowedMsgAllowanceProtoMsg): AllowedMsgAllowance;
    toProto(message: AllowedMsgAllowance): Uint8Array;
    toProtoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceProtoMsg;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromPartial(object: DeepPartial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
    fromAminoMsg(object: GrantAminoMsg): Grant;
    toAminoMsg(message: Grant): GrantAminoMsg;
    fromProtoMsg(message: GrantProtoMsg): Grant;
    toProto(message: Grant): Uint8Array;
    toProtoMsg(message: Grant): GrantProtoMsg;
};
