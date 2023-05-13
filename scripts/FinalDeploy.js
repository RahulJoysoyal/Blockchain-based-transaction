const hre = require("hardhat");

async function main() {
    const cha = await hre.ethers.getContractFactory("cha");
    const contract = await cha.deploy();
  
    await contract.deployed();
    console.log("Address of contract:",contract.address);
}
main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });

