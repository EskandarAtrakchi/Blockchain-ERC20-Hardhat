import { time ,loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import Bignumber from "bignumber.js";

describe("ERC20", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployERC20() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, AnotherAccount] = await ethers.getSigners();

    const ERC20 = await ethers.getContractFactory("ERC20");
    const erc20 = await ERC20.deploy();

    return { erc20, owner, otherAccount, AnotherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right balance", async function () {
      const { erc20, owner } = await loadFixture(deployERC20);

      expect(await (await erc20.balanceOf(owner.address)).toString()).to.equal(
        new Bignumber(21000000).multipliedBy(1e18).toFixed(0)
      );
    });
  });

  describe("Deployment", function () {
    it("Should set the right name", async function () {
      const { erc20 } = await loadFixture(deployERC20);

      expect(await erc20.name()).to.equal("TestToken");
    });
  });

  describe("Deployment", function () {
    it("Should set the right symbol", async function () {
      const { erc20 } = await loadFixture(deployERC20);

      expect(await erc20.symbol()).to.equal("TT");
    });
  });
});
