"use client";
import React, { useState } from "react";
import Image from "next/image";

const DynamicCard = ({
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

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ title, price });
    }
  };

  return (
    <div
      className={`rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between bg-[#f1eaea] ${className}`}
    >
      {/* Image Section with Responsive Height */}
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
      </div>

      {/* Product Details */}
      <h4 className="text-lg sm:text-2xl font-medium mb-2">{title}</h4>

      <div className="flex flex-wrap justify-around items-center gap-1 sm:gap-2 mb-2">
        {page && <h4 className="text-sm sm:text-lg font-bold text-[#d162d1]">{page}</h4>}
        {cloth && <h4 className="text-sm sm:text-lg font-bold text-[#ee6509]">{cloth}</h4>}
        {size && <h4 className="text-sm sm:text-lg font-bold text-[#070991]">{size}</h4>}
      </div>

      {description && (
        <div
          className="text-sm sm:text-base text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {/* Pricing and Button */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-2">
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
          className="w-full bg-[#18a3a8] hover:bg-[#12878b] text-white py-2 rounded-full text-sm sm:text-base transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DynamicCard;
