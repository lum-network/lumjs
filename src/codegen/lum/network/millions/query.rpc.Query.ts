import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolsRequest, QueryPoolsResponse, QueryPoolRequest, QueryPoolResponse, QueryDepositsRequest, QueryDepositsResponse, QueryPoolDepositsRequest, QueryPoolDepositRequest, QueryDepositResponse, QueryAccountDepositsRequest, QueryAccountPoolDepositsRequest, QueryDrawsRequest, QueryDrawsResponse, QueryPoolDrawsRequest, QueryPoolDrawRequest, QueryDrawResponse, QueryPrizesRequest, QueryPrizesResponse, QueryPoolPrizesRequest, QueryPoolDrawPrizesRequest, QueryPoolDrawPrizeRequest, QueryPrizeResponse, QueryAccountPrizesRequest, QueryAccountPoolPrizesRequest, QueryAccountPoolDrawPrizesRequest, QueryWithdrawalsRequest, QueryWithdrawalsResponse, QueryPoolWithdrawalsRequest, QueryPoolWithdrawalRequest, QueryWithdrawalResponse, QueryAccountWithdrawalsRequest, QueryAccountPoolWithdrawalsRequest } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  deposits(request?: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  poolDeposits(request: QueryPoolDepositsRequest): Promise<QueryDepositsResponse>;
  poolDeposit(request: QueryPoolDepositRequest): Promise<QueryDepositResponse>;
  accountDeposits(request: QueryAccountDepositsRequest): Promise<QueryDepositsResponse>;
  accountPoolDeposits(request: QueryAccountPoolDepositsRequest): Promise<QueryDepositsResponse>;
  draws(request?: QueryDrawsRequest): Promise<QueryDrawsResponse>;
  poolDraws(request: QueryPoolDrawsRequest): Promise<QueryDrawsResponse>;
  poolDraw(request: QueryPoolDrawRequest): Promise<QueryDrawResponse>;
  prizes(request?: QueryPrizesRequest): Promise<QueryPrizesResponse>;
  poolPrizes(request: QueryPoolPrizesRequest): Promise<QueryPrizesResponse>;
  poolDrawPrizes(request: QueryPoolDrawPrizesRequest): Promise<QueryPrizesResponse>;
  poolDrawPrize(request: QueryPoolDrawPrizeRequest): Promise<QueryPrizeResponse>;
  accountPrizes(request: QueryAccountPrizesRequest): Promise<QueryPrizesResponse>;
  accountPoolPrizes(request: QueryAccountPoolPrizesRequest): Promise<QueryPrizesResponse>;
  accountPoolDrawPrizes(request: QueryAccountPoolDrawPrizesRequest): Promise<QueryPrizesResponse>;
  withdrawals(request?: QueryWithdrawalsRequest): Promise<QueryWithdrawalsResponse>;
  poolWithdrawals(request: QueryPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse>;
  poolWithdrawal(request: QueryPoolWithdrawalRequest): Promise<QueryWithdrawalResponse>;
  accountWithdrawals(request: QueryAccountWithdrawalsRequest): Promise<QueryWithdrawalsResponse>;
  accountPoolWithdrawals(request: QueryAccountPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  pools(request: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new BinaryReader(data)));
  }
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  deposits(request: QueryDepositsRequest = {
    pagination: undefined
  }): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  }
  poolDeposits(request: QueryPoolDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryPoolDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "PoolDeposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  }
  poolDeposit(request: QueryPoolDepositRequest): Promise<QueryDepositResponse> {
    const data = QueryPoolDepositRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "PoolDeposit", data);
    return promise.then(data => QueryDepositResponse.decode(new BinaryReader(data)));
  }
  accountDeposits(request: QueryAccountDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryAccountDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "AccountDeposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  }
  accountPoolDeposits(request: QueryAccountPoolDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryAccountPoolDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolDeposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  }
  draws(request: QueryDrawsRequest = {
    pagination: undefined
  }): Promise<QueryDrawsResponse> {
    const data = QueryDrawsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "Draws", data);
    return promise.then(data => QueryDrawsResponse.decode(new BinaryReader(data)));
  }
  poolDraws(request: QueryPoolDrawsRequest): Promise<QueryDrawsResponse> {
    const data = QueryPoolDrawsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "PoolDraws", data);
    return promise.then(data => QueryDrawsResponse.decode(new BinaryReader(data)));
  }
  poolDraw(request: QueryPoolDrawRequest): Promise<QueryDrawResponse> {
    const data = QueryPoolDrawRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "PoolDraw", data);
    return promise.then(data => QueryDrawResponse.decode(new BinaryReader(data)));
  }
  prizes(request: QueryPrizesRequest = {
    pagination: undefined
  }): Promise<QueryPrizesResponse> {
    const data = QueryPrizesRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "Prizes", data);
    return promise.then(data => QueryPrizesResponse.decode(new BinaryReader(data)));
  }
  poolPrizes(request: QueryPoolPrizesRequest): Promise<QueryPrizesResponse> {
    const data = QueryPoolPrizesRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "PoolPrizes", data);
    return promise.then(data => QueryPrizesResponse.decode(new BinaryReader(data)));
  }
  poolDrawPrizes(request: QueryPoolDrawPrizesRequest): Promise<QueryPrizesResponse> {
    const data = QueryPoolDrawPrizesRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "PoolDrawPrizes", data);
    return promise.then(data => QueryPrizesResponse.decode(new BinaryReader(data)));
  }
  poolDrawPrize(request: QueryPoolDrawPrizeRequest): Promise<QueryPrizeResponse> {
    const data = QueryPoolDrawPrizeRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "PoolDrawPrize", data);
    return promise.then(data => QueryPrizeResponse.decode(new BinaryReader(data)));
  }
  accountPrizes(request: QueryAccountPrizesRequest): Promise<QueryPrizesResponse> {
    const data = QueryAccountPrizesRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "AccountPrizes", data);
    return promise.then(data => QueryPrizesResponse.decode(new BinaryReader(data)));
  }
  accountPoolPrizes(request: QueryAccountPoolPrizesRequest): Promise<QueryPrizesResponse> {
    const data = QueryAccountPoolPrizesRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolPrizes", data);
    return promise.then(data => QueryPrizesResponse.decode(new BinaryReader(data)));
  }
  accountPoolDrawPrizes(request: QueryAccountPoolDrawPrizesRequest): Promise<QueryPrizesResponse> {
    const data = QueryAccountPoolDrawPrizesRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolDrawPrizes", data);
    return promise.then(data => QueryPrizesResponse.decode(new BinaryReader(data)));
  }
  withdrawals(request: QueryWithdrawalsRequest = {
    pagination: undefined
  }): Promise<QueryWithdrawalsResponse> {
    const data = QueryWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "Withdrawals", data);
    return promise.then(data => QueryWithdrawalsResponse.decode(new BinaryReader(data)));
  }
  poolWithdrawals(request: QueryPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
    const data = QueryPoolWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "PoolWithdrawals", data);
    return promise.then(data => QueryWithdrawalsResponse.decode(new BinaryReader(data)));
  }
  poolWithdrawal(request: QueryPoolWithdrawalRequest): Promise<QueryWithdrawalResponse> {
    const data = QueryPoolWithdrawalRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "PoolWithdrawal", data);
    return promise.then(data => QueryWithdrawalResponse.decode(new BinaryReader(data)));
  }
  accountWithdrawals(request: QueryAccountWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
    const data = QueryAccountWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "AccountWithdrawals", data);
    return promise.then(data => QueryWithdrawalsResponse.decode(new BinaryReader(data)));
  }
  accountPoolWithdrawals(request: QueryAccountPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
    const data = QueryAccountPoolWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Query", "AccountPoolWithdrawals", data);
    return promise.then(data => QueryWithdrawalsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    },
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    deposits(request?: QueryDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.deposits(request);
    },
    poolDeposits(request: QueryPoolDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.poolDeposits(request);
    },
    poolDeposit(request: QueryPoolDepositRequest): Promise<QueryDepositResponse> {
      return queryService.poolDeposit(request);
    },
    accountDeposits(request: QueryAccountDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.accountDeposits(request);
    },
    accountPoolDeposits(request: QueryAccountPoolDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.accountPoolDeposits(request);
    },
    draws(request?: QueryDrawsRequest): Promise<QueryDrawsResponse> {
      return queryService.draws(request);
    },
    poolDraws(request: QueryPoolDrawsRequest): Promise<QueryDrawsResponse> {
      return queryService.poolDraws(request);
    },
    poolDraw(request: QueryPoolDrawRequest): Promise<QueryDrawResponse> {
      return queryService.poolDraw(request);
    },
    prizes(request?: QueryPrizesRequest): Promise<QueryPrizesResponse> {
      return queryService.prizes(request);
    },
    poolPrizes(request: QueryPoolPrizesRequest): Promise<QueryPrizesResponse> {
      return queryService.poolPrizes(request);
    },
    poolDrawPrizes(request: QueryPoolDrawPrizesRequest): Promise<QueryPrizesResponse> {
      return queryService.poolDrawPrizes(request);
    },
    poolDrawPrize(request: QueryPoolDrawPrizeRequest): Promise<QueryPrizeResponse> {
      return queryService.poolDrawPrize(request);
    },
    accountPrizes(request: QueryAccountPrizesRequest): Promise<QueryPrizesResponse> {
      return queryService.accountPrizes(request);
    },
    accountPoolPrizes(request: QueryAccountPoolPrizesRequest): Promise<QueryPrizesResponse> {
      return queryService.accountPoolPrizes(request);
    },
    accountPoolDrawPrizes(request: QueryAccountPoolDrawPrizesRequest): Promise<QueryPrizesResponse> {
      return queryService.accountPoolDrawPrizes(request);
    },
    withdrawals(request?: QueryWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
      return queryService.withdrawals(request);
    },
    poolWithdrawals(request: QueryPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
      return queryService.poolWithdrawals(request);
    },
    poolWithdrawal(request: QueryPoolWithdrawalRequest): Promise<QueryWithdrawalResponse> {
      return queryService.poolWithdrawal(request);
    },
    accountWithdrawals(request: QueryAccountWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
      return queryService.accountWithdrawals(request);
    },
    accountPoolWithdrawals(request: QueryAccountPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
      return queryService.accountPoolWithdrawals(request);
    }
  };
};