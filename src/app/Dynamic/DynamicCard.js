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
      onAddToCart({
        title,
        price,
        // Add other properties as needed
      });
    }
  };

  return (
    <div className={` rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between bg-[#f1eaea] ${className}`}>
      <div>
        {/* Image with hover effect */}
        <div
          className="relative h-64 w-full mb-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered && hoverImage ? hoverImage : image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="  rounded-md transition-all duration-300"
          />
        </div>

        {/* Product details */}
        <h4 className="text-2xl font-medium">{title}</h4>
        <div className="flex justify-around  items-center ">
        {page && <h4 className="text-lg font-bold text-[#d162d1]">{page}</h4>}
        {cloth && <h4 className="text-lg font-bold text-[#ee6509]">{cloth}</h4>}
        {size && <h4 className="text-lg font-bold text-[#070991]">{size}</h4>}
        </div>
        

        {/* Description with HTML support */}
        {description && (
          <div
            className="text-lg text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>

      {/* Price and action button */}
      <div className="">
        {oldPrice && (
          <span className="text-red-600 line-through text-lg mr-2">
            Rs {oldPrice}
          </span>
        )}
        <span className="text-[#18a3a8] text-2xl font-bold">Rs {price}</span>

        <button
          onClick={handleAddToCart}
          className=" btn block  mt-2  text-white py-2 px- rounded-full  transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DynamicCard;