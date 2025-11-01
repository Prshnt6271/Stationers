import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// ✅ Import School Stationary images
import S1 from "../assets/ProductPage/ScholStat/S1.jpg";
import S2 from "../assets/ProductPage/ScholStat/S2.jpg";
import S3 from "../assets/ProductPage/ScholStat/S3.jpg";
import S4 from "../assets/ProductPage/ScholStat/S4.jpg";
import S5 from "../assets/ProductPage/ScholStat/S5.jpg";
import S6 from "../assets/ProductPage/ScholStat/S6.jpg";
import S7 from "../assets/ProductPage/ScholStat/S7.jpg";
import S8 from "../assets/ProductPage/ScholStat/S8.jpg";
import S9 from "../assets/ProductPage/ScholStat/S9.jpg";
import S10 from "../assets/ProductPage/ScholStat/S10.jpg";
import S11 from "../assets/ProductPage/ScholStat/S11.jpg";

// ✅ Import Toys images
import T1 from "../assets/ProductPage/Toys/T1.jpg";
import T2 from "../assets/ProductPage/Toys/T2.jpg";
import T3 from "../assets/ProductPage/Toys/T3.jpg";
import T4 from "../assets/ProductPage/Toys/T4.jpg";
import T5 from "../assets/ProductPage/Toys/T5.jpg";
import T6 from "../assets/ProductPage/Toys/T6.jpg";
import T7 from "../assets/ProductPage/Toys/T7.jpg";
import T8 from "../assets/ProductPage/Toys/T8.jpg";
import T9 from "../assets/ProductPage/Toys/T9.jpg";
import T10 from "../assets/ProductPage/Toys/T10.jpg";
import T11 from "../assets/ProductPage/Toys/T11.jpg";

// ✅ Import Decoration images
import D1 from "../assets/ProductPage/Decoration/D1.jpg";
import D2 from "../assets/ProductPage/Decoration/D2.jpg";
import D3 from "../assets/ProductPage/Decoration/D3.jpg";
import D4 from "../assets/ProductPage/Decoration/D4.jpg";
import D5 from "../assets/ProductPage/Decoration/D5.jpg";
import D6 from "../assets/ProductPage/Decoration/D6.jpg";
import D7 from "../assets/ProductPage/Decoration/D7.jpg";
import D8 from "../assets/ProductPage/Decoration/D8.jpg";
import D9 from "../assets/ProductPage/Decoration/D9.jpg";
import D10 from "../assets/ProductPage/Decoration/D10.jpg";
import D11 from "../assets/ProductPage/Decoration/D11.jpg";

// ✅ Import Office images
import O1 from "../assets/ProductPage/Office/O1.webp";
import O2 from "../assets/ProductPage/Office/O2.webp";
// import O3 from "../assets/ProductPage/Office/O3.jpg";
// import O4 from "../assets/ProductPage/Office/O4.jpg";
// import O5 from "../assets/ProductPage/Office/O5.jpg";
// import O6 from "../assets/ProductPage/Office/O6.jpg";
// import O7 from "../assets/ProductPage/Office/O7.jpg";
// import O8 from "../assets/ProductPage/Office/O8.jpg";
// import O9 from "../assets/ProductPage/Office/O9.jpg";
// import O10 from "../assets/ProductPage/Office/O10.jpg";
// import O11 from "../assets/ProductPage/Office/O11.jpg";

const categoriesData = [
  {
    name: "Office",
    images: [O1, O2],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "School Stationary",
    images: [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Toys",
    images: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Decoration",
    images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11],
    color: "from-orange-500 to-red-500",
  },
];

