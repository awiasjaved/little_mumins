"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Logo from "../assets/images/little_mumins_5.png";
import Image from "next/image";

const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expandedMenu, setExpandedMenu] = useState(null);

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
      link: "/bookshop",
      color: "text-pink-500",
    },
    {
      name: "ABOUT US",
      link: "/about",
      color: "text-blue-400",
    },
    {
      name: "BY AGE",
      link: "/age",
      color: "text-green-500",
      subItems: [
        { name: "0-3 Years", link: "/threeyears" },
        { name: "3-5 Years", link: "/books/3-5" },
        { name: "6+ Years", link: "/books/6-plus" },
      ],
    },
    {
      name: "BY TYPE",
      link: "/type",
      color: "text-orange-500",
      subItems: [
        { name: "Board Books", link: "/books/board" },
        { name: "Story Books", link: "/books/story" },
        { name: "Activity Books", link: "/books/activity" },
      ],
    },
    {
      name: "FREEBIES",
      link: "/freebies",
      color: "text-yellow-400",
    },
    {
      name: "CONTACT US",
      link: "/contact",
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

  const blurEffect = scrollPosition > 100 ? "backdrop-blur-lg" : "";

  const toggleExpand = (name) => {
    if (expandedMenu === name) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(name);
    }
  };

  return (
    <>
      <div className={`${blurEffect} fixed top-0 left-0 w-full z-20`}>
        <div className="relative z-10 items-center">
          <div className="px-1 lg:px-16 flex justify-between items-center py-0">
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <Image src={Logo} alt="Logo" width={100} height={50} />
            </Link>

            {/* Nav Items - Desktop */}
            <nav
              className={`hidden sm:flex justify-center space-x-8 py-1 font-light p-4 ${navTextColor} ${borderColor}`}
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
                      <ul className="absolute left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                        group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50">
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

            {/* Basket - Desktop */}
            <div className="hidden sm:flex">
              <button className="btn flex items-center space-x-2 cursor-pointer">
                <span>Basket</span>
                <GiShoppingBag />
              </button>
            </div>

            {/* Hamburger - Mobile */}
            <div className="flex sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-3xl text-white"
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Background overlay */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setMobileMenuOpen(false)}
              ></div>

              {/* Actual menu */}
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-16 right-0 w-[220px] z-50 bg-[#5C4033]/70 backdrop-blur-md rounded-l-xl shadow-lg p-4 sm:hidden"
              >
                <ul className="space-y-4 text-white text-base font-semibold">
                  {items.map((item) => (
                    <li key={item.name} className="space-y-1">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() =>
                          item.subItems ? toggleExpand(item.name) : setMobileMenuOpen(false)
                        }
                      >
                        <Link
                          href={item.link}
                          className="hover:text-yellow-400 transition duration-300"
                        >
                          {item.name}
                        </Link>
                        {item.subItems && (
                          <>
                            {expandedMenu === item.name ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </>
                        )}
                      </div>

                      {/* Sub Items */}
                      {item.subItems && expandedMenu === item.name && (
                        <ul className="ml-4 mt-2 space-y-2 text-sm font-normal text-gray-200">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.link}
                                className="block hover:text-yellow-300 transition duration-300"
                                onClick={() => setMobileMenuOpen(false)}
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
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(TopNav), { ssr: false });
