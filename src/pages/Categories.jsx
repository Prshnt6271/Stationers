import React from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      {/* Updated Responsive Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div
          onClick={() => navigate("/products#toys")}
          className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center min-h-[120px]"
        >
          <h2 className="text-xl font-semibold text-blue-600">Toys</h2>
        </div>

        <div
          onClick={() => navigate("/products#office")}
          className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center min-h-[120px]"
        >
          <h2 className="text-xl font-semibold text-blue-600">Office Supply</h2>
        </div>

        <div
          onClick={() => navigate("/products#stationery")}
          className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center min-h-[120px]"
        >
          <h2 className="text-xl font-semibold text-blue-600">School Stationery</h2>
        </div>

        <div
          onClick={() => navigate("/products#decoration")}
          className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center min-h-[120px]"
        >
          <h2 className="text-xl font-semibold text-blue-600">Decoration</h2>
        </div>
      </div>
    </div>
  );
}

export default Categories;