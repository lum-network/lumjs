//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgDepositRetry, MsgDepositEdit, MsgClaimPrize, MsgWithdrawDeposit, MsgWithdrawDepositRetry, MsgDrawRetry, MsgRestoreInterchainAccounts, MsgGenerateSeed } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lum.network.millions.MsgDeposit", MsgDeposit], ["/lum.network.millions.MsgDepositRetry", MsgDepositRetry], ["/lum.network.millions.MsgDepositEdit", MsgDepositEdit], ["/lum.network.millions.MsgClaimPrize", MsgClaimPrize], ["/lum.network.millions.MsgWithdrawDeposit", MsgWithdrawDeposit], ["/lum.network.millions.MsgWithdrawDepositRetry", MsgWithdrawDepositRetry], ["/lum.network.millions.MsgDrawRetry", MsgDrawRetry], ["/lum.network.millions.MsgRestoreInterchainAccounts", MsgRestoreInterchainAccounts], ["/lum.network.millions.MsgGenerateSeed", MsgGenerateSeed]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/lum.network.millions.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    depositRetry(value: MsgDepositRetry) {
      return {
        typeUrl: "/lum.network.millions.MsgDepositRetry",
        value: MsgDepositRetry.encode(value).finish()
      };
    },
    depositEdit(value: MsgDepositEdit) {
      return {
        typeUrl: "/lum.network.millions.MsgDepositEdit",
        value: MsgDepositEdit.encode(value).finish()
      };
    },
    claimPrize(value: MsgClaimPrize) {
      return {
        typeUrl: "/lum.network.millions.MsgClaimPrize",
        value: MsgClaimPrize.encode(value).finish()
      };
    },
    withdrawDeposit(value: MsgWithdrawDeposit) {
      return {
        typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
        value: MsgWithdrawDeposit.encode(value).finish()
      };
    },
    withdrawDepositRetry(value: MsgWithdrawDepositRetry) {
      return {
        typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
        value: MsgWithdrawDepositRetry.encode(value).finish()
      };
    },
    drawRetry(value: MsgDrawRetry) {
      return {
        typeUrl: "/lum.network.millions.MsgDrawRetry",
        value: MsgDrawRetry.encode(value).finish()
      };
    },
    restoreInterchainAccounts(value: MsgRestoreInterchainAccounts) {
      return {
        typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
        value: MsgRestoreInterchainAccounts.encode(value).finish()
      };
    },
    generateSeed(value: MsgGenerateSeed) {
      return {
        typeUrl: "/lum.network.millions.MsgGenerateSeed",
        value: MsgGenerateSeed.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/lum.network.millions.MsgDeposit",
        value
      };
    },
    depositRetry(value: MsgDepositRetry) {
      return {
        typeUrl: "/lum.network.millions.MsgDepositRetry",
        value
      };
    },
    depositEdit(value: MsgDepositEdit) {
      return {
        typeUrl: "/lum.network.millions.MsgDepositEdit",
        value
      };
    },
    claimPrize(value: MsgClaimPrize) {
      return {
        typeUrl: "/lum.network.millions.MsgClaimPrize",
        value
      };
    },
    withdrawDeposit(value: MsgWithdrawDeposit) {
      return {
        typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
        value
      };
    },
    withdrawDepositRetry(value: MsgWithdrawDepositRetry) {
      return {
        typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
        value
      };
    },
    drawRetry(value: MsgDrawRetry) {
      return {
        typeUrl: "/lum.network.millions.MsgDrawRetry",
        value
      };
    },
    restoreInterchainAccounts(value: MsgRestoreInterchainAccounts) {
      return {
        typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
        value
      };
    },
    generateSeed(value: MsgGenerateSeed) {
      return {
        typeUrl: "/lum.network.millions.MsgGenerateSeed",
        value
      };
    }
  },
  fromPartial: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/lum.network.millions.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    depositRetry(value: MsgDepositRetry) {
      return {
        typeUrl: "/lum.network.millions.MsgDepositRetry",
        value: MsgDepositRetry.fromPartial(value)
      };
    },
    depositEdit(value: MsgDepositEdit) {
      return {
        typeUrl: "/lum.network.millions.MsgDepositEdit",
        value: MsgDepositEdit.fromPartial(value)
      };
    },
    claimPrize(value: MsgClaimPrize) {
      return {
        typeUrl: "/lum.network.millions.MsgClaimPrize",
        value: MsgClaimPrize.fromPartial(value)
      };
    },
    withdrawDeposit(value: MsgWithdrawDeposit) {
      return {
        typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
        value: MsgWithdrawDeposit.fromPartial(value)
      };
    },
    withdrawDepositRetry(value: MsgWithdrawDepositRetry) {
      return {
        typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
        value: MsgWithdrawDepositRetry.fromPartial(value)
      };
    },
    drawRetry(value: MsgDrawRetry) {
      return {
        typeUrl: "/lum.network.millions.MsgDrawRetry",
        value: MsgDrawRetry.fromPartial(value)
      };
    },
    restoreInterchainAccounts(value: MsgRestoreInterchainAccounts) {
      return {
        typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
        value: MsgRestoreInterchainAccounts.fromPartial(value)
      };
    },
    generateSeed(value: MsgGenerateSeed) {
      return {
        typeUrl: "/lum.network.millions.MsgGenerateSeed",
        value: MsgGenerateSeed.fromPartial(value)
      };
    }
  }
};