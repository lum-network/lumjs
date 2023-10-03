"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.QueryModuleAccountBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "ModuleAccountBalance", data);
        return promise.then(data => query_1.QueryModuleAccountBalanceResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    claimRecord(request) {
        const data = query_1.QueryClaimRecordRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "ClaimRecord", data);
        return promise.then(data => query_1.QueryClaimRecordResponse.decode(new _m0.Reader(data)));
    }
    claimableForAction(request) {
        const data = query_1.QueryClaimableForActionRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "ClaimableForAction", data);
        return promise.then(data => query_1.QueryClaimableForActionResponse.decode(new _m0.Reader(data)));
    }
    totalClaimable(request) {
        const data = query_1.QueryTotalClaimableRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.airdrop.Query", "TotalClaimable", data);
        return promise.then(data => query_1.QueryTotalClaimableResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map