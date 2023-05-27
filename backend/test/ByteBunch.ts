// @ts-ignore
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";
import { Contract } from "ethers";

describe("ByteBunch", function () {
  let byteBunch: Contract;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async () => {
    const ByteBunch = await ethers.getContractFactory("ByteBunch");
    [owner, addr1, addr2] = await ethers.getSigners();

    byteBunch = await ByteBunch.deploy();
  });

  // should be able to pause and unpause using setPaused function
  it("should be able to pause and unpause", async function () {
    await byteBunch.setPaused(true);
    expect(await byteBunch.paused()).to.equal(true);
    await byteBunch.setPaused(false);
    expect(await byteBunch.paused()).to.equal(false);
  });

  // revealed should be false by default
  it("revealed should be false by default", async function () {
    expect(await byteBunch.revealed()).to.equal(false);
  });

  // should be able to reveal using setRevealed function
  it("should be able to reveal using reveal function", async function () {
    await byteBunch.setRevealed(true);
    expect(await byteBunch.revealed()).to.equal(true);
    await byteBunch.setRevealed(false);
    expect(await byteBunch.revealed()).to.equal(false);
  });

  // Returns the correct owner
  it("returns the correct owner", async function () {
    console.log("owner", await byteBunch.owner());
    expect(await byteBunch.owner()).to.equal(await owner.getAddress());
  });

  // Shouldn't be able to mint when paused
  it("shouldn't be able to mint when paused", async function () {
    await byteBunch.setPaused(true);
    // Pass 0.01 ETH to mint
    await expect(
      byteBunch.mint(1, { value: ethers.utils.parseEther("0.01") })
    ).to.be.rejectedWith(
      "VM Exception while processing transaction: reverted with reason string 'The contract is paused!'"
    );
  });

  // Should be able to mint when not paused
  it("should be able to mint when not paused", async function () {
    await byteBunch.setPaused(false);
    // Pass 0.01 ETH to mint
    await byteBunch.mint(1, { value: ethers.utils.parseEther("0.01") });
    expect(await byteBunch.totalSupply()).to.equal(1);
  });

  // Should return correct tokenURI when not revealed
  it("should return correct tokenURI", async function () {
    await byteBunch.setPaused(false);
    await byteBunch.setRevealed(false);
    // Pass 0.01 ETH to mint
    await byteBunch.mint(1, { value: ethers.utils.parseEther("0.01") });
    expect(await byteBunch.tokenURI(1)).to.equal("ipfs:///__CID__.json");
  });

  // setUriPrefix should work
  it("setUriPrefix should work", async function () {
    await byteBunch.setUriPrefix("ipfs:///");
    expect(await byteBunch.uriPrefix()).to.equal("ipfs:///");
  });

  // setUriSuffix should work
  it("setUriSuffix should work", async function () {
    await byteBunch.setUriSuffix(".json");
    expect(await byteBunch.uriSuffix()).to.equal(".json");
  });

  // mint should work when not paused
  it("mint should work when not paused", async function () {
    await byteBunch.setPaused(false);
    await byteBunch.mint(1, { value: ethers.utils.parseEther("0.01") });
    expect(await byteBunch.totalSupply()).to.equal(1);
  });

  // Returns correct tokenURI when revealed using tokenURI function
  it("returns correct tokenURI when revealed using tokenURI function", async function () {
    await byteBunch.setPaused(false);
    await byteBunch.setRevealed(true);
    // Pass 0.01 ETH to mint
    await byteBunch.mint(1, { value: ethers.utils.parseEther("0.01") });
    await byteBunch.setUriPrefix("ipfs:///");
    await byteBunch.setUriSuffix(".json");
    expect(await byteBunch.tokenURI(1)).to.equal("ipfs:///1.json");
  });

  // withdraw should work
  it("should withdraw contract balance", async function () {
    await byteBunch.setPaused(false);
    await byteBunch
      .connect(addr2)
      .mint(1, { value: ethers.utils.parseEther("0.01") });

    const contractBalanceBefore = await ethers.provider.getBalance(
      byteBunch.address
    );
    expect(contractBalanceBefore.toString()).to.equal(
      ethers.utils.parseEther("0.01")
    );

    const ownerBalanceBefore = await ethers.provider.getBalance(
      await owner.getAddress()
    );

    await byteBunch.withdraw();

    const contractBalanceAfter = await ethers.provider.getBalance(
      byteBunch.address
    );
    expect(contractBalanceAfter.toString()).to.equal("0");

    const ownerBalanceAfter = await ethers.provider.getBalance(
      await owner.getAddress()
    );

    expect(ownerBalanceAfter.gt(ownerBalanceBefore)).to.equal(true);
  });
});
