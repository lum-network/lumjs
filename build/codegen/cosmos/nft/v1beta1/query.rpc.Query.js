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
        this.balance = this.balance.bind(this);
        this.owner = this.owner.bind(this);
        this.supply = this.supply.bind(this);
        this.nFTs = this.nFTs.bind(this);
        this.nFT = this.nFT.bind(this);
        this.class = this.class.bind(this);
        this.classes = this.classes.bind(this);
    }
    balance(request) {
        const data = query_1.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
        return promise.then(data => query_1.QueryBalanceResponse.decode(new _m0.Reader(data)));
    }
    owner(request) {
        const data = query_1.QueryOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
        return promise.then(data => query_1.QueryOwnerResponse.decode(new _m0.Reader(data)));
    }
    supply(request) {
        const data = query_1.QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
        return promise.then(data => query_1.QuerySupplyResponse.decode(new _m0.Reader(data)));
    }
    nFTs(request) {
        const data = query_1.QueryNFTsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
        return promise.then(data => query_1.QueryNFTsResponse.decode(new _m0.Reader(data)));
    }
    nFT(request) {
        const data = query_1.QueryNFTRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
        return promise.then(data => query_1.QueryNFTResponse.decode(new _m0.Reader(data)));
    }
    class(request) {
        const data = query_1.QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
        return promise.then(data => query_1.QueryClassResponse.decode(new _m0.Reader(data)));
    }
    classes(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
        return promise.then(data => query_1.QueryClassesResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        balance(request) {
            return queryService.balance(request);
        },
        owner(request) {
            return queryService.owner(request);
        },
        supply(request) {
            return queryService.supply(request);
        },
        nFTs(request) {
            return queryService.nFTs(request);
        },
        nFT(request) {
            return queryService.nFT(request);
        },
        class(request) {
            return queryService.class(request);
        },
        classes(request) {
            return queryService.classes(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map