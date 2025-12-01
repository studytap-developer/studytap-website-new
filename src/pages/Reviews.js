import React from "react";

const Reviews = () => {
  const reviewImages = [
    "/reviews/r1.png",
    "/reviews/r2.png",
    "/reviews/r3.png",
    "/reviews/r4.png",
    "/reviews/r5.png",
    "/reviews/r6.png",
    "/reviews/r7.png",
    "/reviews/r8.png",
    "/reviews/r9.png",
    "/reviews/r10.png",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-6">Student Reviews 💬</h2>
      <p className="text-center text-gray-600 mb-10">
        Hear what students are saying about StudyTap AI
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {reviewImages.slice(0, 8).map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition duration-300"
          >
            <img
              src={img}
              alt={`Review ${index}`}
              className="w-full  object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* View more button */}
      <div className="flex justify-center mt-10">
        <a href="https://t.me/studytapofficial">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-md">
          View More
        </button>
   </a>
      </div>
    </section>
  );
};

export default Reviews;
