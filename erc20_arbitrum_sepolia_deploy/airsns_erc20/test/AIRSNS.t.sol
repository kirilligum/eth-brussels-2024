pragma solidity ^0.8.18;

import "forge-std/Test.sol";
import "../src/AIRSNS.sol";

contract AIRSNSTest is Test {
    AIRSNS private airsns;

    function setUp() public {
        airsns = new AIRSNS();
    }

    function testInitialSupply() public {
        uint256 expectedSupply = 1_000_000 * 10 ** airsns.decimals();
        assertEq(airsns.totalSupply(), expectedSupply);
    }

    function testTokenName() public {
        assertEq(airsns.name(), "AIRSNS");
    }

    function testTokenSymbol() public {
        assertEq(airsns.symbol(), "AIRSNS");
    }
}
