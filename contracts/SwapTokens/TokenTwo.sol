// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenTwo is ERC20Detailed, ERC20 {
    constructor() ERC20Detailed("TokenTwo", "TK2", 18) public { 
        // console.log("TokenTwo created");
    }
}

