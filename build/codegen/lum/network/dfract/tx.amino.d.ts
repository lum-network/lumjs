import { MsgDeposit, MsgWithdrawAndMint } from "./tx";
export declare const AminoConverter: {
    "/lum.network.dfract.MsgDeposit": {
        aminoType: string;
        toAmino: (message: MsgDeposit) => import("./tx").MsgDepositAmino;
        fromAmino: (object: import("./tx").MsgDepositAmino) => MsgDeposit;
    };
    "/lum.network.dfract.MsgWithdrawAndMint": {
        aminoType: string;
        toAmino: (message: MsgWithdrawAndMint) => import("./tx").MsgWithdrawAndMintAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAndMintAmino) => MsgWithdrawAndMint;
    };
};
