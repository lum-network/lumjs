import { QueryClient } from '@cosmjs/stargate';
import { Query as QueryAirdrop } from '../../codegen/lum/network/airdrop/query.rpc.Query';
import { Query as QueryBeam } from '../../codegen/lum/network/beam/query.rpc.Query';
import { Query as QueryMillions } from '../../codegen/lum/network/millions/query.rpc.Query';
export interface LumExtension {
    readonly airdrop: QueryAirdrop;
    readonly beam: QueryBeam;
    readonly millions: QueryMillions;
}
export declare const setupLumExtension: (base: QueryClient) => LumExtension;
