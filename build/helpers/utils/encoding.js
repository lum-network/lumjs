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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBech32 = exports.fromBech32 = exports.fromRfc3339 = exports.toRfc3339 = exports.fromUtf8 = exports.toUtf8 = exports.fromAscii = exports.toAscii = exports.fromBase64 = exports.toBase64 = exports.fromHex = exports.toHex = exports.sha256 = exports.toJSON = exports.keyFromHex = exports.keyToHex = exports.sha3 = void 0;
const hexEncoding = __importStar(require("crypto-js/enc-hex"));
const encoding_1 = require("@cosmjs/encoding");
Object.defineProperty(exports, "toHex", { enumerable: true, get: function () { return encoding_1.toHex; } });
Object.defineProperty(exports, "fromHex", { enumerable: true, get: function () { return encoding_1.fromHex; } });
Object.defineProperty(exports, "toBase64", { enumerable: true, get: function () { return encoding_1.toBase64; } });
Object.defineProperty(exports, "fromBase64", { enumerable: true, get: function () { return encoding_1.fromBase64; } });
Object.defineProperty(exports, "toAscii", { enumerable: true, get: function () { return encoding_1.toAscii; } });
Object.defineProperty(exports, "fromAscii", { enumerable: true, get: function () { return encoding_1.fromAscii; } });
Object.defineProperty(exports, "toUtf8", { enumerable: true, get: function () { return encoding_1.toUtf8; } });
Object.defineProperty(exports, "fromUtf8", { enumerable: true, get: function () { return encoding_1.fromUtf8; } });
Object.defineProperty(exports, "toRfc3339", { enumerable: true, get: function () { return encoding_1.toRfc3339; } });
Object.defineProperty(exports, "fromRfc3339", { enumerable: true, get: function () { return encoding_1.fromRfc3339; } });
Object.defineProperty(exports, "fromBech32", { enumerable: true, get: function () { return encoding_1.fromBech32; } });
Object.defineProperty(exports, "toBech32", { enumerable: true, get: function () { return encoding_1.toBech32; } });
const crypto_1 = require("@cosmjs/crypto");
Object.defineProperty(exports, "sha256", { enumerable: true, get: function () { return crypto_1.sha256; } });
const sha3_1 = __importDefault(require("crypto-js/sha3"));
const commons_1 = require("./commons");
/**
 * Sha3 hash
 *
 * @param hex hex bytes to hash
 */
const sha3 = (hex) => {
    const hexEncoded = hexEncoding.parse(hex);
    return (0, sha3_1.default)(hexEncoded).toString();
};
exports.sha3 = sha3;
/**
 * Convert a Uint8Array key into its hexadecimal version
 *
 * @param key (should be secp256k1 but works with anything though)
 * @param xPrefix whether or not to prefix the returned hex value by "0x"
 */
const keyToHex = (key, xPrefix = false) => {
    const hexKey = (0, encoding_1.toHex)(key);
    if (xPrefix) {
        return '0x' + hexKey;
    }
    return hexKey;
};
exports.keyToHex = keyToHex;
/**
 * Convert an hex key into its Uint8Array verison
 *
 * @param hexKey hexadecimal key to convert
 */
const keyFromHex = (hexKey) => {
    if (hexKey.startsWith('0x')) {
        return (0, encoding_1.fromHex)(hexKey.substr(2));
    }
    return (0, encoding_1.fromHex)(hexKey);
};
exports.keyFromHex = keyFromHex;
/**
 * Converts the provided data recursively in order to obtain a json usable version by removing
 * complex types and making it serializable
 *
 * - Uint8Array will be converted to HEX
 * - Date will be converted to ISO string
 * - Anything else will not be touched
 *
 * @param data data to convert (can be anything)
 */
const toJSON = (data) => {
    if ((0, commons_1.isUint8Array)(data)) {
        // Force uppercase hex format
        return (0, encoding_1.toHex)(data).toUpperCase();
    }
    else if (data instanceof Date) {
        // Otherwise custom Date class with nanosecond will be stringified as objects instead of datetime
        // Note: Nanoseconds data will be lost in the process
        return data.toISOString();
    }
    else if (Array.isArray(data)) {
        return data.map((v) => (0, exports.toJSON)(v));
    }
    else if (typeof data === 'object') {
        const jsonObj = {};
        const ks = data;
        for (const prop in ks) {
            jsonObj[prop] = (0, exports.toJSON)(ks[prop]);
        }
        return jsonObj;
    }
    return data;
};
exports.toJSON = toJSON;
//# sourceMappingURL=encoding.js.map