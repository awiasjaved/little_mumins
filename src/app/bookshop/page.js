"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import bgImageDesktop from "@/app/assets/images/the-upper-books-of-the-table-are-named-little-mum.png";
import bgImageMobile from "@/app/assets/images/the-upper-books-of-the-table-are-named-little-mum.png";

import AllProduct from './AllProduct';
import Flowers from '../ShopNow/Flowers';
import FooterEnd from '../Footer/FooterEnd';
import Circle from "../slider/page";

const textAnimation = {
  initial: {
    opacity: 0,
    letterSpacing: "-0.5em",
    y: -100,
  },
  animate: {
    opacity: 1,
    letterSpacing: "0em",
    y: 0,
  },
  transition: {
    duration: 0.7,
    ease: [0.215, 0.61, 0.355, 1.0],
  },
};

const bookshopTitle = [
  { char: "B", color: "text-white-300" },
  { char: "O", color: "text-white-300" },
  { char: "O", color: "text-white-300" },
  { char: "K", color: "text-white-300" },
  { char: " ", color: "" },
  { char: "S", color: "text-white-300" },
  { char: "H", color: "text-white-300" },
  { char: "O", color: "text-white-300" },
  { char: "P", color: "text-white-300" },
];

export default function Page() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Background */}
      <div
        className="hidden md:block h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageDesktop.src})` }}
      >
        <div className="absolute bottom-0 text-[#97401a] flex items-center justify-center inset-0 bg-black/50">
          <motion.h1
            className="text-7xl font-bold flex"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={textAnimation}
            transition={textAnimation.transition}
          >
            {bookshopTitle.map((item, index) => (
              <span
                key={index}
                className={`${item.color} text-7xl`}
                style={{ WebkitTextStroke: "0.2px #FBDFB0" }}
              >
                {item.char}
              </span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Mobile Background */}
      <div
        className="block md:hidden h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageMobile.src})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-end justify-center p-4">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-[#97401a] text-center"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={textAnimation}
            transition={textAnimation.transition}
          >
            {bookshopTitle.map((item, index) => (
              <span
                key={index}
                className={`${item.color} text-4xl`}
                style={{ WebkitTextStroke: "0.2px #FBDFB0" }}
              >
                {item.char}
              </span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Page Sections */}
      <Circle />
      <AllProduct />
      <Flowers />
      <FooterEnd />
    </>
  );
}
