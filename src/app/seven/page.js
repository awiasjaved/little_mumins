"use client";
import React from 'react';
import Footer from '../Footer/FooterEnd';
import bgSevenDesktop from '../assets/images/saatyear.jpg';
import bgSevenMobile from '../assets/images/mobilefive.jpg';
import Flowers from '../ShopNow/Flowers';
import Seven from './sevenyears'
const SevenYearsTitle = [
  { char: "7", color: "text-green-500" },
  { char: "-", color: "text-purple-500" },
  { char: "12", color: "text-orange-500" },
  { char: "", color: "" },
  { char: "Y", color: "text-yellow-500" },
  { char: "e", color: "text-pink-500" },
  { char: "a", color: "text-red-500" },
  { char: "r", color: "text-blue-500" },
  { char: "s", color: "text-indigo-500" },
];
const Page = () => {

  return (
    <>
    {/* Desktop Background */}
    <div
      className="hidden md:block h-[70vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgSevenDesktop.src})` }}
    >
      <div className="absolute bottom-0 text-white flex items-center justify-center inset-0 bg-black/50">
      <h1 className="text-7xl font-bold flex">
          {SevenYearsTitle.map((item, index) => (
            <span
              key={index}
              className={`${item.color} text-7xl`}
              style={{ WebkitTextStroke: "0.2px #971a32" }}
            >
              {item.char}
            </span>
          ))}
        </h1>
      </div>
    </div>

    {/* Mobile Background */}
    {/* Mobile Background */}
    <div
      className="block md:hidden h-[50vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgSevenMobile.src})` }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-end justify-center p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
          {SevenYearsTitle.map((item, index) => (
            <span
              key={index}
              className={`${item.color} text-4xl`}
              style={{ WebkitTextStroke: "0.2px #971a32" }}
            >
              {item.char}
            </span>
          ))}
        </h1>
      </div>
    </div>
    <Seven/>
    <Flowers />
    <Footer />
  </>
  )
}
export default Page;
