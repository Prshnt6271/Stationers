import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-lg font-inter">
      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <a href="/" className="flex items-center group">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <h1 className="text-lg md:text-xl font-bold tracking-wide">
                <span className="text-yellow-300">K</span>undkund
                <span className="block text-sm font-medium opacity-90 -mt-1">STATIONERS</span>
              </h1>
            </div>
          </a>
        </div>

        {/* Centered Search Bar */}
        <div className="w-full md:w-auto md:flex-1 md:max-w-xl mx-0 md:mx-8 mb-4 md:mb-0">
          <form onSubmit={handleSearch} className="relative flex">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full p-3 pl-5 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm shadow-sm"
              />
              <button 
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-blue-600 focus:outline-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <div className="relative ml-2" ref={categoryDropdownRef}>
              <button
                type="button"
                onClick={toggleCategoryDropdown}
                className="h-full p-3 px-4 border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center text-sm transition-colors duration-200 rounded-full whitespace-nowrap"
              >
                Categories
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
          </form>
        </div>

        {/* Right Mobile Toggles */}
        <div className="flex items-center space-x-4 sm:space-x-6 justify-end w-full md:w-auto">
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
        <ul className="flex justify-center space-x-6 text-sm font-medium items-center">
          <li>
            <a href="#" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
              BRANDS
            </a>
          </li>
          <li className="relative" ref={productsDropdownRef}>
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md focus:outline-none transition-colors duration-200"
            >
              PRODUCTS
              <svg className={`w-4 h-4 ml-1 transform transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Office</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Stationary</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Toys</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Decoration</a>
              </div>
            )}
          </li>
          <li>
            <a href=" /AboutUs" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="/ContactUs" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
              CONTACT US
            </a>
          </li>
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
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Office</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Stationary</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Toys</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-md">Decoration</a>
                    </div>
                  )}
                </li>
                <li><a href="#" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md">ABOUT US</a></li>
                <li><a href="#" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md">CONTACT US</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;