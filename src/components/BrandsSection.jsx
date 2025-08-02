import React from 'react';

// Import local images
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.jpg';


// Updated brands with local brand logos
const brands = [
  { 
    id: 1, 
    name: "DOMS", 
    logoUrl: a 
  },
  { 
    id: 2, 
    name: "Kores", 
    logoUrl: b 
  },
  { 
    id: 3, 
    name: "UNOMAX", 
    logoUrl: c 
  },
  { 
    id: 4, 
    name: "Cello", 
    logoUrl: d 
  },
  { 
    id: 5, 
    name: "FEVICOL", 
    logoUrl: e 
  },
  { 
    id: 6, 
    name: "Montex", 
    logoUrl: f 
  },
  { 
    id: 7, 
    name: "WriteFlow", 
    logoUrl: g 
  },
];

// BrandCard Component (for individual brand display)
function BrandCard({ brand }) {
  return (
    <a
      href="#"
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center justify-center p-4 h-32 sm:h-40 border border-gray-100 hover:border-blue-200"
    >
      <img
        src={brand.logoUrl}
        alt={`${brand.name} Logo`}
        className="max-w-full max-h-20 object-contain filter hover:brightness-110 transition-all duration-300 mb-2"
      />
      <span className="text-xs font-medium text-gray-600 text-center">{brand.name}</span>
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
            Brands We Carry
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We deal's in the world's most trusted stationery brands to bring 
            you quality products that inspire excellence.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-10">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

      </div>
    </section>
  );
}