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
        this.proposal = this.proposal.bind(this);
        this.proposals = this.proposals.bind(this);
        this.vote = this.vote.bind(this);
        this.votes = this.votes.bind(this);
        this.params = this.params.bind(this);
        this.deposit = this.deposit.bind(this);
        this.deposits = this.deposits.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
    }
    proposal(request) {
        const data = query_1.QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposal", data);
        return promise.then(data => query_1.QueryProposalResponse.decode(new _m0.Reader(data)));
    }
    proposals(request) {
        const data = query_1.QueryProposalsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposals", data);
        return promise.then(data => query_1.QueryProposalsResponse.decode(new _m0.Reader(data)));
    }
    vote(request) {
        const data = query_1.QueryVoteRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Query", "Vote", data);
        return promise.then(data => query_1.QueryVoteResponse.decode(new _m0.Reader(data)));
    }
    votes(request) {
        const data = query_1.QueryVotesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Query", "Votes", data);
        return promise.then(data => query_1.QueryVotesResponse.decode(new _m0.Reader(data)));
    }
    params(request) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    deposit(request) {
        const data = query_1.QueryDepositRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposit", data);
        return promise.then(data => query_1.QueryDepositResponse.decode(new _m0.Reader(data)));
    }
    deposits(request) {
        const data = query_1.QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposits", data);
        return promise.then(data => query_1.QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    tallyResult(request) {
        const data = query_1.QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Query", "TallyResult", data);
        return promise.then(data => query_1.QueryTallyResultResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        proposal(request) {
            return queryService.proposal(request);
        },
        proposals(request) {
            return queryService.proposals(request);
        },
        vote(request) {
            return queryService.vote(request);
        },
        votes(request) {
            return queryService.votes(request);
        },
        params(request) {
            return queryService.params(request);
        },
        deposit(request) {
            return queryService.deposit(request);
        },
        deposits(request) {
            return queryService.deposits(request);
        },
        tallyResult(request) {
            return queryService.tallyResult(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map