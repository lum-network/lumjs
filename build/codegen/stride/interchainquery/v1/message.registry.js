"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const message_1 = require("./message");
exports.registry = [["/stride.interchainquery.v1.MsgSubmitQueryResponse", message_1.MsgSubmitQueryResponse]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
                value: message_1.MsgSubmitQueryResponse.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
                value
            };
        }
    },
    fromPartial: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
                value: message_1.MsgSubmitQueryResponse.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=message.registry.js.map