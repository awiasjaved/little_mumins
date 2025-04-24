"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import MenuList from "../Menu/MenuList";

const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll Position Track
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    { name: "ROOMS", link: "#latest" },
    { name: "WELLNESS", link: "#masteri" },
    { name: "GASTRO", link: "#extend" },
    { name: "HOTEL", link: "#explore" },
    { name: "EVENTS", link: "#besbok" },
    { name: "CONTACTS", link: "#step" },
  ];

  const navTextColor =
    scrollPosition > 550 && scrollPosition <= 1300
      ? "text-[#1D3B46]"
      : "text-white";

  const borderColor =
    scrollPosition > 550 && scrollPosition <= 1300
      ? "border-[#1D3B46]"
      : "border-white";

  return (
    <>
      <div className="backdrop-blur-lg fixed w-full z-20">
        <div className="relative z-10 items-center">
          <div className="px-4 lg:px-16 flex justify-between items-center lg:flex-row py-4">
            {/* Mobile Menu Button */}
            <div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="btn flex items-center space-x-2 cursor-pointer"
              >
                <GiHamburgerMenu />
                <span>Menu</span>
              </button>
            </div>
            {/* Center Logo & Icons */}
            <div className={`flex items-center sm:space-x-4 ${navTextColor}`}>
              <div className={`hidden sm:block ${navTextColor}`}>2 0 0 5</div>
              <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center">
                <div className="text-[#1D3B46] backdrop-blur-lg text-2xl font-serif">
                  KM
                </div>
              </div>
              <div className={`hidden md:flex items-center space-x-1 ${navTextColor}`}>
                {[1, 2, 3, 4].map((_, index) => (
                  <FaRegStar key={index} />
                ))}
              </div>
            </div>
            {/* Booking Button */}
            <div>
              <button className="btn flex items-center space-x-2 cursor-pointer">
                <span>Booking</span>
                <GiShoppingBag />
              </button>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div>
            <nav
              className={`hidden sm:flex justify-center space-x-8 md:space-x-12 lg:space-x-16 py-4 font-light border-t border-b p-4 ${navTextColor} ${borderColor}`}
            >
              <ul className={`flex items-center ${navTextColor}`}>
                {items.map((item) => (
                  <li key={item.name} className={`py-2 px-4 text-lg flex ${navTextColor}`}>
                    <Link href={item.link} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Full-Screen Menu with Framer Motion Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center h-screen w-screen"
            >
              {/* ✅ MenuList ko prop pass kiya for closing */}
              <MenuList closeMenu={() => setMobileMenuOpen(false)} />

              {/* Close Button */}
              {/* <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl"
              >
                ✕
              </button> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

// ✅ Dynamic Import Fix for SSR
export default dynamic(() => Promise.resolve(TopNav), { ssr: false });
