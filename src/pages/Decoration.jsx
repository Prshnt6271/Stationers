import React, { useEffect } from "react";

function Decoration() {
  const decorationImages = [
    "https://picsum.photos/300/200?random=10",
    "https://picsum.photos/300/200?random=11",
    "https://picsum.photos/300/200?random=12",
  ];

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Decoration</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {decorationImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Decoration"
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}

export default Decoration;
