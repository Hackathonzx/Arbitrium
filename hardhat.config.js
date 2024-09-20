require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config();

const { RPC_URL, PRIVATE_KEY } = process.env

module.exports = {
  solidity: "0.8.1",
  networks: {
    arbitrumSepolia: {
      url: process.env.ARBITRIUM_URL,
      chainId: 421614,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
} 