// ReviewCarousel.jsx
import React, { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";
import { cardBackground } from "../constants";

const testimonials = [
  {
    text: "CrushBurg’s burgers are a must-try – crispy, juicy, and full of flavor! The buns are fresh, the patties are perfectly cooked, and the sauces add a punch that makes every bite unforgettable.",
    name: "Aarav Sharma",
  },
  {
    text: "Absolutely delicious burgers! My family loves visiting CrushBurg. The staff is friendly, the food is always fresh, and we keep coming back for the taste and the experience.",
    name: "Priya Patel",
  },
  {
    text: "CrushBurg makes the best burgers – tastes like heaven every time. The fries are golden and crispy, and the wraps are perfect for a quick but satisfying meal.",
    name: "Rohan Iyer",
  },
  {
    text: "Quick delivery and amazing taste – CrushBurg never disappoints. Whether dining in or ordering online, the quality remains consistent and top-notch.",
    name: "Meera Nair",
  },
];

const ReviewCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  const totalSlides = testimonials.length;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset when reaching cloned slide
  useEffect(() => {
    if (activeIndex === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [activeIndex, totalSlides]);

  return (
    <div
      className="w-full h-[70vh] md:h-[80vh] overflow-hidden relative rounded-2xl flex items-center justify-center"
      style={{
        backgroundImage: `url(${cardBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`flex h-full w-full ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {/* Slides */}
        {testimonials.map(({ text, name }, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 flex items-center justify-center px-6"
          >
            <div className="bg-white/80 rounded-xl p-10 md:p-16 max-w-3xl shadow-lg text-center">
              <p className="italic font-sub text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed">
                “{text}”
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={26}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-red-dark font-heading text-xl md:text-2xl">
                {name}
              </span>
            </div>
          </div>
        ))}

        {/* Clone of first for infinite loop */}
        <div className="w-full flex-shrink-0 flex items-center justify-center px-6">
          <div className="bg-white/80 rounded-xl p-10 md:p-16 max-w-3xl shadow-lg text-center">
            <p className="italic font-sub text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed">
              “{testimonials[0].text}”
            </p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={26}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-red-dark font-heading text-xl md:text-2xl">
              {testimonials[0].name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;


