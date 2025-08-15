import React from 'react';
import sticky from '../assets/productCat/sticky.jpg';
import ring from '../assets/productCat/ring.jpg';
import coppies from '../assets/productCat/coppies.jpg';
import markers from '../assets/productCat/markers.jpg';
import files from '../assets/productCat/files.jpg';
import punch from '../assets/productCat/punch.jpg';
import fileholder from '../assets/productCat/fileholder.jpg';
import highliter from '../assets/productCat/highliter.jpg';
import organiser from '../assets/productCat/organiser.jpg';
import notebooks from '../assets/productCat/notebooks.jpg';
import toys from '../assets/productCat/toys.jpg';
import pens from '../assets/productCat/pens.jpg';
import notebok from '../assets/productCat/notebok.jpg'; // make sure file name is exactly correct

const categories = [
  {
    id: 1,
    name: "Ring Binder",
    description: "Durable binders for organizing documents",
    link: "#",
    size: "xlarge",
    image: ring
  },
  {
    id: 2,
    name: "Premium Pens",
    description: "Smooth-writing premium pens",
    link: "#",
    size: "wide",
    image: pens
  },
  {
    id: 3,
    name: "Notebooks",
    description: "Quality notebooks for notes & sketches",
    link: "#",
    size: "square",
    image: notebooks
  },
  {
    id: 4,
    name: "Markers",
    description: "Vibrant and long-lasting markers",
    link: "#",
    size: "square",
    image: markers
  },
  {
    id: 5,
    name: "Highlighters",
    description: "Bright highlighters to emphasize",
    link: "#",
    size: "wide",
    image: highliter
  },
  {
    id: 6,
    name: "Sticky Notes",
    description: "Convenient sticky notes for reminders",
    link: "#",
    size: "wide",
    image: sticky
  },
];

const moreCategories = [
  {
    id: 7,
    name: "File Folder",
    description: "Organize your papers with file folders",
    link: "#",
    size: "xlarge",
    image: files
  },
  {
    id: 8,
    name: "Document Holder",
    description: "Secure holders for documents",
    link: "#",
    size: "wide",
    image: fileholder
  },
  {
    id: 9,
    name: "Punch, Staplers",
    description: "Reliable punching and stapling tools",
    link: "#",
    size: "square",
    image: punch
  },
  {
    id: 10,
    name: "Organizers",
    description: "Keep your workspace tidy and efficient",
    link: "#",
    size: "square",
    image: organiser
  },
  {
    id: 11,
    name: "Copier papers",
    description: "High-quality papers for printing",
    link: "#",
    size: "wide",
    image: coppies
  },
  {
    id: 12,
    name: "Educational Toys",
    description: "Engaging toys that educate",
    link: "#",
    size: "wide",
    image: toys
  },
  {
    id: 13,
    name: "Exercise Notebook",
    description: "Track your exercises and goals",
    link: "#",
    size: "wide",
    image: notebok
  },
];

function CategoryCard({ category }) {
  const sizeClasses = {
    wide: `col-span-2 min-h-[220px] md:min-h-[260px] w-full`,
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

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr mb-16">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>

        {/* More Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
          {moreCategories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
