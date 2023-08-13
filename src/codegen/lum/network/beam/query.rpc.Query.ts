import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGetBeamRequest, QueryGetBeamResponse, QueryFetchBeamsRequest, QueryFetchBeamsResponse, QueryFetchBeamsOpenQueueRequest, QueryFetchBeamsOpenQueueResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse>;
  beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse>;
  beamsOpenQueue(request?: QueryFetchBeamsOpenQueueRequest): Promise<QueryFetchBeamsOpenQueueResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.beam = this.beam.bind(this);
    this.beams = this.beams.bind(this);
    this.beamsOpenQueue = this.beamsOpenQueue.bind(this);
  }
  beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse> {
    const data = QueryGetBeamRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.beam.Query", "Beam", data);
    return promise.then(data => QueryGetBeamResponse.decode(new _m0.Reader(data)));
  }
  beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse> {
    const data = QueryFetchBeamsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.beam.Query", "Beams", data);
    return promise.then(data => QueryFetchBeamsResponse.decode(new _m0.Reader(data)));
  }
  beamsOpenQueue(request: QueryFetchBeamsOpenQueueRequest = {
    pagination: undefined
  }): Promise<QueryFetchBeamsOpenQueueResponse> {
    const data = QueryFetchBeamsOpenQueueRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.beam.Query", "BeamsOpenQueue", data);
    return promise.then(data => QueryFetchBeamsOpenQueueResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse> {
      return queryService.beam(request);
    },
    beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse> {
      return queryService.beams(request);
    },
    beamsOpenQueue(request?: QueryFetchBeamsOpenQueueRequest): Promise<QueryFetchBeamsOpenQueueResponse> {
      return queryService.beamsOpenQueue(request);
    }
  };
};