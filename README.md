# solidity-pg
Solidity on ETH blockchain playground.

Intended to experiment with the ethereum contract ecosystem.

Code is inspired, copied, reworked from different sources, such as:

- https://github.com/smartcontractkit/full-blockchain-solidity-course-js?tab=readme-ov-file#lesson-2-welcome-to-remix-simple-storage


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


# Deployment with Hardhat
yarn hardhat compile

# Chain used
Sepolia ETH. Connecting with endpoint from Alchemy