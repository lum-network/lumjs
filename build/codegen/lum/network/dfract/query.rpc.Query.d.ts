import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryGetDepositsForAddressRequest, QueryGetDepositsForAddressResponse, QueryFetchDepositsRequest, QueryFetchDepositsResponse } from "./query";
export interface Query {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse>;
    fetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse>;
    fetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse>;
    fetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse>;
};
