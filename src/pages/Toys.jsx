import React, { useEffect } from "react";

function Toys() {
  const toyImages = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
  ];

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Toys</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {toyImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Toy"
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}

export default Toys;
