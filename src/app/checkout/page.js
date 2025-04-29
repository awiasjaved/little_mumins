'use client';

import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: 'Pakistan',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
  });

  const [shipToDifferent, setShipToDifferent] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 250;
  const total = subtotal + shipping;

  const handlePlaceOrder = async () => {
    const payload = {
      billing: formData,
      notes: orderNotes,
      cart: cartItems,
      subtotal,
      shipping,
      total,
      shipToDifferent,
    };

    try {
      const res = await fetch('http://localhost:5000/api/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert('Order placed and email sent!');
      } else {
        alert('Failed to send order. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error while placing order.');
    }
  };

  return (
    <div className="mt-24 p-6 sm:p-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">Billing details</h2>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input required placeholder="First name *" className="w-1/2 border p-2 rounded" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
            <input required placeholder="Last name *" className="w-1/2 border p-2 rounded" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
          </div>
          <input placeholder="Company name (optional)" className="w-full border p-2 rounded" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
          <input required className="w-full border p-2 rounded" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
          <input required placeholder="Street address *" className="w-full border p-2 rounded" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
          <input placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border p-2 rounded" value={formData.apartment} onChange={(e) => setFormData({ ...formData, apartment: e.target.value })} />
          <input required placeholder="City *" className="w-full border p-2 rounded" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
          <input required placeholder="State / County *" className="w-full border p-2 rounded" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
          <input required placeholder="Postcode / ZIP *" className="w-full border p-2 rounded" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} />
          <input required placeholder="Phone *" className="w-full border p-2 rounded" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          <input required placeholder="Email address *" className="w-full border p-2 rounded" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

          <label className="flex items-center gap-2 mt-2 font-bold">
            <input type="checkbox" checked={shipToDifferent} onChange={(e) => setShipToDifferent(e.target.checked)} />
            <span className="text-[#3a0a0a]">Ship to a different address?</span>
          </label>

          <div>
            <label className="block mb-1 font-semibold">Order notes (optional)</label>
            <textarea className="w-full border rounded p-2" rows={3} placeholder="Notes about your order, e.g. special notes for delivery." value={orderNotes} onChange={(e) => setOrderNotes(e.target.value)} />
          </div>
        </form>
      </div>

      <div className="border p-6 rounded-lg bg-gray-50 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Your order</h2>
        <div className="space-y-2 mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>{item.title} × {item.quantity}</span>
              <span>Rs {item.price * item.quantity}</span>
            </div>
          ))}

          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Subtotal</span>
            <span>Rs {subtotal}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>Flat rate: <strong>Rs {shipping}</strong></span>
          </div>

          <div className="flex justify-between font-bold border-t pt-2 text-lg">
            <span>Total</span>
            <span>Rs {total}</span>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-sm">
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" defaultChecked />
            Cash on Delivery
          </label>

          <label className="flex items-start gap-2">
            <input type="radio" name="payment" className="mt-1" />
            <span>
              Bank Deposit
              <div className="bg-gray-100 p-2 text-xs mt-1 rounded">
  Transfer your order&apos;s payment to our bank account and avoid the hassle of cash on delivery.
  After checking out with &quot;bank transfer&quot;, message us on WhatsApp at <strong>+92335369377</strong> for details.
  <textarea className="mt-2 w-full p-1 border text-xs rounded" rows="2" placeholder="Enter reference or bank note (optional)" />
</div>
            </span>
          </label>
        </div>

        <p className="text-xs text-gray-600 mt-6">
          Your personal data will be used to process your order, support your experience throughout this website,
          and for other purposes described in our privacy policy.
        </p>

        <button
          onClick={handlePlaceOrder}
          className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition"
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
