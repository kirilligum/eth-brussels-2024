pragma solidity ^0.8.13;

import "./IMailbox.sol";

contract PostReview {
    struct Review {
        address reviewer;
        uint256 listingId;
        string content;
        uint8 rating;
    }

    Review[] public reviews;

    event ReviewPosted(address indexed reviewer, uint256 indexed listingId, string content, uint8 rating);

    function postReview(uint256 listingId, string memory content, uint8 rating) public {
        require(rating > 0 && rating <= 5, "Rating must be between 1 and 5");

        reviews.push(Review({
            reviewer: msg.sender,
            listingId: listingId,
            content: content,
            rating: rating
        }));

        dispatchMessage(content, rating);

        emit ReviewPosted(msg.sender, listingId, content, rating);
    }

    function dispatchMessage(string memory content, uint8 rating) internal {
        IMailbox mailbox = IMailbox("0xEf9F292fcEBC3848bF4bB92a96a04F9ECBb78E59");
        bytes32 messageId = mailbox.dispatch{value: msg.value}(
            97,
            "0x0000000000000000000000006489d13AcAd3B8dce4c5B31f375DE4f9451E7b38",
            bytes(abi.encodePacked("Review posted: ", content, " with rating: ", rating))
        );
    }
        uint256 count = 0;
        for (uint256 i = 0; i < reviews.length; i++) {
            if (reviews[i].listingId == listingId) {
                count++;
            }
        }

        Review[] memory result = new Review[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < reviews.length; i++) {
            if (reviews[i].listingId == listingId) {
                result[index] = reviews[i];
                index++;
            }
        }

        return result;
    }
}
