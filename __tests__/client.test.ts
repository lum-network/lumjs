import Long from 'long';
import { LumClient, LumConstants, LumMessages, LumTypes, LumUtils, LumWallet, LumWalletFactory } from '../src/helpers';
import dotenv from 'dotenv';
import { LumRegistry } from '../src/helpers/registry';
import { DecodeObject } from '@cosmjs/proto-signing';
dotenv.config();

describe('LumClient', () => {
    let client: LumClient;
    let w1: LumWallet;
    let w2: LumWallet;

    beforeAll(async () => {
        client = await LumClient.connect(process.env.local as string);
        w1 = await LumWalletFactory.fromMnemonic(process.env.mnemonic1 as string);
        w2 = await LumWalletFactory.fromMnemonic(process.env.mnemonic2 as string);
    });

    describe('Basic functionality', () => {
        it('should allow to connect via webshockets', async () => {
            const wsClientt = await LumClient.connect(process.env.testnet as string);
            expect(await wsClientt.status()).toBeTruthy();
            wsClientt.disconnect();
        });
        it('Should expose height', async () => {
            const height = await client.getBlockHeight();
            expect(client.getChainId()).resolves.toEqual('lumnetwork-testnet');
            expect(height).toBeGreaterThan(0);
            expect(client.getBlock(height)).resolves.toBeTruthy();
        });
        it('Should expose status', async () => {
            const status = await client.status();
            expect(status).toBeTruthy();
        });
        it('Should expose account', async () => {
            const account = await client.getAccount(w1.getAddress());
            expect(account).toBeTruthy();
        });
        it('Should expose balance', async () => {
            const balance = await client.getBalance(w1.getAddress(), LumConstants.MicroLumDenom);
            expect(parseInt(balance?.amount as string)).toBeGreaterThan(0);
        });
        it('Should expose balances', async () => {
            const balances = await client.getAllBalances(w1.getAddress());
            expect(parseInt(balances[0].amount as string)).toBeGreaterThan(0);
        });
        it('Should expose supply', async () => {
            const supply = await client.getSupply(LumConstants.MicroLumDenom);
            expect(parseInt(supply?.amount as string)).toBeGreaterThan(0);
        });
        it('Should expose supplies', async () => {
            const supplies = await client.getAllSupplies();
            expect(supplies.length).toBeGreaterThan(0);
        });
        it('Should expose tendermint rpcs', async () => {
            const height = (await client.getBlockHeight()) - 1;
            expect(height).toBeGreaterThan(0);
            expect(client.tmClient.health()).resolves.toBeNull();
            expect(client.tmClient.status()).resolves.toBeTruthy();
            expect(client.tmClient.genesis()).resolves.toBeTruthy();
            expect(client.tmClient.abciInfo()).resolves.toBeTruthy();
            expect(client.tmClient.block(height)).resolves.toBeTruthy();
            expect(client.tmClient.blockchain(0, height)).resolves.toBeTruthy();
            expect(client.tmClient.validatorsAll(height)).resolves.toBeTruthy();
        });
    });

    describe('Cosmos core module', () => {
        it('Should expose bank module', async () => {
            const supplies = await client.getAllSupplies();
            expect(supplies).toBeTruthy();
            expect(supplies.length).toBeGreaterThan(0);
            const lumSupply = supplies.filter((c) => c.denom === LumConstants.MicroLumDenom)[0];
            expect(lumSupply).toBeTruthy();
            expect(parseFloat(lumSupply.amount)).toBeGreaterThan(0);
        });
        it('Should expose staking module', async () => {
            const validators = await client.tmClient.validatorsAll();
            expect(validators.validators.length).toBeGreaterThanOrEqual(1);
            const block = await client.getBlock();
            let found = false;
            for (let v = 0; v < validators.validators.length; v++) {
                const val = validators.validators[v];
                if (LumUtils.toHex(val.address) === LumUtils.toHex(block.block.header.proposerAddress)) {
                    found = true;
                    break;
                }
            }
            expect(found).toBeTruthy();

            // Get first available block
            const firstBlock = await client.getBlock(2);

            // Get boot val (genesis) with address genesis proposer address
            const bootVal = validators.validators.filter((v) => LumUtils.toHex(v.address) === LumUtils.toHex(firstBlock.block.header.proposerAddress))[0];
            expect(bootVal).toBeTruthy();

            // Get staking validator by matching it using pubkeys
            const stakers = await client.queryClient.staking.validators({ status: 'BOND_STATUS_BONDED', pagination: undefined });
            const bootStak = stakers.validators.filter(
                (s) => LumUtils.toHex((LumRegistry.decode(s.consensusPubkey as DecodeObject) as LumTypes.PubKey).key) === LumUtils.toHex(bootVal.pubkey?.data as Uint8Array),
            )[0];
            expect(bootVal).toBeTruthy();

            // Get account information by deriving the address from the operator address
            const delegAddress = LumUtils.toBech32(LumConstants.LumBech32PrefixAccAddr, LumUtils.fromBech32(bootStak.operatorAddress).data);
            const account = await client.getAccount(delegAddress);
            expect(account).toBeTruthy();

            // Get account balances

            const balances = await client.getAllBalances(account?.address as string);
            expect(balances).toBeTruthy();
            expect(balances?.length).toBeGreaterThan(0);
            const lumBalance = balances?.filter((b) => b.denom === LumConstants.MicroLumDenom)[0];
            expect(lumBalance).toBeTruthy();
            expect(parseFloat(lumBalance.amount)).toBeGreaterThan(0);
        });
        it('Should expose distribution module', async () => {
            // Get validators
            const validators = await client.tmClient.validatorsAll();
            expect(validators.validators.length).toBeGreaterThanOrEqual(1);

            // Get first available block
            const firstBlock = await client.getBlock(2);

            // Get boot val (genesis) with address genesis proposer address
            const bootVal = validators.validators.filter((v) => LumUtils.toHex(v.address) === LumUtils.toHex(firstBlock.block.header.proposerAddress))[0];
            expect(bootVal).toBeTruthy();

            // Get genesis validator account address
            const stakers = await client.queryClient.staking.validators({ status: 'BOND_STATUS_BONDED', pagination: undefined });
            const bootStak = stakers.validators.filter(
                (s) => LumUtils.toHex((LumRegistry.decode(s.consensusPubkey as DecodeObject) as LumTypes.PubKey).key) === LumUtils.toHex(bootVal.pubkey?.data as Uint8Array),
            )[0];

            // Get account information by deriving the address from the operator address
            const delegAddress = LumUtils.toBech32(LumConstants.LumBech32PrefixAccAddr, LumUtils.fromBech32(bootStak.operatorAddress).data);
            const account = await client.getAccount(delegAddress);
            expect(account).toBeTruthy();

            const deleg = await client.queryClient.distribution.delegatorWithdrawAddress({ delegatorAddress: account?.address as string });
            expect(deleg).toBeTruthy();
            expect(deleg.withdrawAddress).toEqual(account?.address);
            const delegValidators = await client.queryClient.distribution.delegatorValidators({ delegatorAddress: account?.address as string });
            expect(delegValidators).toBeTruthy();
            expect(delegValidators.validators.length).toBeGreaterThan(0);
        });
        it('Should expose the mint module', async () => {
            const params = await client.queryClient.mint.params();
            expect(params).toBeTruthy();
            expect(params?.params?.inflationMin).toBeTruthy();
            expect(params?.params?.inflationMax).toBeTruthy();
            expect(params?.params?.inflationRateChange).toBeTruthy();
            expect(params?.params?.mintDenom).toBeTruthy();
            expect(params?.params?.blocksPerYear).toBeTruthy();
            expect(params?.params?.goalBonded).toBeTruthy();

            const inflation = await client.queryClient.mint.inflation();
            const inflationUint8Array = new Uint8Array(inflation.inflation.buffer);
            const inflationValue = inflationUint8Array[0];
            expect(inflationValue).toBeGreaterThan(0);

            const annualProvisions = await client.queryClient.mint.annualProvisions();
            const annualProvisionUint8Array = new Uint8Array(annualProvisions.annualProvisions.buffer);
            const annualProvisionsValue = annualProvisionUint8Array[0];
            expect(annualProvisionsValue).toBeGreaterThan(0);
        });
        it('Should expose tx module and send a tx between 2 accounts', async () => {
            const chainId = await client.getChainId();

            const amount: LumTypes.Coin = {
                amount: '1000000',
                denom: LumConstants.MicroLumDenom,
            };

            const acc = await client.getAccount(w1.getAddress());
            const msgSend = LumMessages.BuildMsgSend(w1.getAddress(), w2.getAddress(), [amount]);

            const fee = {
                amount: [amount],
                gas: '300000',
            };

            const doc = {
                chainId,
                fee: fee,
                memo: '',
                messages: [msgSend],
                signers: [
                    {
                        accountNumber: acc?.accountNumber as number,
                        sequence: acc?.sequence as number,
                        publicKey: w1.getPublicKey(),
                    },
                ],
            };

            // Check balance before tx
            const balanceBeforeW1 = await client.queryClient.bank.balance({ address: w1.getAddress(), denom: amount.denom });
            const balanceBeforeW2 = await client.queryClient.bank.balance({ address: w2.getAddress(), denom: amount.denom });

            // Convert balanceBeforeW1 and balanceBeforeW2 to numeric values for comparison
            // Default to 0 if undefined
            const balanceBeforeW1Numeric = parseFloat(balanceBeforeW1?.balance?.amount || '0');
            const balanceBeforeW2Numeric = parseFloat(balanceBeforeW2?.balance?.amount || '0');

            const tx = await client.signAndBroadcastTx(w1, doc);
            expect(tx?.deliverTx?.code).toBe(0);
            expect(LumUtils.broadcastTxCommitSuccess(tx)).toBeTruthy();

            // Check balance after tx
            const balanceAfterW1 = await client.queryClient.bank.balance({ address: w1.getAddress(), denom: amount.denom });
            const balanceAfterW2 = await client.queryClient.bank.balance({ address: w2.getAddress(), denom: amount.denom });

            const expectedBalanceW1 = balanceBeforeW1Numeric - parseFloat(amount.amount) - parseFloat(fee.amount[0].amount);
            const expectedBalanceW2 = balanceBeforeW2Numeric + parseFloat(amount.amount);

            expect(parseFloat(balanceAfterW1?.balance?.amount || '0')).toEqual(expectedBalanceW1);
            expect(parseFloat(balanceAfterW2?.balance?.amount || '0')).toEqual(expectedBalanceW2);
        });
    });

    describe('Millions custom module', () => {
        describe('Params', () => {
            it('Should query params', async () => {
                const paramsMillions = await client.queryClient.millions.params();
                const minDepositAmount = '1000';
                const maxPrizeStrategyBatches = { low: 10, high: 0, unsigned: true };
                const maxPrizeBatchQuantity = { low: 1000, high: 0, unsigned: true };
                const minDrawScheduleDelta = { seconds: { low: 3600, high: 0, unsigned: false }, nanos: 0 };
                const maxDrawScheduleDelta = { seconds: { low: 31622400, high: 0, unsigned: false }, nanos: 0 };
                const prizeExpirationDelta = { seconds: { low: 2592000, high: 0, unsigned: false }, nanos: 0 };
                const feesStakers = '100000000000000000';
                const minDepositDrawDelta = { seconds: { low: 60, high: 0, unsigned: false }, nanos: 0 };
                expect(paramsMillions?.params?.minDepositAmount).toEqual(minDepositAmount);
                expect(paramsMillions?.params?.maxPrizeStrategyBatches).toEqual(maxPrizeStrategyBatches);
                expect(paramsMillions?.params?.maxPrizeBatchQuantity).toEqual(maxPrizeBatchQuantity);
                expect(paramsMillions?.params?.minDrawScheduleDelta).toEqual(minDrawScheduleDelta);
                expect(paramsMillions?.params?.maxDrawScheduleDelta).toEqual(maxDrawScheduleDelta);
                expect(paramsMillions?.params?.prizeExpirationDelta).toEqual(prizeExpirationDelta);
                expect(paramsMillions?.params?.feesStakers).toEqual(feesStakers);
                expect(paramsMillions?.params?.minDepositDrawDelta).toEqual(minDepositDrawDelta);
            });
        });
        describe('Pools', () => {
            it('Should query pools', async () => {
                const poolsResponse = await client.queryClient.millions.pools();
                expect(poolsResponse.pools.length).toBeGreaterThan(0);
                expect(poolsResponse.pools.length).toEqual(1);
            });
            it('Should query pool', async () => {
                const poolsResponse = await client.queryClient.millions.pool({ poolId: Long.fromNumber(1) });
                const clientId = await client.getChainId();
                expect(poolsResponse.pool?.denom).toEqual(LumConstants.MicroLumDenom);
                expect(poolsResponse.pool?.bech32PrefixAccAddr).toEqual(LumConstants.LumBech32PrefixAccAddr);
                expect(poolsResponse.pool?.state).toEqual(2);
                expect(poolsResponse.pool?.poolId).toEqual({ 'high': 0, 'low': 1, 'unsigned': true });
                expect(poolsResponse.pool?.chainId).toEqual(clientId);
            });
        });
        describe('Deposits', () => {
            it('Should successfully deposit', async () => {
                // Get the chain ID from the client
                const chainId = await client.getChainId();
                // Get the pool's TVL (Total Value Locked) before the deposit
                const getPoolTvlBeforeDeposit = parseFloat((await client.queryClient.millions.pool({ poolId: Long.fromNumber(1) })).pool?.tvlAmount || '0');
                // Define the deposit amount
                const amount: LumTypes.Coin = {
                    denom: LumConstants.MicroLumDenom,
                    amount: '1000000', // Amount in MicroLumDenom units
                };
                // Get the account information
                const acc = await client.getAccount(w1.getAddress());
                // Create a message for the deposit
                const msgMillionsDeposit = LumMessages.BuildMsgMillionsDeposit(
                    Long.fromNumber(1), // Replace with the appropriate pool ID
                    w1.getAddress(),
                    w1.getAddress(),
                    false,
                    amount,
                );
                // Define the transaction fee
                const fee = {
                    amount: [amount],
                    gas: '300000',
                };
                // Create the transaction document
                const doc = {
                    chainId,
                    fee: fee,
                    memo: '',
                    messages: [msgMillionsDeposit],
                    signers: [
                        {
                            accountNumber: acc?.accountNumber as number,
                            sequence: acc?.sequence as number,
                            publicKey: w1.getPublicKey(),
                        },
                    ],
                };
                // Sign and broadcast the transaction
                const tx = await client.signAndBroadcastTx(w1, doc);
                // Perform assertions to check if the transaction was successful
                expect(tx?.deliverTx?.code).toBe(0);
                expect(LumUtils.broadcastTxCommitSuccess(tx)).toBeTruthy();
                // Get the pool's TVL after the deposit
                const getPoolTvlAfterDeposit = parseFloat((await client.queryClient.millions.pool({ poolId: Long.fromNumber(1) })).pool?.tvlAmount || '0');
                const expectedNewTvl = getPoolTvlBeforeDeposit + parseFloat(amount.amount);
                // Expect the pool's TVL to be equal to the expected new TVL
                expect(getPoolTvlAfterDeposit).toEqual(expectedNewTvl);
            });
            it('Should query deposits', async () => {
                const depositsResponse = await client.queryClient.millions.deposits();
                expect(depositsResponse.deposits.length).toBeGreaterThan(0);
            });
            it('Should query poolDeposits', async () => {
                const depositsResponse = await client.queryClient.millions.deposits();
                const deposit = depositsResponse.deposits[0];
                const poolDepositsResponse = await client.queryClient.millions.poolDeposits({ poolId: deposit.poolId, pagination: undefined });
                expect(poolDepositsResponse.deposits.length).toBeGreaterThan(0);
            });
            it('Should query accountDeposits', async () => {
                const depositsResponse = await client.queryClient.millions.deposits();
                const deposit = depositsResponse.deposits[0];
                const accountDepositsResponse = await client.queryClient.millions.accountDeposits({ depositorAddress: deposit.depositorAddress, pagination: undefined });
                expect(accountDepositsResponse.deposits.length).toBeGreaterThan(0);
            });
            it('Should query accountDeposits', async () => {
                const depositsResponse = await client.queryClient.millions.deposits();
                const deposit = depositsResponse.deposits[0];
                const accountDepositsResponse = await client.queryClient.millions.accountDeposits({ depositorAddress: deposit.depositorAddress, pagination: undefined });
                expect(accountDepositsResponse.deposits.length).toBeGreaterThan(0);
            });
            it('Should query accountPoolDeposits', async () => {
                const depositsResponse = await client.queryClient.millions.deposits();
                const deposit = depositsResponse.deposits[0];
                const accountPoolDepositsResponse = await client.queryClient.millions.accountPoolDeposits({
                    poolId: deposit.poolId,
                    depositorAddress: deposit.depositorAddress,
                    pagination: undefined,
                });
                expect(accountPoolDepositsResponse.deposits.length).toBeGreaterThan(0);
            });
            it('Should successfully proceed a deposit-drop for new winnerAddr', async () => {
                const depositsResponse = await client.queryClient.millions.deposits();
                const deposit = depositsResponse.deposits[0];
                // Get the chain ID from the client
                const chainId = await client.getChainId();
                const amount: LumTypes.Coin = {
                    denom: LumConstants.MicroLumDenom,
                    amount: '1000000', // Amount in MicroLumDenom units
                };
                // Get the account information
                const acc = await client.getAccount(w1.getAddress());
                // Create a message for the deposit
                const msgMillionsDepositEdit = LumMessages.BuildMsgDepositEdit(deposit.poolId, deposit.depositId, w2.getAddress(), false, w1.getAddress());
                // Define the transaction fee
                const fee = {
                    amount: [amount],
                    gas: '300000',
                };
                // Create the transaction document
                const doc = {
                    chainId,
                    fee: fee,
                    memo: '',
                    messages: [msgMillionsDepositEdit],
                    signers: [
                        {
                            accountNumber: acc?.accountNumber as number,
                            sequence: acc?.sequence as number,
                            publicKey: w1.getPublicKey(),
                        },
                    ],
                };
                // Sign and broadcast the transaction
                const tx = await client.signAndBroadcastTx(w1, doc);
                // Perform assertions to check if the transaction was successful
                expect(tx?.deliverTx?.code).toBe(0);
                expect(LumUtils.broadcastTxCommitSuccess(tx)).toBeTruthy();

                const depositResponse = await client.queryClient.millions.poolDeposit({ poolId: deposit.poolId, depositId: deposit.depositId });
                expect(depositResponse.deposit?.winnerAddress).toEqual(w2.getAddress());
                expect(depositResponse.deposit?.depositorAddress).toEqual(w1.getAddress());
                expect(depositResponse.deposit?.isSponsor).toEqual(false);
            });
            it('Should successfully proceed a deposit-drop for sponsorship', async () => {
                const depositsResponse = await client.queryClient.millions.deposits();
                const deposit = depositsResponse.deposits[0];
                // Get the chain ID from the client
                const chainId = await client.getChainId();
                const amount: LumTypes.Coin = {
                    denom: LumConstants.MicroLumDenom,
                    amount: '1000000', // Amount in MicroLumDenom units
                };
                // Get the account information
                const acc = await client.getAccount(w1.getAddress());
                // Create a message for the deposit
                const msgMillionsDepositEdit = LumMessages.BuildMsgDepositEdit(deposit.poolId, deposit.depositId, w1.getAddress(), true, w1.getAddress());
                // Define the transaction fee
                const fee = {
                    amount: [amount],
                    gas: '300000',
                };
                // Create the transaction document
                const doc = {
                    chainId,
                    fee: fee,
                    memo: '',
                    messages: [msgMillionsDepositEdit],
                    signers: [
                        {
                            accountNumber: acc?.accountNumber as number,
                            sequence: acc?.sequence as number,
                            publicKey: w1.getPublicKey(),
                        },
                    ],
                };
                // Sign and broadcast the transaction
                const tx = await client.signAndBroadcastTx(w1, doc);
                // Perform assertions to check if the transaction was successful
                expect(tx?.deliverTx?.code).toBe(0);
                expect(LumUtils.broadcastTxCommitSuccess(tx)).toBeTruthy();

                const depositResponse = await client.queryClient.millions.poolDeposit({ poolId: deposit.poolId, depositId: deposit.depositId });
                expect(depositResponse.deposit?.winnerAddress).toEqual(w1.getAddress());
                expect(depositResponse.deposit?.depositorAddress).toEqual(w1.getAddress());
                expect(depositResponse.deposit?.isSponsor).toEqual(true);
            });
        });
        describe('Prizes', () => {
            it('Should successfully claim a prize', async () => {
                const prizes = await client.queryClient.millions.prizes();
                const prize = prizes && prizes.prizes[0];

                const chainId = await client.getChainId();
                const amount: LumTypes.Coin = {
                    denom: LumConstants.MicroLumDenom,
                    amount: '1',
                };
                // Get the account information
                const acc = await client.getAccount(w1.getAddress());
                // Create a message for the deposit
                const msgMillionsClaimPrize = LumMessages.BuildMsgClaimPrize(prize.poolId, prize.drawId, prize.prizeId, w1.getAddress());
                // Define the transaction fee
                const fee = {
                    amount: [amount],
                    gas: '100000',
                };
                // Create the transaction document
                const doc = {
                    chainId,
                    fee: fee,
                    memo: '',
                    messages: [msgMillionsClaimPrize],
                    signers: [
                        {
                            accountNumber: acc?.accountNumber as number,
                            sequence: acc?.sequence as number,
                            publicKey: w1.getPublicKey(),
                        },
                    ],
                };
                // Sign and broadcast the transaction
                const tx = await client.signAndBroadcastTx(w1, doc);
                // Perform assertions to check if the transaction was successful
                expect(LumUtils.broadcastTxCommitSuccess(tx)).toBeTruthy();
            });
            it('Should query prizes', async () => {
                const prizesResponse = await client.queryClient.millions.prizes();
                expect(prizesResponse.prizes.length).toBeGreaterThan(0);
            });
            it('Should query poolPrizes', async () => {
                const prizesResponse = await client.queryClient.millions.prizes();
                const prize = prizesResponse.prizes[0];
                const poolPrizesResponse = await client.queryClient.millions.poolPrizes({ poolId: prize.poolId, pagination: undefined });
                expect(poolPrizesResponse.prizes.length).toBeGreaterThan(0);
            });
            it('Should query poolDrawPrizes', async () => {
                const drawsResponse = await client.queryClient.millions.draws();
                const draw = drawsResponse.draws[0];
                const poolDrawPrizesResponse = await client.queryClient.millions.poolDrawPrizes({ poolId: draw.poolId, drawId: draw.drawId, pagination: undefined });
                expect(poolDrawPrizesResponse.prizes.length).toBeGreaterThan(0);
            });
            it('Should query poolDrawPrize', async () => {
                const prizesResponse = await client.queryClient.millions.prizes();
                const prize = prizesResponse.prizes[0];
                const poolDrawPrizesResponse = await client.queryClient.millions.poolDrawPrize({ poolId: prize.poolId, drawId: prize.drawId, prizeId: prize.prizeId });
                expect(poolDrawPrizesResponse).toBeTruthy();
            });
            it('Should query accountPoolPrizes', async () => {
                const prizesResponse = await client.queryClient.millions.prizes();
                const prize = prizesResponse.prizes[0];
                const accountPoolPrizesResponse = await client.queryClient.millions.accountPoolPrizes({ winnerAddress: w1.getAddress(), poolId: prize.poolId, pagination: undefined });
                expect(accountPoolPrizesResponse.prizes.length).toBeGreaterThan(0);
            });
            it('Should query accountPoolDrawPrizes', async () => {
                const prizesResponse = await client.queryClient.millions.prizes();
                const prize = prizesResponse.prizes[0];
                const accountPoolDrawPrizesResponse = await client.queryClient.millions.accountPoolDrawPrizes({
                    winnerAddress: w1.getAddress(),
                    poolId: prize.poolId,
                    drawId: prize.drawId,
                    pagination: undefined,
                });
                expect(accountPoolDrawPrizesResponse.prizes.length).toBeGreaterThan(0);
            });
        });
        describe('Draws', () => {
            it('Should query draws', async () => {
                const drawsResponse = await client.queryClient.millions.draws();
                expect(drawsResponse.draws.length).toBeGreaterThan(0);
            });
            it('Should query poolDraws', async () => {
                const drawsResponse = await client.queryClient.millions.draws();
                const draw = drawsResponse.draws[0];
                const poolDrawsResponse = await client.queryClient.millions.poolDraws({ poolId: draw.poolId, pagination: undefined });
                expect(poolDrawsResponse.draws.length).toBeGreaterThan(0);
            });
            it('Should query poolDraw', async () => {
                const drawsResponse = await client.queryClient.millions.draws();
                const draw = drawsResponse.draws[0];
                const poolDrawResponse = await client.queryClient.millions.poolDraw({ poolId: draw.poolId, drawId: draw.drawId });
                expect(poolDrawResponse).toBeTruthy();
            });
        });
        describe('Withdrawals', () => {
            it('Should successfully withdraw a deposit', async () => {
                // Get the chain ID from the client
                const chainId = await client.getChainId();

                // Get the first deposit
                const depositsResponse = await client.queryClient.millions.deposits();
                const deposit = depositsResponse.deposits[0];

                // Define the fee amount
                const amount: LumTypes.Coin = {
                    denom: LumConstants.MicroLumDenom,
                    amount: '1',
                };

                // Get the account information
                const acc = await client.getAccount(w1.getAddress());

                // Create a message for the deposit
                const msgMillionsWithdrawDeposit = LumMessages.BuildMsgWithdrawDeposit(deposit.poolId, deposit.depositId, deposit.depositorAddress, deposit.depositorAddress);

                // Define the transaction fee
                const fee = {
                    amount: [amount],
                    gas: '300000',
                };

                // Create the transaction document
                const doc = {
                    chainId,
                    fee: fee,
                    memo: '',
                    messages: [msgMillionsWithdrawDeposit],
                    signers: [
                        {
                            accountNumber: acc?.accountNumber as number,
                            sequence: acc?.sequence as number,
                            publicKey: w1.getPublicKey(),
                        },
                    ],
                };

                // Sign and broadcast the transaction
                const tx = await client.signAndBroadcastTx(w1, doc);

                // Perform assertions to check if the transaction was successful
                expect(tx?.deliverTx?.code).toBe(0);
                expect(LumUtils.broadcastTxCommitSuccess(tx)).toBeTruthy();
            });
            it('Should query withdrawals', async () => {
                const withdrawalsResponse = await client.queryClient.millions.withdrawals();
                expect(withdrawalsResponse.withdrawals.length).toBeGreaterThan(0);
            });
            it('Should query poolWithdrawals', async () => {
                const withdrawalsResponse = await client.queryClient.millions.withdrawals();
                const withdrawal = withdrawalsResponse.withdrawals[0];
                const poolWithdrawalsResponse = await client.queryClient.millions.poolWithdrawals({ poolId: withdrawal.poolId, pagination: undefined });
                expect(poolWithdrawalsResponse.withdrawals.length).toBeGreaterThan(0);
            });
            it('Should query poolWithdrawal', async () => {
                const withdrawalsResponse = await client.queryClient.millions.withdrawals();
                const withdrawal = withdrawalsResponse.withdrawals[0];
                const poolWithdrawalResponse = await client.queryClient.millions.poolWithdrawal({ poolId: withdrawal.poolId, withdrawalId: withdrawal.withdrawalId });
                expect(poolWithdrawalResponse).toBeTruthy();
            });
            it('Should query accountWithdrawals', async () => {
                const withdrawalsResponse = await client.queryClient.millions.withdrawals();
                const withdrawal = withdrawalsResponse.withdrawals[0];
                const accountWithdrawalsResponse = await client.queryClient.millions.accountWithdrawals({ depositorAddress: withdrawal.depositorAddress, pagination: undefined });
                expect(accountWithdrawalsResponse.withdrawals.length).toBeGreaterThan(0);
            });
            it('Should query accountPoolWithdrawals', async () => {
                const withdrawalsResponse = await client.queryClient.millions.withdrawals();
                const withdrawal = withdrawalsResponse.withdrawals[0];
                const accountPoolWithdrawalsResponse = await client.queryClient.millions.accountPoolWithdrawals({
                    poolId: withdrawal.poolId,
                    depositorAddress: withdrawal.depositorAddress,
                    pagination: undefined,
                });
                expect(accountPoolWithdrawalsResponse.withdrawals.length).toBeGreaterThan(0);
            });
        });
    });

    afterAll(async () => {
        client.disconnect();
    });
});
