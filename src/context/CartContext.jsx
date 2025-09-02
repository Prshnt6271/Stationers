// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (brandName, imageIndex, imageSrc) => {
    const newItem = {
      id: `${brandName}-${imageIndex}`,
      brand: brandName,
      imageIndex,
      imageSrc,
      quantity: 1,
    };

    setCartItems(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === newItem.id);
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, newItem];
    });
  };

  const removeItem = id => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) return;
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
