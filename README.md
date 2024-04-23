# solidity-pg
Solidity on ETH blockchain playground.

Intended to experiment with the ethereum contract ecosystem.

Code is inspired, copied, reworked from different sources, such as:

- https://github.com/smartcontractkit/full-blockchain-solidity-course-js?tab=readme-ov-file#lesson-2-welcome-to-remix-simple-storage


# deployment help section
```bash
yarn add solc
yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o ./out/ SimpleStorage.sol 
```

# Chain used
Sepolia ETH. Connecting with endpoint from Alchemy