import { LumTypes } from '..';
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
export declare const convertUnit: (coin: LumTypes.Coin, toDenom: string) => string;
