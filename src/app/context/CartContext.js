'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(localCart);
  }, []);

  const addToCart = (item) => {
    let cart = [...cartItems];
    const existingIndex = cart.findIndex(i => i.id === item.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    setCartItems(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    setIsOpen(true);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const toggleCart = () => {
    setIsOpen(prev => !prev);
  };

  const increaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const decreaseQty = (id) => {
    const updated = cartItems
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isOpen, toggleCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
