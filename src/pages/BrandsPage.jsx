import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const brandsData = [
  {
    name: "Doms",
    images: [
      "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
       "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
         "https://picsum.photos/400/300?random=5",
      "https://picsum.photos/400/300?random=6",
      "https://picsum.photos/400/300?random=7",
      "https://picsum.photos/400/300?random=8",
    
    ],
  },
  {
    name: "Waterflow",
    images: [
      "https://picsum.photos/400/300?random=5",
      "https://picsum.photos/400/300?random=6",
      "https://picsum.photos/400/300?random=7",
      "https://picsum.photos/400/300?random=8",
       "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
       "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
       "https://picsum.photos/400/300?random=5",
      "https://picsum.photos/400/300?random=6",
 
    ],
  },
  {
    name: "Flair",
    images: [
      "https://picsum.photos/400/300?random=9",
      "https://picsum.photos/400/300?random=10",
      "https://picsum.photos/400/300?random=11",
      "https://picsum.photos/400/300?random=12",
       "https://picsum.photos/400/300?random=5",
      "https://picsum.photos/400/300?random=6",
      "https://picsum.photos/400/300?random=7",
      "https://picsum.photos/400/300?random=8",
       "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
       "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
 
    ],
  },
  {
    name: "Fevicol",
    images: [
      "https://picsum.photos/400/300?random=13",
      "https://picsum.photos/400/300?random=14",
      "https://picsum.photos/400/300?random=15",
      "https://picsum.photos/400/300?random=16",
       "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
       "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
       "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",

    ],
  },
  {
    name: "Kores",
    images: [
      "https://picsum.photos/400/300?random=17",
      "https://picsum.photos/400/300?random=18",
      "https://picsum.photos/400/300?random=19",
      "https://picsum.photos/400/300?random=20",
       "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
       "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
       "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",

    ],
  },
  {
    name: "Montex",
    images: [
      "https://picsum.photos/400/300?random=21",
      "https://picsum.photos/400/300?random=22",
      "https://picsum.photos/400/300?random=23",
      "https://picsum.photos/400/300?random=24",
        "https://picsum.photos/400/300?random=17",
      "https://picsum.photos/400/300?random=18",
      "https://picsum.photos/400/300?random=19",
      "https://picsum.photos/400/300?random=20",
       "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
       "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
     

    
    ],
  },
  {
    name: "Cello",
    images: [
        "https://picsum.photos/400/300?random=29",
      "https://picsum.photos/400/300?random=30",
      "https://picsum.photos/400/300?random=31",
      "https://picsum.photos/400/300?random=25",
      "https://picsum.photos/400/300?random=26",
      "https://picsum.photos/400/300?random=27",
      "https://picsum.photos/400/300?random=28",
        "https://picsum.photos/400/300?random=17",
      "https://picsum.photos/400/300?random=18",
      "https://picsum.photos/400/300?random=19",
      "https://picsum.photos/400/300?random=20",
       "https://picsum.photos/400/300?random=19",


    
    ],
  },
  {
    name: "Unomax",
    images: [
      "https://picsum.photos/400/300?random=29",
      "https://picsum.photos/400/300?random=30",
      "https://picsum.photos/400/300?random=31",
      "https://picsum.photos/400/300?random=32",
          "https://picsum.photos/400/300?random=25",
      "https://picsum.photos/400/300?random=26",
      "https://picsum.photos/400/300?random=27",
      "https://picsum.photos/400/300?random=28",
        "https://picsum.photos/400/300?random=29",
      "https://picsum.photos/400/300?random=30",
      "https://picsum.photos/400/300?random=31",
             "https://picsum.photos/400/300?random=3",


    
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
          ref={(el) =>
            (brandRefs.current[brand.name.toLowerCase()] = el)
          }
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">{brand.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brand.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${brand.name} product ${i + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrandsPage;
