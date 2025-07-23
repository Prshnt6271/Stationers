import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for dropdowns to detect clicks outside
  const productsDropdownRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdowns/mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setIsCategoryDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
        if (event.target.closest('button[aria-label="Toggle mobile menu"]') === null) {
          setIsMobileMenuOpen(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Toggle functions
  const toggleProductsDropdown = () => setIsProductsDropdownOpen(!isProductsDropdownOpen);
  const toggleCategoryDropdown = () => setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-lg font-inter">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white text-xs py-2 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="mb-1 sm:mb-0 text-opacity-90">
          Orders above ₹1999 have free shipping. No Cancellations are possible during sale period.
        </p>
        <div className="flex space-x-4 text-opacity-90">
          <a href="#" className="hover:underline hover:text-blue-200 transition-colors duration-200">TRACK ORDER</a>
          <a href="#" className="hover:underline hover:text-blue-200 transition-colors duration-200">CONTACT US</a>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://placehold.co/180x45/000000/FFFFFF?text=SITARAM+STATIONERS"
            alt="Sitaram Stationers Logo"
            className="h-11 w-auto rounded-md shadow-sm"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/180x45/F0F0F0/000000?text=Logo"; }}
          />
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex flex-grow max-w-xl mx-8 relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow p-2.5 pl-5 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm"
          />
          <div className="relative" ref={categoryDropdownRef}>
            <button
              onClick={toggleCategoryDropdown}
              className="p-2.5 border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center text-sm transition-colors duration-200"
            >
              SELECT CATEGORY
              <svg className="w-4 h-4 ml-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isCategoryDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Category 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Category 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Category 3</a>
              </div>
            )}
          </div>
          <button className="p-2.5 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>

        {/* Login/Register, Cart, and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Search Icon for Mobile */}
          <button className="md:hidden text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" aria-label="Search">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>

          {/* Login/Register */}
          <a href="#" className="hidden sm:flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium">
            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            LOGIN / REGISTER
          </a>
          <button className="sm:hidden text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" aria-label="Login">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </button>

          {/* Cart */}
          <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="ml-1 text-base font-semibold">₹0.00</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Bar (Desktop) */}
      <nav className="hidden md:block bg-gray-800 text-white py-3 px-4 sm:px-6 md:px-8 shadow-inner">
        <ul className="flex justify-center md:justify-start space-x-8 text-sm font-medium">
          <li><a href="#" className="hover:text-blue-300 transition-colors duration-200 px-3 py-2 rounded-md">HOME</a></li>
          <li><a href="#" className="hover:text-blue-300 transition-colors duration-200 px-3 py-2 rounded-md">BRANDS</a></li>
          <li className="relative" ref={productsDropdownRef}>
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center hover:text-blue-300 focus:outline-none transition-colors duration-200 px-3 py-2 rounded-md"
            >
              PRODUCTS
              <svg className="w-4 h-4 ml-1 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Art Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Adult Colouring Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Learners Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Painting Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Sketching Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Brushes</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Acrylic Colour Brushes</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Brush Cleaner</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Brush Sets</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Graduate Brushes</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Oil Colour Brushes</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">Water Brushes</a>
              </div>
            )}
          </li>
          <li><a href="#" className="hover:text-blue-300 transition-colors duration-200 px-3 py-2 rounded-md">OTHER OFFERS <span className="text-red-400 text-xs ml-1 font-bold">NEW</span></a></li>
          <li><a href="#" className="hover:text-blue-300 transition-colors duration-200 px-3 py-2 rounded-md">NEW ARRIVALS</a></li>
          <li><a href="#" className="hover:text-blue-300 transition-colors duration-200 px-3 py-2 rounded-md">ARTIST</a></li>
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMobileMenu}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl p-6 transform transition-transform duration-300 ease-in-out"
            ref={mobileMenuRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100" aria-label="Close mobile menu">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <nav>
              <ul className="flex flex-col space-y-4 text-lg">
                <li><a href="#" className="block py-2 px-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200">HOME</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200">BRANDS</a></li>
                <li className="relative">
                  <button
                    onClick={toggleProductsDropdown}
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200"
                  >
                    PRODUCTS
                    <svg className={`w-5 h-5 ml-1 text-gray-600 transform transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {isProductsDropdownOpen && (
                    <div className="mt-2 pl-4 border-l border-gray-200 space-y-2">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Art Books</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Adult Colouring Books</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Learners Books</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Painting Books</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Sketching Books</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Brushes</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Acrylic Colour Brushes</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Brush Cleaner</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Brush Sets</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Graduate Brushes</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Oil Colour Brushes</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 text-sm">Water Brushes</a>
                    </div>
                  )}
                </li>
                <li><a href="#" className="block py-2 px-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200">OTHER OFFERS <span className="text-red-500 text-xs ml-1 font-bold">NEW</span></a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200">NEW ARRIVALS</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200">ARTIST</a></li>
                <li className="block sm:hidden">
                  <a href="#" className="flex items-center py-2 px-3 text-blue-600 hover:bg-blue-50 hover:text-blue-800 rounded-md transition-colors duration-200">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    LOGIN / REGISTER
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;