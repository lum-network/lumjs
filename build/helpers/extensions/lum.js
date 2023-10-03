"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupLumExtension = void 0;
const query_rpc_Query_1 = require("../../codegen/lum/network/airdrop/query.rpc.Query");
const query_rpc_Query_2 = require("../../codegen/lum/network/beam/query.rpc.Query");
const query_rpc_Query_3 = require("../../codegen/lum/network/millions/query.rpc.Query");
const setupLumExtension = (base) => {
    const rpcAirdropQueryExtension = (0, query_rpc_Query_1.createRpcQueryExtension)(base);
    const rpcBeamQueryExtension = (0, query_rpc_Query_2.createRpcQueryExtension)(base);
    const rpcMillionsQueryExtension = (0, query_rpc_Query_3.createRpcQueryExtension)(base);
    return {
        airdrop: { ...rpcAirdropQueryExtension },
        beam: { ...rpcBeamQueryExtension },
        millions: { ...rpcMillionsQueryExtension },
    };
};
exports.setupLumExtension = setupLumExtension;
//# sourceMappingURL=lum.js.map