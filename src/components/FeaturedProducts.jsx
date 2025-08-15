import React from 'react';
import files from '../assets/FeaturedProd/files.jpg';
import rc from '../assets/FeaturedProd/rc.jpg';
import ballon from '../assets/FeaturedProd/ballon.jpg';
import writeflow from '../assets/FeaturedProd/writeflow.jpg';



// Updated featured products with guaranteed working images
const featuredProducts = [
  {
    id: 1,
    mainText: "Files",
    subText: "Office",
    badge: "NEW",
    bgImage: files, // File placeholder
  },
  {
    id: 2,
    mainText: "Writeflow Notebook",
    subText: "Stationery",
    badge: "NEW",
    bgImage: writeflow // Notebook placeholder
  },
  {
    id: 3,
    mainText: "RC Car",
    subText: "Toys",
    bgImage: rc, // RC Car placeholder
  },
  {
    id: 4,
    mainText: "Balloon",
    subText: "Decoration",
    badge: "NEW",
    bgImage: ballon // Balloon placeholder
  },
];

// ProductCard Component
function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-start space-y-2">
      {/* Background image container */}
      <div
        className="relative w-full h-56 flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-inner"
        style={{
          backgroundImage: `url(${product.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <span className="text-lg font-bold text-white drop-shadow-md">
          {product.mainText}
        </span>
        <span className="text-sm text-white drop-shadow-md">
          {product.subText}
        </span>

        {product.badge && (
          <div className="absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded bg-green-500 shadow">
            {product.badge}
          </div>
        )}
      </div>

      {/* Enquire Now Button */}
      <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition">
        Enquire Now
      </button>
    </div>
  );
}

// FeaturedProducts Component
export default function FeaturedProducts() {
  // Split products into pairs for two-product boxes
  const productPairs = [];
  for (let i = 0; i < featuredProducts.length; i += 2) {
    productPairs.push(featuredProducts.slice(i, i + 2));
  }

  return (
    <section className="bg-gray-50 py-12 font-sans text-gray-800">
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

        {/* Two-Box Layout */}
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
