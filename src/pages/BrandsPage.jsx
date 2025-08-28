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
import DomsThumb from "../assets/Brand/Doms/Doms.jpg"
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
import KoresThumb from "../assets/Brand/Kores/Kores.jpg"
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
import MunixThumb from "../assets/Brand/Munix/Munix.jpg"
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
import MilesThumb from "../assets/Brand/Miles/Miles.jpg"
import MilesPDF from "../assets/Brand/Miles/Miles.pdf";

const brandsData = [
  {
    name: "Doms",
    images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11],
    pdf: DomsPDF,
    pdfThumb: DomsThumb,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Kores",
    images: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11],
    pdf: KoresPDF,
    pdfThumb: KoresThumb,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Munix",
    images: [MU1, MU2, MU3, MU4, MU5, MU6, MU7, MU8, MU9, MU10, MU11],
    pdf: MunixPDF,
    pdfThumb: MunixThumb,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Miles",
    images: [MI1, MI2, MI3, MI4, MI5, MI6, MI7, MI8, MI9, MI10, MI11],
    pdf: MilesPDF,
    pdfThumb: MilesThumb,
    color: "from-orange-500 to-red-500",
  },
];

function BrandsPage() {
  const location = useLocation();
  const brandRefs = useRef({});
  const [activeImage, setActiveImage] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const handleEnquiry = (brandName, imageIndex) => {
    alert(`Enquiry for ${brandName} product ${imageIndex + 1}`);
  };

  const addToCart = (brandName, imageIndex, imageSrc) => {
    const newItem = {
      id: `${brandName}-${imageIndex}-${Date.now()}`,
      brand: brandName,
      imageIndex: imageIndex,
      imageSrc: imageSrc,
      timestamp: Date.now()
    };
    
    setCartItems([...cartItems, newItem]);
    
    // Show a small notification
    const notification = document.createElement("div");
    notification.className = "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
    notification.textContent = "Added to cart!";
    document.body.appendChild(notification);
    
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 2000);
  };

  const handlePDFClick = (e, pdf) => {
    // For mobile devices, we need to handle PDF opening differently
    if (isMobile) {
      e.preventDefault();
      window.open(pdf, '_blank');
    }
    // For desktop, the normal link behavior is fine
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
              className="absolute -top-12 right-0 text-white text-3xl z-10 md:top-2 md:right-2"
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
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Brands
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of brands, each offering unique products designed to meet your needs.
          </p>
        </div>

        {brandsData.map((brand, index) => (
          <div
            key={brand.name}
            id={brand.name.toLowerCase()}
            ref={(el) => (brandRefs.current[brand.name.toLowerCase()] = el)}
            className="mb-16 md:mb-24 scroll-mt-16"
          >
            <div 
              className={`mb-8 md:mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r ${brand.color} text-white shadow-xl`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">{brand.name}</h2>
              <p className="mt-2 opacity-90">Explore our {brand.name} product collection</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Brand Images - 11 product images */}
              {brand.images.map((img, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative w-full h-48 md:h-64 flex items-center justify-center bg-white overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={img}
                      alt={`${brand.name} product ${i + 1}`}
                      className="max-h-full max-w-full object-contain p-2"
                      onClick={() => openLightbox(img)}
                    />
                    
                    {/* Hover Buttons - Always visible on mobile, hidden until hover on desktop */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 z-20 p-2`}>
                      <button
                        className="bg-white text-gray-800 font-semibold py-1 md:py-2 px-2 md:px-4 rounded text-sm md:text-base mb-2 md:mb-3 shadow-md transform transition-transform hover:scale-105"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEnquiry(brand.name, i);
                        }}
                      >
                        Enquiry Now
                      </button>
                      <button
                        className="bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-md transform transition-transform hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(brand.name, i, img);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* PDF Card as the 12th item */}
              {brand.pdf && (
                <a
                  key={`${brand.name}-pdf`}
                  href={brand.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                  onClick={(e) => handlePDFClick(e, brand.pdf)}
                >
                  <div className="relative w-full h-48 md:h-64 rounded-xl md:rounded-2xl shadow-lg overflow-hidden border-2 border-white">
                    <img
                      src={brand.pdfThumb}
                      alt={`${brand.name} PDF`}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-300"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 flex flex-col items-center justify-center p-4 text-center">
                      {/* Brand Name */}
                      <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-1">
                        <h3 className="text-sm md:text-lg font-bold text-gray-800">{brand.name}</h3>
                      </div>
                      
                      <div className="mb-2 md:mb-4 transform transition-transform duration-500 group-hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 md:h-16 md:w-16 text-white"
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
                      
                      <span className="text-base md:text-xl font-bold text-white mb-1">
                        Product Catalog
                      </span>
                      <span className="text-sm md:text-lg font-semibold text-white">
                        Download PDF
                      </span>
                      <div className="mt-2 md:mt-4 px-3 py-1 md:px-4 md:py-2 bg-white text-gray-900 rounded-full text-xs md:text-sm font-medium transform transition-transform duration-300 group-hover:scale-105">
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
    </div>
  );
}

export default BrandsPage;