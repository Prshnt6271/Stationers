import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// ✅ Import your own images for Doms
import D1 from "../assets/Brand/Doms/D1.jpg";
import D2 from "../assets/Brand/Doms/D2.jpg";
import D3 from "../assets/Brand/Doms/D3.jpg";
import D4 from "../assets/Brand/Doms/D4.jpg";
import D5 from "../assets/Brand/Doms/D5.jpg";
import D6 from "../assets/Brand/Doms/D6.jpg";
import D7 from "../assets/Brand/Doms/D7.jpg";
import D8 from "../assets/Brand/Doms/D8.jpg";
import D9 from "../assets/Brand/Doms/D9.jpg";
import D10 from "../assets/Brand/Doms/D10.jpg";
import D11 from "../assets/Brand/Doms/D11.jpg";
import DomsPDF from "../assets/Brand/Doms/Doms.pdf";

// ✅ Import images for Kores
import K1 from "../assets/Brand/Kores/K1.jpg";
import K2 from "../assets/Brand/Kores/K2.jpg";
import K3 from "../assets/Brand/Kores/K3.jpg";
import K4 from "../assets/Brand/Kores/K4.jpg";
import K5 from "../assets/Brand/Kores/K5.jpg";
import K6 from "../assets/Brand/Kores/K6.jpg";
import K7 from "../assets/Brand/Kores/K7.jpg";
import K8 from "../assets/Brand/Kores/K8.jpg";
import K9 from "../assets/Brand/Kores/K9.jpg";
import K10 from "../assets/Brand/Kores/K10.jpg";
import K11 from "../assets/Brand/Kores/K11.jpg";
import KoresPDF from "../assets/Brand/Kores/Kores.pdf";

// ✅ Import images for Munix
import MU1 from "../assets/Brand/Munix/MU1.jpg";
import MU2 from "../assets/Brand/Munix/MU2.jpg";
import MU3 from "../assets/Brand/Munix/MU3.jpg";
import MU4 from "../assets/Brand/Munix/MU4.jpg";
import MU5 from "../assets/Brand/Munix/MU5.jpg";
import MU6 from "../assets/Brand/Munix/MU6.jpg";
import MU7 from "../assets/Brand/Munix/MU7.jpg";
import MU8 from "../assets/Brand/Munix/MU8.jpg";
import MU9 from "../assets/Brand/Munix/MU9.jpg";
import MU10 from "../assets/Brand/Munix/MU10.jpg";
import MU11 from "../assets/Brand/Munix/MU11.jpg";
import MunixPDF from "../assets/Brand/Munix/Munix.pdf";

// ✅ Import images for Miles
import MI1 from "../assets/Brand/Miles/MI1.jpg";
import MI2 from "../assets/Brand/Miles/MI2.jpg";
import MI3 from "../assets/Brand/Miles/MI3.jpg";
import MI4 from "../assets/Brand/Miles/MI4.jpg";
import MI5 from "../assets/Brand/Miles/MI5.jpg";
import MI6 from "../assets/Brand/Miles/MI6.jpg";
import MI7 from "../assets/Brand/Miles/MI7.jpg";
import MI8 from "../assets/Brand/Miles/MI8.jpg";
import MI9 from "../assets/Brand/Miles/MI9.jpg";
import MI10 from "../assets/Brand/Miles/MI10.jpg";
import MI11 from "../assets/Brand/Miles/MI11.jpg";
import MilesPDF from "../assets/Brand/Miles/Miles.pdf";

const brandsData = [
  {
    name: "Doms",
    images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11],
    pdf: DomsPDF,
  },
  {
    name: "Kores",
    images: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11],
    pdf: KoresPDF,
  },
  {
    name: "Munix",
    images: [MU1, MU2, MU3, MU4, MU5, MU6, MU7, MU8, MU9, MU10, MU11],
    pdf: MunixPDF,
  },
  {
    name: "Miles",
    images: [MI1, MI2, MI3, MI4, MI5, MI6, MI7, MI8, MI9, MI10, MI11],
    pdf: MilesPDF,
  },
];

function BrandsPage() {
  const location = useLocation();
  const brandRefs = useRef({});

  useEffect(() => {
    if (location.hash) {
      const brand = location.hash.replace("#", "");
      if (brandRefs.current[brand]) {
        brandRefs.current[brand].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Our Brands</h1>
      {brandsData.map((brand) => (
        <div
          key={brand.name}
          id={brand.name.toLowerCase()}
          ref={(el) => (brandRefs.current[brand.name.toLowerCase()] = el)}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">{brand.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* ✅ Show all brand images */}
            {brand.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${brand.name} product ${i + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300"
              />
            ))}

            {/* ✅ Add PDF card with distinct styling */}
            {brand.pdf && (
              <a
                key={`${brand.name}-pdf`}
                href={brand.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full h-64 rounded-lg shadow-xl overflow-hidden border-2 border-blue-400"
              >
                {/* Use the first image of the brand with blur effect */}
                <img
                  src={brand.images[0]}
                  alt={`${brand.name} PDF`}
                  className="w-full h-full object-cover filter blur-sm group-hover:blur-none transition-all duration-300"
                />
                
                {/* PDF icon badge */}
                <div className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-4xl mb-2">📄</span>
                  <span className="text-xl font-bold text-white mb-1">
                    Product Catalog
                  </span>
                  <span className="text-lg font-semibold text-white">
                    Download {brand.name} PDF
                  </span>
                  <div className="mt-2 px-3 py-1 bg-white text-blue-900 rounded-full text-sm font-medium">
                    Click to view
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrandsPage;