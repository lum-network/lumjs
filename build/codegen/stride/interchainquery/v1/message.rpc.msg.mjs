import * as _m0 from "protobufjs/minimal";
import { MsgSubmitQueryResponse, MsgSubmitQueryResponseResponse } from "./message";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.submitQueryResponse = this.submitQueryResponse.bind(this);
    }
    submitQueryResponse(request) {
        const data = MsgSubmitQueryResponse.encode(request).finish();
        const promise = this.rpc.request("stride.interchainquery.v1.Msg", "SubmitQueryResponse", data);
        return promise.then(data => MsgSubmitQueryResponseResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=message.rpc.msg.js.map