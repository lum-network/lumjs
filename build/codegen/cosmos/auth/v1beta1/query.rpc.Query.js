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
        this.accounts = this.accounts.bind(this);
        this.account = this.account.bind(this);
        this.params = this.params.bind(this);
        this.moduleAccounts = this.moduleAccounts.bind(this);
        this.bech32Prefix = this.bech32Prefix.bind(this);
        this.addressBytesToString = this.addressBytesToString.bind(this);
        this.addressStringToBytes = this.addressStringToBytes.bind(this);
    }
    accounts(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
        return promise.then(data => query_1.QueryAccountsResponse.decode(new _m0.Reader(data)));
    }
    account(request) {
        const data = query_1.QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
        return promise.then(data => query_1.QueryAccountResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    moduleAccounts(request = {}) {
        const data = query_1.QueryModuleAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
        return promise.then(data => query_1.QueryModuleAccountsResponse.decode(new _m0.Reader(data)));
    }
    bech32Prefix(request = {}) {
        const data = query_1.Bech32PrefixRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
        return promise.then(data => query_1.Bech32PrefixResponse.decode(new _m0.Reader(data)));
    }
    addressBytesToString(request) {
        const data = query_1.AddressBytesToStringRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
        return promise.then(data => query_1.AddressBytesToStringResponse.decode(new _m0.Reader(data)));
    }
    addressStringToBytes(request) {
        const data = query_1.AddressStringToBytesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
        return promise.then(data => query_1.AddressStringToBytesResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        accounts(request) {
            return queryService.accounts(request);
        },
        account(request) {
            return queryService.account(request);
        },
        params(request) {
            return queryService.params(request);
        },
        moduleAccounts(request) {
            return queryService.moduleAccounts(request);
        },
        bech32Prefix(request) {
            return queryService.bech32Prefix(request);
        },
        addressBytesToString(request) {
            return queryService.addressBytesToString(request);
        },
        addressStringToBytes(request) {
            return queryService.addressStringToBytes(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map