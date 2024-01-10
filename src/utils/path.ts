import { HD_PATH } from "./constants";

/**
 * Get a Lum Network HDPath for a specified account index
 *
 * @param accountIndex appended at the end of the default Lum derivation path
 */
export const getLumHdPath = (accountIndex = 0, walletIndex = 0): string => {
    return HD_PATH + accountIndex.toString() + '/' + walletIndex.toString();
};