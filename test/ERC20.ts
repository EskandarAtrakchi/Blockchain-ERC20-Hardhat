import { time ,loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import Bignumber from "Bignumber.js";

const DECIMALS = 18;

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
        new Bignumber(21000000).multipliedBy(10 ** DECIMALS).toFixed(0)
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

  describe("Deployment", function () {
    it("Should set the right decimals", async function () {
      const { erc20 } = await loadFixture(deployERC20);

      expect(await erc20.decimals()).to.equal(DECIMALS.toString());
    });
  });

  describe("Deployment", function () {
    it("Should transfer", async function () {
      const { erc20, otherAccount, owner } = await loadFixture(deployERC20);

      const balanceToTransfer = new Bignumber(1000 * 10 ** DECIMALS);

      expect((await erc20.balanceOf(otherAccount.address)).toString()).to.equal(
        "0"
      );

      const ownerBalanceBefore = await erc20.balanceOf(owner.address);

      await erc20.transfer(otherAccount.address, balanceToTransfer.toFixed(0));

      expect((await erc20.balanceOf(otherAccount.address)).toString()).to.equal(
        balanceToTransfer.toFixed(0)
      );

      expect((await erc20.balanceOf(owner.address)).toString()).to.equal(
        new Bignumber(ownerBalanceBefore.toString())
          .minus(balanceToTransfer.toString())
          .toFixed(0)
      );
    });
  });

  describe("Deployment", function () {
    it("Should revert with no balance", async function () {
      const { erc20, otherAccount, AnotherAccount } = await deployERC20();

      await expect(
        erc20.connect(otherAccount).transfer(AnotherAccount.address, 1000)
      ).to.be.revertedWith("Not enough funds");
    });
  });

  describe("Deployment", function () {
    it("Should approve", async function () {
      const { erc20, owner, otherAccount, AnotherAccount } =
        await deployERC20();

      const AMOOUNT_TO_APPROVE = 50;
      await erc20.approve(otherAccount.address, AMOOUNT_TO_APPROVE);
      expect(
        await erc20.allowance(owner.address, otherAccount.address)
      ).to.equal(AMOOUNT_TO_APPROVE);
    });
  });

  describe("Deployment", function () {
    it("Should revert with no allowance", async function () {
      const { erc20, owner, otherAccount, AnotherAccount } =
        await deployERC20();
      const AMOUNT_TO_TRY = 50;
      await expect(
        erc20
          .connect(otherAccount)
          .transferFrom(owner.address, AnotherAccount.address, AMOUNT_TO_TRY)
      ).to.be.revertedWith("No allowance.");
    });
  });

  describe("Deployment", function () {
    it("Should transfer when allowance and balance are sufficient", async function () {
      const { erc20, owner, otherAccount, AnotherAccount } =
        await deployERC20();
      const DECIMALS = 18;
      const AMOUNT_TO_APPROVE = new Bignumber(100).multipliedBy(
        new Bignumber(10).pow(DECIMALS)
      );
      const AMOUNT_TO_TRY = new Bignumber(50).multipliedBy(
        new Bignumber(10).pow(DECIMALS)
      );

      await erc20.approve(otherAccount.address, AMOUNT_TO_APPROVE.toFixed());

      const ownerBalanceBefore = new Bignumber(
        await erc20.balanceOf(owner.address)
      );
      const otherAccountBalanceBefore = new Bignumber(
        await erc20.balanceOf(otherAccount.address)
      );
      const anotherAccountBalanceBefore = new Bignumber(
        await erc20.balanceOf(AnotherAccount.address)
      );
      const allowanceBefore = new Bignumber(
        await erc20.allowance(owner.address, otherAccount.address)
      );

      await erc20
        .connect(otherAccount)
        .transferFrom(
          owner.address,
          AnotherAccount.address,
          AMOUNT_TO_TRY.toFixed()
        );

      const ownerBalanceAfter = new Bignumber(
        await erc20.balanceOf(owner.address)
      );
      const otherAccountBalanceAfter = new Bignumber(
        await erc20.balanceOf(otherAccount.address)
      );
      const anotherAccountBalanceAfter = new Bignumber(
        await erc20.balanceOf(AnotherAccount.address)
      );
      const allowanceAfter = new Bignumber(
        await erc20.allowance(owner.address, otherAccount.address)
      );

      expect(ownerBalanceAfter.toFixed()).to.equal(
        ownerBalanceBefore.minus(AMOUNT_TO_TRY).toFixed()
      );
      expect(otherAccountBalanceAfter.toFixed()).to.equal(
        otherAccountBalanceBefore.toFixed()
      );
      expect(anotherAccountBalanceAfter.toFixed()).to.equal(
        anotherAccountBalanceBefore.plus(AMOUNT_TO_TRY).toFixed()
      );
      expect(allowanceAfter.toFixed()).to.equal(
        allowanceBefore.minus(AMOUNT_TO_TRY).toFixed()
      );
    });
  });
});
