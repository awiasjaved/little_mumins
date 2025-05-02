"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const DynamicCard = ({
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
  const [showModal, setShowModal] = useState(false);
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

  // Safe use of controls.start inside useEffect
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.4 }}
        className={`rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between bg-[#f1eaea] ${className}`}
      >
        {/* Image Section with Hover and View Description Button */}
        <div
          className="relative h-64 sm:h-72 md:h-80 w-full mb-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered && hoverImage ? hoverImage : image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-md transition-all duration-300"
          />

          {/* View Description Button */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
            <button
              onClick={() => setShowModal(true)}
              className="bg-black text-white text-xs sm:text-sm px-3 py-1 rounded-md shadow"
            >
              View Description
            </button>
          </div>
        </div>

        {/* Product Title */}
        <h4 className="text-lg sm:text-2xl font-medium mb-6"
          >{title}</h4>

        {/* Price and Cart */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-6">
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
            className="btn text-white  rounded-full text-lg sm:text-base transition"
          >
            {buttonText}
          </button>
        </div>
      </motion.div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm p-4">
          <div className="bg-[#f9fcfc] w-full max-w-4xl p-6 rounded-lg shadow-lg relative flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
            >
              &times;
            </button>

            {/* Modal Image */}
            <div className="relative w-full md:w-1/2 h-64 sm:h-72 rounded-md overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>

            {/* Modal Text Info */}
            <div
              className="w-full md:w-1/2 text-black text-sm sm:text-base"
              style={{ fontFamily: "'Open Sans', sans-serif"}}
            >
              <h4 className="font-bold text-lg sm:text-xl mb-2">{title}</h4>

              <div className="flex flex-wrap justify-start items-center gap-2 mb-3">
                {page && (
                  <h4 className="text-sm sm:text-base font-bold text-[#d162d1]">
                    {page}
                  </h4>
                )}
                {cloth && (
                  <h4 className="text-sm sm:text-base font-bold text-[#ee6509]">
                    {cloth}
                  </h4>
                )}
                {size && (
                  <h4 className="text-sm sm:text-base font-bold text-[#070991]">
                    {size}
                  </h4>
                )}
              </div>

              <div
                className="text-gray-700 text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicCard;
