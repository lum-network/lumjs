import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetCallbackDataRequest, QueryGetCallbackDataResponse, QueryAllCallbackDataRequest, QueryAllCallbackDataResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.callbackData = this.callbackData.bind(this);
        this.callbackDataAll = this.callbackDataAll.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.icacallbacks.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    callbackData(request) {
        const data = QueryGetCallbackDataRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.icacallbacks.Query", "CallbackData", data);
        return promise.then(data => QueryGetCallbackDataResponse.decode(new _m0.Reader(data)));
    }
    callbackDataAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllCallbackDataRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.icacallbacks.Query", "CallbackDataAll", data);
        return promise.then(data => QueryAllCallbackDataResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        callbackData(request) {
            return queryService.callbackData(request);
        },
        callbackDataAll(request) {
            return queryService.callbackDataAll(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map