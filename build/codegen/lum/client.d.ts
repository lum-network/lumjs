import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const lumAminoConverters: {
    "/lum.network.millions.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./network/millions/tx").MsgDeposit) => import("./network/millions/tx").MsgDepositAmino;
        fromAmino: (object: import("./network/millions/tx").MsgDepositAmino) => import("./network/millions/tx").MsgDeposit;
    };
    "/lum.network.millions.MsgDepositRetry": {
        aminoType: string;
        toAmino: (message: import("./network/millions/tx").MsgDepositRetry) => import("./network/millions/tx").MsgDepositRetryAmino;
        fromAmino: (object: import("./network/millions/tx").MsgDepositRetryAmino) => import("./network/millions/tx").MsgDepositRetry;
    };
    "/lum.network.millions.MsgDepositEdit": {
        aminoType: string;
        toAmino: (message: import("./network/millions/tx").MsgDepositEdit) => import("./network/millions/tx").MsgDepositEditAmino;
        fromAmino: (object: import("./network/millions/tx").MsgDepositEditAmino) => import("./network/millions/tx").MsgDepositEdit;
    };
    "/lum.network.millions.MsgClaimPrize": {
        aminoType: string;
        toAmino: (message: import("./network/millions/tx").MsgClaimPrize) => import("./network/millions/tx").MsgClaimPrizeAmino;
        fromAmino: (object: import("./network/millions/tx").MsgClaimPrizeAmino) => import("./network/millions/tx").MsgClaimPrize;
    };
    "/lum.network.millions.MsgWithdrawDeposit": {
        aminoType: string;
        toAmino: (message: import("./network/millions/tx").MsgWithdrawDeposit) => import("./network/millions/tx").MsgWithdrawDepositAmino;
        fromAmino: (object: import("./network/millions/tx").MsgWithdrawDepositAmino) => import("./network/millions/tx").MsgWithdrawDeposit;
    };
    "/lum.network.millions.MsgWithdrawDepositRetry": {
        aminoType: string;
        toAmino: (message: import("./network/millions/tx").MsgWithdrawDepositRetry) => import("./network/millions/tx").MsgWithdrawDepositRetryAmino;
        fromAmino: (object: import("./network/millions/tx").MsgWithdrawDepositRetryAmino) => import("./network/millions/tx").MsgWithdrawDepositRetry;
    };
    "/lum.network.millions.MsgDrawRetry": {
        aminoType: string;
        toAmino: (message: import("./network/millions/tx").MsgDrawRetry) => import("./network/millions/tx").MsgDrawRetryAmino;
        fromAmino: (object: import("./network/millions/tx").MsgDrawRetryAmino) => import("./network/millions/tx").MsgDrawRetry;
    };
    "/lum.network.millions.MsgRestoreInterchainAccounts": {
        aminoType: string;
        toAmino: (message: import("./network/millions/tx").MsgRestoreInterchainAccounts) => import("./network/millions/tx").MsgRestoreInterchainAccountsAmino;
        fromAmino: (object: import("./network/millions/tx").MsgRestoreInterchainAccountsAmino) => import("./network/millions/tx").MsgRestoreInterchainAccounts;
    };
    "/lum.network.millions.MsgGenerateSeed": {
        aminoType: string;
        toAmino: (message: import("./network/millions/tx").MsgGenerateSeed) => import("./network/millions/tx").MsgGenerateSeedAmino;
        fromAmino: (object: import("./network/millions/tx").MsgGenerateSeedAmino) => import("./network/millions/tx").MsgGenerateSeed;
    };
    "/lum.network.dfract.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./network/dfract/tx").MsgDeposit) => import("./network/dfract/tx").MsgDepositAmino;
        fromAmino: (object: import("./network/dfract/tx").MsgDepositAmino) => import("./network/dfract/tx").MsgDeposit;
    };
    "/lum.network.dfract.MsgWithdrawAndMint": {
        aminoType: string;
        toAmino: (message: import("./network/dfract/tx").MsgWithdrawAndMint) => import("./network/dfract/tx").MsgWithdrawAndMintAmino;
        fromAmino: (object: import("./network/dfract/tx").MsgWithdrawAndMintAmino) => import("./network/dfract/tx").MsgWithdrawAndMint;
    };
    "/lum.network.beam.MsgOpenBeam": {
        aminoType: string;
        toAmino: (message: import("./network/beam/tx").MsgOpenBeam) => import("./network/beam/tx").MsgOpenBeamAmino;
        fromAmino: (object: import("./network/beam/tx").MsgOpenBeamAmino) => import("./network/beam/tx").MsgOpenBeam;
    };
    "/lum.network.beam.MsgUpdateBeam": {
        aminoType: string;
        toAmino: (message: import("./network/beam/tx").MsgUpdateBeam) => import("./network/beam/tx").MsgUpdateBeamAmino;
        fromAmino: (object: import("./network/beam/tx").MsgUpdateBeamAmino) => import("./network/beam/tx").MsgUpdateBeam;
    };
    "/lum.network.beam.MsgClaimBeam": {
        aminoType: string;
        toAmino: (message: import("./network/beam/tx").MsgClaimBeam) => import("./network/beam/tx").MsgClaimBeamAmino;
        fromAmino: (object: import("./network/beam/tx").MsgClaimBeamAmino) => import("./network/beam/tx").MsgClaimBeam;
    };
};
export declare const lumProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningLumClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningLumClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
