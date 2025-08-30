import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// Generate placeholder image URLs for each category
const generateImageUrls = (category, count) => {
  return Array.from({ length: count }, (_, i) => {
    const width = 400;
    const height = 400;
    const theme = category.toLowerCase();
    return `https://picsum.photos/${width}/${height}?random=${i}&${theme}`;
  });
};

const categoriesData = [
  {
    name: "Office",
    images: generateImageUrls("office", 11),
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Stationary",
    images: generateImageUrls("stationery", 11),
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Toys",
    images: generateImageUrls("toys", 11),
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Decoration",
    images: generateImageUrls("decoration", 11),
    color: "from-orange-500 to-red-500",
  },
];

function ProductsPage() {
  const location = useLocation();
  const categoryRefs = useRef({});
  const [activeImage, setActiveImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.hash) {
      const category = location.hash.replace("#", "");
      if (categoryRefs.current[category]) {
        setTimeout(() => {
          categoryRefs.current[category].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    }

    // Simulate loading time for images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  const openLightbox = (image) => {
    setActiveImage(image);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-3xl z-10 hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={activeImage}
              alt="Enlarged view"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of premium products across different
            categories to meet all your needs.
          </p>
        </div>

        {categoriesData.map((category, index) => (
          <div
            key={category.name}
            id={category.name.toLowerCase()}
            ref={(el) =>
              (categoryRefs.current[category.name.toLowerCase()] = el)
            }
            className="mb-24 scroll-mt-16"
          >
            <div
              className={`mb-10 p-8 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-xl transform transition-all duration-500 hover:shadow-2xl`}
            >
              <h2 className="text-4xl font-bold">{category.name}</h2>
              <p className="mt-2 opacity-90">
                Explore our {category.name} collection
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.images.map((img, i) => (
                <div key={i} className="relative group cursor-pointer">
                  <div
                    className="relative w-full h-64 flex items-center justify-center bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                    onClick={() => openLightbox(img)}
                  >
                    {loading ? (
                      <div className="w-full h-full bg-gray-200 animate-pulse rounded-2xl"></div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img
                          src={img}
                          alt={`${category.name} product ${i + 1}`}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="text-center font-medium">
                            Click to enlarge
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* ✅ Cart + Enquiry buttons below image */}
                  <div className="flex justify-between mt-3">
                    <button className="flex-1 mr-2 bg-blue-600 text-white py-2 px-3 rounded-lg shadow hover:bg-blue-700 transition">
                      🛒 Add to Cart
                    </button>
                    <button className="flex-1 ml-2 bg-green-600 text-white py-2 px-3 rounded-lg shadow hover:bg-green-700 transition">
                      📩 Enquiry
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
