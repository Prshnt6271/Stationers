import React, { useState, useEffect, useRef, useMemo } from 'react';

// Import local images
// ✅ Phone images
import img1 from '../assets/Hero/1.jpg';
import img2 from '../assets/Hero/2.jpg';
import img3 from '../assets/Hero/3.jpg';

// ✅ Laptop images
import L1 from '../assets/Hero/L1.jpg';
import L2 from '../assets/Hero/L2.jpg';
import L3 from '../assets/Hero/L3.jpg';

export default function HeroSection() {
  // Store both phone + laptop versions
  const images = useMemo(
    () => [
      { mobile: img1, desktop: L1 },
      { mobile: img2, desktop: L2 },
      { mobile: img3, desktop: L3 },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const goToNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const timeoutId = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  return (
    <section className="relative w-full overflow-hidden shadow-xl rounded-b-lg h-[80vh] md:h-[70vh] lg:h-[65vh]">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <picture>
              {/* Laptop/Desktop */}
              <source media="(min-width: 768px)" srcSet={image.desktop} />
              {/* Phone (fallback) */}
              <img
                src={image.mobile}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-b-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://placehold.co/1600x900/CCCCCC/333333?text=Image+Error';
                }}
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? 'bg-blue-600'
                : 'bg-gray-300 bg-opacity-70'
            } hover:bg-blue-500 transition-colors duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
