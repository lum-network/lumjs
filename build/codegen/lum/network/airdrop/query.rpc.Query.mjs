import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
        this.params = this.params.bind(this);
        this.claimRecord = this.claimRecord.bind(this);
        this.claimableForAction = this.claimableForAction.bind(this);
        this.totalClaimable = this.totalClaimable.bind(this);
    }
    moduleAccountBalance(request = {}) {
        const data = QueryModuleAccountBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "ModuleAccountBalance", data);
        return promise.then(data => QueryModuleAccountBalanceResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    claimRecord(request) {
        const data = QueryClaimRecordRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "ClaimRecord", data);
        return promise.then(data => QueryClaimRecordResponse.decode(new _m0.Reader(data)));
    }
    claimableForAction(request) {
        const data = QueryClaimableForActionRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "ClaimableForAction", data);
        return promise.then(data => QueryClaimableForActionResponse.decode(new _m0.Reader(data)));
    }
    totalClaimable(request) {
        const data = QueryTotalClaimableRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "TotalClaimable", data);
        return promise.then(data => QueryTotalClaimableResponse.decode(new _m0.Reader(data)));
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
        claimRecord(request) {
            return queryService.claimRecord(request);
        },
        claimableForAction(request) {
            return queryService.claimableForAction(request);
        },
        totalClaimable(request) {
            return queryService.totalClaimable(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map