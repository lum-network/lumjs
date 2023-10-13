# Lum Network - Javascript SDK

[![npm version](https://badge.fury.io/js/%40lum-network%2Fsdk-javascript.svg)](https://badge.fury.io/js/%40lum-network%2Fsdk-javascript)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This Javascript SDK enables browsers and NodeJS clients to interact with the Lum Network.

## SDK Usage

### Node version

The library is tested using **NodeJS 18.x**.

It should also work in all recent browsers.

### Installation

```bash
yarn add @lum-network/sdk-javascript
```

### Documentation

The SDK code should be documented enough for developers to explore and use it easily. Therefore the documentation might not cover all the capabilities of the SDK. Feel free to contribute if you wish to improve the code documentation and/or the provided samples.

The [Documentation](./docs/README.md) contains:

-   Installation instructions
-   Basic usage
-   Code samples
-   Code auto-generated documentation

## SDK Features

This SDK provides an easy access to all the available Lum Network blockchain RPCs as well as the payload generation and the cryptographic features to properly consume those RPCs.

**Most commonly used features:**

-   Core cryptographic tools:
    -   Seed, private key and encrypted mnemonic generation
    -   Private and public keys management
    -   Transaction payload generation
    -   Transaction signature and verification
-   Wallets:
    -   Unlock wallets from private keys, keystore and mnemonic
    -   Sign transaction using unlocked wallets
-   Client service:
    -   Connection to a blockchain node (http and socket mode)
    -   Commonly used Tendermint and Cosmos RPCs
    -   All Lum Network dedicated RPCs
    -   Transaction broadcast
-   Transactions
    -   Payload generation
    -   Signature
-   Messages & Types:
    -   Cosmos & Lum messages payload building
    -   Typescript implementation of RPCs requests and responses
-   Other utils:
    -   Encoding data from/to: Uint8Array, base64 and hex
    -   Build Transaction search queries
    -   Log & event parsing

## Code structure

The SDK is based on the [@cosmoslogy/telescope](https://github.com/cosmology-tech/telescope) implementation and heavily relies on it.

It is intented to be used standalone, without having to import specific CosmJS packages which can get make implementations tricky and messy.

Therefore all types, functions are features from the CosmJS SDK are either re-implemented by this SDK or re-exported for simplicity purposes.

Directly importing the CosmJS SDK or other cryptographic library should be considered bad practice for most use cases.

Do not hesitate to contribute to this repository. This SDK is intended to be a one-stop-shop for all Lum Network javascript implementations and should definitely be improved over time by all its users.

## Run the package locally

### Install the latest lum repository version

```bash
git submodule foreach git pull origin master
```

### Install telescope

```bash
npm install -g @cosmology/telescope
```

### Transpile the proto

```bash
telescope transpile
```

follow the steps from the terminal

### Install dependencies

```bash
yarn
```

### Run codegen

```bash
yarn run codegen
```

## Unittests

Make sure to run the local chain aside.
Do this in a separate terminal window. You can copy the config from config.yml and pass it to the lum folder.

```bash
cp config.yml lum/config.yml
```

```bash
cd lum
```

```bash
ignite chain serve --skip-proto
```

at the root of the project in the initial terminal window run:

```bash
yarn test
```

### Ledger unittests

In order to run the unittest involving Ledger devices you need to do the following:

1. Chose which application you want to use for the tests (Cosmos or Lum)
2. Remove the `.skip` from all the tests your want to run in `./tests/ledger.test.ts`
3. Connect a Ledger device and open either the Cosmos application or the Lum application
4. Run `yarn test tests/ledger.test.ts`
5. Follow the instructions on your Ledger device to pass each test that require a user input

## Simulate pipelines locally

install act, for instance:

```bash
brew install act
```

simulate the pipeline for a pull request

```bash
act pull_request --container-architecture linux/amd64
```

nb: be patient, this can take up to 15min

## Credits

🛠 Built witht Cosmology

Code built with the help of these related projects:

-   [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
-   [@cosmology/telescope](https://github.com/cosmology-tech/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
-   [chain-registry](https://github.com/cosmology-tech/chain-registry) an npm module for the official Cosmos chain-registry

## Contributing

Contributions are most welcome.

Please test your changes with a local client and add unit tests coverage for your code before submission.
