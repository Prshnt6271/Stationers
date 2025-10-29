import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import files from "../assets/FeaturedProd/files.jpg";
import rc from "../assets/FeaturedProd/rc.webp";
import ballon from "../assets/FeaturedProd/ballon.webp";
import writeflow from "../assets/FeaturedProd/writeflow.jpg";

// Updated featured products with navigation
const featuredProducts = [
  {
    id: 1,
    mainText: "Files",
    subText: "Office",
    badge: "NEW",
    bgImage: files,
    link: "/products#office",
    hoverTextColor: "group-hover:text-yellow-300", // ✅ added
  },
  {
    id: 2,
    mainText: "Writeflow Notebook",
    subText: "Stationery",
    badge: "NEW",
    bgImage: writeflow,
    link: "/products#stationery",
    hoverTextColor: "group-hover:text-blue-300", // ✅ added
  },
  {
    id: 3,
    mainText: "RC Car",
    subText: "Toys",
    bgImage: rc,
    link: "/products#toys",
    hoverTextColor: "group-hover:text-red-300", // ✅ added
  },
  {
    id: 4,
    mainText: "Balloon",
    subText: "Decoration",
    badge: "NEW",
    bgImage: ballon,
    link: "/products#decoration",
    hoverTextColor: "group-hover:text-pink-300", // ✅ added
  },
];

// Auto scroll to top
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

// Product Card Component
function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(product.link);
  };

  return (
    <div className="flex flex-col items-start space-y-2">

      {/* Image & Hover Area */}
      <div
        onClick={handleClick}
        className="relative w-full h-56 flex flex-col items-center justify-center overflow-hidden rounded-xl shadow-md cursor-pointer 
        transition-all duration-300 transform hover:scale-105 active:scale-95 group"
        style={{
          backgroundImage: `url(${product.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blur + Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300"></div>

        {/* Main Text */}
        <span className={`text-xl font-extrabold text-white drop-shadow-lg transition-all duration-300 group-hover:scale-110 z-10 ${product.hoverTextColor}`}>
          {product.mainText}
        </span>

        {/* Sub Text */}
        <span className={`text-sm text-white drop-shadow-lg transition-all duration-300 group-hover:scale-105 z-10 ${product.hoverTextColor}`}>
          {product.subText}
        </span>

        {product.badge && (
          <div className="absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded bg-green-500 shadow z-20">
            {product.badge}
          </div>
        )}
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow 
        hover:bg-blue-700 hover:brightness-110 active:scale-95 transition-all duration-300"
      >
        Enquire Now
      </button>

    </div>
  );
}

// Main FeaturedProducts Component
export default function FeaturedProducts() {
  const productPairs = [];
  for (let i = 0; i < featuredProducts.length; i += 2) {
    productPairs.push(featuredProducts.slice(i, i + 2));
  }

  return (
    <section className="bg-gray-50 py-12 font-sans text-gray-800">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
            FEATURED PRODUCTS
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Visit our shop to see amazing creations from our designers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {productPairs.map((pair, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-6 justify-between"
            >
              {pair.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
