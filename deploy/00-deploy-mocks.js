const { network, ethers } = require("hardhat");
const {developmentChains}  = require("../helper-hardhat-config.js");


const BASE_FEE = ethers.parseEther("0.25");//0.25 is the premium . It costs 0.25 L per link
// 0.25 is this the premium in LINK?
const GAS_PRICE_LINK = 1e9 // link per gas, is this the gas lane? // 0.000000001 LINK per gas


module.exports = async function ({getNamedAccounts,deployments}){
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    const args = [BASE_FEE,GAS_PRICE_LINK];

    if(developmentChains.includes(network.name)){
        log("Local network is detected!Deploying mocks....");
        //deploy a mock vrfcoordinator
        await deploy("VRFCoordinatorV2Mock",{
            from: deployer,
            log: true,
            args: args,
        })
        log("Mocks deployed!");
        log("------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]