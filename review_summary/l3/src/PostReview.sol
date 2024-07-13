pragma solidity ^0.8.13;

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

        emit ReviewPosted(msg.sender, listingId, content, rating);
    }

    function getReviewsByListingId(uint256 listingId) public view returns (Review[] memory) {
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
