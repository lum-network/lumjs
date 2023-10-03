"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stride = void 0;
const _175 = __importStar(require("./interchainquery/v1/genesis"));
const _176 = __importStar(require("./interchainquery/v1/message"));
const _177 = __importStar(require("./interchainquery/v1/query"));
const _268 = __importStar(require("./interchainquery/v1/message.amino"));
const _269 = __importStar(require("./interchainquery/v1/message.registry"));
const _270 = __importStar(require("./interchainquery/v1/message.rpc.msg"));
const _277 = __importStar(require("./rpc.tx"));
var stride;
(function (stride) {
    let interchainquery;
    (function (interchainquery) {
        interchainquery.v1 = {
            ..._175,
            ..._176,
            ..._177,
            ..._268,
            ..._269,
            ..._270
        };
    })(interchainquery = stride.interchainquery || (stride.interchainquery = {}));
    stride.ClientFactory = {
        ..._277
    };
})(stride || (exports.stride = stride = {}));
//# sourceMappingURL=bundle.js.map