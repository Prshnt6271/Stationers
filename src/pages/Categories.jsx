import React from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const baseClasses =
    "cursor-pointer p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center min-h-[120px] \
    transition-all duration-300 transform hover:scale-110 active:scale-95 hover:brightness-110 \
    hover:[&>h2]:scale-110 active:[&>h2]:scale-95";

  const textClasses = "text-xl font-semibold text-white transition-transform duration-300";

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        
        <div onClick={() => navigate("/products#toys")} className={`${baseClasses} bg-red-600`}>
          <h2 className={textClasses}>Toys</h2>
        </div>

        <div onClick={() => navigate("/products#office")} className={`${baseClasses} bg-blue-400`}>
          <h2 className={textClasses}>Office Supply</h2>
        </div>

        <div onClick={() => navigate("/products#stationery")} className={`${baseClasses} bg-green-600`}>
          <h2 className={textClasses}>School Stationery</h2>
        </div>

        <div onClick={() => navigate("/products#decoration")} className={`${baseClasses} bg-yellow-400`}>
          <h2 className={textClasses}>Decoration</h2>
        </div>

      </div>
    </div>
  );
}

export default Categories;
