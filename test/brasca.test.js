const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BrascaBRL", function () {
  let Brasca, brasca, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    Brasca = await ethers.getContractFactory("BrascaBRL");
    brasca = await Brasca.deploy();
    await brasca.deployed();
  });

  it("Deve ter o nome e símbolo corretos", async function () {
    expect(await brasca.name()).to.equal("Brasca Real");
    expect(await brasca.symbol()).to.equal("BRASCA");
  });

  it("Owner pode emitir tokens (mint)", async function () {
    await brasca.mint(addr1.address, ethers.utils.parseEther("100"));
    const balance = await brasca.balanceOf(addr1.address);
    expect(balance).to.equal(ethers.utils.parseEther("100"));
  });

  it("Não-owner não pode emitir tokens", async function () {
    await expect(
      brasca.connect(addr1).mint(addr1.address, ethers.utils.parseEther("100"))
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("Owner pode queimar tokens de outro endereço", async function () {
    await brasca.mint(addr1.address, ethers.utils.parseEther("50"));
    await brasca.burn(addr1.address, ethers.utils.parseEther("20"));
    const balance = await brasca.balanceOf(addr1.address);
    expect(balance).to.equal(ethers.utils.parseEther("30"));
  });
});
