"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import MenuList from "../Menu/MenuList";
import Logo from "../assets/images/little_mumins_5.png";
import Image from "next/image";

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
    { name: "BOOK SHOP", link: "#latest", color: "text-pink-500" },
    { name: "ABOUT US", link: "/about", color: "text-blue-400" },
    { name: "BY AGE", link: "#extend", color: "text-green-500" },
    { name: "BY TYPE", link: "#explore", color: "text-orange-500" },
    { name: "FREEBIES", link: "#besbok", color: "text-yellow-400" },
    { name: "CONTACT US", link: "#step", color: "text-purple-500" },
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
      <div className="backdrop-blur-lg fixed w-full z-10">
        <div className="relative z-10 items-center">
          <div className="px-2 lg:px-16 flex justify-between items-center lg:flex-row py-1">
            {/* Mobile Menu Button */}
            <div>
              <Image
                src={Logo}
                alt="Logo"
            
                width={100} 
                height={50}
              />
            </div>

            {/* Center Logo & Icons */}
            <div>
              <nav
                className={`hidden sm:flex justify-center space-x-12 md:space-x-12 lg:space-x-16 py-4 font-light p-4 ${navTextColor} ${borderColor}`}
              >
                <ul className="flex items-center">
                  {items.map((item) => (
                    <li key={item.name} className="py-2 px-4 text-lg flex">
                      <Link
                        href={item.link}
                        className={`hover:underline hover:scale-105 hover:font-semibold hover:drop-shadow-md transition-all duration-300 font-medium ${item.color}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* Booking Button */}
            <div>
              <button className="btn flex items-center space-x-2 cursor-pointer">
                <span>Basket</span>
                <GiShoppingBag />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center h-screen w-screen"
            >
              <MenuList closeMenu={() => setMobileMenuOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(TopNav), { ssr: false });
