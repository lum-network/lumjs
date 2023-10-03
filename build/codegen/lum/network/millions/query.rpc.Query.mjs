import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolsRequest, QueryPoolsResponse, QueryPoolRequest, QueryPoolResponse, QueryDepositsRequest, QueryDepositsResponse, QueryPoolDepositsRequest, QueryPoolDepositRequest, QueryDepositResponse, QueryAccountDepositsRequest, QueryAccountPoolDepositsRequest, QueryDrawsRequest, QueryDrawsResponse, QueryPoolDrawsRequest, QueryPoolDrawRequest, QueryDrawResponse, QueryPrizesRequest, QueryPrizesResponse, QueryPoolPrizesRequest, QueryPoolDrawPrizesRequest, QueryPoolDrawPrizeRequest, QueryPrizeResponse, QueryAccountPrizesRequest, QueryAccountPoolPrizesRequest, QueryAccountPoolDrawPrizesRequest, QueryWithdrawalsRequest, QueryWithdrawalsResponse, QueryPoolWithdrawalsRequest, QueryPoolWithdrawalRequest, QueryWithdrawalResponse, QueryAccountWithdrawalsRequest, QueryAccountPoolWithdrawalsRequest } from "./query";
export class QueryClientImpl {
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
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    pools(request = {
        pagination: undefined
    }) {
        const data = QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Pools", data);
        return promise.then(data => QueryPoolsResponse.decode(new _m0.Reader(data)));
    }
    pool(request) {
        const data = QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Pool", data);
        return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
    }
    deposits(request = {
        pagination: undefined
    }) {
        const data = QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Deposits", data);
        return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    poolDeposits(request) {
        const data = QueryPoolDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDeposits", data);
        return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    poolDeposit(request) {
        const data = QueryPoolDepositRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDeposit", data);
        return promise.then(data => QueryDepositResponse.decode(new _m0.Reader(data)));
    }
    accountDeposits(request) {
        const data = QueryAccountDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountDeposits", data);
        return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    accountPoolDeposits(request) {
        const data = QueryAccountPoolDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolDeposits", data);
        return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    draws(request = {
        pagination: undefined
    }) {
        const data = QueryDrawsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Draws", data);
        return promise.then(data => QueryDrawsResponse.decode(new _m0.Reader(data)));
    }
    poolDraws(request) {
        const data = QueryPoolDrawsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDraws", data);
        return promise.then(data => QueryDrawsResponse.decode(new _m0.Reader(data)));
    }
    poolDraw(request) {
        const data = QueryPoolDrawRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDraw", data);
        return promise.then(data => QueryDrawResponse.decode(new _m0.Reader(data)));
    }
    prizes(request = {
        pagination: undefined
    }) {
        const data = QueryPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Prizes", data);
        return promise.then(data => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    poolPrizes(request) {
        const data = QueryPoolPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolPrizes", data);
        return promise.then(data => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    poolDrawPrizes(request) {
        const data = QueryPoolDrawPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDrawPrizes", data);
        return promise.then(data => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    poolDrawPrize(request) {
        const data = QueryPoolDrawPrizeRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolDrawPrize", data);
        return promise.then(data => QueryPrizeResponse.decode(new _m0.Reader(data)));
    }
    accountPrizes(request) {
        const data = QueryAccountPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPrizes", data);
        return promise.then(data => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    accountPoolPrizes(request) {
        const data = QueryAccountPoolPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolPrizes", data);
        return promise.then(data => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    accountPoolDrawPrizes(request) {
        const data = QueryAccountPoolDrawPrizesRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolDrawPrizes", data);
        return promise.then(data => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }
    withdrawals(request = {
        pagination: undefined
    }) {
        const data = QueryWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "Withdrawals", data);
        return promise.then(data => QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }
    poolWithdrawals(request) {
        const data = QueryPoolWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolWithdrawals", data);
        return promise.then(data => QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }
    poolWithdrawal(request) {
        const data = QueryPoolWithdrawalRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "PoolWithdrawal", data);
        return promise.then(data => QueryWithdrawalResponse.decode(new _m0.Reader(data)));
    }
    accountWithdrawals(request) {
        const data = QueryAccountWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountWithdrawals", data);
        return promise.then(data => QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }
    accountPoolWithdrawals(request) {
        const data = QueryAccountPoolWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolWithdrawals", data);
        return promise.then(data => QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
//# sourceMappingURL=query.rpc.Query.js.map