import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
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
export declare const createRpcQueryExtension: (base: QueryClient) => {
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
};
