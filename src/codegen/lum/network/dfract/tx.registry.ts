//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdrawAndMint } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lum.network.dfract.MsgDeposit", MsgDeposit], ["/lum.network.dfract.MsgWithdrawAndMint", MsgWithdrawAndMint]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/lum.network.dfract.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    withdrawAndMint(value: MsgWithdrawAndMint) {
      return {
        typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
        value: MsgWithdrawAndMint.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/lum.network.dfract.MsgDeposit",
        value
      };
    },
    withdrawAndMint(value: MsgWithdrawAndMint) {
      return {
        typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
        value
      };
    }
  },
  fromPartial: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/lum.network.dfract.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    withdrawAndMint(value: MsgWithdrawAndMint) {
      return {
        typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
        value: MsgWithdrawAndMint.fromPartial(value)
      };
    }
  }
};