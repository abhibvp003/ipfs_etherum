const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider("safe anger version team yard stereo friend describe camp vacuum language check", "https://rinkeby.infura.io/v3/" + "11e1bde4aeed42ca8c33218078f8f848"),
      network_id: 4,
      gas: 3000000,
      gasPrice: 50
    },
    ropsten: {
      provider: () => new HDWalletProvider("safe anger version team yard stereo friend describe camp vacuum language check", "https://ropsten.infura.io/v3/" + "11e1bde4aeed42ca8c33218078f8f848"),
      network_id: 3,
      gas: 3000000,
      gasPrice: 21
    }
  }
};
