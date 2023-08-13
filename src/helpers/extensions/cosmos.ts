import { QueryClient } from '@cosmjs/stargate';
import { Query as QueryAuthExtension, createRpcQueryExtension as createAuthRpcQueryExtension } from '../../codegen/cosmos/auth/v1beta1/query.rpc.Query';
import { Query as QueryAuthzExtension, createRpcQueryExtension as createAuthzRpcQueryExtension } from '../../codegen/cosmos/authz/v1beta1/query.rpc.Query';
import { Query as BankExtension, createRpcQueryExtension as createBankRpcQueryExtension } from '../../codegen/cosmos/bank/v1beta1/query.rpc.Query';
import { Query as DistrubtionExtension, createRpcQueryExtension as createDistributionRpcQueryExtension } from '../../codegen/cosmos/distribution/v1beta1/query.rpc.Query';
import { Query as FeegrantExtension, createRpcQueryExtension as createFeegrantRpcQueryExtension } from '../../codegen/cosmos/feegrant/v1beta1/query.rpc.Query';
import { Query as GovExtension, createRpcQueryExtension as createGovRpcQueryExtension } from '../../codegen/cosmos/gov/v1beta1/query.rpc.Query';
import { Query as MintExtension, createRpcQueryExtension as createMintRpcQueryExtension } from '../../codegen/cosmos/mint/v1beta1/query.rpc.Query';
import { Query as SlashingExtension, createRpcQueryExtension as createSlashingRpcQueryExtension } from '../../codegen/cosmos/slashing/v1beta1/query.rpc.Query';
import { Query as StakingExtension, createRpcQueryExtension as createStakingRpcQueryExtension } from '../../codegen/cosmos/staking/v1beta1/query.rpc.Query';
import { Service as TxExtension, createRpcQueryExtension as createTxRpcQueryExtension } from '../../codegen/cosmos/tx/v1beta1/service.rpc.Service';
import { Query as IbcTransferExtension, createRpcQueryExtension as createIbcTransferRpcQueryExtension } from '../../codegen/ibc/applications/transfer/v1/query.rpc.Query';
import { Query as IbcChannelExtension, createRpcQueryExtension as createIbcChannelRpcQueryExtension } from '../../codegen/ibc/core/channel/v1/query.rpc.Query';
import { Query as IbcClientExtension, createRpcQueryExtension as createIbcClientRpcQueryExtension } from '../../codegen/ibc/core/client/v1/query.rpc.Query';
import { Query as IbcConnectionExtension, createRpcQueryExtension as createIbcConnectionRpcQueryExtension } from '../../codegen/ibc/core/connection/v1/query.rpc.Query';

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

export function setupCosmosExtension(base: QueryClient): CosmosExtension {
    const rpcAuthQueryExtension = createAuthRpcQueryExtension(base);
    const rpcAuthzQueryExtension = createAuthzRpcQueryExtension(base);
    const rpcBankQueryExtension = createBankRpcQueryExtension(base);
    const rpcDistributionQueryExtension = createDistributionRpcQueryExtension(base);
    const rpcFeegrantQueryExtension = createFeegrantRpcQueryExtension(base);
    const rpcGovQueryExtension = createGovRpcQueryExtension(base);
    const rpcMintQueryExtension = createMintRpcQueryExtension(base);
    const rpcSlashingQueryExtension = createSlashingRpcQueryExtension(base);
    const rpcStakingQueryExtension = createStakingRpcQueryExtension(base);
    const rpcTxQueryExtension = createTxRpcQueryExtension(base);
    const rpcIbcTransferQueryExtension = createIbcTransferRpcQueryExtension(base);
    const rpcIbcChannelQueryExtension = createIbcChannelRpcQueryExtension(base);
    const rpcIbcClientQueryExtension = createIbcClientRpcQueryExtension(base);
    const rpcIbcConnectionQueryExtension = createIbcConnectionRpcQueryExtension(base);

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
