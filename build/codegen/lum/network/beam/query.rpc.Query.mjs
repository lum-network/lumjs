import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGetBeamRequest, QueryGetBeamResponse, QueryFetchBeamsRequest, QueryFetchBeamsResponse, QueryFetchBeamsOpenQueueRequest, QueryFetchBeamsOpenQueueResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.beam = this.beam.bind(this);
        this.beams = this.beams.bind(this);
        this.beamsOpenQueue = this.beamsOpenQueue.bind(this);
    }
    beam(request) {
        const data = QueryGetBeamRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.beam.Query", "Beam", data);
        return promise.then(data => QueryGetBeamResponse.decode(new _m0.Reader(data)));
    }
    beams(request) {
        const data = QueryFetchBeamsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.beam.Query", "Beams", data);
        return promise.then(data => QueryFetchBeamsResponse.decode(new _m0.Reader(data)));
    }
    beamsOpenQueue(request = {
        pagination: undefined
    }) {
        const data = QueryFetchBeamsOpenQueueRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.beam.Query", "BeamsOpenQueue", data);
        return promise.then(data => QueryFetchBeamsOpenQueueResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        beam(request) {
            return queryService.beam(request);
        },
        beams(request) {
            return queryService.beams(request);
        },
        beamsOpenQueue(request) {
            return queryService.beamsOpenQueue(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map