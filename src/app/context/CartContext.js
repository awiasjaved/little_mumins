'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef
} from 'react';
import { usePathname } from 'next/navigation';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const prevLength = useRef(0);
  const pathname = usePathname();

  // Load cart once on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(stored);
    prevLength.current = stored.length;
  }, []);

  // Persist cart & reopen when emptied
  useEffect(() => {
    // If we went from >0 to 0, force-open
    if (prevLength.current > 0 && cartItems.length === 0) {
      setIsOpen(true);
    }
    prevLength.current = cartItems.length;
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Close popup on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].quantity += 1;
        return copy;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0)
    );
  };

  const toggleCart = () => setIsOpen(o => !o);
  const closeCart  = () => setIsOpen(false);

  return (
    <CartContext.Provider value={{
      cartItems,
      isOpen,
      addToCart,
      removeFromCart,
      increaseQty,
      decreaseQty,
      toggleCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
