"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const BookCard = ({
  id,
  title,
  page,
  cloth,
  size,
  price,
  oldPrice,
  image,
  hoverImage,
  description,
  onAddToCart,
  buttonText = "Add to Cart",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleAddToCart = () => {
    onAddToCart?.({
      id,
      title,
      page,
      cloth,
      size,
      price,
      oldPrice,
      image,
      hoverImage,
      description,
    });
  };

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.4 }}
      className={`w-full h-max-screen rounded-lg p-4 shadow hover:shadow-lg transition bg-white flex flex-col md:flex-row gap-6 ${className}`}
    >
      {/* Image Section */}
      <div
        className="relative w-full aspect-[4/3] md:w-1/2 md:h-auto md:aspect-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered && hoverImage ? hoverImage : image}
          alt={title}
          fill
          className="rounded-md transition-all duration-300 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h4 className="text-lg sm:text-2xl font-medium mb-3">{title}</h4>

          <div className="flex flex-wrap justify-start items-center gap-2 mb-3">
            {page && (
              <span className="text-sm sm:text-base font-bold text-[#d162d1]">
                {page}
              </span>
            )}
            {cloth && (
              <span className="text-sm sm:text-base font-bold text-[#ee6509]">
                {cloth}
              </span>
            )}
            {size && (
              <span className="text-sm sm:text-base font-bold text-[#070991]">
                {size}
              </span>
            )}
          </div>

          <div
            className="text-gray-700 text-sm sm:text-base mb-6"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 items-center">
            {oldPrice && (
              <span className="text-red-600 line-through text-base sm:text-lg">
                Rs {oldPrice}
              </span>
            )}
            <span className="text-[#18a3a8] text-xl sm:text-2xl font-bold">
              Rs {price}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-[#18a3a8] text-white px-4 py-2 rounded-full text-base transition hover:opacity-90"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
