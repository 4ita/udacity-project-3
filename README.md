# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
npm i -g truffle@4.1.14
npm i ganache-cli
```

Note: `ganache-cli` is renamed to `ganache`, but some functions have not been transfered yet.

To deploy this contract on the Ethereum Rinkeby test network, use `truffle-hdwallet-provider` package.

```
npm i truffle-hdwallet-provider
```

#### Environment

- node: v15.14.0
- Truffle: v4.1.14
- web3: v0.20.6 (CDN)
- truffle-hdwallet-provider: v1.0.17

### Deploy on the Ethereum Rinkeby test network

Based on the configuration in `truffle.js` file, deploy the contract on the Ethereum Rinkeby test network.

```
truffle migrate --reset --network rinkeby
```

### Deployed contract addresses on Rinkeby

#### FarmerRole

- contract address: [0x1b44f6765b50a11806b75c96796d0f1dc9f20587](https://rinkeby.etherscan.io/address/0x1b44f6765b50a11806b75c96796d0f1dc9f20587)
- transaction ID: [0xae7e335dd87d7b09c7ef15c3c498430702526670cce5e22e1bd2283b17080c8a](https://rinkeby.etherscan.io/tx/0xae7e335dd87d7b09c7ef15c3c498430702526670cce5e22e1bd2283b17080c8a)

#### DistributorRole

- contract address: [0x20366075d3928faaaacf09005dfbcfec1c388c16](https://rinkeby.etherscan.io/address/0x20366075d3928faaaacf09005dfbcfec1c388c16)
- transaction ID: [0x5a7f8c3c8be20b260c0f6a324672489822ca29205cb5cf02af57f2e1ba699ff9](https://rinkeby.etherscan.io/tx/0x5a7f8c3c8be20b260c0f6a324672489822ca29205cb5cf02af57f2e1ba699ff9)

#### RetailerRole

- contract address: [0xfbe3369247c5b20f3c2f7c4adf8771a131d5df69](https://rinkeby.etherscan.io/address/0xfbe3369247c5b20f3c2f7c4adf8771a131d5df69)
- transaction ID: [0xc536e1e9a579790736499338fbf4c1407e6f6625ee150d8b34820b223fecb1b1](https://rinkeby.etherscan.io/tx/0xc536e1e9a579790736499338fbf4c1407e6f6625ee150d8b34820b223fecb1b1)

#### ConsumerRole

- contract address: [0xf46e62c4921172424ad54cb7a057b3ad3438d3df](https://rinkeby.etherscan.io/address/)
- transaction ID: [0xb57857221158210c2164eda08775b502310a3dedc580499f0d84940f09acdfef](https://rinkeby.etherscan.io/tx/0xb57857221158210c2164eda08775b502310a3dedc580499f0d84940f09acdfef)

#### SupplyChain

- contract address: [0x1a295381013d483144273dd6fc0ceb4d345395a3](https://rinkeby.etherscan.io/address/0x1a295381013d483144273dd6fc0ceb4d345395a3)
- transaction ID: [0x10e7e25fd34c542a0b7c6c7b978a870abaec29091d9b0cb29389f2a9cf00de0c](https://rinkeby.etherscan.io/tx/0x10e7e25fd34c542a0b7c6c7b978a870abaec29091d9b0cb29389f2a9cf00de0c)

### Installation

> The starter code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function *mutability* and *visibility* to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this starter code, please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24. 

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build/contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
* [Web3](https://github.com/ChainSafe/web3.js) - Web3 is used to connect the wallet provider (metamask etc.) to the web application.

## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
