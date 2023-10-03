import { createRpcQueryExtension as createAuthRpcQueryExtension } from '../../codegen/cosmos/auth/v1beta1/query.rpc.Query';
import { createRpcQueryExtension as createAuthzRpcQueryExtension } from '../../codegen/cosmos/authz/v1beta1/query.rpc.Query';
import { createRpcQueryExtension as createBankRpcQueryExtension } from '../../codegen/cosmos/bank/v1beta1/query.rpc.Query';
import { createRpcQueryExtension as createDistributionRpcQueryExtension } from '../../codegen/cosmos/distribution/v1beta1/query.rpc.Query';
import { createRpcQueryExtension as createFeegrantRpcQueryExtension } from '../../codegen/cosmos/feegrant/v1beta1/query.rpc.Query';
import { createRpcQueryExtension as createGovRpcQueryExtension } from '../../codegen/cosmos/gov/v1beta1/query.rpc.Query';
import { createRpcQueryExtension as createMintRpcQueryExtension } from '../../codegen/cosmos/mint/v1beta1/query.rpc.Query';
import { createRpcQueryExtension as createSlashingRpcQueryExtension } from '../../codegen/cosmos/slashing/v1beta1/query.rpc.Query';
import { createRpcQueryExtension as createStakingRpcQueryExtension } from '../../codegen/cosmos/staking/v1beta1/query.rpc.Query';
import { createRpcQueryExtension as createTxRpcQueryExtension } from '../../codegen/cosmos/tx/v1beta1/service.rpc.Service';
import { createRpcQueryExtension as createIbcTransferRpcQueryExtension } from '../../codegen/ibc/applications/transfer/v1/query.rpc.Query';
import { createRpcQueryExtension as createIbcChannelRpcQueryExtension } from '../../codegen/ibc/core/channel/v1/query.rpc.Query';
import { createRpcQueryExtension as createIbcClientRpcQueryExtension } from '../../codegen/ibc/core/client/v1/query.rpc.Query';
import { createRpcQueryExtension as createIbcConnectionRpcQueryExtension } from '../../codegen/ibc/core/connection/v1/query.rpc.Query';
export function setupCosmosExtension(base) {
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
//# sourceMappingURL=cosmos.js.map