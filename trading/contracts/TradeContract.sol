// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TradeContract {
    address public owner;
    uint public currentPrice;

    event Buy(address indexed buyer, uint amount);
    event Sell(address indexed seller, uint amount);

    constructor(uint initialPrice) {
        owner = msg.sender;
        currentPrice = initialPrice;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    function buy(uint amount) external payable {
        require(msg.value == amount * currentPrice, "Incorrect payment amount");

        // Perform the buy logic here
        // Deduct the amount from the buyer's account and update any necessary state

        emit Buy(msg.sender, amount);
    }

    function sell(uint amount) external {
        // Perform the sell logic here
        // Deduct the amount from the seller's account and update any necessary state

        // Transfer the payment to the seller
        uint paymentAmount = amount * currentPrice;
        payable(msg.sender).transfer(paymentAmount);

        emit Sell(msg.sender, amount);
    }

    function updatePrice(uint newPrice) external onlyOwner {
        currentPrice = newPrice;
    }
}
