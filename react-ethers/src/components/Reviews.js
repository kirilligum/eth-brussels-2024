import React from 'react';

const Reviews = () => {
  const reviews = [
    { id: 1, name: "John Doe", date: "March 2024", content: "Amazing place! The loft was spacious and well-lit, just as described. The location is perfect, close to public transport and great restaurants. Highly recommend!" },
    { id: 2, name: "Jane Smith", date: "February 2024", content: "Had a wonderful stay. The host was very accommodating and the loft had everything we needed. The WiFi was super fast, which was great for remote work." },
    { id: 3, name: "Alice Johnson", date: "January 2024", content: "Beautiful loft in a great neighborhood. The space was clean and well-maintained. Would definitely stay here again!" },
    { id: 4, name: "Carlos Mendez", date: "April 2024", content: "The loft was fantastic! Great location and very comfortable. The host was very responsive and helpful." },
    { id: 5, name: "Samantha Lee", date: "May 2024", content: "Loved the loft! It was clean, modern, and had everything we needed. The neighborhood was vibrant and full of life." },
    { id: 6, name: "Michael Brown", date: "June 2024", content: "A wonderful stay in a beautiful loft. The location was perfect for exploring the city. Highly recommend!" },
    { id: 7, name: "Emily Davis", date: "July 2024", content: "The loft was exactly as described. Spacious, clean, and in a great location. Would definitely stay here again." },
    { id: 8, name: "David Wilson", date: "August 2024", content: "Great place to stay! The loft was comfortable and well-equipped. The host was very accommodating." },
    { id: 9, name: "Sophia Martinez", date: "September 2024", content: "Had a fantastic stay. The loft was beautiful and in a great location. The host was very helpful and responsive." },
    { id: 10, name: "James Anderson", date: "October 2024", content: "The loft was perfect for our stay. Clean, modern, and in a great location. Would highly recommend!" },
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-4xl font-bold text-white mb-4">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
