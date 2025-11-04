import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

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

  // Calculate total items count
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare order details message without prices
    const orderDetails = cartItems.map(item => 
      `${item.category} - Product ${item.imageIndex + 1} (Quantity: ${item.quantity})`
    ).join("%0A");
    
    const totalItems = calculateTotalItems();
    
    const message = `NEW ORDER INQUIRY%0A%0A%0A*CUSTOMER DETAILS:*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0A%0A*ORDER DETAILS:*%0A%0A${orderDetails}%0A%0ATotal Items: ${totalItems}%0A%0A%0AThank you for your order! Please contact us for pricing details.`;
    
    // WhatsApp business number (replace with your actual number)
    const whatsappNumber = "1234567890";
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb / Steps */}
        <div className="flex justify-center space-x-6 text-lg font-semibold mb-10">
          <span className="text-blue-600 underline">SHOPPING CART</span>
          <span className="text-gray-400">→</span>
          <span className="text-gray-500">CHECKOUT</span>
          <span className="text-gray-400">→</span>
          <span className="text-gray-500">ORDER COMPLETE</span>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Cart Header */}
          <div className="bg-gray-100 px-6 py-4 border-b">
            <h1 className="text-xl font-bold text-gray-800">
              Your Cart ({calculateTotalItems()} {calculateTotalItems() === 1 ? 'item' : 'items'})
            </h1>
          </div>

          {/* Cart Items */}
          <div className="p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-500 text-lg mb-4">Your cart is empty</div>
                <Link
                  to="/products"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    {/* Product Info */}
                    <div className="flex items-center space-x-4 flex-1">
                      <img
                        src={item.imageSrc}
                        alt={item.category}
                        className="w-16 h-16 object-contain rounded border"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {item.category}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Product {item.imageIndex + 1}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
                        >
                          -
                        </button>
                        <span className="px-3 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 ml-4"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Checkout Section */}
            {cartItems.length > 0 && (
              <div className="mt-8 border-t pt-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-lg font-semibold">
                    Total Items: {calculateTotalItems()}
                  </div>
                  
                  <button 
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                  >
                    {showForm ? "Hide Checkout Form" : "Proceed to Checkout"}
                  </button>
                </div>

                {/* Customer Information Form */}
                {showForm && (
                  <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Customer Information</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition duration-200 mt-2"
                      >
                        Submit Order via WhatsApp
                      </button>
                    </div>
                  </form>
                )}

                <div className="text-center mt-6">
                  <Link
                    to="/products"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;