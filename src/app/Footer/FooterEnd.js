"use client";
import Link from 'next/link';
import Image from 'next/image';
const FooterEnd = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
    {/* Top section with logos */}
    <div className="container mx-auto px-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link href="/">
            <div className="text-white text-2xl font-light">
              ULTIMA
              <div className="text-xs tracking-wider">COLLECTION</div>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-12">
          <Link href="/" className="block">
            <div className="text-right">
              <div className="text-sm">Serandipians</div>
              <div className="text-xs text-gray-400">Pure the Adventure</div>
            </div>
          </Link>
          
          <Link href="/" className="block">
            <div className="text-right">
              <div className="text-sm">THE SET</div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Divider line */}
      <hr className="border-gray-700 mb-8" />
      
      {/* Footer columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg mb-4">Ultima Collection</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li>
              <div className="flex items-center">
                <Link href="/capital" className="hover:text-white">Ultima Capital</Link>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div>
          <h3 className="text-lg mb-4">More Information</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/trade-media" className="hover:text-white">Trade & Media</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/cookies-policy" className="hover:text-white">Cookies Policy</Link></li>
          </ul>
        </div>
        
        {/* Column 3 */}
        <div>
          <h3 className="text-lg mb-4">Follow Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="https://instagram.com" className="hover:text-white">Instagram</Link></li>
            <li><Link href="https://facebook.com" className="hover:text-white">Facebook</Link></li>
            <li><Link href="https://linkedin.com" className="hover:text-white">LinkedIn</Link></li>
          </ul>
        </div>
        
        {/* Column 4 */}
        <div>
          <h3 className="text-lg mb-4">Get In Touch</h3>
          <div className="text-sm text-gray-400">
            <p className="mb-2 uppercase font-semibold text-white">Contact Us</p>
            <p className="mb-1">Reservations:</p>
            <p className="mb-4">reservation@ultimamanagement.com</p>
            
            <p className="mb-1">General enquiries:</p>
            <p className="mb-1">+41 22 779 33 33</p>
            <p>info@ultimamanagement.com</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom copyright section */}
    <div className="container mx-auto px-8 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sm text-gray-400">Copyright ©2024 Ultima Collection.</span>
        </div>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link href="/terms-conditions" className="text-sm text-gray-400 hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default FooterEnd