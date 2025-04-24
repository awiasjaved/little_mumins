"use client";
import React from "react";
import Image from "next/image";
import dinner from "../assets/images/dinner.jpg";
import swiming from "../assets/images/swiming.jpg";
import baali from "../assets/images/baali.jpg";
import maldives from "../assets/images/maldive.jpg";
import goa from "../assets/images/goa.jpg";
import { motion } from "framer-motion";
import WrapperSlider from "../WraperSlider";
import Container from "../Container";

const ExploreVisit = () => {
  const destinations = [
    { id: 1, name: "Swiss Alps", image: dinner },
    { id: 2, name: "Lake Geneva", image: swiming },
    { id: 3, name: "French Alps", image: baali },
    { id: 4, name: "Corfu", image: maldives },
    { id: 5, name: "Canouan", image: goa },
    { id: 6, name: "French Alps", image: baali },
    { id: 7, name: "Lake Geneva", image: swiming },
    { id: 8, name: "Lake Geneva", image: swiming }
  ];

  const slides = destinations.map((destination, index) => (
    <motion.div
      key={index}
      className="w-[90%] sm:w-[300px] mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="relative w-full h-[200px] overflow-hidden mb-4 rounded-lg shadow-lg gap-4">
          <Image
            src={destination.image}
            alt={destination.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
        <h3 className="text-md font-medium text-stone-800 text-left">
          {destination.name}
        </h3>
      </div>
    </motion.div>
  ));

  const customBreakpoints = {
    320: { slidesPerView: 1.2, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4.5, spaceBetween: 20 }
  };

  return (
    <section id="explore">
      <motion.div
        className="w-full"
        initial={{ opacity: 1, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="w-full sm:w-[65%]">
          <div className="w-full sm:w-[50%] flex justify-center items-center py-3">
            <h2 className="text-3xl font-light text-stone-800 mb-12 text-center">
              Explore our destinations
            </h2>
          </div>
        </div>

        <WrapperSlider
          slides={slides}
          slidesPerView={4.5}
          navigation={true}
          pagination={true}
          speed={800}
          grabCursor={true}
          breakpoints={customBreakpoints}
        />
      </motion.div>
    </section>
  );
};

export default ExploreVisit;

