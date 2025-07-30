import React from 'react';

// Dummy data for featured products with plain white image backgrounds
const featuredProducts = [
  {
    id: 1,
    name: "White Nights Granulating Watercolour 21 Full Pans Set",
    price: "₹6,499.00",
    imageUrl: "https://placehold.co/300x200/FFFFFF/000000?text=Watercolour+Set",
    badge: "NEW",
    description: "A unique set of granulating watercolors for stunning effects.",
  },
  {
    id: 2,
    name: "Master Class Oil Paint Tube 46ml Open Stock",
    price: "₹550.00 - ₹1,800.00",
    imageUrl: "https://placehold.co/300x200/FFFFFF/000000?text=Oil+Paint+Tubes",
    badge: "NEW",
    description: "High-quality oil paints for professional artists.",
  },
  {
    id: 3,
    name: "Nitram Liquid Charcoal",
    price: "₹2,425.00",
    imageUrl: "https://placehold.co/300x200/FFFFFF/000000?text=Liquid+Charcoal",
    description: "Innovative liquid charcoal for expressive drawing.",
  },
  {
    id: 4,
    name: "Roubloff Retractable Synthetic Squirrel Imitation Round with Chrome Plated Handle Soft Touch Ferrule Brushes",
    price: "₹1,199.00 - ₹1,899.00",
    imageUrl: "https://placehold.co/300x200/FFFFFF/000000?text=Retractable+Brushes",
    badge: "NEW",
    description: "Premium synthetic brushes for watercolor and ink.",
  },
];

// ProductCard Component
function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-start space-y-2">
      <div className="relative w-full h-40 bg-white flex items-center justify-center overflow-hidden -">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain w-full h-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/300x200/CCCCCC/333333?text=Image+Error";
          }}
        />
        {product.badge && (
          <div className="absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded bg-green-500 shadow">
            {product.badge}
          </div>
        )}
      </div>  
      <div className="text-left">
        <h4 className="text-md font-semibold text-gray-800 mb-1">{product.name}</h4>
        <p className="text-sm text-gray-600 mb-1">{product.description}</p>
        <p className="text-blue-700 font-bold">{product.price}</p>
      </div>
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
