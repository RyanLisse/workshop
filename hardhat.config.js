require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  networks: {
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY || "0".repeat(64)],
    },
    etherscan: {
      url: "https://api.polygonscan.com/api",
      apiKey: process.env.POLYGONSCAN_API_KEY,
    },
  },
};
