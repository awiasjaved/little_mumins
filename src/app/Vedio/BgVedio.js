"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./BgVedio.module.css";
import bgImage from "../assets/images/vedioBook.jpg";

const BgVedio = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  };

  const title = [
    { char: "L", color: "text-green-500" },
    { char: "I", color: "text-yellow-500" },
    { char: "T", color: "text-pink-500" },
    { char: "T", color: "text-green-500" },
    { char: "L", color: "text-pink-500" },
    { char: "E", color: "text-blue-500" },
    { char: " ", color: "" },
    { char: "M", color: "text-yellow-500" },
    { char: "U", color: "text-pink-500" },
    { char: "M", color: "text-blue-500" },
    { char: "I", color: "text-yellow-500" },
    { char: "N", color: "text-yellow-500" },
    { char: "S", color: "text-pink-500" },
  ];

  if (!isClient) return null;

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div
        className={`absolute inset-0 bg-black/50 flex items-center justify-center ${styles.overlay}`}
      >
        <div className="text-white text-center px-2 sm:px-4 w-full max-w-6xl">
          {/* Animated Title */}
          <motion.div
            className="flex flex-wrap justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            style={{ WebkitTextStroke: "0.5px #971a32" }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {title.map((itemObj, index) => (
              <motion.span
                key={index}
                variants={item}
                className={`mx-1 ${itemObj.color}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {itemObj.char}
              </motion.span>
            ))}
          </motion.div>

          {/* Animated Subtext */}
          <motion.div
            className="mt-4 flex flex-wrap justify-center text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ WebkitTextStroke: "0.2px #971a32" }}
          >
            {"Nurturing little hearts with stories of imaan".split("").map(
              (char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className="mx-[1px]"
                >
                  {char}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BgVedio;
