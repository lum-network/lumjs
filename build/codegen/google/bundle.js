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
exports.google = void 0;
const _96 = __importStar(require("./api/annotations"));
const _97 = __importStar(require("./api/http"));
const _98 = __importStar(require("./protobuf/any"));
const _99 = __importStar(require("./protobuf/descriptor"));
const _100 = __importStar(require("./protobuf/duration"));
const _101 = __importStar(require("./protobuf/empty"));
const _102 = __importStar(require("./protobuf/timestamp"));
const _103 = __importStar(require("./protobuf/wrappers"));
var google;
(function (google) {
    google.api = {
        ..._96,
        ..._97
    };
    google.protobuf = {
        ..._98,
        ..._99,
        ..._100,
        ..._101,
        ..._102,
        ..._103
    };
})(google || (exports.google = google = {}));
//# sourceMappingURL=bundle.js.map