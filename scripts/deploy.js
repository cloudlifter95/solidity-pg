const { ethers, network } = require("hardhat");
const networkName = network.name;
const chainId = network.config.chainId;


async function main() {
    await deployContract("SimpleStorage");
    await deployContract("FundMe");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

async function deployContract(ContractName) {
    const ContractFactory = await ethers.getContractFactory(ContractName);
    console.log(`[${networkName}-${chainId}] Deploying contract ${ContractName} ...`);
    const contract = await ContractFactory.deploy();
    await contract.waitForDeployment();
    const address = await contract.getAddress();
    console.log(`[${networkName}-${chainId}] Contract ${ContractName} deployed to: ${address}`);
}
