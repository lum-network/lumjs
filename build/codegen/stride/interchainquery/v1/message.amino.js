"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const message_1 = require("./message");
exports.AminoConverter = {
    "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
        toAmino: message_1.MsgSubmitQueryResponse.toAmino,
        fromAmino: message_1.MsgSubmitQueryResponse.fromAmino
    }
};
//# sourceMappingURL=message.amino.js.map