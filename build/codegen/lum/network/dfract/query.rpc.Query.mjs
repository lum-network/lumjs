import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryGetDepositsForAddressRequest, QueryGetDepositsForAddressResponse, QueryFetchDepositsRequest, QueryFetchDepositsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
        this.params = this.params.bind(this);
        this.getDepositsForAddress = this.getDepositsForAddress.bind(this);
        this.fetchDeposits = this.fetchDeposits.bind(this);
    }
    moduleAccountBalance(request = {}) {
        const data = QueryModuleAccountBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.dfract.Query", "ModuleAccountBalance", data);
        return promise.then(data => QueryModuleAccountBalanceResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.dfract.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    getDepositsForAddress(request) {
        const data = QueryGetDepositsForAddressRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.dfract.Query", "GetDepositsForAddress", data);
        return promise.then(data => QueryGetDepositsForAddressResponse.decode(new _m0.Reader(data)));
    }
    fetchDeposits(request) {
        const data = QueryFetchDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.dfract.Query", "FetchDeposits", data);
        return promise.then(data => QueryFetchDepositsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        moduleAccountBalance(request) {
            return queryService.moduleAccountBalance(request);
        },
        params(request) {
            return queryService.params(request);
        },
        getDepositsForAddress(request) {
            return queryService.getDepositsForAddress(request);
        },
        fetchDeposits(request) {
            return queryService.fetchDeposits(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map