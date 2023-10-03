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
exports.ibc = void 0;
const _104 = __importStar(require("./applications/transfer/v1/genesis"));
const _105 = __importStar(require("./applications/transfer/v1/query"));
const _106 = __importStar(require("./applications/transfer/v1/transfer"));
const _107 = __importStar(require("./applications/transfer/v1/tx"));
const _108 = __importStar(require("./applications/transfer/v2/packet"));
const _109 = __importStar(require("./core/channel/v1/channel"));
const _110 = __importStar(require("./core/channel/v1/genesis"));
const _111 = __importStar(require("./core/channel/v1/query"));
const _112 = __importStar(require("./core/channel/v1/tx"));
const _113 = __importStar(require("./core/client/v1/client"));
const _114 = __importStar(require("./core/client/v1/genesis"));
const _115 = __importStar(require("./core/client/v1/query"));
const _116 = __importStar(require("./core/client/v1/tx"));
const _117 = __importStar(require("./core/commitment/v1/commitment"));
const _118 = __importStar(require("./core/connection/v1/connection"));
const _119 = __importStar(require("./core/connection/v1/genesis"));
const _120 = __importStar(require("./core/connection/v1/query"));
const _121 = __importStar(require("./core/connection/v1/tx"));
const _122 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _123 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _124 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _125 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _238 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _239 = __importStar(require("./core/channel/v1/tx.amino"));
const _240 = __importStar(require("./core/client/v1/tx.amino"));
const _241 = __importStar(require("./core/connection/v1/tx.amino"));
const _242 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _243 = __importStar(require("./core/channel/v1/tx.registry"));
const _244 = __importStar(require("./core/client/v1/tx.registry"));
const _245 = __importStar(require("./core/connection/v1/tx.registry"));
const _246 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _247 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _248 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _249 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _250 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _251 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _252 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _253 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _273 = __importStar(require("./rpc.query"));
const _274 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._104,
                ..._105,
                ..._106,
                ..._107,
                ..._238,
                ..._242,
                ..._246,
                ..._250
            };
            transfer.v2 = {
                ..._108
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._109,
                ..._110,
                ..._111,
                ..._112,
                ..._239,
                ..._243,
                ..._247,
                ..._251
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._113,
                ..._114,
                ..._115,
                ..._116,
                ..._240,
                ..._244,
                ..._248,
                ..._252
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._117
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._118,
                ..._119,
                ..._120,
                ..._121,
                ..._241,
                ..._245,
                ..._249,
                ..._253
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._122
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._123
            };
            solomachine.v2 = {
                ..._124
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._125
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._273,
        ..._274
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map