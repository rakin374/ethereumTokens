
const HDWalletProvider = require("@truffle/hdwallet-provider");

const seedPhrase = 'ripple boat topple frozen unable cactus ancient hero hammer master enlist emotion';
//local seedphrase to my ganache
const ropstenUrl = 'https://ropsten.infura.io/v3/89b0f9de77ba45ac86821c49ca6fc6dd';


module.exports = {
  contracts_directory: "./contracts/ERC20",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },


  compilers: {
    solc: {
        version: "0.8.4",
        optimizer: { enabled: true, runs: 200 }
    },
  },
};
