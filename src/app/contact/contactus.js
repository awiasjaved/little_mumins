'use client'; 

import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    // yahan apna form submit logic lagana
  };

  return (
    <div className="py-12 px-4 md:px-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Side - Contact Information */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <h4 className="text-xl font-semibold mb-2">Customer Service</h4>
          <p className="mb-6 text-gray-600">Contact us at the following:</p>

          <ul className="space-y-6 text-gray-700">
            <li className="flex items-center">
              <FaWhatsapp className="mr-3 text-pink-500 text-xl" />
              +92-335-3569377 (+92-335-FLOWERS)
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-pink-500 text-xl" />
              info@flowersofjannah.com
            </li>
            <li className="flex items-center">
              <FaInstagram className="mr-3 text-pink-500 text-xl" />
              <a
                href="https://www.instagram.com/flowersofjannah/"
                className="text-pink-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flowers of Jannah Books
              </a>
            </li>
            <li className="flex items-center">
              <FaFacebookF className="mr-3 text-pink-500 text-xl" />
              <a
                href="https://www.facebook.com/flowersofjannah"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/flowersofjannah
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-1">Comment or Message *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-pink-400"
              />
            </div>

            <button
              type="submit"
              className="bg-pink-400 text-white font-bold py-2 px-6 rounded hover:bg-pink-500 transition-all"
            >
              SUBMIT
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
