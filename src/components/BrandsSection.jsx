import React from 'react';

// Dummy data for brands
const brands = [
  { id: 1, name: "Last Thoughts", logoUrl: "https://placehold.co/200x100/ADD8E6/000000?text=Last+Thoughts" },
  { id: 2, name: "Stillman & Birn", logoUrl: "https://placehold.co/200x100/F0F8FF/000000?text=Stillman+%26+Birn" },
  { id: 3, name: "Golden", logoUrl: "https://placehold.co/200x100/DDA0DD/000000?text=Golden" },
  { id: 4, name: "Williamsburg", logoUrl: "https://placehold.co/200x100/B0E0E6/000000?text=Williamsburg" },
  { id: 5, name: "QOR Watercolors", logoUrl: "https://placehold.co/200x100/FFDAB9/000000?text=QOR+Watercolors" },
  { id: 6, name: "General's", logoUrl: "https://placehold.co/200x100/F5DEB3/000000?text=General%27s" },
  { id: 7, name: "Nitram", logoUrl: "https://placehold.co/200x100/E6E6FA/000000?text=Nitram" },
  { id: 8, name: "Sitaram Stationers", logoUrl: "https://placehold.co/200x100/C0C0C0/000000?text=Sitaram+Stationers" },
  { id: 9, name: "Derwent", logoUrl: "https://placehold.co/200x100/F0F0F0/000000?text=Derwent" },
  { id: 10, name: "BOSS OF ART", logoUrl: "https://placehold.co/200x100/ADD8E6/000000?text=BOSS+OF+ART" },
  { id: 11, name: "Canson", logoUrl: "https://placehold.co/200x100/F0F8FF/000000?text=Canson" },
  // The last item is a special "View All Brands" button, not a brand logo
];

// BrandCard Component (for individual brand display)
function BrandCard({ brand }) {
  return (
    <a
      href="#" // Link to the brand's page or products
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex items-center justify-center p-4 h-32 sm:h-40"
    >
      <img
        src={brand.logoUrl}
       alt={`${brand.name} Logo`}
        className="max-w-full max-h-full object-contain"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x100/CCCCCC/333333?text=Logo+Error"; }}
      />
    </a>
  );
}

// BrandsSection Component
export default function BrandsSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight mb-4">
            Our Esteemed Brands
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with the world's leading brands to bring you the best quality products.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}

          {/* "View All Brands" Button Card */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 flex items-center justify-center bg-orange-500 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-32 sm:h-40">
            <a
              href="#" // Link to a dedicated "All Brands" page
              className="text-white text-lg sm:text-xl font-bold text-center px-4 py-2 hover:underline"
            >
              VIEW ALL BRANDS
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
