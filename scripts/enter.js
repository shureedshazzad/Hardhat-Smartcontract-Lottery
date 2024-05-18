const { ethers } = require("hardhat");

// Function to delay execution for a specified time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function enterRaffle() {
    // Wait for 30 seconds before proceeding
    console.log("Waiting for 30 seconds before entering the raffle...");
    await sleep(30000);  // Delay for 30000 milliseconds (30 seconds)

    const raffle = await ethers.getContract("Raffle");
    const entranceFee = await raffle.getEntranceFee();
    await raffle.enterRaffle({ value: entranceFee });
    console.log("Entered!");
}

enterRaffle()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
