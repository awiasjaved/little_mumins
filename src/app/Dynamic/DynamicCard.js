"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

// Bounce effect for card entry
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

// Scale-fade animation for modal
const modalAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3, ease: "easeIn" },
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
  const [isModalLoading, setIsModalLoading] = useState(false);
  const controls = useAnimation();

  // Open modal with a brief loading state
  const openModal = () => {
    setShowModal(true);
    setIsModalLoading(true);
    setTimeout(() => setIsModalLoading(false), 300);
  };

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
      {/* Product Card */}
      <motion.div
        className={`rounded-lg p-4 drop-shadow-xl hover:drop-shadow-2xl transition flex flex-col justify-between bg-[#f0f0f0] backdrop-white-md ${className}`}
        variants={bounceInVariant}
        initial="hidden"
        animate={controls}
      >
        {/* Image */}
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
              onClick={openModal}
              className="w-full bg-black text-white sm:text-sm px-5 py-3 rounded-md shadow"
            >
              View Description
            </button>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-lg sm:text-2xl font-medium mb-6">
          {title || "Product Title"}
        </h4>

        {/* Price & Add to Cart */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
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

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
            className="fixed inset-0 z-50 flex items-center justify-center "
          >
            {isModalLoading ? (
              <div className="text-white text-lg">Loading…</div>
            ) : (
              <motion.div
                className="bg-[#FBDFB0] w-full h-full p-6 relative overflow-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 z-20  hover:bg-red-600 text-2xl w-10 h-10  rounded-full border bg-[#852b02] text-white  transition"
                >
                  &times;
                </button>

                <div className="flex flex-col md:flex-row h-full gap-4">
                  {/* Image */}
                  <div className="relative md:w-1/2 h-64 md:h-auto rounded-md overflow-hidden">
                    <Image
                      src={image || "/default-image.jpg"}
                      alt={title || "Product Image"}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>

                  {/* Details */}
                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                      {/* Title & Tags */}
                      <h4 className="font-bold text-2xl mb-2">
                        {title || "Product Title"}
                      </h4>
                      <div className="flex flex-wrap justify-around items-center  mb-4">
                        {page && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-900 rounded">
                            {page}
                          </span>
                        )}
                        {cloth && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-900 rounded">
                            {cloth}
                          </span>
                        )}
                        {size && (
                          <span className="px-2 py-1 bg-green-100 text-green-900 rounded">
                            {size}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <div
                        className="text-black mb-6"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                        dangerouslySetInnerHTML={{
                          __html: description || "No description available.",
                        }}
                      />
                    </div>

                    {/* Price & Add to Cart in Modal */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        {oldPrice && (
                          <span className="line-through text-red-600">
                            Rs {oldPrice}
                          </span>
                        )}
                        <span className="text-3xl font-bold text-green-600">
                          Rs {price}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          handleAddToCart();
                          setShowModal(false);
                        }}
                        className="bg-[#852b02] text-white px-6 py-2 rounded-full text-lg"
                      >
                        {buttonText}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicCard;
