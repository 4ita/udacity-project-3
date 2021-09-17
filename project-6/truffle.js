const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = '50fb002a18214eae97a0b37b0bffbc87';

const mnemonic = "account group video hat immense upgrade wedding hotel hip rack divert pitch";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4, // Rinkeby's ID
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};