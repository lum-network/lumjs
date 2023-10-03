import { BoolValue, BoolValueAmino, BoolValueSDKType } from "../../../google/protobuf/wrappers";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProposalUpdateParams {
    title: string;
    description: string;
    withdrawalAddress: string;
    isDepositEnabled: BoolValue | undefined;
    depositDenoms?: string[];
    minDepositAmount?: string;
}
export interface ProposalUpdateParamsProtoMsg {
    typeUrl: "/lum.network.dfract.ProposalUpdateParams";
    value: Uint8Array;
}
export interface ProposalUpdateParamsAmino {
    title: string;
    description: string;
    withdrawal_address: string;
    is_deposit_enabled?: BoolValueAmino | undefined;
    deposit_denoms: string[];
    min_deposit_amount: string;
}
export interface ProposalUpdateParamsAminoMsg {
    type: "/lum.network.dfract.ProposalUpdateParams";
    value: ProposalUpdateParamsAmino;
}
export interface ProposalUpdateParamsSDKType {
    title: string;
    description: string;
    withdrawal_address: string;
    is_deposit_enabled: BoolValueSDKType | undefined;
    deposit_denoms?: string[];
    min_deposit_amount?: string;
}
export declare const ProposalUpdateParams: {
    encode(message: ProposalUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalUpdateParams;
    fromPartial(object: DeepPartial<ProposalUpdateParams>): ProposalUpdateParams;
    fromAmino(object: ProposalUpdateParamsAmino): ProposalUpdateParams;
    toAmino(message: ProposalUpdateParams): ProposalUpdateParamsAmino;
    fromAminoMsg(object: ProposalUpdateParamsAminoMsg): ProposalUpdateParams;
    fromProtoMsg(message: ProposalUpdateParamsProtoMsg): ProposalUpdateParams;
    toProto(message: ProposalUpdateParams): Uint8Array;
    toProtoMsg(message: ProposalUpdateParams): ProposalUpdateParamsProtoMsg;
};
