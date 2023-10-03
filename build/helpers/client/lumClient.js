"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumClient = void 0;
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const extensions_1 = require("../extensions");
const index_1 = require("../index");
function defaultErrorHandler(error) {
    throw error;
}
class LumClient {
    tmClient;
    queryClient;
    chainId;
    constructor(tmClient) {
        this.tmClient = tmClient;
        this.queryClient = stargate_1.QueryClient.withExtensions(tmClient, extensions_1.setupCosmosExtension, extensions_1.setupLumExtension);
    }
    static async detectVersion(client) {
        const numbersWithoutZero = '123456789';
        const req = {
            jsonrpc: '2.0',
            id: parseInt(Array.from({ length: 12 })
                .map(() => numbersWithoutZero[Math.floor(Math.random() * numbersWithoutZero.length)])
                .join(''), 10),
            method: tendermint_rpc_1.Method.Status,
            params: {},
        };
        const response = await client.execute(req);
        const result = response.result;
        if (!result || !result.node_info) {
            throw new Error('Unrecognized format for status response');
        }
        const version = result.node_info.version;
        if (typeof version !== 'string') {
            throw new Error('Unrecognized version format: must be string');
        }
        return version;
    }
    static connect = async (endpoint, onWebsocketError = defaultErrorHandler) => {
        let rpcClient;
        if (typeof endpoint === 'object') {
            rpcClient = new tendermint_rpc_1.HttpClient(endpoint);
        }
        else {
            const useHttp = endpoint.startsWith('http://') || endpoint.startsWith('https://');
            rpcClient = useHttp ? new tendermint_rpc_1.HttpClient(endpoint) : new tendermint_rpc_1.WebsocketClient(endpoint, onWebsocketError);
        }
        await this.detectVersion(rpcClient);
        const tmClient = await tendermint_rpc_1.Tendermint37Client.create(rpcClient);
        return new LumClient(tmClient);
    };
    /**
     * Disconnect the underlying tendermint client
     */
    disconnect() {
        // Temporary fix missing stop calls from the cosmjs socket implementation
        // @ts-ignore
        this.tmClient.client &&
            // @ts-ignore
            this.tmClient.client.socket &&
            // @ts-ignore
            this.tmClient.client.events &&
            // @ts-ignore
            this.tmClient.client.socket.events._stopNow();
        // @ts-ignore
        this.tmClient.client &&
            // @ts-ignore
            this.tmClient.client.socket &&
            // @ts-ignore
            this.tmClient.client.socket.connectionStatus &&
            // @ts-ignore
            this.tmClient.client.socket.connectionStatus.updates &&
            // @ts-ignore
            this.tmClient.client.socket.connectionStatus.updates._stopNow();
        // Disconnect the client
        this.tmClient.disconnect();
    }
    /**
     * Get the connected node status information
     */
    status = async () => {
        return this.tmClient.status();
    };
    /**
     * Get the chain id
     */
    getChainId = async () => {
        if (!this.chainId) {
            const response = await this.tmClient.status();
            const chainId = response.nodeInfo.network;
            if (!chainId) {
                throw new Error('Chain ID must not be empty');
            }
            this.chainId = chainId;
        }
        return this.chainId;
    };
    /**
     * Get the current block height
     */
    getBlockHeight = async () => {
        const status = await this.tmClient.status();
        return status.syncInfo.latestBlockHeight;
    };
    /**
     * Get a block by height
     *
     * @param height block height to get (default to current height)
     */
    getBlock = async (height) => {
        const response = await this.tmClient.block(height);
        return response;
    };
    /**
     * Get account information
     *
     * @param address wallet address
     */
    getAccount = async (address) => {
        const anyAccount = await this.queryClient.auth.account({ address });
        if (!anyAccount) {
            return null;
        }
        return index_1.LumUtils.accountFromAny(anyAccount.account);
    };
    /**
     * Get account balance
     *
     * @param address wallet address
     * @param searchDenom Coin denomination (ex: lum)
     */
    getBalance = async (address, denom) => {
        const getBalance = await this.queryClient.bank.balance({ address, denom });
        return getBalance.balance ? getBalance.balance : null;
    };
    /**
     * Get all account balances
     *
     * @param address wallet address
     */
    getAllBalances = async (address, pagination) => {
        const getAllBalances = await this.queryClient.bank.allBalances({ address, pagination });
        return getAllBalances.balances;
    };
    /**
     * Get coin supply
     *
     * @param denom Coin denomination (ex: lum)
     */
    getSupply = async (denom) => {
        const supply = await this.queryClient.bank.supplyOf({ denom });
        return supply.amount ? supply.amount : null;
    };
    /**
     * Get all coins supplies
     */
    getAllSupplies = async () => {
        const totalSupplies = await this.queryClient.bank.totalSupply();
        return totalSupplies.supply;
    };
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
    txsQuery = async (params) => {
        const results = await this.tmClient.txSearch(params);
        return results.txs;
    };
    /**
     * Get a transaction by Hash
     *
     * @param hash transaction hash to retrieve
     * @param includeProof whether or not to include proof of the transaction inclusion in the block
     */
    getTx = async (hash, includeProof) => {
        return this.tmClient.tx({ hash: hash, prove: includeProof });
    };
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
    searchTx = async (queries, page = 1, perPage = 30, includeProof) => {
        const results = await Promise.all(queries.map((q) => this.txsQuery({
            query: q,
            page: page,
            per_page: perPage,
            prove: includeProof,
        })));
        const seenHashes = [];
        const uniqueResults = [];
        for (let r = 0; r < results.length; r++) {
            for (let t = 0; t < results[r].length; t++) {
                const tx = results[r][t];
                if (!seenHashes.includes(tx.hash)) {
                    seenHashes.push(tx.hash);
                    uniqueResults.push(results[r][t]);
                }
            }
        }
        return uniqueResults.sort((a, b) => a.height - b.height);
    };
    /**
     * Signs the messages using the provided wallet and builds the transaction
     *
     * @param wallet signing wallet for multi signature
     * @param doc document to sign
     */
    signTx = async (wallet, doc) => {
        const signatures = [];
        const [signedDoc, signature] = await this.signTxFromWallet(wallet, doc);
        signatures.push(signature);
        if (!signedDoc || signatures.length === 0) {
            throw new Error('Failed to sign the document: no signature provided');
        }
        return index_1.LumUtils.generateTxBytes(signedDoc, signatures);
    };
    /**
     * Signs the messages using the provided wallets and builds the transaction
     *
     * @param wallets signing wallets for multi signature
     * @param doc document to sign
     */
    signTxForMultiWallet = async (wallets, doc) => {
        let signDoc = undefined;
        const signatures = [];
        for (const wallet of wallets) {
            const [walletSignedDoc, signature] = await this.signTxFromWallet(wallet, doc);
            signatures.push(signature);
            if (!signDoc) {
                signDoc = walletSignedDoc;
            }
        }
        if (!signDoc || signatures.length === 0) {
            throw new Error('Failed to sign the document: no signature provided');
        }
        return index_1.LumUtils.generateTxBytes(signDoc, signatures);
    };
    signTxFromWallet = async (wallet, doc) => {
        const account = await this.getAccount(wallet.getAddress());
        if (!account) {
            throw new Error(`Account not found for wallet ${wallet.getAddress()}`);
        }
        return wallet.signTransaction(doc);
    };
    /**
     * Broadcast a signed transaction
     * Basic usage would be to use the signTx method prior to calling this method
     *
     * @param tx signed transaction to broadcast
     */
    broadcastTx = async (tx) => {
        return this.tmClient.broadcastTxCommit({ tx });
    };
    /**
     * Signs and broadcast the transaction using the specified wallet and messages
     *
     * @param wallet signing wallet or wallets for multi signature
     * @param doc document to sign and broadcast as a transaction
     */
    signAndBroadcastTx = async (wallet, doc) => {
        const signedTx = await this.signTx(wallet, doc);
        return this.broadcastTx(signedTx);
    };
    signAndBroadcastTxForMultiWallet = async (wallets, doc) => {
        const signedTx = await this.signTxForMultiWallet(wallets, doc);
        return this.broadcastTx(signedTx);
    };
}
exports.LumClient = LumClient;
//# sourceMappingURL=lumClient.js.map