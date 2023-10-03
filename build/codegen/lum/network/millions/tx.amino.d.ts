import { MsgDeposit, MsgDepositRetry, MsgDepositEdit, MsgClaimPrize, MsgWithdrawDeposit, MsgWithdrawDepositRetry, MsgDrawRetry, MsgRestoreInterchainAccounts, MsgGenerateSeed } from "./tx";
export declare const AminoConverter: {
    "/lum.network.millions.MsgDeposit": {
        aminoType: string;
        toAmino: (message: MsgDeposit) => import("./tx").MsgDepositAmino;
        fromAmino: (object: import("./tx").MsgDepositAmino) => MsgDeposit;
    };
    "/lum.network.millions.MsgDepositRetry": {
        aminoType: string;
        toAmino: (message: MsgDepositRetry) => import("./tx").MsgDepositRetryAmino;
        fromAmino: (object: import("./tx").MsgDepositRetryAmino) => MsgDepositRetry;
    };
    "/lum.network.millions.MsgDepositEdit": {
        aminoType: string;
        toAmino: (message: MsgDepositEdit) => import("./tx").MsgDepositEditAmino;
        fromAmino: (object: import("./tx").MsgDepositEditAmino) => MsgDepositEdit;
    };
    "/lum.network.millions.MsgClaimPrize": {
        aminoType: string;
        toAmino: (message: MsgClaimPrize) => import("./tx").MsgClaimPrizeAmino;
        fromAmino: (object: import("./tx").MsgClaimPrizeAmino) => MsgClaimPrize;
    };
    "/lum.network.millions.MsgWithdrawDeposit": {
        aminoType: string;
        toAmino: (message: MsgWithdrawDeposit) => import("./tx").MsgWithdrawDepositAmino;
        fromAmino: (object: import("./tx").MsgWithdrawDepositAmino) => MsgWithdrawDeposit;
    };
    "/lum.network.millions.MsgWithdrawDepositRetry": {
        aminoType: string;
        toAmino: (message: MsgWithdrawDepositRetry) => import("./tx").MsgWithdrawDepositRetryAmino;
        fromAmino: (object: import("./tx").MsgWithdrawDepositRetryAmino) => MsgWithdrawDepositRetry;
    };
    "/lum.network.millions.MsgDrawRetry": {
        aminoType: string;
        toAmino: (message: MsgDrawRetry) => import("./tx").MsgDrawRetryAmino;
        fromAmino: (object: import("./tx").MsgDrawRetryAmino) => MsgDrawRetry;
    };
    "/lum.network.millions.MsgRestoreInterchainAccounts": {
        aminoType: string;
        toAmino: (message: MsgRestoreInterchainAccounts) => import("./tx").MsgRestoreInterchainAccountsAmino;
        fromAmino: (object: import("./tx").MsgRestoreInterchainAccountsAmino) => MsgRestoreInterchainAccounts;
    };
    "/lum.network.millions.MsgGenerateSeed": {
        aminoType: string;
        toAmino: (message: MsgGenerateSeed) => import("./tx").MsgGenerateSeedAmino;
        fromAmino: (object: import("./tx").MsgGenerateSeedAmino) => MsgGenerateSeed;
    };
};
