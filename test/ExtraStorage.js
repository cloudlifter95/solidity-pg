const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

// describe("SimpleStorage", () => {})
describe("ExtraStorage", function () {
    // let simpleStorageFactory
    // let simpleStorage
    let ExtraStorage;
    beforeEach(async function () {
        extraStorageFactory = await ethers.getContractFactory("ExtraStorage");
        extraStorage = await extraStorageFactory.deploy();
    });

    it("Should update when we call store", async function () {
        const expectedValue = "7";
        const transactionResponse = await extraStorage.store(expectedValue);
        await transactionResponse.wait(1);

        const currentValue = await extraStorage.retrieve();
        assert.equal(currentValue.toString(), (parseInt(expectedValue)+5).toString());
    });
});
