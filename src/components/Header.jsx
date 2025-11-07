import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/2.webp';

function Header() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const productsDropdownRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const brandsDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileBrandsRef = useRef(null);
  const mobileProductsRef = useRef(null);
  const searchRef = useRef(null);

  const navigate = useNavigate();

  const brandNames = ["doms", "miles", "munix", "kores", "cello", "natraj", "saino", "pierre"];

  useEffect(() => {
    function handleClickOutside(event) {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setIsCategoryDropdownOpen(false);
      }
      if (brandsDropdownRef.current && !brandsDropdownRef.current.contains(event.target)) {
        setIsBrandsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
        if (event.target.closest('button[aria-label="Toggle mobile menu"]') === null) {
          setIsMobileMenuOpen(false);
        }
      }
      if (mobileBrandsRef.current && !mobileBrandsRef.current.contains(event.target)) {
        setIsMobileBrandsOpen(false);
      }
      if (mobileProductsRef.current && !mobileProductsRef.current.contains(event.target)) {
        setIsMobileProductsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle search input changes and show suggestions
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim().length > 0) {
      const normalizedQuery = value.trim().toLowerCase();
      const matchedBrands = brandNames.filter(brand => 
        brand.startsWith(normalizedQuery)
      );
      setSuggestions(matchedBrands);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Check if the search query matches any brand name (case insensitive)
    const normalizedQuery = searchQuery.trim().toLowerCase();
    
    // Find if the search query matches any brand
    const matchedBrand = brandNames.find(brand => 
      normalizedQuery.includes(brand) || brand.includes(normalizedQuery)
    );
    
    if (matchedBrand) {
      // If a brand is found in the search, navigate to that brand's page
      navigate(`/brands#${matchedBrand.toLowerCase()}`);
    } else if (normalizedQuery) {
      // If it's a general search, navigate to search results page with the query
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
    
    setSearchQuery('');
    setShowSuggestions(false);
    setIsMobileMenuOpen(false);
  };

  const handleSuggestionClick = (brand) => {
    setSearchQuery(brand);
    setShowSuggestions(false);
    
    // Navigate directly to the brand page
    navigate(`/brands#${brand.toLowerCase()}`);
  };

  const toggleProductsDropdown = () => setIsProductsDropdownOpen(!isProductsDropdownOpen);
  const toggleCategoryDropdown = () => setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  const toggleBrandsDropdown = () => setIsBrandsDropdownOpen(!isBrandsDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileBrands = () => setIsMobileBrandsOpen(!isMobileBrandsOpen);
  const toggleMobileProducts = () => setIsMobileProductsOpen(!isMobileProductsOpen);

  const handleBrandClick = (brand) => {
    if (brand === 'all') {
      navigate('/brands');
    } else {
      navigate(`/brands#${brand.toLowerCase()}`);
    }
    setIsBrandsDropdownOpen(false);
    setIsMobileBrandsOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg font-inter">
      {/* Main Header */}
     <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between bg-blue-800">
  {/* Logo Section */}
  <div className="flex-shrink-0 mb-4 md:mb-0 transform scale-140 origin-left"> {/* Scale and set transform origin */}
    <Link to="/" className="flex items-center group">
      <img 
        src={logo} 
        alt="Kundkund Stationers" 
        className="h-35 w-40"
      />
    </Link>
  </div>

        {/* Search Bar with Suggestions */}
        <div className="w-full md:w-auto md:flex-1 md:max-w-xl mx-0 md:mx-8 mb-4 md:mb-0 relative" ref={searchRef}>
          <form onSubmit={handleSearch} className="relative flex">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                placeholder="Search for  brands..."
                className="w-full p-3 pl-5 pr-12 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm shadow-sm"
                style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-white hover:text-blue-300 focus:outline-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
          
          {/* Search Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-40">
              <ul className="py-1">
                {suggestions.map((brand, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => handleSuggestionClick(brand)}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-700 capitalize"
                    >
                      {brand}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Toggles */}
        <div className="flex items-center space-x-4 sm:space-x-6 justify-end w-full md:w-auto">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-blue-300 p-2 rounded-full hover:bg-blue-700 transition"
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
      <nav className="hidden md:block bg-blue-800 text-white py-3 px-4 sm:px-6 md:px-8 shadow-inner ">
        <ul className="flex justify-center space-x-6 text-sm font-medium items-center ml-45">
          <li>
            <Link to="/" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
              HOME
            </Link>
          </li>

          {/* Brands Dropdown */}
          <li className="relative" ref={brandsDropdownRef}>
            <button
              onClick={toggleBrandsDropdown}
              className="flex items-center hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md focus:outline-none transition-colors duration-200"
            >
              BRANDS
              <svg className={`w-4 h-4 ml-1 transform transition-transform ${isBrandsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isBrandsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
                <button
                  onClick={() => handleBrandClick('all')}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-semibold border-b border-gray-200"
                >
                  All Brands
                </button>
                {["Doms", "Miles", "Munix", "Kores","Cello","Natraj","Saino","Pierre"].map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleBrandClick(brand)}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}
          </li>

          {/* Products Dropdown */}
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
                <Link to="/products#office" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Office</Link>
                <Link to="/products#stationary" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Stationary</Link>
                <Link to="/products#toys" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Toys</Link>
                <Link to="/products#decoration" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Decoration</Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/AboutUs" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-blue-800 z-30" onClick={toggleMobileMenu}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl p-6 overflow-y-auto"
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
              <ul className="flex flex-col space-y-2 text-lg">
                <li>
                  <Link to="/" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md" onClick={toggleMobileMenu}>
                    HOME
                  </Link>
                </li>

                {/* Mobile Brands Dropdown */}
                <li className="relative" ref={mobileBrandsRef}>
                  <button
                    onClick={toggleMobileBrands}
                    className="flex items-center justify-between w-full py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md focus:outline-none"
                  >
                    <span>BRANDS</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform ${isMobileBrandsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileBrandsOpen && (
                    <div className="ml-4 mt-1 bg-gray-50 rounded-md overflow-hidden">
                      <button
                        onClick={() => handleBrandClick('all')}
                        className="block w-full text-left px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700 font-semibold border-b border-gray-200"
                      >
                        All Brands
                      </button>
                      {["Doms", "Munix", "Miles", "Kores","Cello","Natraj","Saino","Pierre"].map((brand) => (
                        <button
                          key={brand}
                          onClick={() => handleBrandClick(brand)}
                          className="block w-full text-left px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700"
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  )}
                </li>

                {/* Mobile Products Dropdown */}
                <li className="relative" ref={mobileProductsRef}>
                  <button
                    onClick={toggleMobileProducts}
                    className="flex items-center justify-between w-full py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md focus:outline-none"
                  >
                    <span>PRODUCTS</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileProductsOpen && (
                    <div className="ml-4 mt-1 bg-gray-50 rounded-md overflow-hidden">
                      <Link to="/products#office" className="block px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700" onClick={toggleMobileMenu}>Office</Link>
                      <Link to="/products#stationary" className="block px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700" onClick={toggleMobileMenu}>Stationary</Link>
                      <Link to="/products#toys" className="block px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700" onClick={toggleMobileMenu}>Toys</Link>
                      <Link to="/products#decoration" className="block px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700" onClick={toggleMobileMenu}>Decoration</Link>
                    </div>
                  )}
                </li>

                <li>
                  <Link to="/AboutUs" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md" onClick={toggleMobileMenu}>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/ContactUs" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md" onClick={toggleMobileMenu}>
                    CONTACT US
                  </Link>
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