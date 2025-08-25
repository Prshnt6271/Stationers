import React, { useEffect, useRef, useState } from "react";
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
import MI12 from "../assets/Brand/Miles/MI12.jpg"
import MilesPDF from "../assets/Brand/Miles/Miles.pdf";

const brandsData = [
  {
    name: "Doms",
    images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11],
    pdf: DomsPDF,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Kores",
    images: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11],
    pdf: KoresPDF,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Munix",
    images: [MU1, MU2, MU3, MU4, MU5, MU6, MU7, MU8, MU9, MU10, MU11],
    pdf: MunixPDF,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Miles",
    images: [MI1, MI2, MI3, MI12, MI5, MI6, MI7, MI8, MI9, MI10, MI11],
    pdf: MilesPDF,
    color: "from-orange-500 to-red-500",
  },
];

function BrandsPage() {
  const location = useLocation();
  const brandRefs = useRef({});
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const brand = location.hash.replace("#", "");
      if (brandRefs.current[brand]) {
        setTimeout(() => {
          brandRefs.current[brand].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    }
  }, [location]);

  const openLightbox = (image) => {
    setActiveImage(image);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute -top-12 right-0 text-white text-3xl z-10"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img 
              src={activeImage} 
              alt="Enlarged view" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4 animate-fade-in">
            Our Brands
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Discover our premium collection of brands, each offering unique products designed to meet your needs.
          </p>
        </div>


        {brandsData.map((brand, index) => (
          <div
            key={brand.name}
            id={brand.name.toLowerCase()}
            ref={(el) => (brandRefs.current[brand.name.toLowerCase()] = el)}
            className="mb-24 scroll-mt-16"
          >
            <div 
              className={`mb-10 p-8 rounded-2xl bg-gradient-to-r ${brand.color} text-white shadow-xl transform transition-all duration-500 hover:shadow-2xl animate-slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="text-4xl font-bold">{brand.name}</h2>
              <p className="mt-2 opacity-90">Explore our {brand.name} product collection</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Brand Images */}
              {brand.images.map((img, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(img)}
                >
                  <div className="relative w-full h-64 flex items-center justify-center bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={img}
                      alt={`${brand.name} product ${i + 1}`}
                      className="max-h-full max-w-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="text-center font-medium">Click to enlarge</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* PDF Card */}
              {brand.pdf && (
                <a
                  key={`${brand.name}-pdf`}
                  href={brand.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <div className="relative w-full h-64 rounded-2xl shadow-lg overflow-hidden border-2 border-white transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                    <img
                      src={brand.images[0]}
                      alt={`${brand.name} PDF`}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-300"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 flex flex-col items-center justify-center p-4 text-center">
                      {/* Brand Name */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <h3 className="text-lg font-bold text-gray-800">{brand.name}</h3>
                      </div>
                      
                      <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      
                      <span className="text-xl font-bold text-white mb-1">
                        Product Catalog
                      </span>
                      <span className="text-lg font-semibold text-white">
                        Download PDF
                      </span>
                      <div className="mt-4 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium transform transition-transform duration-300 group-hover:scale-105">
                        Click to view
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default BrandsPage;