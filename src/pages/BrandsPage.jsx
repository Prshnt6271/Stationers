import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

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

// ✅ Import images for Cello
import C1 from "../assets/Brand/Cello/1.jpg";
import C2 from "../assets/Brand/Cello/2.jpg";
import C3 from "../assets/Brand/Cello/3.jpg";
import C4 from "../assets/Brand/Cello/4.jpg";
import C5 from "../assets/Brand/Cello/5.jpg";
import C6 from "../assets/Brand/Cello/6.jpg";
import C7 from "../assets/Brand/Cello/7.jpg";
import C8 from "../assets/Brand/Cello/8.jpg";
import C9 from "../assets/Brand/Cello/9.jpg";
import C10 from "../assets/Brand/Cello/10.jpg";
import C11 from "../assets/Brand/Cello/11.jpg";
import C12 from "../assets/Brand/Cello/12.jpg";
import CelloThumb from "../assets/Brand/Cello/Ct.jpg";
import CelloPDF from "../assets/Brand/Cello/Cello.pdf";

// ✅ Import images for Natraj
import N1 from "../assets/Brand/Natraj/1.jpg";
import N2 from "../assets/Brand/Natraj/2.jpg";
import N3 from "../assets/Brand/Natraj/3.jpg";
import N4 from "../assets/Brand/Natraj/4.jpg";
import N5 from "../assets/Brand/Natraj/5.jpg";
import N6 from "../assets/Brand/Natraj/6.jpg";
import N7 from "../assets/Brand/Natraj/7.jpg";
import N8 from "../assets/Brand/Natraj/8.jpg";
import N9 from "../assets/Brand/Natraj/9.jpg";
import N10 from "../assets/Brand/Natraj/10.jpg";
import N11 from "../assets/Brand/Natraj/11.jpg";
import N12 from "../assets/Brand/Natraj/12.jpg";
import NatrajThumb from "../assets/Brand/Natraj/Nt.jpg";
import NatrajPDF from "../assets/Brand/Natraj/Natraj.pdf";

// ✅ Import images for Saino
import S1 from "../assets/Brand/Saino/1.jpg";
import S2 from "../assets/Brand/Saino/2.jpg";
import S3 from "../assets/Brand/Saino/3.jpg";
import S4 from "../assets/Brand/Saino/4.jpg";
import S5 from "../assets/Brand/Saino/5.jpg";
import S6 from "../assets/Brand/Saino/6.jpg";
import S7 from "../assets/Brand/Saino/7.jpg";
import S8 from "../assets/Brand/Saino/8.jpg";
import S9 from "../assets/Brand/Saino/9.jpg";
import S10 from "../assets/Brand/Saino/10.jpg";
import S11 from "../assets/Brand/Saino/11.jpg";
import S12 from "../assets/Brand/Saino/12.jpg";
import SainoThumb from "../assets/Brand/Saino/St.jpg";
import SainoPDF from "../assets/Brand/Saino/Saino.pdf";

// ✅ Import images for Pierre
import P1 from "../assets/Brand/Pier/1.jpg";
import P2 from "../assets/Brand/Pier/2.jpg";
import P3 from "../assets/Brand/Pier/3.jpg";
import P4 from "../assets/Brand/Pier/4.jpg";
import P5 from "../assets/Brand/Pier/5.jpg";
import P6 from "../assets/Brand/Pier/6.jpg";
import P7 from "../assets/Brand/Pier/7.jpg";
import P8 from "../assets/Brand/Pier/8.jpg";
import P9 from "../assets/Brand/Pier/9.jpg";
import P10 from "../assets/Brand/Pier/10.jpg";
import P11 from "../assets/Brand/Pier/11.jpg";
import P12 from "../assets/Brand/Pier/12.jpg";
import PierreThumb from "../assets/Brand/Pier/pier.jpg";
import PierrePDF from "../assets/Brand/Pier/Pierre.pdf";


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

   {
    name: "Cello",
    images: [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12],
    pdf: CelloPDF,
    pdfThumb: CelloThumb,
    color: "from-red-500 to-yellow-500",
  },
  {
    name: "Natraj",
    images: [N1, N2, N3, N4, N5, N6, N7, N8, N9, N10, N11, N12],
    pdf: NatrajPDF,
    pdfThumb: NatrajThumb,
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Saino",
    images: [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12],
    pdf: SainoPDF,
    pdfThumb: SainoThumb,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Pierre",
    images: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12],
    pdf: PierrePDF,
    pdfThumb: PierreThumb,
    color: "from-emerald-500 to-green-700",
  },
];

// Helper function to pair images for left/right layout
const pairImages = (images) => {
  const pairs = [];
  for (let i = 0; i < images.length; i += 2) {
    if (i + 1 < images.length) {
      pairs.push([images[i], images[i + 1]]);
    } else {
      pairs.push([images[i], images[0]]); // If odd number, pair last with first
    }
  }
  return pairs;
};

function BrandsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const brandRefs = useRef({});
  const [activeImage, setActiveImage] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  // Update localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

  const openLightbox = (image) => setActiveImage(image);
  const closeLightbox = () => setActiveImage(null);

  const handleEnquiry = (brandName, imageIndex) => {
    navigate("/ContactUs", { state: { brand: brandName, product: imageIndex + 1 } });
  };

  const addToCart = (brandName, imageIndex, imageSrc) => {
    const priceMap = {
      "Doms": 12.99,
      "Kores": 9.99,
      "Munix": 14.99,
      "Miles": 11.99
    };
    
    const basePrice = priceMap[brandName] || 10.99;
    const price = basePrice + (imageIndex * 0.5);
    
    const newItem = {
      id: `${brandName}-${imageIndex}-${Date.now()}`,
      brand: brandName,
      imageIndex,
      imageSrc,
      price,
      quantity: 1,
      timestamp: Date.now()
    };
    
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = existingCartItems.findIndex(
      item => item.brand === brandName && item.imageIndex === imageIndex
    );
    
    let updatedCartItems;
    if (existingItemIndex >= 0) {
      updatedCartItems = [...existingCartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      updatedCartItems = [...existingCartItems, newItem];
    }
    
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    
    const notification = document.createElement("div");
    notification.className = "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
    notification.textContent = "Added to cart!";
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Cart Icon */}
      <div className="fixed top-4 right-4 z-40">
        <Link to="/cart" className="relative flex items-center justify-center bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Link>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full">
            <button className="absolute -top-12 right-0 text-white text-3xl z-10 md:top-2 md:right-2" onClick={closeLightbox}>
              &times;
            </button>
            <img src={activeImage} alt="Enlarged view" className="w-full h-auto max-h-[80vh] object-contain" />
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

        {brandsData.map((brand) => {
          const imagePairs = pairImages(brand.images);
          
          return (
            <div key={brand.name} id={brand.name.toLowerCase()} ref={(el) => (brandRefs.current[brand.name.toLowerCase()] = el)} className="mb-16 md:mb-24 scroll-mt-16">
              {/* Brand Header */}
              <div className={`mb-8 md:mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r ${brand.color} text-white shadow-xl`}>
                <h2 className="text-3xl md:text-4xl font-bold">{brand.name}</h2>
                <p className="mt-2 opacity-90">Explore our {brand.name} product collection</p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {imagePairs.map((pair, i) => (
                  <div key={i} className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden flex flex-col">
                    <div className="flex h-48 md:h-64">
                      <div className="flex-1 flex items-center justify-center bg-white overflow-hidden border-r">
                        <img
                          src={pair[0]}
                          alt={`${brand.name} product ${i * 2 + 1}`}
                          className="max-h-full max-w-full object-contain p-2 cursor-pointer"
                          onClick={() => openLightbox(pair[0])}
                        />
                      </div>
                      <div className="flex-1 flex items-center justify-center bg-white overflow-hidden">
                        <img
                          src={pair[1]}
                          alt={`${brand.name} product ${i * 2 + 2}`}
                          className="max-h-full max-w-full object-contain p-2 cursor-pointer"
                          onClick={() => openLightbox(pair[1])}
                        />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center px-3 py-2 border-t">
                      <button
                        className="bg-white border border-gray-300 text-gray-700 font-medium py-1 px-3 rounded text-sm shadow-sm hover:bg-gray-100"
                        onClick={() => handleEnquiry(brand.name, i * 2)}
                      >
                        Enquiry
                      </button>
                      <div className="flex space-x-2">
                        <button
                          className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
                          onClick={() => addToCart(brand.name, i * 2, pair[0])}
                          title="Add left product to cart"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                        <button
                          className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
                          onClick={() => addToCart(brand.name, i * 2 + 1, pair[1])}
                          title="Add right product to cart"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* PDF card */}
                {brand.pdf && (
                  <a key={`${brand.name}-pdf`} href={brand.pdf} target="_blank" rel="noopener noreferrer" className="block relative group">
                    <div className="relative w-full h-48 md:h-64 rounded-xl md:rounded-2xl shadow-lg overflow-hidden border-2 border-white">
                      <img src={brand.pdfThumb} alt={`${brand.name} PDF`} className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 flex flex-col items-center justify-center p-4 text-center">
                        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                          <h3 className="text-sm md:text-lg font-bold text-gray-800">{brand.name}</h3>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-16 md:w-16 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-base md:text-xl font-bold text-white">Product Catalog</span>
                        <span className="text-sm md:text-lg text-white">Download PDF</span>
                        <div className="mt-2 px-3 py-1 bg-white text-gray-900 rounded-full text-xs md:text-sm font-medium">Click to view</div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrandsPage;
