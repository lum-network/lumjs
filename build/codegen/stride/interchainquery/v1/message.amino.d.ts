import { MsgSubmitQueryResponse } from "./message";
export declare const AminoConverter: {
    "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: (message: MsgSubmitQueryResponse) => import("./message").MsgSubmitQueryResponseAmino;
        fromAmino: (object: import("./message").MsgSubmitQueryResponseAmino) => MsgSubmitQueryResponse;
    };
};
