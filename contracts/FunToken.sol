// contracts/FunToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FunToken is ERC20 {

    // Define the supply of FunToken: 1,000,000 
    uint256 constant initialSupply = 1000000 * 10 ** 18;
    address private owner;
    // Constructor will be called on contract creation
    constructor() ERC20("luckyman", "LM") {
        _mint(msg.sender, initialSupply);
        owner = msg.sender;
    }

    function mint(address to, uint amount) external {
        require(msg.sender == owner, "Only owner can mint!");
        _mint(to, amount);
    }
}