import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as lumNetworkBeamTxRegistry from "./network/beam/tx.registry";
import * as lumNetworkDfractTxRegistry from "./network/dfract/tx.registry";
import * as lumNetworkMillionsTxRegistry from "./network/millions/tx.registry";
import * as lumNetworkBeamTxAmino from "./network/beam/tx.amino";
import * as lumNetworkDfractTxAmino from "./network/dfract/tx.amino";
import * as lumNetworkMillionsTxAmino from "./network/millions/tx.amino";
export const lumAminoConverters = {
  ...lumNetworkBeamTxAmino.AminoConverter,
  ...lumNetworkDfractTxAmino.AminoConverter,
  ...lumNetworkMillionsTxAmino.AminoConverter
};
export const lumProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...lumNetworkBeamTxRegistry.registry, ...lumNetworkDfractTxRegistry.registry, ...lumNetworkMillionsTxRegistry.registry];
export const getSigningLumClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...lumProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...lumAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningLumClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningLumClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};