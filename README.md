
# solidity-pg
Solidity on ETH blockchain playground.

Intended to experiment with the ethereum contract ecosystem.

Code is inspired, copied, reworked from different sources, such as:

- https://github.com/smartcontractkit/full-blockchain-solidity-course-js?tab=readme-ov-file#lesson-2-welcome-to-remix-simple-storage

Table of content:
------------------------------------------------------

- [solidity-pg](#solidity-pg)
  - [Table of content:](#table-of-content)
- [Env variables](#env-variables)
- [LEGACY - deployment help section (without hardhat)](#legacy---deployment-help-section-without-hardhat)
- [Prettier reference config](#prettier-reference-config)
- [nvm config](#nvm-config)
- [Deployment with Hardhat](#deployment-with-hardhat)
    - [help](#help)
    - [Compile](#compile)
    - [run deploy.js](#run-deployjs)
- [Chain used](#chain-used)
- [Documentation](#documentation)
-------------------------------------------------------


# Env variables
copy .env_ to .env and fill in the variable values.

# LEGACY - deployment help section (without hardhat)
```bash
yarn add solc
yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o ./out/ SimpleStorage.sol 
node deploy.js
```

# Prettier reference config
`yarn add --dev prettier prettier-plugin-solidity`
.prettierrc is used for the configuration of prettier.
.prettierignore to ignore.

# nvm config 
file .nvmrc contains the nodejs version to use for this project. => 18
```
nvm use
```
you need to have nvm installed.

# Deployment with Hardhat
### help
yarn hardhat help
### Compile
yarn hardhat compile
### run deploy.js
yarn hardhat run scripts/deploy.js [--network hardhat] //Deploys to in-process hardhat network.
yarn hardhat run scripts/deploy.js --network sepolia //Deploys to ETH testnet Sepolia.

# Chain used
Sepolia ETH. Connecting with endpoint from Alchemy (https://www.alchemy.com/chain-connect/endpoints/rpc-sepolia-sepolia)



# Documentation
https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-ethers
