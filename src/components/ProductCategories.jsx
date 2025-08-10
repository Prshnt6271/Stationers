import React from 'react';
import Brush from '../assets/productCat/Brush.jpg';
import ink from '../assets/productCat/ink.jpg';
import plate from '../assets/productCat/plate.jpg';
import sketch from '../assets/productCat/sketch.jpg';

const categories = [
  {
    id: 34,
    name: "Brush Bar & Auxiliaries",
    description: "Premium brushes and painting tools",
    link: "#",
    size: "xlarge",
    image: Brush
  },
  {
    id: 2,
    name: "Color Carnival",
    description: "Vibrant colors for your artwork",
    link: "#",
    size: "wide",
    image: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Mediums & Varnishes",
    description: "Finishing and texture products",
    link: "#",
    size: "square",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Hobby Hub",
    description: "Supplies for casual artists",
    link: "#",
    size: "square",
    image: "https://images.unsplash.com/photo-1613243555978-636c48dc653c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Young Picasso & Canvas",
    description: "Art materials for children and various canvas types",
    link: "#",
    size: "wide",
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Ink & Imagination",
    description: "Ink products for artists",
    link: "#",
    size: "wide",
    image: ink
  },
];

const moreCategories = [
  {
    id: 101,
    name: "Sketch Master",
    description: "Perfect tools for sketching brilliance",
    link: "#",
    size: "xlarge",
    image: sketch
  },
  {
    id: 102,
    name: "Palette Play",
    description: "Vibrant palettes for your art blends",
    link: "#",
    size: "wide",
    image: plate
  },
  {
    id: 103,
    name: "Canvas Cove",
    description: "Canvas collection for every creation",
    link: "#",
    size: "square",
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 104,
    name: "Art Essentials",
    description: "Basic tools every artist needs",
    link: "#",
    size: "square",
    image: "https://plus.unsplash.com/premium_photo-1682125164600-e7493508e496?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 105,
    name: "Studio Gear",
    description: "Gear up your personal studio",
    link: "#",
    size: "wide",
    image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 106,
    name: "Creative Storage",
    description: "Organize your creative tools",
    link: "#",
    size: "wide",
    image: "https://images.unsplash.com/photo-1638847868668-a05a2f69622f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

function CategoryCard({ category }) {
  const sizeClasses = {
    wide: `col-span-2 min-h-[180px] w-full`,
    square: `h-52 sm:h-60 w-full`,
    xlarge: "col-span-2 row-span-2 w-full h-full"
  };

  return (
    <a
      href={category.link}
      className={`flex flex-col items-center justify-end relative overflow-hidden ${sizeClasses[category.size]} text-center group border border-gray-200`}
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {category.size === "xlarge" && (
        <div className="absolute inset-14 bg-gray-200/80 z-10 border border-gray-300"></div>
      )}

      <div className="relative z-20 p-4 w-full text-white transform transition-all duration-300 group-hover:-translate-y-2">
        <h3 className="text-xl font-bold uppercase mb-1 group-hover:text-blue-300 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
          {category.description}
        </p>
      </div>

      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-500 z-10"></div>
    </a>
  );
}

export default function ProductCategories() {
  return (
    <section className="bg-gray-50 py-16 font-sans text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block text-blue-700 px-4 py-2 mb-4">
            EXPLORE OUR COLLECTION
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            PRODUCT CATEGORIES
          </h2>
        </div>

        {/* First Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr mb-16">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Repeated Grid with new names & images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
          {moreCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}