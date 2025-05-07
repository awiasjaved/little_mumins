"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

// Animation Variants for bounce effect
const bounceInVariant = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: [0.3, 1.05, 0.9, 1.03, 0.97, 1],
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

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

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <>
      <motion.div
        className={`rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between bg-[#d7f4f5] ${className}`} // Corrected className string
        variants={bounceInVariant}
        initial="hidden"
        animate={controls}
      >
        {/* Image Section */}
        <div
          className="relative h-64 sm:h-72 md:h-80 w-full mb-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered && hoverImage ? hoverImage : image}
            alt={title || "Product Image"}
            layout="fill"
            objectFit="cover"
            className="rounded-md transition-all duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          <div className="absolute w-full bottom-0 z-10">
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-black text-white sm:text-sm px-5 py-3 rounded-md shadow"
            >
              View Description
            </button>
          </div>
        </div>

        {/* Product Title */}
        <h4 className="text-lg sm:text-2xl font-medium mb-6">{title || "Product Title"}</h4>

        {/* Price and Cart */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-6">
            {oldPrice && (
              <span className="text-red-600 line-through text-base sm:text-lg">
                Rs {oldPrice}
              </span>
            )}
            <span className="text-[#18a3a8] text-xl sm:text-2xl font-bold">
              Rs {price || "0"}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="btn text-white rounded-full text-lg sm:text-base transition"
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm p-4">
          <div className="bg-[#f9fcfc] w-full max-w-4xl p-6 rounded-lg shadow-lg relative flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl text-center"
            >
              &times;
            </button>

            <div className="relative w-full h-64 sm:h-72 rounded-md overflow-hidden">
              <Image
                src={image || "/default-image.jpg"}
                alt={title || "Product Image"}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div
              className="w-full text-black text-sm sm:text-base"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <h4 className="font-bold text-lg sm:text-xl mb-2">{title || "Product Title"}</h4>

              <div className="flex flex-wrap justify-center items-center gap-2 mb-3">
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
                dangerouslySetInnerHTML={{ __html: description || "No description available." }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicCard;
