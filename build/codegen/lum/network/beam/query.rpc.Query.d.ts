import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGetBeamRequest, QueryGetBeamResponse, QueryFetchBeamsRequest, QueryFetchBeamsResponse, QueryFetchBeamsOpenQueueRequest, QueryFetchBeamsOpenQueueResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse>;
    beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse>;
    beamsOpenQueue(request?: QueryFetchBeamsOpenQueueRequest): Promise<QueryFetchBeamsOpenQueueResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse>;
    beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse>;
    beamsOpenQueue(request?: QueryFetchBeamsOpenQueueRequest): Promise<QueryFetchBeamsOpenQueueResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse>;
    beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse>;
    beamsOpenQueue(request?: QueryFetchBeamsOpenQueueRequest): Promise<QueryFetchBeamsOpenQueueResponse>;
};
