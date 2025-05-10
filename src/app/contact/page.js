"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from 'react';
import Footer from '../Footer/FooterEnd';
import  bgImageDesktop from '../assets/images/-book-and-telephone-little-mumins---add--mobile-li.jpg'; // apni image ka path adjust karein
import  bgImageMobile from '../assets/images/-book-and-telephone-little-mumins---add--mobile-li.jpg';
import Flowers from '../ShopNow/Flowers';
import ContactUs from './contactus';


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

const FourYearsTitle = [
  { char: "C", color: "text-white-300"},
  { char: "o", color: "text-white-300" },
  { char: "n", color:"text-white-300" },

  { char: "t", color: "text-white-300"},
  { char: "a", color:"text-white-300" },
  { char: "c", color:"text-white-300" },
  { char: "t", color: "text-white-300"},
];



const Contact = () => {
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
                  <div className="absolute bottom-0 text-[#97401a] flex items-center justify-center inset-0 bg-black/50">
                    <motion.h1
                      className="text-7xl font-bold flex"
                      initial="initial"
                      animate={shouldAnimate ? "animate" : "initial"}
                      variants={textAnimation}
                      transition={textAnimation.transition}
                    >
                      {FourYearsTitle.map((item, index) => (
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
                      {FourYearsTitle.map((item, index) => (
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
    <ContactUs/>
    <Flowers/>
    <Footer/>
    </>
  );
}

export default Contact;