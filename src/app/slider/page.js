"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"; // ✅ Import Next.js Image component

// ✅ Import your image assets
import Day from "../assets/images/DayMuslim.jpg";
import Bismillah from "../assets/images/bismillah.jpg";
import Safa from "../assets/images/safa.jpg";
import Sfa from "../assets/images/sfa.jpg";

const Page = () => {
  const collections = [
    { age: "0-2", image: Day, alt: "Day Muslim" },
    { age: "3-5", image: Safa, alt: "Safa" },
    { age: "6-8", image: Bismillah, alt: "Bismillah" },
    { age: "9-12", image: Bismillah, alt: "Bismillah" },
    { age: "13-16", image: Bismillah, alt: "Bismillah" },
    { age: "16+", image: Bismillah, alt: "Bismillah" },
  ];

  const repeatedCollections = [...collections, ...collections];

  const controls = useAnimation();
  const scrollRef = useRef();
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const offsetWidth = scrollRef.current?.offsetWidth || 0;
    const actualScroll = scrollWidth - offsetWidth;

    setTotalWidth(actualScroll);

    controls.start({
      x: [0, -scrollWidth / 2],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Collection</h1>

      <div className="relative overflow-hidden" ref={scrollRef}>
        <motion.div animate={controls} className="flex gap-6 px-10 py-4">
          {repeatedCollections.map((collection, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <div className="flex flex-col items-center">
                <div className="rounded-full border-4 border-lime-400 p-1 mb-3 overflow-hidden w-48 h-48 mx-auto relative">
                  {/* ✅ Use Next.js Image component */}
                  <Image
                    src={collection.image}
                    alt={collection.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-xl font-medium text-center">
                  {collection.age}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {collections.map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full bg-gray-300 hover:bg-lime-500 cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Page;
