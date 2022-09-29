// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract  WavePortal {
    mapping (address => uint) waves;
    uint256 totalWaves = 0;
    constructor() {
        console.log("I am a smart contract. Woah!");
    }

    function wave() public {
        waves[msg.sender]++;
        totalWaves++;
        console.log(unicode"%s has waved! 👋", msg.sender);
    }

    function getTotalWaves() public view returns(uint256)  {
        console.log("We have %d total waves.", totalWaves);
       return totalWaves;
    }

    function getMyWaveCount() public view returns(uint) {
        console.log("%s has waved %d times", msg.sender,  waves[msg.sender]);
        return waves[msg.sender];
    }
}

