import * as _m0 from "protobufjs/minimal";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.verifyInvariant = this.verifyInvariant.bind(this);
    }
    verifyInvariant(request) {
        const data = MsgVerifyInvariant.encode(request).finish();
        const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
        return promise.then(data => MsgVerifyInvariantResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map