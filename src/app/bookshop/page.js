"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImageDesktop from "@/app/assets/images/the-upper-books-of-the-table-are-named-little-mum.png";
import bgImageMobile from "@/app/assets/images/the-upper-books-of-the-table-are-named-little-mum.png";
import AllProduct from './AllProduct';
import Flowers from '../ShopNow/Flowers';
import FooterEnd from '../Footer/FooterEnd';
import Circle from "../slider/page"




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
  { char: "B", color: "text-green-500" },
  { char: "O", color: "text-purple-500" },
  { char: "O", color: "text-orange-500" },
  { char: "K", color: "text-yellow-500" },
  { char: " ", color: "" },
  { char: "S", color: "text-pink-500" },
  { char: "H", color: "text-red-500" },
  { char: "O", color: "text-blue-500" },
  { char: "P", color: "text-indigo-500" },
];

export const page = () => {

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 1500); // delay in ms before animation starts

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {/* Desktop Background */}
         <div
            className="hidden md:block h-[80vh] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgImageDesktop.src})` }}
          >
            <div className="absolute bottom-0 text-white flex items-center justify-center inset-0 bg-black/50">
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
                    style={{ WebkitTextStroke: "0.2px #971a32" }}
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
                className="text-3xl sm:text-4xl font-bold text-white text-center"
                initial="initial"
                animate={shouldAnimate ? "animate" : "initial"}
                variants={textAnimation}
                transition={textAnimation.transition}
              >
                {bookshopTitle.map((item, index) => (
                  <span
                    key={index}
                    className={`${item.color} text-4xl`}
                    style={{ WebkitTextStroke: "0.2px #971a32" }}
                  >
                    {item.char}
                  </span>
                ))}
              </motion.h1>
            </div>
          </div>
      <Circle/>
      <AllProduct/>
      <Flowers/>
      <FooterEnd/>
    </>
  );
};

export default page;
