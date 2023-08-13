//@ts-nocheck
import { MsgDeposit, MsgWithdrawAndMint } from "./tx";
export const AminoConverter = {
  "/lum.network.dfract.MsgDeposit": {
    aminoType: "/lum.network.dfract.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/lum.network.dfract.MsgWithdrawAndMint": {
    aminoType: "/lum.network.dfract.MsgWithdrawAndMint",
    toAmino: MsgWithdrawAndMint.toAmino,
    fromAmino: MsgWithdrawAndMint.fromAmino
  }
};