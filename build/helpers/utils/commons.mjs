export { isNonNullObject, isUint8Array } from '@cosmjs/utils';
import { toHex } from '@cosmjs/encoding';
/**
 * Sorts an object properties recursively.
 *
 * @param jsonObj object to sort
 * @returns a new object with keys sorted alphabetically
 */
export const sortJSON = (jsonObj) => {
    if (jsonObj instanceof Array) {
        for (let i = 0; i < jsonObj.length; i++) {
            jsonObj[i] = sortJSON(jsonObj[i]);
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
        newObject[keys[i]] = sortJSON(jsonObj[keys[i]]);
    }
    return newObject;
};
/**
 * Find the index of an Uint8Array element in an array of Uint8Array.
 *
 * @param arr Array to search elem
 * @param elem Elem to search in array
 * @returns The index of the element in the array or -1
 */
export const uint8IndexOf = (arr, elem) => {
    const hexElem = toHex(elem);
    for (let i = 0; i < arr.length; i++) {
        if (hexElem === toHex(arr[i])) {
            return i;
        }
    }
    return -1;
};
//# sourceMappingURL=commons.js.map