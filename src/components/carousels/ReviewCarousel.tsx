"use client";

interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  company: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
  currentReview: number;
}

export default function ReviewCarousel({
  reviews,
  currentReview,
}: ReviewCarouselProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="flex flex-col gap-6 relative">
      {reviews.map((review, index) => (
        <div
          key={review.id}
          className={`p-6 rounded-lg transition-all duration-300 relative ${
            index === currentReview
              ? "bg-primary text-white"
              : index === (currentReview + 1) % reviews.length
              ? "bg-white text-gray-800 border border-gray-200"
              : "bg-white text-gray-800 border border-gray-200"
          }`}
          style={{
            display:
              index === currentReview ||
              index === (currentReview + 1) % reviews.length ||
              index === (currentReview + 2) % reviews.length
                ? "block"
                : "none",
          }}
        >
          {/* Stars */}
          <div className="flex mb-4">{renderStars(review.rating)}</div>
          {/* Review text */}
          <p className="mb-4 leading-relaxed">{review.text}</p>
          {/* Author info */}
          <div>
            <div className="font-semibold">{review.author}</div>
            <div
              className={`text-sm ${
                index === currentReview ? "text-cream" : "text-gray-500"
              }`}
            >
              {review.company}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
