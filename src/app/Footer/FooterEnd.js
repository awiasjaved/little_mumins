"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from "../assets/images/little_mumins_5.png"
import FooterLogo from "../assets/images/Footer.png"
import Container from '../Container';

const FooterEnd = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${FooterLogo.src})`,
      }}
    >

      <div className="bg-[#cdf1f3]/80 py-6">
        <Container>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Column 1 - Logo and Social Icons */}
              <div className="flex flex-col items-start mt-0 pt-0">
                <Image
                  src={Logo}
                  alt="Flowers of Jannat Logo"
                  width={200}
                  height={200}
                  className="mt-0 w-40 sm:w-48 lg:w-56"
                />

                <div className="flex space-x-4 mt-4">
                  <Link
                    href="https://facebook.com"
                    className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#fd6ebb] text-white hover:bg-[#f6339a] transition"
                  >
                    <FaFacebookF size={20} />
                  </Link>

                  <Link
                    href="https://www.instagram.com/thelittle_mumins/?igsh=Z2dhcWM2Nm9uanRs"
                    className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#fd6ebb] text-white hover:bg-[#f6339a] transition"
                  >
                    <FaInstagram size={20} />
                  </Link>

                  <Link
                    href="https://whatsapp.com"
                    className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#fd6ebb] text-white hover:bg-[#f6339a] transition"
                  >
                    <FaWhatsapp size={20} />
                  </Link>
                </div>
              </div>


              {/* Column 2 - About Us */}
              <div>
                <h3 className="text-lg sm:text-xl font-script mb-4 text-[#FF7600]">About Us</h3>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><Link href="/about" className="hover:text-gray-900">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-900">Contact Us</Link></li>
                </ul>
              </div>

              {/* Column 3 - Categories */}
              <div>
                <h3 className="text-lg sm:text-xl font-script mb-4 text-[#FF7600]">Categories</h3>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base max-h-64 overflow-y-auto pr-2">
                  <li><Link href="../board_books" className="hover:text-gray-900">Board Books</Link></li>
                  <li><Link href="../activity_books" className="hover:text-gray-900">Activity Books</Link></li>
                  <li><Link href="../coth_books_and_sensory_books" className="hover:text-gray-900">Cloth & Sensory Books</Link></li>
                  <li><Link href="../hadith_Seerah_and_islamic_history" className="hover:text-gray-900">Hadith, Seerah & History</Link></li>
                  <li><Link href="../hajj_umrah_and_Eid" className="hover:text-gray-900">Hajj, Umrah & Eid</Link></li>
                  <li><Link href="../urdu_books" className="hover:text-gray-900">Urdu Books</Link></li>
                  <li><Link href="../hardcover" className="hover:text-gray-900">Hardcover</Link></li>
                </ul>
              </div>

              {/* Column 4 - Info */}
              <div>
                <h3 className="text-lg sm:text-xl font-script mb-4 text-[#FF7600]">Information</h3>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><Link href="" className="hover:text-gray-900">FAQs</Link></li>
                  <li><Link href="" className="hover:text-gray-900">Refund Policy</Link></li>
                  <li><Link href="" className="hover:text-gray-900">Terms & Conditions</Link></li>
                </ul>

                {/* Uncomment to add search */}
                {/* 
          <div className="mt-6">
            <p className="text-gray-700 text-sm mb-2">Looking for a product?</p>
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="border border-gray-300 rounded-l px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="bg-gray-800 text-white rounded-r px-4 py-2 hover:bg-gray-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          */}
              </div>
            </div>
          </div>
        </Container>
      </div>

    </footer>
  );
};

export default FooterEnd;
