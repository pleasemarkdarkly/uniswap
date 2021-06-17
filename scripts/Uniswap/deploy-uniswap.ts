/* We require the Hardhat Runtime Environment explicitly here. This is optional
but useful for running the script in a standalone fashion through `node <script>`.
When running the script with `hardhat run <script>` you'll find the Hardhat
Runtime Environment's members available in the global scope. */

import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

const ETH_PUBLIC_KEY = '0x6FEFc3F6239F2A1aF8Fe093877BA2a1e81da4231';

// 

async function main(): Promise<void> {
    /* Hardhat always runs the compile task when running scripts through it.
    If this runs in a standalone fashion you may want to call compile manually
    to make sure everything is compiled
    await run("compile"); We get the contract to deploy */
    const TokenOneFactory: ContractFactory = await ethers.getContractFactory('TokenOne');
    const tokenOneToken: Contract = await TokenOneFactory.deploy();
    await tokenOneToken.deployed();
    console.log(`🏆 TokenOne deployed ➡️ ` + `\t\t\t` + `${tokenOneToken.address}`);

    const TokenTwoFactory: ContractFactory = await ethers.getContractFactory('TokenTwo');
    const tokenTwoToken: Contract = await TokenTwoFactory.deploy();
    await tokenOneToken.deployed();
    console.log(`🏆 TokenOne deployed ➡️ ` + `\t\t\t` + `${tokenTwoToken.address}`);

    const UniswapV2Factory: ContractFactory = await ethers.getContractFactory('UniswapV2Factory');
    const uniswapV2: Contract = await UniswapV2Factory.deploy(ETH_PUBLIC_KEY);    
    await uniswapV2.deployed();
    console.log(`🏆 UniswapV2Factory 🏭 deployed ➡️ ` + `\t` + `${uniswapV2.address}`);
   
    const UniswapV2Router: ContractFactory = await ethers.getContractFactory('UniswapV2Router');
    const uniswapV2Router: Contract = await UniswapV2Router.deploy();
    await uniswapV2Router.deployed();
    console.log(`🏆 UniswapV2Router 🏭 deployed ➡️ ` + `\t` + `${uniswapV2Router.address}`);
}

/* We recommend this pattern to be able to use async/await everywhere
  and properly handle errors. */
main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.error(error);
        process.exit(1);
    });
