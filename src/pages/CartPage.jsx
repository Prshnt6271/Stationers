import React, { useState } from "react";
import { useCart } from "../CartContext";

function CartPage() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! We will contact you soon.");
    clearCart();
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {cartItems.map((item, i) => (
              <div key={i} className="border rounded-lg shadow p-4 flex flex-col items-center">
                <img src={item.img} alt={item.brand} className="h-40 object-contain mb-3" />
                <p className="font-semibold">{item.brand}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Fill Your Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full border rounded p-2" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full border rounded p-2" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full border rounded p-2" />
            <textarea name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required className="w-full border rounded p-2" />

            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default CartPage;
