import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgDepositRetry, MsgDepositEdit, MsgClaimPrize, MsgWithdrawDeposit, MsgWithdrawDepositRetry, MsgDrawRetry, MsgRestoreInterchainAccounts, MsgGenerateSeed } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        depositRetry(value: MsgDepositRetry): {
            typeUrl: string;
            value: Uint8Array;
        };
        depositEdit(value: MsgDepositEdit): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimPrize(value: MsgClaimPrize): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawDeposit(value: MsgWithdrawDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawDepositRetry(value: MsgWithdrawDepositRetry): {
            typeUrl: string;
            value: Uint8Array;
        };
        drawRetry(value: MsgDrawRetry): {
            typeUrl: string;
            value: Uint8Array;
        };
        restoreInterchainAccounts(value: MsgRestoreInterchainAccounts): {
            typeUrl: string;
            value: Uint8Array;
        };
        generateSeed(value: MsgGenerateSeed): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        depositRetry(value: MsgDepositRetry): {
            typeUrl: string;
            value: MsgDepositRetry;
        };
        depositEdit(value: MsgDepositEdit): {
            typeUrl: string;
            value: MsgDepositEdit;
        };
        claimPrize(value: MsgClaimPrize): {
            typeUrl: string;
            value: MsgClaimPrize;
        };
        withdrawDeposit(value: MsgWithdrawDeposit): {
            typeUrl: string;
            value: MsgWithdrawDeposit;
        };
        withdrawDepositRetry(value: MsgWithdrawDepositRetry): {
            typeUrl: string;
            value: MsgWithdrawDepositRetry;
        };
        drawRetry(value: MsgDrawRetry): {
            typeUrl: string;
            value: MsgDrawRetry;
        };
        restoreInterchainAccounts(value: MsgRestoreInterchainAccounts): {
            typeUrl: string;
            value: MsgRestoreInterchainAccounts;
        };
        generateSeed(value: MsgGenerateSeed): {
            typeUrl: string;
            value: MsgGenerateSeed;
        };
    };
    fromPartial: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        depositRetry(value: MsgDepositRetry): {
            typeUrl: string;
            value: MsgDepositRetry;
        };
        depositEdit(value: MsgDepositEdit): {
            typeUrl: string;
            value: MsgDepositEdit;
        };
        claimPrize(value: MsgClaimPrize): {
            typeUrl: string;
            value: MsgClaimPrize;
        };
        withdrawDeposit(value: MsgWithdrawDeposit): {
            typeUrl: string;
            value: MsgWithdrawDeposit;
        };
        withdrawDepositRetry(value: MsgWithdrawDepositRetry): {
            typeUrl: string;
            value: MsgWithdrawDepositRetry;
        };
        drawRetry(value: MsgDrawRetry): {
            typeUrl: string;
            value: MsgDrawRetry;
        };
        restoreInterchainAccounts(value: MsgRestoreInterchainAccounts): {
            typeUrl: string;
            value: MsgRestoreInterchainAccounts;
        };
        generateSeed(value: MsgGenerateSeed): {
            typeUrl: string;
            value: MsgGenerateSeed;
        };
    };
};
