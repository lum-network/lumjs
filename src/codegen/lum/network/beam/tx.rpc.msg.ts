import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    return promise.then(data => MsgOpenBeamResponse.decode(new _m0.Reader(data)));
  }
  updateBeam(request: MsgUpdateBeam): Promise<MsgUpdateBeamResponse> {
    const data = MsgUpdateBeam.encode(request).finish();
    const promise = this.rpc.request("lum.network.beam.Msg", "UpdateBeam", data);
    return promise.then(data => MsgUpdateBeamResponse.decode(new _m0.Reader(data)));
  }
  claimBeam(request: MsgClaimBeam): Promise<MsgClaimBeamResponse> {
    const data = MsgClaimBeam.encode(request).finish();
    const promise = this.rpc.request("lum.network.beam.Msg", "ClaimBeam", data);
    return promise.then(data => MsgClaimBeamResponse.decode(new _m0.Reader(data)));
  }
}