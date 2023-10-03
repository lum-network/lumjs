"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertUnit = void 0;
const __1 = require("..");
/**
 * Converts the Coin amount into the destination denom.
 * This method does not do any actual math and only "move" the floating precision of the amoun in order to avoid any
 * possible floating point precision issue.
 * It does nothing if src denom = dst denom.
 *
 * @param coin Coin to convert into toDenom
 * @param toDenom destination denom to convert into
 * @returns the amount converted
 */
const convertUnit = (coin, toDenom) => {
    const parts = coin.amount.split('.');
    if (parts.length > 2) {
        throw new Error('More than one separator found');
    }
    if (coin.denom === toDenom) {
        return coin.amount;
    }
    else if (coin.denom.startsWith('u') && coin.denom.endsWith(toDenom)) {
        // from micro to base
        if (parts.length !== 1) {
            throw new Error('Micro units cannot have floating precision');
        }
        let res = parts[0];
        for (let i = res.length; res.length <= __1.LumConstants.LumExponent; i++) {
            res = '0' + res;
        }
        const floatIdx = res.length - __1.LumConstants.LumExponent;
        return (res.substring(0, floatIdx) + '.' + res.substring(floatIdx)).replace(/0+$/, '');
    }
    else if (toDenom.startsWith('u') && toDenom.endsWith(coin.denom)) {
        // form base to micro
        if (parts.length === 2 && parts[1].length > __1.LumConstants.LumExponent) {
            throw new Error(`Floating precision cannot exceed ${__1.LumConstants.LumExponent} digits`);
        }
        let res = parts[0] + (parts[1] || '');
        for (let i = parts.length === 2 ? parts[1].length : 0; i < __1.LumConstants.LumExponent; i++) {
            res += '0';
        }
        return res.replace(/^0+/, '');
    }
    return coin.amount;
};
exports.convertUnit = convertUnit;
//# sourceMappingURL=units.js.map