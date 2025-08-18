import React, { useEffect } from "react";

function SchoolStationary() {
  const schoolImages = [
    "https://picsum.photos/300/200?random=7",
    "https://picsum.photos/300/200?random=8",
    "https://picsum.photos/300/200?random=9",
  ];

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">School Stationary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {schoolImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="School"
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}

export default SchoolStationary;
