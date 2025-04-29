'use client';
import { useCart } from './context/CartContext';
import { useRouter } from 'next/navigation'; 

const CartPopup = () => {
    const router = useRouter(); 
  const { cartItems, isOpen, toggleCart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    router.push('/checkout'); 
  };

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed bottom-4 right-4 bg-black text-white px-5 py-2 rounded-full z-50"
      >
        Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white border p-4 rounded-lg shadow-lg z-50 max-h-[90vh] overflow-y-auto">
          <h3 className="text-lg font-bold mb-2">My Cart</h3>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold">{item.title}</span>
                    <div className="text-xs text-gray-500">
                      Rs {item.price} × {item.quantity} = Rs {item.price * item.quantity}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => decreaseQty(item.id)} className="bg-gray-300 px-2 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)} className="bg-gray-300 px-2 rounded">+</button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm ml-2"
                  >
                    ✕
                  </button>
                </div>
              ))}

              {/* Total Price Section */}
              <div className="border-t mt-4 pt-4 flex justify-between items-center">
                <span className="font-bold text-lg">Total:</span>
                <span className="font-bold text-lg">Rs {totalPrice}</span>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={handleCheckout}
                className="mt-4 w-full bg-[#a84618] hover:bg-[#852b02] text-white py-2 px-4 rounded-full transition"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CartPopup;
