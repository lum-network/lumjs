import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpenBeam, MsgUpdateBeam, MsgClaimBeam } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        openBeam(value: MsgOpenBeam): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateBeam(value: MsgUpdateBeam): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimBeam(value: MsgClaimBeam): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        openBeam(value: MsgOpenBeam): {
            typeUrl: string;
            value: MsgOpenBeam;
        };
        updateBeam(value: MsgUpdateBeam): {
            typeUrl: string;
            value: MsgUpdateBeam;
        };
        claimBeam(value: MsgClaimBeam): {
            typeUrl: string;
            value: MsgClaimBeam;
        };
    };
    fromPartial: {
        openBeam(value: MsgOpenBeam): {
            typeUrl: string;
            value: MsgOpenBeam;
        };
        updateBeam(value: MsgUpdateBeam): {
            typeUrl: string;
            value: MsgUpdateBeam;
        };
        claimBeam(value: MsgClaimBeam): {
            typeUrl: string;
            value: MsgClaimBeam;
        };
    };
};
