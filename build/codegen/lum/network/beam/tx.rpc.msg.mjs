import * as _m0 from "protobufjs/minimal";
import { MsgOpenBeam, MsgOpenBeamResponse, MsgUpdateBeam, MsgUpdateBeamResponse, MsgClaimBeam, MsgClaimBeamResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.openBeam = this.openBeam.bind(this);
        this.updateBeam = this.updateBeam.bind(this);
        this.claimBeam = this.claimBeam.bind(this);
    }
    openBeam(request) {
        const data = MsgOpenBeam.encode(request).finish();
        const promise = this.rpc.request("lum.network.beam.Msg", "OpenBeam", data);
        return promise.then(data => MsgOpenBeamResponse.decode(new _m0.Reader(data)));
    }
    updateBeam(request) {
        const data = MsgUpdateBeam.encode(request).finish();
        const promise = this.rpc.request("lum.network.beam.Msg", "UpdateBeam", data);
        return promise.then(data => MsgUpdateBeamResponse.decode(new _m0.Reader(data)));
    }
    claimBeam(request) {
        const data = MsgClaimBeam.encode(request).finish();
        const promise = this.rpc.request("lum.network.beam.Msg", "ClaimBeam", data);
        return promise.then(data => MsgClaimBeamResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map