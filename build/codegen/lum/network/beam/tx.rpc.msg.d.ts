import { Rpc } from "../../../helpers";
import { MsgOpenBeam, MsgOpenBeamResponse, MsgUpdateBeam, MsgUpdateBeamResponse, MsgClaimBeam, MsgClaimBeamResponse } from "./tx";
export interface Msg {
    openBeam(request: MsgOpenBeam): Promise<MsgOpenBeamResponse>;
    updateBeam(request: MsgUpdateBeam): Promise<MsgUpdateBeamResponse>;
    claimBeam(request: MsgClaimBeam): Promise<MsgClaimBeamResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    openBeam(request: MsgOpenBeam): Promise<MsgOpenBeamResponse>;
    updateBeam(request: MsgUpdateBeam): Promise<MsgUpdateBeamResponse>;
    claimBeam(request: MsgClaimBeam): Promise<MsgClaimBeamResponse>;
}
