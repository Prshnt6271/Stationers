import React, { useState, useEffect, useRef } from 'react';

// Hero Section Component
export default function HeroSection() {
  const images = [
    "https://placehold.co/1600x600/FF5733/FFFFFF?text=Your+Hero+Image+1",
    "https://placehold.co/1600x600/33FF57/FFFFFF?text=Your+Hero+Image+2",
    "https://placehold.co/1600x600/3357FF/FFFFFF?text=Your+Hero+Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const goToPrevious = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  return (
    <section className="relative w-full overflow-hidden shadow-xl rounded-b-lg">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-b-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/1600x600/CCCCCC/333333?text=Image+Error";
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 bg-opacity-70'} hover:bg-blue-500 transition-colors duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}