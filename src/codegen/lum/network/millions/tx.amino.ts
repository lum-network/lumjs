//@ts-nocheck
import { MsgDeposit, MsgDepositRetry, MsgDepositEdit, MsgClaimPrize, MsgWithdrawDeposit, MsgWithdrawDepositRetry, MsgDrawRetry, MsgRestoreInterchainAccounts, MsgGenerateSeed } from "./tx";
export const AminoConverter = {
  "/lum.network.millions.MsgDeposit": {
    aminoType: "lum-network/millions/MsgPool",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/lum.network.millions.MsgDepositRetry": {
    aminoType: "lum-network/millions/MsgDepositRetry",
    toAmino: MsgDepositRetry.toAmino,
    fromAmino: MsgDepositRetry.fromAmino
  },
  "/lum.network.millions.MsgDepositEdit": {
    aminoType: "lum-network/millions/MsgDepositEdit",
    toAmino: MsgDepositEdit.toAmino,
    fromAmino: MsgDepositEdit.fromAmino
  },
  "/lum.network.millions.MsgClaimPrize": {
    aminoType: "lum-network/millions/MsgClaimPrize",
    toAmino: MsgClaimPrize.toAmino,
    fromAmino: MsgClaimPrize.fromAmino
  },
  "/lum.network.millions.MsgWithdrawDeposit": {
    aminoType: "lum-network/millions/MsgWithdrawDeposit",
    toAmino: MsgWithdrawDeposit.toAmino,
    fromAmino: MsgWithdrawDeposit.fromAmino
  },
  "/lum.network.millions.MsgWithdrawDepositRetry": {
    aminoType: "lum-network/millions/MsgWithdrawDepositRetry",
    toAmino: MsgWithdrawDepositRetry.toAmino,
    fromAmino: MsgWithdrawDepositRetry.fromAmino
  },
  "/lum.network.millions.MsgDrawRetry": {
    aminoType: "lum-network/millions/MsgRetry",
    toAmino: MsgDrawRetry.toAmino,
    fromAmino: MsgDrawRetry.fromAmino
  },
  "/lum.network.millions.MsgRestoreInterchainAccounts": {
    aminoType: "lum-network/millions/MsgRestoreInterchainAccounts",
    toAmino: MsgRestoreInterchainAccounts.toAmino,
    fromAmino: MsgRestoreInterchainAccounts.fromAmino
  },
  "/lum.network.millions.MsgGenerateSeed": {
    aminoType: "lum-network/millions/MsgGenerateSeed",
    toAmino: MsgGenerateSeed.toAmino,
    fromAmino: MsgGenerateSeed.fromAmino
  }
};