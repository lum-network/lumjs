import { QueryClient } from '@cosmjs/stargate';
import { Query as QueryAuthExtension } from '../../codegen/cosmos/auth/v1beta1/query.rpc.Query';
import { Query as QueryAuthzExtension } from '../../codegen/cosmos/authz/v1beta1/query.rpc.Query';
import { Query as BankExtension } from '../../codegen/cosmos/bank/v1beta1/query.rpc.Query';
import { Query as DistrubtionExtension } from '../../codegen/cosmos/distribution/v1beta1/query.rpc.Query';
import { Query as FeegrantExtension } from '../../codegen/cosmos/feegrant/v1beta1/query.rpc.Query';
import { Query as GovExtension } from '../../codegen/cosmos/gov/v1beta1/query.rpc.Query';
import { Query as MintExtension } from '../../codegen/cosmos/mint/v1beta1/query.rpc.Query';
import { Query as SlashingExtension } from '../../codegen/cosmos/slashing/v1beta1/query.rpc.Query';
import { Query as StakingExtension } from '../../codegen/cosmos/staking/v1beta1/query.rpc.Query';
import { Service as TxExtension } from '../../codegen/cosmos/tx/v1beta1/service.rpc.Service';
import { Query as IbcTransferExtension } from '../../codegen/ibc/applications/transfer/v1/query.rpc.Query';
import { Query as IbcChannelExtension } from '../../codegen/ibc/core/channel/v1/query.rpc.Query';
import { Query as IbcClientExtension } from '../../codegen/ibc/core/client/v1/query.rpc.Query';
import { Query as IbcConnectionExtension } from '../../codegen/ibc/core/connection/v1/query.rpc.Query';
export interface CosmosExtension {
    readonly auth: QueryAuthExtension;
    readonly authz: QueryAuthzExtension;
    readonly bank: BankExtension;
    readonly distribution: DistrubtionExtension;
    readonly feegrant: FeegrantExtension;
    readonly gov: GovExtension;
    readonly mint: MintExtension;
    readonly slashing: SlashingExtension;
    readonly staking: StakingExtension;
    readonly tx: TxExtension;
    readonly ibc: {
        readonly transfer: IbcTransferExtension;
        readonly channel: IbcChannelExtension;
        readonly client: IbcClientExtension;
        readonly connection: IbcConnectionExtension;
    };
}
export declare function setupCosmosExtension(base: QueryClient): CosmosExtension;
