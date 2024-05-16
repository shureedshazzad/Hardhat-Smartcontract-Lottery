const { ethers } = require("hardhat")

const networkConfig ={
    default: {
        name: "hardhat",
        keepersUpdateInterval: "30",
    },
    11155111: {
        name: "sepolia",
        subscriptionId: "5084",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 150 gwei
        raffleEntranceFee: ethers.parseEther("0.01"), // 0.01 ETH
        keepersUpdateInterval: "30",
        callBackGasLimit: "500000", // 500,000 gas
        vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
    },
    31337: {
        name:"localhost",
        raffleEntranceFee: ethers.parseEther("0.01"),
        callBackGasLimit: "500000", // 500,000 gas
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 150 gwei 
        keepersUpdateInterval: "30",
        subscriptionId: "588",
    }

}

const developmentChains = ["hardhat","localhost"]

const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS
}