"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Logo from "../assets/images/little_mumins_5.png";

const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleExpandMobile = (name) => {
    setExpandedMenu((prev) => (prev === name ? null : name));
  };

  const items = [
    { name: "BOOK SHOP", link: "/bookshop", color: "text-[#e1ff00]" },
    { name: "ABOUT US", link: "/about", color: "text-blue-400" },
    {
      name: "BY AGE",
      link: "/age",
      color: "text-green-500",
      subItems: [
        { name: "0-3 Years", link: "/threeyears" },
        { name: "4-6 Years", link: "/four" },
        { name: "7-12 Years", link: "/seven" },
      ],
    },
    {
      name: "BY TYPE",
      link: "#",
      color: "text-orange-500",
      subItems: [
        { name: "Story books", link: "/story_books" },
        { name: "Board books", link: "/board_books" },
        { name: "Activity books", link: "/activity_books" },
        { name: "Cloth & Sensory books", link: "/coth_books_and_sensory_books" },
        { name: "Islamic history", link: "/hadith_Seerah_and_islamic_history" },
        { name: "Hajj, Umrah & Eid", link: "/hajj_umrah_and_Eid" },
        { name: "Urdu books", link: "/urdu_books" },
        { name: "Hardcover", link: "/hardcover" }
      ]
    },
    { name: "FREEBIES", link: "/freebies", color: "text-yellow-400" },
    { name: "CONTACT US", link: "/contact", color: "text-purple-400" },
  ];

  const navTextColor = scrollPosition > 550 && scrollPosition <= 1300 ? "text-[#1D3B46]" : "text-white";
  const borderColor = scrollPosition > 550 && scrollPosition <= 1300 ? "border-[#1D3B46]" : "border-white";
  const blurEffect = scrollPosition > 50 ? "backdrop-blur-lg" : "";

  return (
    <div className={`fixed top-0 left-0 w-full z-50 ${blurEffect}`}>
      <div className="px-1 lg:px-16 flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} alt="Logo" width={100} height={50} />
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center font-light ${navTextColor} `}>
          <ul className="flex items-center space-x-4">
            {items.map((item) => (
              <li key={item.name} className="relative px-2 text-lg">
                {item.subItems ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setExpandedMenu(item.name)}
                    onMouseLeave={() => setExpandedMenu(null)}
                  >
                    <div className={`hover:underline cursor-pointer flex items-center gap-1 ${item.color}`}>
                      {item.name}
                      <span className="text-xs">▼</span>
                    </div>
                    {expandedMenu === item.name && (
                      <ul className="absolute left-0 top-full -mt-1 w-48 bg-[#62c7ca] text-black shadow-lg rounded-md z-50">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link href={subItem.link} className={`block px-4 py-2 hover:bg-gray-100 ${item.color}`}>
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className={`hover:underline transition-all duration-300 font-medium flex items-center gap-1 ${item.color}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-3xl text-red-600">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Absolute Right-Side Panel) */}
      <div className="relative">
        {mobileMenuOpen && (
          <div className="absolute right-2   w-40 bg-white z-50 shadow-lg p-4 md:hidden">
            <div className="flex justify-between items-center mb-4">
              <Image src={Logo} alt="Logo" width={80} height={40} />
              <button onClick={() => setMobileMenuOpen(false)} className="text-2xl text-gray-800">✕</button>
            </div>

            <ul className="space-y-4 text-gray-800 font-medium">
              {items.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleExpandMobile(item.name)}
                    >
                      <span className={`hover:text-yellow-400 ${item.color}`}>{item.name}</span>
                      {expandedMenu === item.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className={`block hover:text-yellow-400 transition duration-300 ${item.color}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.subItems && expandedMenu === item.name && (
                    <ul className="ml-4 mt-2 space-y-2 text-sm font-normal text-gray-600">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.link}
                            className="block hover:text-yellow-300"
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
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
