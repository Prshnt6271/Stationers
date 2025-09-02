import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  // Remove item
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Update quantity
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Steps */}
        <div className="flex justify-center space-x-6 text-lg font-semibold mb-10">
          <span className="text-blue-600 underline">SHOPPING CART</span>
          <span className="text-gray-400">→</span>
          <span className="text-gray-500">CHECKOUT</span>
          <span className="text-gray-400">→</span>
          <span className="text-gray-500">ORDER COMPLETE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Cart Table */}
          <div className="lg:col-span-2 bg-white shadow rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3 text-center">Quantity</th>
                  <th className="px-4 py-3 text-right">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center py-6 text-gray-500">
                      Your cart is empty.
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="px-4 py-4 flex items-center space-x-4">
                        <img
                          src={item.imageSrc}
                          alt={item.brand}
                          className="w-16 h-16 object-contain rounded border"
                        />
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {item.brand}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Product {item.imageIndex + 1}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Right - Summary Box */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">CART SUMMARY</h2>
            <p className="text-gray-600 mb-6">
              You have <span className="font-bold">{cartItems.length}</span>{" "}
              {cartItems.length === 1 ? "item" : "items"} in your cart.
            </p>

            <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>

            <Link
              to="/brands"
              className="block text-center mt-4 text-blue-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
