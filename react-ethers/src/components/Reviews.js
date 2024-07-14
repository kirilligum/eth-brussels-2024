import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      date: "March 2024",
      content: "Amazing place! The loft was spacious and well-lit, just as described. The location is perfect, close to public transport and great restaurants. Highly recommend!",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "February 2024",
      content: "Had a wonderful stay. The host was very accommodating and the loft had everything we needed. The WiFi was super fast, which was great for remote work.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      date: "January 2024",
      content: "Beautiful loft in a great neighborhood. The space was clean and well-maintained. Would definitely stay here again!",
    },
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-4xl font-bold text-white mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-white bg-opacity-50 backdrop-blur-md rounded-lg">
            <p className="text-black text-xl font-semibold">{review.name}</p>
            <p className="text-black text-sm">{review.date}</p>
            <p className="text-black text-lg">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
