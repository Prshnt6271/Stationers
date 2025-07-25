import React from "react";
// Correct import paths from components folder
import ProductCategories from "../components/ProductCategories";
import BrandCard from "../components/BrandsSection";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8 mt-4">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">Welcome to Sitaram Stationers</h1>
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Explore our wide range of high-quality stationery and art supplies. We are committed to providing the best products for all your creative and professional needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Art Supplies</h2>
          <p className="text-gray-700">Discover paints, brushes, canvases, and more for your artistic endeavors.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Office Stationery</h2>
          <p className="text-gray-700">From pens to paper, find everything you need for a productive workspace.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Books & Journals</h2>
          <p className="text-gray-700">A curated collection of notebooks, diaries, and specialized books.</p>
        </div>
      </div>
      
      <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mt-12 flex items-center justify-center text-gray-600 text-xl font-medium shadow-inner">
        Your Creative Journey Starts Here!
      </div>

      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <BrandCard />
    </main>
  );
}