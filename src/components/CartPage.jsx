import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function CartPage({ cartItems, removeFromCart }) {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Your Cart</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            &larr; Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg md:text-xl p-8">
            <p>Your cart is empty. Start adding some products to get an enquiry!</p>
          </div>
        ) : (
          <div>
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div className="flex items-center space-x-4 mb-4 md:mb-0 w-full md:w-auto">
                    <img 
                      src={item.image} 
                      alt={item.brandName} 
                      className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow-md" 
                    />
                    <div className="flex-1">
                      <h2 className="text-lg md:text-xl font-semibold text-gray-900">{item.brandName}</h2>
                      <p className="text-gray-600 text-sm md:text-base">Product added</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Remove from cart"
                    >
                      <FaTrashAlt className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm md:text-base"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-right">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors text-lg font-semibold">
                Proceed to Enquiry
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;