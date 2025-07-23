import React from 'react';

// Dummy data for product categories
const categories = [
  {
    id: 1,
    name: "JUNIOR ARTIST",
    imageUrl: "https://placehold.co/400x250/ADD8E6/000000?text=Junior+Artist",
    link: "#",
  },
  {
    id: 2,
    name: "COLOURS",
    imageUrl: "https://placehold.co/400x250/F0F8FF/000000?text=Colours",
    link: "#",
  },
  {
    id: 3,
    name: "BRUSHES",
    imageUrl: "https://placehold.co/400x250/DDA0DD/000000?text=Brushes",
    link: "#",
  },
  {
    id: 4,
    name: "AUXILIARIES",
    imageUrl: "https://placehold.co/400x250/B0E0E6/000000?text=Auxiliaries",
    link: "#",
  },
  {
    id: 5,
    name: "CANVAS",
    imageUrl: "https://placehold.co/400x250/FFDAB9/000000?text=Canvas",
    link: "#",
  },
  {
    id: 6,
    name: "SKETCHING & DRAWING",
    imageUrl: "https://placehold.co/400x250/F5DEB3/000000?text=Sketching",
    link: "#",
  },
  {
    id: 7,
    name: "MEDIUMS & VARNISHES",
    imageUrl: "https://placehold.co/400x250/E6E6FA/000000?text=Mediums",
    link: "#",
  },
  {
    id: 8,
    name: "CRAFT & HOBBY",
    imageUrl: "https://placehold.co/400x250/C0C0C0/000000?text=Craft",
    link: "#",
  },
  {
    id: 9,
    name: "PAPER & PADS",
    imageUrl: "https://placehold.co/400x250/F0F0F0/000000?text=Paper",
    link: "#",
  },
  {
    id: 10,
    name: "EASEL STANDS",
    imageUrl: "https://placehold.co/400x250/ADD8E6/000000?text=Easel+Stands",
    link: "#",
  },
  {
    id: 11,
    name: "ART BOOKS",
    imageUrl: "https://placehold.co/400x250/F0F8FF/000000?text=Art+Books",
    link: "#",
  },
  {
    id: 12,
    name: "STATIONERY",
    imageUrl: "https://placehold.co/400x250/DDA0DD/000000?text=Stationery",
    link: "#",
  },
];

// Component to display a single category card
function CategoryCard({ category }) {
  return (
    <a
      href={category.link}
      className="relative block w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
    >
      <img
        src={category.imageUrl}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x250/CCCCCC/333333?text=Image+Error";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
          {category.name}
        </h3>
      </div>
    </a>
  );
}

// Main ProductCategories Component
export default function ProductCategories() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight mb-4">
            PRODUCT CATEGORIES
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of products across various categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
