import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const strideAminoConverters: {
    "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: (message: import("./interchainquery/v1/message").MsgSubmitQueryResponse) => import("./interchainquery/v1/message").MsgSubmitQueryResponseAmino;
        fromAmino: (object: import("./interchainquery/v1/message").MsgSubmitQueryResponseAmino) => import("./interchainquery/v1/message").MsgSubmitQueryResponse;
    };
};
export declare const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningStrideClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningStrideClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
