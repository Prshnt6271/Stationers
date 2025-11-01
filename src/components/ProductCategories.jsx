import React from "react";
import { useNavigate } from "react-router-dom";

import sticky from "../assets/productCat/sticky.webp";
import ring from "../assets/productCat/ring.webp";
import coppies from "../assets/productCat/coppies.jpg";
import markers from "../assets/productCat/markers.webp";
import files from "../assets/productCat/files.webp";
import punch from "../assets/productCat/punch.webp";
import fileholder from "../assets/productCat/fileholder.webp";
import highliter from "../assets/productCat/highliter.webp";
import organ from "../assets/productCat/organ.jpg";
import notebooks from "../assets/productCat/notebooks.webp";
import toys from "../assets/productCat/toys.jpg";
import pen from "../assets/productCat/pen.webp";
import notebok from "../assets/productCat/notebok.webp";

const categories = [
  {
    id: 1,
    name: "Ring Binder",
    description: "Durable binders for organizing documents",
    section: "Office",
    size: "xlarge",
    image: ring,
  },
  {
    id: 2,
    name: "Premium Pens",
    description: "Smooth-writing premium pens",
    section: "School Stationary",
    size: "wide",
    image: pen,
  },
  {
    id: 3,
    name: "Notebooks",
    description: "Quality notebooks for notes & sketches",
    section: "School Stationary",
    size: "square",
    image: notebooks,
  },
  {
    id: 4,
    name: "Markers",
    description: "Vibrant and long-lasting markers",
    section: "School Stationary",
    size: "square",
    image: markers,
  },
  {
    id: 5,
    name: "Highlighters",
    description: "Bright highlighters to emphasize",
    section: "School Stationary",
    size: "wide",
    image: highliter,
  },
  {
    id: 6,
    name: "Sticky Notes",
    description: "Convenient sticky notes for reminders",
    section: "School Stationary",
    size: "wide",
    image: sticky,
  },
];

const moreCategories = [
  {
    id: 7,
    name: "File Folder",
    description: "Organize your papers with file folders",
    section: "Office",
    size: "xlarge",
    image: files,
  },
  {
    id: 8,
    name: "Document Holder",
    description: "Secure holders for documents",
    section: "Office",
    size: "wide",
    image: fileholder,
  },
  {
    id: 9,
    name: "Punch, Staplers",
    description: "Reliable punching and stapling tools",
    section: "School Stationary",
    size: "square",
    image: punch,
  },
  {
    id: 10,
    name: "Organizers",
    description: "Keep your workspace tidy and efficient",
    section: "School Stationary",
    size: "square",
    image: organ,
  },
  {
    id: 11,
    name: "Copier papers",
    description: "High-quality papers for printing",
    section: "Office",
    size: "wide",
    image: coppies,
  },
  {
    id: 12,
    name: "Educational Toys",
    description: "Engaging toys that educate",
    section: "Toys",
    size: "wide",
    image: toys,
  },
  {
    id: 13,
    name: "Exercise Notebook",
    description: "Track your exercises and goals",
    section: "School Stationary",
    size: "wide",
    image: notebok,
    extraClass: "md:col-span-2 md:col-start-2",
  },
];

function CategoryCard({ category, onClick }) {
  const sizeClasses = {
    wide: `col-span-2 min-h-[220px] md:min-h-[260px] w-full`,
    square: `h-52 sm:h-60 w-full`,
    xlarge: "col-span-2 row-span-2 w-full h-full",
  };

  return (
    <button
      onClick={() => onClick(category.section)}
      className={`flex flex-col items-center justify-end relative overflow-hidden 
        ${sizeClasses[category.size]} ${category.extraClass || ""} 
        text-center group border border-gray-200`}
    >
      <img
        src={category.image}
        alt={category.name}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      {category.size === "xlarge" && (
        <div className="absolute inset-14 z-10 "></div>
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
    </button>
  );
}

export default function ProductCategories() {
  const navigate = useNavigate();

  const handleCategoryClick = (section) => {
    // Navigate to ProductPage and pass section via state
    navigate("/products", { 
      state: { scrollToSection: section }
    });
  };

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

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr mb-16">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} onClick={handleCategoryClick} />
          ))}
        </div>

        {/* More Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
          {moreCategories.map((c) => (
            <CategoryCard key={c.id} category={c} onClick={handleCategoryClick} />
          ))}
        </div>
      </div>
    </section>
  );
}