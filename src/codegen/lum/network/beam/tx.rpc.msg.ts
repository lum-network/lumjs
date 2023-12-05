import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgOpenBeam, MsgOpenBeamResponse, MsgUpdateBeam, MsgUpdateBeamResponse, MsgClaimBeam, MsgClaimBeamResponse } from "./tx";
export interface Msg {
  openBeam(request: MsgOpenBeam): Promise<MsgOpenBeamResponse>;
  updateBeam(request: MsgUpdateBeam): Promise<MsgUpdateBeamResponse>;
  claimBeam(request: MsgClaimBeam): Promise<MsgClaimBeamResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.openBeam = this.openBeam.bind(this);
    this.updateBeam = this.updateBeam.bind(this);
    this.claimBeam = this.claimBeam.bind(this);
  }
  openBeam(request: MsgOpenBeam): Promise<MsgOpenBeamResponse> {
    const data = MsgOpenBeam.encode(request).finish();
    const promise = this.rpc.request("lum.network.beam.Msg", "OpenBeam", data);
    return promise.then(data => MsgOpenBeamResponse.decode(new BinaryReader(data)));
  }
  updateBeam(request: MsgUpdateBeam): Promise<MsgUpdateBeamResponse> {
    const data = MsgUpdateBeam.encode(request).finish();
    const promise = this.rpc.request("lum.network.beam.Msg", "UpdateBeam", data);
    return promise.then(data => MsgUpdateBeamResponse.decode(new BinaryReader(data)));
  }
  claimBeam(request: MsgClaimBeam): Promise<MsgClaimBeamResponse> {
    const data = MsgClaimBeam.encode(request).finish();
    const promise = this.rpc.request("lum.network.beam.Msg", "ClaimBeam", data);
    return promise.then(data => MsgClaimBeamResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};