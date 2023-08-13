import { QueryClient } from '@cosmjs/stargate';
import { Query as QueryAirdrop, createRpcQueryExtension as createAirdropRpcQueryExtension } from '../../codegen/lum/network/airdrop/query.rpc.Query';
import { Query as QueryMillions, createRpcQueryExtension as createMillionsRpcQueryExtension } from '../../codegen/lum/network/millions/query.rpc.Query';

export interface LumExtension {
    readonly airdrop: QueryAirdrop;
    readonly millions: QueryMillions;
}

export const setupLumExtension = (base: QueryClient): LumExtension => {
    const rpcAirdropQueryExtension = createAirdropRpcQueryExtension(base);
    const rpcMillionsQueryExtension = createMillionsRpcQueryExtension(base);

    return {
        airdrop: { ...rpcAirdropQueryExtension },
        millions: { ...rpcMillionsQueryExtension },
    };
};
