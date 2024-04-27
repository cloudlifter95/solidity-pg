const { ethers, network } = require("hardhat");
const networkName = network.name;
const chainId = network.config.chainId;

async function main() {
    contracts = ["SimpleStorage", "FundMe"]; //contracts = ["SimpleStorage", "FundMe"];
    contracts_map = {};
    for (const c of contracts) {
        console.log(c);
        contract = await deployContract(c);
        if (
            network.config.chainId === 11155111 &&
            process.env.ETHERSCAN_API_KEY
        ) {
            console.log(
                `[${networkName}-${chainId}] Waiting for block confirmations...`,
            );
            await contract.deploymentTransaction().wait(6);
            await verify(contract.target, []);
        }
        contracts_map[c] = contract;
    }
    console.log("---------------------------------------------------------");
    console.log("Contracts map:");
    console.log(contracts_map);
    console.log("---------------------------------------------------------");
    // SimpleStorage contract interaction
    // ---
    const { SimpleStorage: simpleStorage } = contracts_map;

    const currentValue = await simpleStorage.retrieve();
    console.log(`Current value is: ${currentValue}`);

    const transactionResponse = await simpleStorage.store(2);
    await transactionResponse.wait(1);
    console.log(`Updated value is: ${await simpleStorage.retrieve()}`);

    // ----
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

async function verify(contractAddress, args) {
    console.log(
        `[${networkName}-${chainId}] Verifying contract ${contractAddress}`,
    );
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log(error);
        }
    }
}

async function deployContract(ContractName) {
    const ContractFactory = await ethers.getContractFactory(ContractName);
    console.log(
        `[${networkName}-${chainId}] Deploying contract ${ContractName} ...`,
    );
    const contract = await ContractFactory.deploy();
    await contract.waitForDeployment();
    const address = await contract.getAddress();
    console.log(
        `[${networkName}-${chainId}] Contract ${ContractName} deployed to: ${address}`,
    );
    return contract;
}
