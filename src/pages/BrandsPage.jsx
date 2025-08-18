import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// ✅ Import your own images for Doms
import D1 from "../assets/Brand/D1.jpg";
import D2 from "../assets/Brand/D2.jpg";
import D3 from "../assets/Brand/D3.jpg";
import D4 from "../assets/Brand/D4.jpg";
import D5 from "../assets/Brand/D5.jpg";
import D6 from "../assets/Brand/D6.jpg";
import D7 from "../assets/Brand/D7.jpg";
import D8 from "../assets/Brand/D8.jpg";
import D9 from "../assets/Brand/D9.jpg";
import D10 from "../assets/Brand/D10.jpg";

// ✅ Import your PDF
import DomsPDF from "../assets/Brand/Doms.pdf";

const brandsData = [
  {
    name: "Doms",
    images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10], // ✅ 10 images
    pdf: DomsPDF, // ✅ PDF file
  },
  {
    name: "Waterflow",
    images: [
      "https://picsum.photos/400/300?random=5",
      "https://picsum.photos/400/300?random=6",
      "https://picsum.photos/400/300?random=7",
      "https://picsum.photos/400/300?random=8",
    ],
  },
  {
    name: "Flair",
    images: [
      "https://picsum.photos/400/300?random=9",
      "https://picsum.photos/400/300?random=10",
      "https://picsum.photos/400/300?random=11",
      "https://picsum.photos/400/300?random=12",
    ],
  },
  {
    name: "Fevicol",
    images: [
      "https://picsum.photos/400/300?random=13",
      "https://picsum.photos/400/300?random=14",
      "https://picsum.photos/400/300?random=15",
      "https://picsum.photos/400/300?random=16",
    ],
  },
  {
    name: "Kores",
    images: [
      "https://picsum.photos/400/300?random=17",
      "https://picsum.photos/400/300?random=18",
      "https://picsum.photos/400/300?random=19",
      "https://picsum.photos/400/300?random=20",
    ],
  },
  {
    name: "Montex",
    images: [
      "https://picsum.photos/400/300?random=21",
      "https://picsum.photos/400/300?random=22",
      "https://picsum.photos/400/300?random=23",
      "https://picsum.photos/400/300?random=24",
    ],
  },
  {
    name: "Cello",
    images: [
      "https://picsum.photos/400/300?random=25",
      "https://picsum.photos/400/300?random=26",
      "https://picsum.photos/400/300?random=27",
      "https://picsum.photos/400/300?random=28",
    ],
  },
  {
    name: "Unomax",
    images: [
      "https://picsum.photos/400/300?random=29",
      "https://picsum.photos/400/300?random=30",
      "https://picsum.photos/400/300?random=31",
      "https://picsum.photos/400/300?random=32",
    ],
  },
];

function BrandsPage() {
  const location = useLocation();
  const brandRefs = useRef({});

  useEffect(() => {
    if (location.hash) {
      const brand = location.hash.replace("#", "");
      if (brandRefs.current[brand]) {
        brandRefs.current[brand].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Our Brands</h1>
      {brandsData.map((brand) => (
        <div
          key={brand.name}
          id={brand.name.toLowerCase()}
          ref={(el) => (brandRefs.current[brand.name.toLowerCase()] = el)}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">{brand.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brand.images.map((img, i) => {
              // ✅ Replace the last image of DOMS with PDF card
              if (brand.name === "Doms" && i === brand.images.length - 1) {
                return (
                  <a
                    key="doms-pdf"
                    href={brand.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-64 border-2 border-dashed border-gray-400 rounded-lg shadow-lg hover:bg-gray-100 transition"
                  >
                    <span className="text-lg font-semibold text-gray-700">
                      📄 View Doms PDF
                    </span>
                  </a>
                );
              }
              return (
                <img
                  key={i}
                  src={img}
                  alt={`${brand.name} product ${i + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300"
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrandsPage;
