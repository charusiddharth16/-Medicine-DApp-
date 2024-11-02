/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")

const PRIVATE_KEY = "ccd388946323e1180fed0d12e294fe28090478dfcc5278066af4edc37400ee4f";
const MYGANACHE_PRIVATE_KEY = "0xe5607273ced5f2e2f29f205303a51d1b3d4755986dff4be5e7e1f63ac7946aaf";
module.exports = {
  solidity: "0.8.18",

  networks: {
    ganache:{
      url:`HTTP://127.0.0.1:7545`,
      accounts:[`${MYGANACHE_PRIVATE_KEY}`]
    },
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/ZdHwijcAM1jOfzGYoZWCfYQ_FIK8-aU7`,
      accounts:[`${PRIVATE_KEY}`]
    }
  }
};

//npx hardhat run --network sepolia scripts/deploy.js
// 0x1AEc1C85566479b98aA417d8F4212791173aaac4
// 0x94D1711Ed99F855F7Dcf9dDc5f106ae2F8991de7
