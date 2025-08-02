import React from 'react';

// Import brand logos from local assets (updated to .webp)
// import domsLogo from '../assets/Brand-logo/doms.webp';
import koresLogo from '../assets/Brand-logo/kores.webp';
import unomaxLogo from '../assets/Brand-logo/unomax.webp';
import celloLogo from '../assets/Brand-logo/cello.webp';
import fevicolLogo from '../assets/Brand-logo/fevicol.webp';
import montexLogo from '../assets/Brand-logo/montex.webp';
import writeflowLogo from '../assets/Brand-logo/writeflow.webp';
import flairLogo from '../assets/Brand-logo/flair.webp';

// Updated brands with local logo imports
const brands = [
  { id: 1, name: "DOMS", logoUrl: domsLogo },
  { id: 2, name: "Kores", logoUrl: koresLogo },
  { id: 3, name: "UNOMAX", logoUrl: unomaxLogo },
  { id: 4, name: "Cello", logoUrl: celloLogo },
  { id: 5, name: "FEVICOL", logoUrl: fevicolLogo },
  { id: 6, name: "Montex", logoUrl: montexLogo },
  { id: 7, name: "WriteFlow", logoUrl: writeflowLogo },
  { id: 8, name: "Flair", logoUrl: flairLogo },
];

// BrandCard Component (for individual brand display)
function BrandCard({ brand }) {
  return (
    <a
      href="#"
      className=" bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center justify-center p-4 h-32 sm:h-40 border border-gray-100 hover:border-blue-200"
    >
      <img
        src={brand.logoUrl}
        alt={`${brand.name} Logo`}
        className="max-w-full max-h-40 object-contain filter hover:brightness-110 transition-all duration-300 mb-2"
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src=`https://via.placeholder.com/150x60/ffffff/333333?text=${brand.name}`; 
        }}
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

          {/* "View All Brands" Button Card */}
          {/* <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 flex items-center justify-center bg-orange-500 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-32 sm:h-40">
            <a
              href="#" // Link to a dedicated "All Brands" page
              className="text-white text-lg sm:text-xl font-bold text-center px-4 py-2 hover:underline"
            >
              VIEW ALL BRANDS
            </a>
          </div> */}
        </div>

      </div>
    </section>
  );
}
