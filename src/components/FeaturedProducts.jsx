import React from 'react';

// Dummy data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "White Nights Granulating Watercolour 21 Full Pans Set",
    price: "₹6,499.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Watercolour+Set",
    badge: "NEW",
    description: "A unique set of granulating watercolors for stunning effects.",
  },
  {
    id: 2,
    name: "Master Class Oil Paint Tube 46ml Open Stock",
    price: "₹550.00 - ₹1,800.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Oil+Paint+Tubes",
    badge: "NEW",
    description: "High-quality oil paints for professional artists.",
  },
  {
    id: 3,
    name: "Nitram Liquid Charcoal",
    price: "₹2,425.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Liquid+Charcoal",
    description: "Innovative liquid charcoal for expressive drawing.",
  },
  {
    id: 4,
    name: "Roubloff Retractable Synthetic Squirrel Imitation Round with Chrome Plated Handle Soft Touch Ferrule Brushes",
    price: "₹1,199.00 - ₹1,899.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Retractable+Brushes",
    badge: "NEW",
    description: "Premium synthetic brushes for watercolor and ink.",
  },
  // Add more featured products as needed
];

// ProductCard Component (reused and slightly enhanced for badge)
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain w-full h-full"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image+Error"; }}
        />
        {product.badge && (
          <div className={`absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm
            ${product.badge === 'NEW' ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {product.badge}
          </div>
        )}
        {/* You can add brand logo here if product.brand exists, similar to other product cards */}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {product.name}
          </h4>
          {product.description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="text-xl font-bold text-blue-700">{product.price}</span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// FeaturedProducts Component
export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight mb-4">
            FEATURED PRODUCTS
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our shop to see amazing creations from our designers.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Product Review Video Section */}
        

      </div>
    </section>
  );
}