import React from 'react'
import Link from 'next/link'
import bgImage from '../assets/images/flowersbook.jpg'
import { FaArrowRight } from "react-icons/fa6";

const Flowers = () => {
  const title = [
    { char: "L", color: "text-green-500" },
    { char: "I", color: "text-purple-500" },
    { char: "T", color: "text-orange-500" },
    { char: "T", color: "text-yellow-500" },
    { char: "L", color: "text-pink-500" },
    { char: "E", color: "text-red-500" },
    { char: " ", color: "" },
    { char: "M", color: "text-blue-500" },
    { char: "U", color: "text-blue-500" },
    { char: "M", color: "text-blue-500" },
    { char: "I", color: "text-blue-500" },
    { char: "N", color: "text-blue-500" },
    { char: "S", color: "text-blue-500" },
  ];

  return (
    <div className="relative h-[70vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-[70vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title.map((item, index) => (
            <span key={index} className={item.color}>
              {item.char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl italic text-[#7bf04d] mb-8"
          style={{ WebkitTextStroke: "0.1px #FFFDD0" }}
        >
          &quot;Nurturing the seed of Iman in young hearts&quot;
        </p>

        {/* Button with animation */}
        <Link href="/bookshop">
          <button className="mt-10 bg-[#f6339a] text-white py-2 px-6 hover:bg-[#d12c89] rounded-full cursor-pointer hover:animate-shakeX">
            <div className="flex items-center gap-1">
              Shop Now
              <FaArrowRight />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Flowers;
