pragma solidity ^0.8.18;

import "forge-std/Script.sol";
import "../src/AIRSNS.sol";

contract DeployAIRSNS is Script {
    function run() external {
        vm.startBroadcast();
        new AIRSNS();
        vm.stopBroadcast();
    }
}
