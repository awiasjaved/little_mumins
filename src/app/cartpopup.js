'use client';
import React, { useRef, useEffect } from 'react';
import { useCart } from './context/CartContext';
import { useRouter } from 'next/navigation';

const CartPopup = () => {
  const router = useRouter();
  const {
    cartItems,
    isOpen,
    toggleCart,
    closeCart,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart();
  const popupRef = useRef(null);

  const totalQty = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // close when clicking outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        closeCart();
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [closeCart]);

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed bottom-4 right-4 bg-black text-white px-5 py-2 rounded-full z-50"
      >
        Cart ({totalQty})
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white border p-4 rounded-lg shadow-lg z-50 max-h-[90vh] overflow-y-auto">
          <div ref={popupRef}>
            <h3 className="text-lg font-bold mb-2">My Cart</h3>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">No items in cart.</p>
            ) : (
              <>
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center mb-3">
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <div className="text-xs text-gray-500">
                        Rs {item.price} × {item.quantity} = Rs {item.price * item.quantity}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => decreaseQty(item.id)} className="bg-gray-200 px-2 rounded">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)} className="bg-gray-200 px-2 rounded">+</button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm ml-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}

                <div className="border-t mt-4 pt-4 flex justify-between items-center">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-lg">Rs {totalPrice}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="mt-4 w-full bg-[#a84618] hover:bg-[#852b02] text-white py-2 rounded-full transition"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartPopup;
