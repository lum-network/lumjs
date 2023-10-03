"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCosmosExtension = void 0;
const query_rpc_Query_1 = require("../../codegen/cosmos/auth/v1beta1/query.rpc.Query");
const query_rpc_Query_2 = require("../../codegen/cosmos/authz/v1beta1/query.rpc.Query");
const query_rpc_Query_3 = require("../../codegen/cosmos/bank/v1beta1/query.rpc.Query");
const query_rpc_Query_4 = require("../../codegen/cosmos/distribution/v1beta1/query.rpc.Query");
const query_rpc_Query_5 = require("../../codegen/cosmos/feegrant/v1beta1/query.rpc.Query");
const query_rpc_Query_6 = require("../../codegen/cosmos/gov/v1beta1/query.rpc.Query");
const query_rpc_Query_7 = require("../../codegen/cosmos/mint/v1beta1/query.rpc.Query");
const query_rpc_Query_8 = require("../../codegen/cosmos/slashing/v1beta1/query.rpc.Query");
const query_rpc_Query_9 = require("../../codegen/cosmos/staking/v1beta1/query.rpc.Query");
const service_rpc_Service_1 = require("../../codegen/cosmos/tx/v1beta1/service.rpc.Service");
const query_rpc_Query_10 = require("../../codegen/ibc/applications/transfer/v1/query.rpc.Query");
const query_rpc_Query_11 = require("../../codegen/ibc/core/channel/v1/query.rpc.Query");
const query_rpc_Query_12 = require("../../codegen/ibc/core/client/v1/query.rpc.Query");
const query_rpc_Query_13 = require("../../codegen/ibc/core/connection/v1/query.rpc.Query");
function setupCosmosExtension(base) {
    const rpcAuthQueryExtension = (0, query_rpc_Query_1.createRpcQueryExtension)(base);
    const rpcAuthzQueryExtension = (0, query_rpc_Query_2.createRpcQueryExtension)(base);
    const rpcBankQueryExtension = (0, query_rpc_Query_3.createRpcQueryExtension)(base);
    const rpcDistributionQueryExtension = (0, query_rpc_Query_4.createRpcQueryExtension)(base);
    const rpcFeegrantQueryExtension = (0, query_rpc_Query_5.createRpcQueryExtension)(base);
    const rpcGovQueryExtension = (0, query_rpc_Query_6.createRpcQueryExtension)(base);
    const rpcMintQueryExtension = (0, query_rpc_Query_7.createRpcQueryExtension)(base);
    const rpcSlashingQueryExtension = (0, query_rpc_Query_8.createRpcQueryExtension)(base);
    const rpcStakingQueryExtension = (0, query_rpc_Query_9.createRpcQueryExtension)(base);
    const rpcTxQueryExtension = (0, service_rpc_Service_1.createRpcQueryExtension)(base);
    const rpcIbcTransferQueryExtension = (0, query_rpc_Query_10.createRpcQueryExtension)(base);
    const rpcIbcChannelQueryExtension = (0, query_rpc_Query_11.createRpcQueryExtension)(base);
    const rpcIbcClientQueryExtension = (0, query_rpc_Query_12.createRpcQueryExtension)(base);
    const rpcIbcConnectionQueryExtension = (0, query_rpc_Query_13.createRpcQueryExtension)(base);
    return {
        auth: { ...rpcAuthQueryExtension },
        authz: { ...rpcAuthzQueryExtension },
        bank: { ...rpcBankQueryExtension },
        distribution: { ...rpcDistributionQueryExtension },
        feegrant: { ...rpcFeegrantQueryExtension },
        gov: { ...rpcGovQueryExtension },
        mint: { ...rpcMintQueryExtension },
        slashing: { ...rpcSlashingQueryExtension },
        staking: { ...rpcStakingQueryExtension },
        tx: { ...rpcTxQueryExtension },
        ibc: {
            transfer: { ...rpcIbcTransferQueryExtension },
            channel: { ...rpcIbcChannelQueryExtension },
            client: { ...rpcIbcClientQueryExtension },
            connection: { ...rpcIbcConnectionQueryExtension },
        },
    };
}
exports.setupCosmosExtension = setupCosmosExtension;
//# sourceMappingURL=cosmos.js.map