"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiShoppingBag } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import MenuList from "../Menu/MenuList";
import Logo from "../assets/images/little_mumins_5.png";
import Image from "next/image";

const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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
    {
      name: "BOOK SHOP",
      link: "#latest",
      color: "text-pink-500",
      subItems: [
        { name: "All Books", link: "/books" },
        { name: "New Arrivals", link: "/books/new" },
        { name: "Best Sellers", link: "/books/best-sellers" },
      ],
    },
    {
      name: "ABOUT US",
      link: "/about",
      color: "text-blue-400",
    },
    {
      name: "BY AGE",
      link: "#extend",
      color: "text-green-500",
      subItems: [
        { name: "0-2 Years", link: "/books/0-2" },
        { name: "3-5 Years", link: "/books/3-5" },
        { name: "6+ Years", link: "/books/6-plus" },
      ],
    },
    {
      name: "BY TYPE",
      link: "#explore",
      color: "text-orange-500",
      subItems: [
        { name: "Board Books", link: "/books/board" },
        { name: "Story Books", link: "/books/story" },
        { name: "Activity Books", link: "/books/activity" },
      ],
    },
    {
      name: "FREEBIES",
      link: "#besbok",
      color: "text-yellow-400",
    },
    {
      name: "CONTACT US",
      link: "#step",
      color: "text-purple-500",
    },
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
          <div className="px-2 lg:px-16 flex justify-between items-center py-1">
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <Image src={Logo} alt="Logo" width={100} height={50} />
            </Link>

            {/* Nav Items - Desktop */}
            <nav
              className={`hidden sm:flex justify-center space-x-8 py-4 font-light p-4 ${navTextColor} ${borderColor}`}
            >
              <ul className="flex items-center space-x-4">
                {items.map((item) => (
                  <li key={item.name} className="relative group py-2 px-4 text-lg">
                    <Link
                      href={item.link}
                      className={`hover:underline transition-all duration-300 font-medium flex items-center gap-1 ${item.color}`}
                    >
                      {item.name}
                      {item.subItems && <span className="text-xs">▼</span>}
                    </Link>

                    {/* Dropdown */}
                    {item.subItems && (
                      <ul
                        className="absolute left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50"
                      >
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.link}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Basket Button */}
            <div>
              <button className="btn flex items-center space-x-2 cursor-pointer">
                <span>Basket</span>
                <GiShoppingBag />
              </button>
            </div>
          </div>
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