function ProductsPage() {
  const location = useLocation();
  const categoryRefs = useRef({});
  const [activeImage, setActiveImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we have a section to scroll to from navigation state
    if (location.state?.scrollToSection) {
      const section = location.state.scrollToSection;
      console.log("Scrolling to section:", section);
      
      // Convert section name to match our category names
      let targetSection = section;
      
      // Handle case where it might come as "SchoolStat" from old data
      if (section === "SchoolStat") {
        targetSection = "School Stationary";
      }
      
      // Wait for the page to render and then scroll to the section
      setTimeout(() => {
        scrollToSection(targetSection);
      }, 500);
    }

    // Simulate loading time for images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  const scrollToSection = (sectionName) => {
    console.log("Attempting to scroll to:", sectionName);
    
    // Find the category in our data
    const category = categoriesData.find(cat => 
      cat.name.toLowerCase() === sectionName.toLowerCase()
    );
    
    if (category) {
      const sectionId = category.name.toLowerCase().replace(/\s+/g, '-');
      console.log("Found category, section ID:", sectionId);
      
      if (categoryRefs.current[sectionId]) {
        console.log("Scrolling to element...");
        categoryRefs.current[sectionId].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.log("Element ref not found for:", sectionId);
        // Fallback: try to find by ID
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    } else {
      console.log("Category not found:", sectionName);
    }
  };

  const openLightbox = (image) => {
    setActiveImage(image);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  // Close lightbox when clicking outside the image
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  // Close lightbox with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    if (activeImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [activeImage]);

  const handleEnquiry = (categoryName, imageIndex) => {
    // Navigate to contact page or open enquiry modal
    console.log(`Enquiry for ${categoryName} product ${imageIndex + 1}`);
    // You can implement your enquiry logic here
    // For example: navigate to contact page with pre-filled data
    // or open a modal form
  };

  const addToCart = (categoryName, imageIndex, imageSrc) => {
    const priceMap = {
      "Office": 15.99,
      "School Stationary": 8.99,
      "Toys": 12.99,
      "Decoration": 18.99
    };
    
    const basePrice = priceMap[categoryName] || 10.99;
    const price = basePrice + (imageIndex * 0.5);
    
    const newItem = {
      id: `${categoryName}-${imageIndex}-${Date.now()}`,
      category: categoryName,
      imageIndex,
      imageSrc,
      price,
      quantity: 1,
      timestamp: Date.now()
    };
    
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = existingCartItems.findIndex(
      item => item.category === categoryName && item.imageIndex === imageIndex
    );
    
    let updatedCartItems;
    if (existingItemIndex >= 0) {
      updatedCartItems = [...existingCartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      updatedCartItems = [...existingCartItems, newItem];
    }
    
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    
    // Show notification
    const notification = document.createElement("div");
    notification.className = "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
    notification.textContent = "Added to cart!";
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" 
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Cross Button */}
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10 md:top-4 md:right-4 bg-black/50 rounded-full p-2 backdrop-blur-sm"
              onClick={closeLightbox}
              aria-label="Close image"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 md:h-10 md:w-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <img 
              src={activeImage} 
              alt="Enlarged view" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg" 
            />
            
            {/* Download Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <a 
                href={activeImage} 
                download 
                className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-white transition-colors duration-200 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of premium products across different categories to meet all your needs.
          </p>
        </div>

        {categoriesData.map((category, index) => (
          <div
            key={category.name}
            id={category.name.toLowerCase().replace(/\s+/g, '-')}
            ref={(el) =>
              (categoryRefs.current[category.name.toLowerCase().replace(/\s+/g, '-')] = el)
            }
            className="mb-16 md:mb-24 scroll-mt-16"
          >
            <div
              className={`mb-8 md:mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-xl transform transition-all duration-500 hover:shadow-2xl`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">{category.name}</h2>
              <p className="mt-2 opacity-90">
                Explore our {category.name} collection
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {category.images.map((img, i) => (
                <div key={i} className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {/* Image Container */}
                  <div 
                    className="relative w-full h-48 md:h-64 flex items-center justify-center bg-white overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(img)}
                  >
                    {loading ? (
                      <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl"></div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img
                          src={img}
                          alt={`${category.name} product ${i + 1}`}
                          className="w-full h-full object-contain p-2 transform transition-transform duration-700 hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="text-center font-medium text-sm">
                            Click to enlarge
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center px-3 py-3 border-t">
                    <button 
                      className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-3 rounded text-sm shadow-sm hover:bg-gray-100 transition-colors duration-200 flex-1 mr-2"
                      onClick={() => handleEnquiry(category.name, i)}
                    >
                      Enquiry
                    </button>
                    <button 
                      className="bg-blue-600 text-white font-medium py-2 px-3 rounded text-sm shadow-md hover:bg-blue-700 transition-colors duration-200 flex-1 ml-2 flex items-center justify-center"
                      onClick={() => addToCart(category.name, i, img)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;