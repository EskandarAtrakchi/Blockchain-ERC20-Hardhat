import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
import Bignumber from "bignumber.js";

describe("ERC20", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployERC20() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, AnotherAccount] = await hre.ethers.getSigners();

    const ERC20 = await hre.ethers.getContractFactory("ERC20");
    const erc20 = await ERC20.deploy();

    return { erc20, owner, otherAccount, AnotherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right balance", async function () {
      const { erc20, owner } = await loadFixture(deployERC20);

      expect((await erc20.balanceOf(owner.address)).toString()).to.equal(
        new Bignumber(21000000).multipliedBy(1e18).toString()
      );
    });
  });

  //   describe("Withdrawals", function () {
  //     describe("Validations", function () {
  //       it("Should revert with the right error if called too soon", async function () {
  //         const { ERC20 } = await loadFixture(deployOneYearERC20Fixture);

  //         await expect(ERC20.withdraw()).to.be.revertedWith(
  //           "You can't withdraw yet"
  //         );
  //       });

  //       it("Should revert with the right error if called from another account", async function () {
  //         const { ERC20, unERC20Time, otherAccount } = await loadFixture(
  //           deployOneYearERC20Fixture
  //         );

  //         // We can increase the time in Hardhat Network
  //         await time.increaseTo(unERC20Time);

  //         // We use ERC20.connect() to send a transaction from another account
  //         await expect(ERC20.connect(otherAccount).withdraw()).to.be.revertedWith(
  //           "You aren't the owner"
  //         );
  //       });

  //       it("Shouldn't fail if the unERC20Time has arrived and the owner calls it", async function () {
  //         const { ERC20, unERC20Time } = await loadFixture(
  //           deployOneYearERC20Fixture
  //         );

  //         // Transactions are sent using the first signer by default
  //         await time.increaseTo(unERC20Time);

  //         await expect(ERC20.withdraw()).not.to.be.reverted;
  //       });
  //     });

  //     describe("Events", function () {
  //       it("Should emit an event on withdrawals", async function () {
  //         const { ERC20, unERC20Time, ERC20edAmount } = await loadFixture(
  //           deployOneYearERC20Fixture
  //         );

  //         await time.increaseTo(unERC20Time);

  //         await expect(ERC20.withdraw())
  //           .to.emit(ERC20, "Withdrawal")
  //           .withArgs(ERC20edAmount, anyValue); // We accept any value as `when` arg
  //       });
  //     });

  //     describe("Transfers", function () {
  //       it("Should transfer the funds to the owner", async function () {
  //         const { ERC20, unERC20Time, ERC20edAmount, owner } = await loadFixture(
  //           deployOneYearERC20Fixture
  //         );

  //         await time.increaseTo(unERC20Time);

  //         await expect(ERC20.withdraw()).to.changeEtherBalances(
  //           [owner, ERC20],
  //           [ERC20edAmount, -ERC20edAmount]
  //         );
  //       });
  //     });
  //   });
});
