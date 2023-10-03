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
        this.params = this.params.bind(this);
        this.pools = this.pools.bind(this);
        this.pool = this.pool.bind(this);
        this.deposits = this.deposits.bind(this);
        this.poolDeposits = this.poolDeposits.bind(this);
        this.poolDeposit = this.poolDeposit.bind(this);
        this.accountDeposits = this.accountDeposits.bind(this);
        this.accountPoolDeposits = this.accountPoolDeposits.bind(this);
        this.draws = this.draws.bind(this);
        this.poolDraws = this.poolDraws.bind(this);
        this.poolDraw = this.poolDraw.bind(this);
        this.prizes = this.prizes.bind(this);
        this.poolPrizes = this.poolPrizes.bind(this);
        this.poolDrawPrizes = this.poolDrawPrizes.bind(this);
        this.poolDrawPrize = this.poolDrawPrize.bind(this);
        this.accountPrizes = this.accountPrizes.bind(this);
        this.accountPoolPrizes = this.accountPoolPrizes.bind(this);
        this.accountPoolDrawPrizes = this.accountPoolDrawPrizes.bind(this);
        this.withdrawals = this.withdrawals.bind(this);
        this.poolWithdrawals = this.poolWithdrawals.bind(this);
        this.poolWithdrawal = this.poolWithdrawal.bind(this);
        this.accountWithdrawals = this.accountWithdrawals.bind(this);
        this.accountPoolWithdrawals = this.accountPoolWithdrawals.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    pools(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Pools", data);
        return promise.then(data => query_1.QueryPoolsResponse.decode(new _m0.Reader(data)));
    }
    pool(request) {
        const data = query_1.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Pool", data);
        return promise.then(data => query_1.QueryPoolResponse.decode(new _m0.Reader(data)));
    }
    deposits(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Deposits", data);
        return promise.then(data => query_1.QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    poolDeposits(request) {
        const data = query_1.QueryPoolDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDeposits", data);
        return promise.then(data => query_1.QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    poolDeposit(request) {
        const data = query_1.QueryPoolDepositRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDeposit", data);
        return promise.then(data => query_1.QueryDepositResponse.decode(new _m0.Reader(data)));
    }
    accountDeposits(request) {
        const data = query_1.QueryAccountDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountDeposits", data);
        return promise.then(data => query_1.QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    accountPoolDeposits(request) {
        const data = query_1.QueryAccountPoolDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolDeposits", data);
        return promise.then(data => query_1.QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    draws(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryDrawsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Draws", data);
        return promise.then(data => query_1.QueryDrawsResponse.decode(new _m0.Reader(data)));
    }
    poolDraws(request) {
        const data = query_1.QueryPoolDrawsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDraws", data);
        return promise.then(data => query_1.QueryDrawsResponse.decode(new _m0.Reader(data)));
    }
    poolDraw(request) {
        const data = query_1.QueryPoolDrawRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDraw", data);
        return promise.then(data => query_1.QueryDrawResponse.decode(new _m0.Reader(data)));
    }
    prizes(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Prizes", data);
        return promise.then(data => query_1.QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    poolPrizes(request) {
        const data = query_1.QueryPoolPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolPrizes", data);
        return promise.then(data => query_1.QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    poolDrawPrizes(request) {
        const data = query_1.QueryPoolDrawPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDrawPrizes", data);
        return promise.then(data => query_1.QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    poolDrawPrize(request) {
        const data = query_1.QueryPoolDrawPrizeRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDrawPrize", data);
        return promise.then(data => query_1.QueryPrizeResponse.decode(new _m0.Reader(data)));
    }
    accountPrizes(request) {
        const data = query_1.QueryAccountPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPrizes", data);
        return promise.then(data => query_1.QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    accountPoolPrizes(request) {
        const data = query_1.QueryAccountPoolPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolPrizes", data);
        return promise.then(data => query_1.QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    accountPoolDrawPrizes(request) {
        const data = query_1.QueryAccountPoolDrawPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolDrawPrizes", data);
        return promise.then(data => query_1.QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    withdrawals(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Withdrawals", data);
        return promise.then(data => query_1.QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }
    poolWithdrawals(request) {
        const data = query_1.QueryPoolWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolWithdrawals", data);
        return promise.then(data => query_1.QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }
    poolWithdrawal(request) {
        const data = query_1.QueryPoolWithdrawalRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolWithdrawal", data);
        return promise.then(data => query_1.QueryWithdrawalResponse.decode(new _m0.Reader(data)));
    }
    accountWithdrawals(request) {
        const data = query_1.QueryAccountWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountWithdrawals", data);
        return promise.then(data => query_1.QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }
    accountPoolWithdrawals(request) {
        const data = query_1.QueryAccountPoolWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolWithdrawals", data);
        return promise.then(data => query_1.QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        pools(request) {
            return queryService.pools(request);
        },
        pool(request) {
            return queryService.pool(request);
        },
        deposits(request) {
            return queryService.deposits(request);
        },
        poolDeposits(request) {
            return queryService.poolDeposits(request);
        },
        poolDeposit(request) {
            return queryService.poolDeposit(request);
        },
        accountDeposits(request) {
            return queryService.accountDeposits(request);
        },
        accountPoolDeposits(request) {
            return queryService.accountPoolDeposits(request);
        },
        draws(request) {
            return queryService.draws(request);
        },
        poolDraws(request) {
            return queryService.poolDraws(request);
        },
        poolDraw(request) {
            return queryService.poolDraw(request);
        },
        prizes(request) {
            return queryService.prizes(request);
        },
        poolPrizes(request) {
            return queryService.poolPrizes(request);
        },
        poolDrawPrizes(request) {
            return queryService.poolDrawPrizes(request);
        },
        poolDrawPrize(request) {
            return queryService.poolDrawPrize(request);
        },
        accountPrizes(request) {
            return queryService.accountPrizes(request);
        },
        accountPoolPrizes(request) {
            return queryService.accountPoolPrizes(request);
        },
        accountPoolDrawPrizes(request) {
            return queryService.accountPoolDrawPrizes(request);
        },
        withdrawals(request) {
            return queryService.withdrawals(request);
        },
        poolWithdrawals(request) {
            return queryService.poolWithdrawals(request);
        },
        poolWithdrawal(request) {
            return queryService.poolWithdrawal(request);
        },
        accountWithdrawals(request) {
            return queryService.accountWithdrawals(request);
        },
        accountPoolWithdrawals(request) {
            return queryService.accountPoolWithdrawals(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map