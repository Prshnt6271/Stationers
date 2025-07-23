import React from 'react';
import ProductCategories from '../components/ProductCategories';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8 mt-4">
      <HeroSection />

      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
        Welcome to Sitaram Stationers
      </h1>
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Explore our wide range of high-quality stationery and art supplies. We are committed to providing the best products for all your creative and professional needs.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[
          {
            title: "Art Supplies",
            description: "Discover paints, brushes, canvases, and more for your artistic endeavors."
          },
          {
            title: "Office Stationery",
            description: "From pens to paper, find everything you need for a productive workspace."
          },
          {
            title: "Books & Journals",
            description: "A curated collection of notebooks, diaries, and specialized books."
          }
        ].map(({ title, description }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>

      <ProductCategories />

      {/* Tagline */}
      <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mt-12 flex items-center justify-center text-gray-600 text-xl font-medium shadow-inner">
        Your Creative Journey Starts Here!
      </div>
    </main>
    
  );
}
