import { Coin } from '@cosmjs/amino';

export interface Fee {
    amount: readonly Coin[];
    gas: string;
}
