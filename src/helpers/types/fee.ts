import { Coin } from './coin';

export interface Fee {
    amount: readonly Coin[];
    gas: string;
}
