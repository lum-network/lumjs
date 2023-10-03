/// <reference types="long" />
import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ValidatorSet {
    validators: Validator[];
    proposer: Validator | undefined;
    totalVotingPower: Long;
}
export interface ValidatorSetProtoMsg {
    typeUrl: "/tendermint.types.ValidatorSet";
    value: Uint8Array;
}
export interface ValidatorSetAmino {
    validators: ValidatorAmino[];
    proposer?: ValidatorAmino | undefined;
    total_voting_power: string;
}
export interface ValidatorSetAminoMsg {
    type: "/tendermint.types.ValidatorSet";
    value: ValidatorSetAmino;
}
export interface ValidatorSetSDKType {
    validators: ValidatorSDKType[];
    proposer: ValidatorSDKType | undefined;
    total_voting_power: Long;
}
export interface Validator {
    address: Uint8Array;
    pubKey: PublicKey | undefined;
    votingPower: Long;
    proposerPriority: Long;
}
export interface ValidatorProtoMsg {
    typeUrl: "/tendermint.types.Validator";
    value: Uint8Array;
}
export interface ValidatorAmino {
    address: Uint8Array;
    pub_key?: PublicKeyAmino | undefined;
    voting_power: string;
    proposer_priority: string;
}
export interface ValidatorAminoMsg {
    type: "/tendermint.types.Validator";
    value: ValidatorAmino;
}
export interface ValidatorSDKType {
    address: Uint8Array;
    pub_key: PublicKeySDKType | undefined;
    voting_power: Long;
    proposer_priority: Long;
}
export interface SimpleValidator {
    pubKey: PublicKey | undefined;
    votingPower: Long;
}
export interface SimpleValidatorProtoMsg {
    typeUrl: "/tendermint.types.SimpleValidator";
    value: Uint8Array;
}
export interface SimpleValidatorAmino {
    pub_key?: PublicKeyAmino | undefined;
    voting_power: string;
}
export interface SimpleValidatorAminoMsg {
    type: "/tendermint.types.SimpleValidator";
    value: SimpleValidatorAmino;
}
export interface SimpleValidatorSDKType {
    pub_key: PublicKeySDKType | undefined;
    voting_power: Long;
}
export declare const ValidatorSet: {
    encode(message: ValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet;
    fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet;
    fromAmino(object: ValidatorSetAmino): ValidatorSet;
    toAmino(message: ValidatorSet): ValidatorSetAmino;
    fromAminoMsg(object: ValidatorSetAminoMsg): ValidatorSet;
    fromProtoMsg(message: ValidatorSetProtoMsg): ValidatorSet;
    toProto(message: ValidatorSet): Uint8Array;
    toProtoMsg(message: ValidatorSet): ValidatorSetProtoMsg;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const SimpleValidator: {
    encode(message: SimpleValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator;
    fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator;
    fromAmino(object: SimpleValidatorAmino): SimpleValidator;
    toAmino(message: SimpleValidator): SimpleValidatorAmino;
    fromAminoMsg(object: SimpleValidatorAminoMsg): SimpleValidator;
    fromProtoMsg(message: SimpleValidatorProtoMsg): SimpleValidator;
    toProto(message: SimpleValidator): Uint8Array;
    toProtoMsg(message: SimpleValidator): SimpleValidatorProtoMsg;
};
