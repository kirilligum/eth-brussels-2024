// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract AIRSNS is ERC20 {
    constructor() ERC20("AIRSNS", "AIRSNS") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals()); // 1 million tokens
    }
}
