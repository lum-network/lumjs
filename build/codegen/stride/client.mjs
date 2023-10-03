import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as strideInterchainqueryV1MessageRegistry from "./interchainquery/v1/message.registry";
import * as strideInterchainqueryV1MessageAmino from "./interchainquery/v1/message.amino";
export const strideAminoConverters = {
    ...strideInterchainqueryV1MessageAmino.AminoConverter
};
export const strideProtoRegistry = [...strideInterchainqueryV1MessageRegistry.registry];
export const getSigningStrideClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...strideProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...strideAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningStrideClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningStrideClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
//# sourceMappingURL=client.js.map