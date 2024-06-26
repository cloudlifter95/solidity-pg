const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
    // let simpleStorageFactory
    // let simpleStorage
    let simpleStorageFactory, simpleStorage;
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";
        // assert
        // expect
        assert.equal(currentValue.toString(), expectedValue);
        // expect(currentValue.toString()).to.equal(expectedValue)
    });
    it("Should update when we call store", async function () {
        const expectedValue = "7";
        const transactionResponse = await simpleStorage.store(expectedValue);
        await transactionResponse.wait(1);

        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), expectedValue);
    });
    it("Should add person", async () => {
        const expectedPersonName = "Yassine";
        const expectedNumber = 2;

        const transactionResponse = await simpleStorage.addPerson(
            (_name = expectedPersonName),
            (_favoriteNumber = expectedNumber),
        );
        await transactionResponse.wait(1);

        // Check if the person was added correctly
        const person = await simpleStorage.people(0);
        expect(person.favoriteNumber).to.equal(expectedNumber);
        expect(person.name).to.equal(expectedPersonName);

        // Check if nameToFavoriteNumber mapping was updated
        const storedFavoriteNumber =
            await simpleStorage.nameToFavoriteNumber(expectedPersonName);
        expect(storedFavoriteNumber).to.equal(expectedNumber);
    });
});
