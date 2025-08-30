import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  // Update localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Update quantity of a specific item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Your Cart</h1>
          <Link 
            to="/brands" 
            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link 
              to="/brands" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="hidden md:grid grid-cols-12 bg-gray-100 px-4 py-3 text-gray-600 font-medium">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                </div>
                
                {cartItems.map(item => (
                  <div key={item.id} className="grid grid-cols-12 border-b border-gray-100 px-4 py-6 items-center">
                    {/* Product Info */}
                    <div className="col-span-12 md:col-span-5 flex items-center mb-4 md:mb-0">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 mr-3"
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <img 
                        src={item.imageSrc} 
                        alt={`${item.brand} product ${item.imageIndex + 1}`} 
                        className="h-16 w-16 object-contain border rounded"
                      />
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-800">{item.brand}</h3>
                        <p className="text-xs text-gray-500">Product #{item.imageIndex + 1}</p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="col-span-4 md:col-span-2 flex md:block justify-between md:justify-center mb-4 md:mb-0">
                      <span className="md:hidden text-gray-600 font-medium">Price:</span>
                      <span className="text-gray-800 font-medium">${item.price.toFixed(2)}</span>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="col-span-4 md:col-span-3 flex md:block justify-between md:justify-center mb-4 md:mb-0">
                      <span className="md:hidden text-gray-600 font-medium">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:text-gray-800"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:text-gray-800"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Subtotal */}
                    <div className="col-span-4 md:col-span-2 flex md:block justify-between md:justify-end">
                      <span className="md:hidden text-gray-600 font-medium">Subtotal:</span>
                      <span className="text-gray-800 font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Cart Actions */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Coupon code"
                    className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-900 transition duration-200">
                    Apply
                  </button>
                </div>
                <button 
                  onClick={() => setCartItems([])}
                  className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800 font-medium">${calculateTotal().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800 font-medium">$10.00</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-800 font-medium">
                      ${(calculateTotal() * 0.1).toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>
                      ${(calculateTotal() + 10 + (calculateTotal() * 0.1)).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
                  Proceed to Checkout
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  You won't be charged until the next step
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;