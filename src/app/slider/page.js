"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Once from "../assets/images/oneupontime.png";
import Mekael from "../assets/images/circleMikaelgoes.png";
import Your from "../assets/images/CourtYour.png";
import Jannah from "../assets/images/the joy of jannah.png";
import Maza from "../assets/images/mazaaya.png";
import ADAY from "../assets/images/aday.png";
import OUR from "../assets/images/ourstory.png";
import OURNabi from "../assets/images/ournabi.png";
import Adventure from "../assets/images/adventure.png";

const Page = () => {
  // ✅ Move it inside here
  const collections = [
    { age: "Once Upon a Revelation", image: Once, alt: "Once " },
    { age: "Mekael goes to Madinah", image: Mekael, alt: "Mekael" },
    { age: "Count your way to Jannah", image: Your, alt: "Your " },
    { age: "The joys of Jannah", image: Jannah, alt: "Jannah" },
    { age: "Khoob Maza Aya", image: Maza, alt: "Maza " },
    { age: "A Day in the Life of Muslim", image: ADAY, alt: "ADAY" },
    { age: "Our Stars", image: OUR, alt: "OUR" },
    { age: "Our Nabi ", image: OURNabi, alt: "OURNabi" },
    { age: "Safas Colorful Adventures", image: Adventure, alt: "Adventure" },
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
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="h-[60vh]  px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center pt-20 pb-20">Little Mumins Collection</h1>
      <div className="relative overflow-hidden " ref={scrollRef}>
        <motion.div animate={controls} className="flex gap-6 px-10 py-4">
          {repeatedCollections.map((collection, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <div className="flex flex-col  ">
                <div className="rounded-full p-1 mb-3 overflow-hidden w-48 h-48 mx-auto relative flex items-center justify-center">
                  <Image
                    src={collection.image}
                    alt={collection.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-xl font-medium text-center">{collection.age}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
