"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Logo from "../assets/images/little_mumins_5.png";

const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const toggleExpandMobile = (name) => {
    setExpandedMenu((prev) => (prev === name ? null : name));
    setActiveSection(null);
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
        {
          section: "Board books",
          items: [
            { name: "Khoob maza aaya", link: "/books/board/khoob-maza-aaya" },
            { name: "Who created", link: "/books/board/who-created" },
          ],
        },
        {
          section: "Activity books",
          items: [
            { name: "Our Nabi Hadith book", link: "/books/activity/our-nabi-hadith" },
            { name: "A day in the life of a muslim", link: "/books/activity/day-in-life" },
          ],
        },
        {
          section: "Cloth books and sensory books",
          items: [
            { name: "The most blessed", link: "/books/cloth/the-most-blessed" },
          ],
        },
        {
          section: "Hadith, Seerah and islamic history",
          items: [
            { name: "Our nabi hadith book", link: "/books/history/our-nabi-hadith" },
            { name: "Our stars (set of 2)", link: "/books/history/our-stars" },
            { name: "Sahaba stories (Set of 4)", link: "/books/history/sahaba-stories" },
          ],
        },
        {
          section: "Hajj, Umrah and Eid",
          items: [
            { name: "Mikael goes to Madinah", link: "/books/hajj/mikael-madinah" },
          ],
        },
        {
          section: "Urdu books",
          items: [
            { name: "Raah e jannat ki ginti", link: "/books/urdu/raah-e-jannat" },
            { name: "Khoob maza aaya", link: "/books/urdu/khoob-maza-aaya" },
          ],
        },
        {
          section: "Hardcover",
          items: [
            { name: "Joys of jannah", link: "/books/hardcover/joys-of-jannah" },
            { name: "Count your way to jannah", link: "/books/hardcover/count-your-way" },
          ],
        },
      ],
    },
    { name: "FREEBIES", link: "/freebies", color: "text-yellow-400" },
    { name: "CONTACT US", link: "/contact", color: "text-purple-400" },
  ];

  const navTextColor = scrollPosition > 550 && scrollPosition <= 1300 ? "text-[#1D3B46]" : "text-white";
  const borderColor = scrollPosition > 550 && scrollPosition <= 1300 ? "border-[#1D3B46]" : "border-white";
  const blurEffect = scrollPosition > 50 ? "backdrop-blur-lg" : "";

  return (
    <div className={`${blurEffect} fixed top-0 left-0 w-full z-20`}>
      <div className="px-1 lg:px-16 flex justify-between items-center py-2">
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} alt="Logo" width={100} height={50} />
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden sm:flex justify-center space-x-8 py-1 font-light ${navTextColor} ${borderColor}`}>
          <ul className="flex items-center space-x-4">
            {items.map((item) => (
              <li key={item.name} className="relative py-2 px-4 text-lg">
                {item.name === "BY TYPE" ? (
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
                      <div className="absolute left-0 mt-2 w-64 bg-[#62c7ca] text-black shadow-lg rounded-md z-50 p-2 space-y-2">
                        {item.subItems.map((group) => (
                          <div key={group.section}>
                            <p
                              onClick={() => toggleSection(group.section)}
                              className="font-bold text-sm px-4 py-1 cursor-pointer hover:underline"
                            >
                              {group.section}
                            </p>
                            {activeSection === group.section && (
                              <ul className="pl-4">
                                {group.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link href={subItem.link} className={`block px-2 py-1 hover:bg-gray-100 ${item.color}`}>
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.name === "BY AGE" ? (
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
                      <ul className="absolute left-0 mt-2 w-44 bg-[#62c7ca] text-black shadow-lg rounded-md z-50">
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

        {/* Basket */}
        <div className="hidden sm:flex">
          <button className="btn flex items-center space-x-2 cursor-pointer">
            <span>Basket</span>
            <GiShoppingBag />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-3xl text-red-600">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setMobileMenuOpen(false)}></div>
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-16 right-0 w-[250px] z-50 bg-[#cdf1f3]/70 backdrop-blur-md rounded-l-xl shadow-lg p-4 sm:hidden"
            >
              <ul className="space-y-4 text-white text-base font-semibold">
                {items.map((item) => (
                  <li key={item.name} className="space-y-1">
                    {item.subItems ? (
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleExpandMobile(item.name)}
                      >
                        <div className={`hover:text-yellow-400 transition duration-300 ${item.color}`}>
                          {item.name}
                        </div>
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

                    {/* Submenu Rendering */}
                    {item.subItems && expandedMenu === item.name && (
                      <ul className="ml-4 mt-2 space-y-2 text-sm font-normal bg-[#cdf1f3] p-2 rounded-md">
                        {Array.isArray(item.subItems[0]?.items)
                          ? item.subItems.map((group) => (
                              <React.Fragment key={group.section}>
                                <p
                                  className="text-xs font-bold text-gray-700"
                                  onClick={() => toggleSection(group.section)}
                                >
                                  {group.section}
                                </p>
                                {activeSection === group.section &&
                                  group.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.link}
                                        className={`block hover:text-yellow-300 transition duration-300 ${item.color}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                              </React.Fragment>
                            ))
                          : item.subItems.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.link}
                                  className={`block hover:text-yellow-300 transition duration-300 ${item.color}`}
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
  );
};

export default TopNav;
