// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenOne is ERC20Detailed, ERC20 {
    constructor() ERC20Detailed("TokenOne", "TK1", 18) public { 
        // console.log("TokenOne created");
    }
}

