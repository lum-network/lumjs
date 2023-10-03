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
        this.beam = this.beam.bind(this);
        this.beams = this.beams.bind(this);
        this.beamsOpenQueue = this.beamsOpenQueue.bind(this);
    }
    beam(request) {
        const data = query_1.QueryGetBeamRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.beam.Query", "Beam", data);
        return promise.then(data => query_1.QueryGetBeamResponse.decode(new _m0.Reader(data)));
    }
    beams(request) {
        const data = query_1.QueryFetchBeamsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.beam.Query", "Beams", data);
        return promise.then(data => query_1.QueryFetchBeamsResponse.decode(new _m0.Reader(data)));
    }
    beamsOpenQueue(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryFetchBeamsOpenQueueRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.beam.Query", "BeamsOpenQueue", data);
        return promise.then(data => query_1.QueryFetchBeamsOpenQueueResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        beam(request) {
            return queryService.beam(request);
        },
        beams(request) {
            return queryService.beams(request);
        },
        beamsOpenQueue(request) {
            return queryService.beamsOpenQueue(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map