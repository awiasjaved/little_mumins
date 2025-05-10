'use client';

import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';
import Container from '../Container';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch('https://little-mumins-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setFeedback({ type: 'success', message: 'Thank You For Contact US' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFeedback({ type: 'error', message: result?.error || 'Something went wrong.' });
      }
    } catch (error) {
      setFeedback({ type: 'error', message: 'Network error. Please try again.' });
      console.error('Error:', error);
    }

    setIsSubmitting(false);
  };

  return (
   
      <div className="min-h-screen bg-cover bg-center bg-no-repeat scroll-smooth py-12 px-4 md:px-16"
      style={{ backgroundImage: "url('/back.png')" }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
              <h4 className="text-xl font-semibold mb-2">Customer Service</h4>
              <p className="mb-6 text-black">Contact us at the following:</p>

              <ul className="space-y-6 text-black">
                <li className="flex items-center">
                  <FaWhatsapp className="mr-3 text-[#852b02] text-xl" />
                  +92-328-5990718
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-[#852b02] text-xl" />
                  littlemuminsreads@gmail.com
                </li>
                <li className="flex items-center">
                  <FaInstagram className="mr-3 text-[#852b02] text-xl" />
                  <a
                    href="https://www.instagram.com/thelittle_mumins/?igsh=Z2dhcWM2Nm9uanRs"
                    className="text-black hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Little Mumins Books
                  </a>
                </li>
                <li className="flex items-center">
                  <FaFacebookF className="mr-3 text-[#852b02] text-xl" />
                  <a
                    href=""
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    facebook.com/littlemumins
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
                    className="w-full border text-black rounded p-2 focus:outline-none focus:border-[#852b02]"
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
                    className="w-full border text-black rounded p-2 focus:outline-none focus:border-[#852b02]"
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
                    className="w-full border text-black rounded p-2 focus:outline-none focus:border-[#852b02]"
                  />
                </div>

                {feedback && (
                  <div className={`text-sm font-medium ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {feedback.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#a84618] text-white font-bold py-2 px-6 rounded hover:bg-[#852b02] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                </button>
              </form>
            </div>

          </div>
        </Container>
      </div>
 
  );
};

export default ContactUs;
