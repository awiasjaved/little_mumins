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
    <div className="relative h-[60vh] w-full">
   <div className="absolute inset-0">
  {/* Background Image with lower opacity via overlay */}
  <div
    className="w-full h-[60vh] bg-cover bg-center relative"
    style={{ backgroundImage: `url(${bgImage.src})` }}
  >
    <div className="absolute inset-0 bg-black/40"></div> {/* This adds dark overlay */}
  </div>
</div>


      {/* Content Container */}
      <div className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center px-4">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title.map((item, index) => (
            <span key={index} className={item.color}>
              {item.char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl italic text-[#7bf04d] mb-8">
          &quot;Nurturing the seed of Iman in young hearts&quot;
        </p>

        {/* Shop Button */}
        <Link href="/shop">
          <span className="btn inline-flex items-center px-6 py-2 rounded-full text-white font-medium transition-all  gap-2">
            SHOP NOW
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Flowers
