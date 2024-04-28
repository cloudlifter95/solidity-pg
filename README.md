
# solidity-pg
Solidity on ETH blockchain playground.

Intended to experiment with the ethereum contract ecosystem.

Code is inspired, copied, reworked from different sources, such as:

- https://github.com/smartcontractkit/full-blockchain-solidity-course-js?tab=readme-ov-file#lesson-2-welcome-to-remix-simple-storage

> [!Note]
> check [this](https://github.com/PatrickAlphaC/hardhat-simple-storage-fcc)

Table of content:
------------------------------------------------------

- [solidity-pg](#solidity-pg)
  - [Table of content:](#table-of-content)
- [Clone and validate local code](#clone-and-validate-local-code)
- [Env variables](#env-variables)
- [LEGACY - deployment help section (without hardhat)](#legacy---deployment-help-section-without-hardhat)
- [Prettier reference config](#prettier-reference-config)
- [nvm config](#nvm-config)
- [Deployment with Hardhat](#deployment-with-hardhat)
    - [help](#help)
    - [Compile](#compile)
    - [run deploy.js](#run-deployjs)
      - [localhost network](#localhost-network)
    - [Debugging](#debugging)
    - [test](#test)
    - [gas report](#gas-report)
    - [security](#security)
    - [Clean](#clean)
- [Chain used](#chain-used)
- [Documentation](#documentation)
-------------------------------------------------------

# Clone and validate local code
- Clone this rep
- Install dependencies
- Set env file (see below)
- Run mocha tests (see below)
  - If all tests pass, you're good to go!
  - If not, debug :D


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
`nvm use`
you need to have nvm installed.

# Deployment with Hardhat
### help
`yarn hardhat help`
### Compile
`yarn hardhat compile`
### run deploy.js
`yarn hardhat run scripts/deploy.js [--network hardhat]` //Deploys to in-process hardhat network.

`yarn hardhat run scripts/deploy.js --network sepolia `//Deploys to ETH testnet Sepolia.

#### localhost network
`yarn hardhat node`

`yarn hardhat run scripts/deploy.js --network localhost` //Deploys to localhost testnet.


### Debugging
console: `yarn hardhat console --network localhost`

load js module: `.load ./scripts/deploy.js`

function from deploy.js as example: `getTransactionFromTxHash('0x0f563feef2b7fa9b87fb50390457483b201707bb13450079681d7db1a3d36184')`

### test
`yarn hardhat test`
`yarn hardhat test --grep store`

### gas report
uses hardhat gas reporter package (see package.json)
imported in hardhat config (hooked under test task)
`yarn hardhat test`

### security
uses solidity-coverage package.
imported in hardhat config (as task)
`yarn hardhat coverage`
### Clean
`yarn hardhat clean`


# Chain used
Sepolia ETH. Connecting with endpoint from Alchemy (https://www.alchemy.com/chain-connect/endpoints/rpc-sepolia-sepolia)



# Documentation
https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-ethers
