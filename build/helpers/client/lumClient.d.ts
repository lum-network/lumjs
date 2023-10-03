import { RpcClient, StatusResponse, Tendermint37Client, BroadcastTxCommitResponse, BlockResponse } from '@cosmjs/tendermint-rpc';
import { Account, Coin, QueryClient as StargateQueryClient } from '@cosmjs/stargate';
import { CosmosExtension, LumExtension } from '../extensions';
import { LumTypes, LumWallet } from '../index';
import { PageRequest } from '../../codegen/cosmos/base/query/v1beta1/pagination';
declare function defaultErrorHandler(error: unknown): void;
export declare class LumClient {
    readonly tmClient: Tendermint37Client;
    readonly queryClient: StargateQueryClient & CosmosExtension & LumExtension;
    private chainId?;
    constructor(tmClient: Tendermint37Client);
    static detectVersion(client: RpcClient): Promise<string>;
    static connect: (endpoint: string, onWebsocketError?: typeof defaultErrorHandler) => Promise<LumClient>;
    /**
     * Disconnect the underlying tendermint client
     */
    disconnect(): void;
    /**
     * Get the connected node status information
     */
    status: () => Promise<StatusResponse>;
    /**
     * Get the chain id
     */
    getChainId: () => Promise<string>;
    /**
     * Get the current block height
     */
    getBlockHeight: () => Promise<number>;
    /**
     * Get a block by height
     *
     * @param height block height to get (default to current height)
     */
    getBlock: (height?: number) => Promise<LumTypes.BlockResponse>;
    /**
     * Get account information
     *
     * @param address wallet address
     */
    getAccount: (address: string) => Promise<LumTypes.Account | null>;
    /**
     * Get account balance
     *
     * @param address wallet address
     * @param searchDenom Coin denomination (ex: lum)
     */
    getBalance: (address: string, denom: string) => Promise<LumTypes.Coin | null>;
    /**
     * Get all account balances
     *
     * @param address wallet address
     */
    getAllBalances: (address: string, pagination?: PageRequest | undefined) => Promise<LumTypes.Coin[]>;
    /**
     * Get coin supply
     *
     * @param denom Coin denomination (ex: lum)
     */
    getSupply: (denom: string) => Promise<LumTypes.Coin | null>;
    /**
     * Get all coins supplies
     */
    getAllSupplies: () => Promise<LumTypes.Coin[]>;
    /**
     * Get a transaction by Hash
     *
     * @param hash transaction hash to retrieve
     */
    /**
     * Get a transaction by Hash
     *
     * @param hash transaction hash to retrieve
     * @param includeProof whether or not to include proof of the transaction inclusion in the block
     */
    private txsQuery;
    /**
     * Get a transaction by Hash
     *
     * @param hash transaction hash to retrieve
     * @param includeProof whether or not to include proof of the transaction inclusion in the block
     */
    getTx: (hash: Uint8Array, includeProof?: boolean) => Promise<LumTypes.TxResponse | null>;
    /**
     * Search for transactions (paginated)
     * All queries will be run and results will be deduplicated, merged and sorted by block height
     *
     * Queries:
     * To tell which events you want, you need to provide a query. query is a string, which has a form: "condition AND condition ..." (no OR at the moment). condition has a form: "key operation operand". key is a string with a restricted set of possible symbols ( \t\n\r\()"'=>< are not allowed). operation can be "=", "<", "<=", ">", ">=", "CONTAINS" AND "EXISTS". operand can be a string (escaped with single quotes), number, date or time.
     * Examples: tm.event = 'NewBlock' # new blocks tm.event = 'CompleteProposal' # node got a complete proposal tm.event = 'Tx' AND tx.hash = 'XYZ' # single transaction tm.event = 'Tx' AND tx.height = 5 # all txs of the fifth block tx.height = 5 # all txs of the fifth block
     * Tendermint provides a few predefined keys: tm.event, tx.hash and tx.height. Note for transactions, you can define additional keys by providing events with DeliverTx response.
     *
     * @param queries queries to run (see utils/search for helpers)
     * @param page page to query (default to 1)
     * @param perPage results per pages (default to 30)
     * @param includeProof whether or not to include proofs of the transactions inclusion in the block
     */
    searchTx: (queries: string[], page?: number, perPage?: number, includeProof?: boolean) => Promise<LumTypes.TxResponse[]>;
    /**
     * Signs the messages using the provided wallet and builds the transaction
     *
     * @param wallet signing wallet for multi signature
     * @param doc document to sign
     */
    signTx: (wallet: LumWallet, doc: LumTypes.Doc) => Promise<Uint8Array>;
    /**
     * Signs the messages using the provided wallets and builds the transaction
     *
     * @param wallets signing wallets for multi signature
     * @param doc document to sign
     */
    signTxForMultiWallet: (wallets: LumWallet[], doc: LumTypes.Doc) => Promise<Uint8Array>;
    signTxFromWallet: (wallet: LumWallet, doc: LumTypes.Doc) => Promise<[import("../../codegen/cosmos/tx/v1beta1/tx").SignDoc, Uint8Array]>;
    /**
     * Broadcast a signed transaction
     * Basic usage would be to use the signTx method prior to calling this method
     *
     * @param tx signed transaction to broadcast
     */
    broadcastTx: (tx: Uint8Array) => Promise<LumTypes.BroadcastTxCommitResponse>;
    /**
     * Signs and broadcast the transaction using the specified wallet and messages
     *
     * @param wallet signing wallet or wallets for multi signature
     * @param doc document to sign and broadcast as a transaction
     */
    signAndBroadcastTx: (wallet: LumWallet, doc: LumTypes.Doc) => Promise<LumTypes.BroadcastTxCommitResponse>;
    signAndBroadcastTxForMultiWallet: (wallets: LumWallet[], doc: LumTypes.Doc) => Promise<LumTypes.BroadcastTxCommitResponse>;
}
export {};
