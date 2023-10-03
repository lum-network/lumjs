import { createRpcQueryExtension as createAirdropRpcQueryExtension } from '../../codegen/lum/network/airdrop/query.rpc.Query';
import { createRpcQueryExtension as createBeamRpcQueryExtension } from '../../codegen/lum/network/beam/query.rpc.Query';
import { createRpcQueryExtension as createMillionsRpcQueryExtension } from '../../codegen/lum/network/millions/query.rpc.Query';
export const setupLumExtension = (base) => {
    const rpcAirdropQueryExtension = createAirdropRpcQueryExtension(base);
    const rpcBeamQueryExtension = createBeamRpcQueryExtension(base);
    const rpcMillionsQueryExtension = createMillionsRpcQueryExtension(base);
    return {
        airdrop: { ...rpcAirdropQueryExtension },
        beam: { ...rpcBeamQueryExtension },
        millions: { ...rpcMillionsQueryExtension },
    };
};
//# sourceMappingURL=lum.js.map