import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productsDropdownRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

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

  const toggleProductsDropdown = () => setIsProductsDropdownOpen(!isProductsDropdownOpen);
  const toggleCategoryDropdown = () => setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-lg font-inter">
      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Left Spacer */}
        <div className="flex-1"></div>

        {/* Centered Search Bar */}
        <div className="hidden md:flex flex-grow max-w-xl justify-center relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow p-2.5 pl-5 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm"
          />
          <div className="relative" ref={categoryDropdownRef}>
            <button
              onClick={toggleCategoryDropdown}
              className="h-full p-2.5 border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center text-sm transition-colors duration-200"
            >
              SELECT CATEGORY
              <svg className="w-4 h-4 ml-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isCategoryDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition">Category 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition">Category 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition">Category 3</a>
              </div>
            )}
          </div>
          <button className="h-full p-2.5 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Right Mobile Toggles */}
        <div className="flex items-center space-x-4 sm:space-x-6 justify-end flex-1">
          <button className="md:hidden text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition" aria-label="Search">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-gray-800 text-white py-3 px-4 sm:px-6 md:px-8 shadow-inner">
        <ul className="flex justify-end space-x-6 text-sm font-medium items-center">
          <li><a href="#" className="hover:text-blue-300 transition px-3 py-2 rounded-md">HOME</a></li>
          <li><a href="#" className="hover:text-blue-300 transition px-3 py-2 rounded-md">BRANDS</a></li>
          <li className="relative" ref={productsDropdownRef}>
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center hover:text-blue-300 focus:outline-none transition px-3 py-2 rounded-md"
            >
              PRODUCTS
              <svg className="w-4 h-4 ml-1 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Art Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Adult Colouring Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Learners Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Painting Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Sketching Books</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Brushes</a>
              </div>
            )}
          </li>
          <li><a href="#" className="hover:text-blue-300 transition px-3 py-2 rounded-md">OTHER OFFERS <span className="text-red-400 text-xs ml-1 font-bold">NEW</span></a></li>
          <li><a href="#" className="hover:text-blue-300 transition px-3 py-2 rounded-md">NEW ARRIVALS</a></li>
          <li><a href="#" className="hover:text-blue-300 transition px-3 py-2 rounded-md">ARTIST</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMobileMenu}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl p-6"
            ref={mobileMenuRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100" aria-label="Close mobile menu">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav>
              <ul className="flex flex-col space-y-4 text-lg">
                <li><a href="#" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md">HOME</a></li>
                <li><a href="#" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md">BRANDS</a></li>
                <li className="relative">
                  <button
                    onClick={toggleProductsDropdown}
                    className="flex items-center justify-between w-full py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                  >
                    PRODUCTS
                    <svg className={`w-5 h-5 ml-1 text-gray-600 transform transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isProductsDropdownOpen && (
                    <div className="mt-2 pl-4 border-l border-gray-200 space-y-2">
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Art Books</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Adult Colouring Books</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Learners Books</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Painting Books</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Sketching Books</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Brushes</a>
                    </div>
                  )}
                </li>
                <li><a href="#" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md">OTHER OFFERS <span className="text-red-500 text-xs ml-1 font-bold">NEW</span></a></li>
                <li><a href="#" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md">NEW ARRIVALS</a></li>
                <li><a href="#" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md">ARTIST</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;