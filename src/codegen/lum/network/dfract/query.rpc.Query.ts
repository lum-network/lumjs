import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryGetDepositsForAddressRequest, QueryGetDepositsForAddressResponse, QueryFetchDepositsRequest, QueryFetchDepositsResponse } from "./query";
export interface Query {
  moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  getDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse>;
  fetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.getDepositsForAddress = this.getDepositsForAddress.bind(this);
    this.fetchDeposits = this.fetchDeposits.bind(this);
  }
  moduleAccountBalance(request: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponse> {
    const data = QueryModuleAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.dfract.Query", "ModuleAccountBalance", data);
    return promise.then(data => QueryModuleAccountBalanceResponse.decode(new _m0.Reader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.dfract.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  getDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse> {
    const data = QueryGetDepositsForAddressRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.dfract.Query", "GetDepositsForAddress", data);
    return promise.then(data => QueryGetDepositsForAddressResponse.decode(new _m0.Reader(data)));
  }
  fetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse> {
    const data = QueryFetchDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.dfract.Query", "FetchDeposits", data);
    return promise.then(data => QueryFetchDepositsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse> {
      return queryService.moduleAccountBalance(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse> {
      return queryService.getDepositsForAddress(request);
    },
    fetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse> {
      return queryService.fetchDeposits(request);
    }
  };
};