import React from "react";
import ProductCategories from "../components/ProductCategories";
import BrandCard from "../components/BrandsSection";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8 mt-4">
      <HeroSection />
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">Welcome to Kundkund Stationers</h1>
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Explore our wide range of high-quality stationery and art supplies. We are committed to providing the best products for all your creative and professional needs.
      </p>
      
      {/* Updated Categories Section - Equal width horizontal layout */}
      <div className="flex flex-nowrap overflow-x-auto py-4 gap-20 mt-12 scrollbar-hide">
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Toys</h2>
        </div>
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Office Supply</h2>
        </div>
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">School Stationary</h2>
        </div>
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Decoration</h2>
        </div>
      </div>

      <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mt-12 p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <blockquote className="max-w-3xl text-center">
          <svg 
            className="w-8 h-8 text-blue-400 mb-4 mx-auto" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl md:text-3xl font-serif italic text-gray-700 leading-relaxed">
            "There was something very comfortable in having plenty of stationery."
          </p>
          <cite className="mt-4 block text-lg font-medium text-gray-600 not-italic">
            — Charles Dickens, <span className="text-blue-600">Great Expectations</span>
          </cite>
        </blockquote>
      </div>

      <ProductCategories />
      <FeaturedProducts />
      <BrandCard />
    </main>
  );
}