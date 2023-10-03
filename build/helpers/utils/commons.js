"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint8IndexOf = exports.sortJSON = exports.isUint8Array = exports.isNonNullObject = void 0;
var utils_1 = require("@cosmjs/utils");
Object.defineProperty(exports, "isNonNullObject", { enumerable: true, get: function () { return utils_1.isNonNullObject; } });
Object.defineProperty(exports, "isUint8Array", { enumerable: true, get: function () { return utils_1.isUint8Array; } });
const encoding_1 = require("@cosmjs/encoding");
/**
 * Sorts an object properties recursively.
 *
 * @param jsonObj object to sort
 * @returns a new object with keys sorted alphabetically
 */
const sortJSON = (jsonObj) => {
    if (jsonObj instanceof Array) {
        for (let i = 0; i < jsonObj.length; i++) {
            jsonObj[i] = (0, exports.sortJSON)(jsonObj[i]);
        }
        return jsonObj;
    }
    else if (typeof jsonObj !== 'object') {
        return jsonObj;
    }
    let keys = Object.keys(jsonObj);
    keys = keys.sort();
    const newObject = {};
    for (let i = 0; i < keys.length; i++) {
        newObject[keys[i]] = (0, exports.sortJSON)(jsonObj[keys[i]]);
    }
    return newObject;
};
exports.sortJSON = sortJSON;
/**
 * Find the index of an Uint8Array element in an array of Uint8Array.
 *
 * @param arr Array to search elem
 * @param elem Elem to search in array
 * @returns The index of the element in the array or -1
 */
const uint8IndexOf = (arr, elem) => {
    const hexElem = (0, encoding_1.toHex)(elem);
    for (let i = 0; i < arr.length; i++) {
        if (hexElem === (0, encoding_1.toHex)(arr[i])) {
            return i;
        }
    }
    return -1;
};
exports.uint8IndexOf = uint8IndexOf;
//# sourceMappingURL=commons.js.map