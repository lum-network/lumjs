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
exports.getSigningLumClient = exports.getSigningLumClientOptions = exports.lumProtoRegistry = exports.lumAminoConverters = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const lumNetworkBeamTxRegistry = __importStar(require("./network/beam/tx.registry"));
const lumNetworkDfractTxRegistry = __importStar(require("./network/dfract/tx.registry"));
const lumNetworkMillionsTxRegistry = __importStar(require("./network/millions/tx.registry"));
const lumNetworkBeamTxAmino = __importStar(require("./network/beam/tx.amino"));
const lumNetworkDfractTxAmino = __importStar(require("./network/dfract/tx.amino"));
const lumNetworkMillionsTxAmino = __importStar(require("./network/millions/tx.amino"));
exports.lumAminoConverters = {
    ...lumNetworkBeamTxAmino.AminoConverter,
    ...lumNetworkDfractTxAmino.AminoConverter,
    ...lumNetworkMillionsTxAmino.AminoConverter
};
exports.lumProtoRegistry = [...lumNetworkBeamTxRegistry.registry, ...lumNetworkDfractTxRegistry.registry, ...lumNetworkMillionsTxRegistry.registry];
const getSigningLumClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.lumProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.lumAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
exports.getSigningLumClientOptions = getSigningLumClientOptions;
const getSigningLumClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes }) => {
    const { registry, aminoTypes } = (0, exports.getSigningLumClientOptions)({
        defaultTypes
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
exports.getSigningLumClient = getSigningLumClient;
//# sourceMappingURL=client.js.map