import { MsgSubmitQueryResponse } from "./message";
export const registry = [["/stride.interchainquery.v1.MsgSubmitQueryResponse", MsgSubmitQueryResponse]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
                value: MsgSubmitQueryResponse.encode(value).finish()
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
                value: MsgSubmitQueryResponse.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=message.registry.js.map