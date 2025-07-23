import React, { useState, useEffect, useRef } from 'react';

// Dummy data for categories
const categories = [
  { name: "Gift Cards", count: 0 },
  { name: "Combo Offers", count: 0 },
  { name: "Junior Artist", count: 153 },
  { name: "Limited Edition", count: 7, active: true },
  { name: "Colours", count: 333 },
  { name: "Brushes", count: 247 },
  { name: "Auxiliaries", count: 131 },
  { name: "Canvas", count: 29 },
  { name: "Sketching & Drawing", count: 300 },
  { name: "Mediums & Varnishes", count: 136 },
  { name: "Craft & Hobby", count: 293 },
  { name: "Paper & Pads", count: 293 },
  { name: "Easel Stands", count: 17 },
  { name: "Art Books", count: 148 },
  { name: "Stationery", count: 80 },
  { name: "Deals & Offers", count: 29 },
];

// Dummy products
const limitedEditionProducts = [
  {
    id: 101,
    name: "White Nights Limited Edition of Shimmering Collection Extra-Fine Artists' Watercolors Cakes",
    price: "₹499.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Shimmer+Watercolors",
    badge: "NEW",
    features: ["Shimmering Colors", "Extra-Fine Pigments", "Limited Stock"],
  },
  {
    id: 102,
    name: "White Nights Limited Edition Shimmering Watercolour Sets",
    price: "₹3,450.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Watercolour+Set",
    badge: "NEW",
    features: ["Premium Set", "Exclusive Shades", "Collectible"],
  },
  {
    id: 103,
    name: "Sakura Pigma Micron Set 100th Anniversary Collection - Limited Edition",
    price: "₹750.00 - ₹1,250.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Micron+Set",
    badge: "HOT",
    features: ["Archival Ink", "Fine Tips", "Anniversary Edition"],
  },
  {
    id: 104,
    name: "Special Edition Sketching Pencils - Collector's Pack",
    price: "₹899.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Sketching+Pencils",
    badge: "NEW",
    features: ["Graphite Range", "Ergonomic Design", "Numbered Edition"],
  },
  {
    id: 105,
    name: "Handmade Leather Journal - Artisan Series",
    price: "₹1,999.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Leather+Journal",
    badge: "HOT",
    features: ["Genuine Leather", "Hand-stitched", "Unique Design"],
  },
  {
    id: 106,
    name: "Vintage Calligraphy Pen Set - Royal Collection",
    price: "₹2,500.00",
    imageUrl: "https://placehold.co/300x200/F0F8FF/000000?text=Calligraphy+Set",
    badge: "NEW",
    features: ["Ornate Design", "Multiple Nibs", "Display Box"],
  },
];

export default function LimitedEditions() {
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const filterSidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterSidebarRef.current && !filterSidebarRef.current.contains(event.target)) {
        setIsFilterSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleFilterSidebar = () => setIsFilterSidebarOpen(!isFilterSidebarOpen);

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">

        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
              <svg className="fill-current w-3 h-3 mx-2" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314..." /></svg>
            </li>
            <li><span className="text-gray-500">Limited Edition</span></li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block w-full md:w-64 flex-shrink-0 bg-white p-6 rounded-lg shadow-md h-fit sticky top-4">
            <h3 className="text-xl font-bold mb-5 text-gray-900 border-b pb-3">CATEGORIES</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex justify-between items-center transition-colors duration-200 ${
                      category.active ? 'font-semibold text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      category.active ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {category.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            {/* Filter Controls */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4 text-sm">
                <span>Show:</span>
                <a href="#" className="text-blue-600 font-semibold hover:underline">9</a>
                <a href="#" className="text-gray-600 hover:underline">24</a>
                <a href="#" className="text-gray-600 hover:underline">36</a>
              </div>
              <button
                onClick={toggleFilterSidebar}
                className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
              >
                Filters
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {limitedEditionProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isFilterSidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleFilterSidebar}>
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-xl p-6"
            ref={filterSidebarRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <button onClick={toggleFilterSidebar} className="text-gray-600 hover:text-gray-900 p-2 rounded-full">
                ✕
              </button>
            </div>
            <h3 className="text-xl font-bold mb-5 text-gray-900 border-b pb-3">CATEGORIES</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex justify-between items-center transition-colors duration-200 ${
                      category.active ? 'font-semibold text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      category.active ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {category.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// 🧩 Product Card
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain w-full h-full"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/CCCCCC/333333?text=Image+Error"; }}
        />
        {product.badge && (
          <div className={`absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm ${
            product.badge === 'NEW' ? 'bg-green-500' : 'bg-red-500'
          }`}>
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>
          {product.features && (
            <ul className="text-gray-600 text-sm list-disc pl-5 mb-3">
              {product.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}
        </div>
        <div className="flex justify-between items-center mt-auto pt-3 border-t">
          <span className="text-xl font-bold text-blue-700">{product.price}</span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
