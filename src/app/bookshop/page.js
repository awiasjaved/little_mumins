"use client";
import React from 'react';

import bgImageDesktop from '../assets/images/-the-upper-books-of-the-table-are-named-little-mum.png';
import bgImageMobile from '../assets/images/-the-upper-books-of-the-table-are-named-little-mum.png';
import AllProduct from './AllProduct';
import Flowers from '../ShopNow/Flowers';
import FooterEnd from '../Footer/FooterEnd';
const bookshopTitle = [
  { char: "B", color: "text-green-500" },
  { char: "O", color: "text-purple-500" },
  { char: "O", color: "text-orange-500" },
  { char: "K", color: "text-yellow-500" },
  { char: " ", color: "" },
  { char: "S", color: "text-pink-500" },
  { char: "H", color: "text-red-500" },
  { char: "O", color: "text-blue-500" },
  { char: "P", color: "text-indigo-500" },
];

export const page = () => {
  return (
    <>
      {/* Desktop Background */}
      <div
        className="hidden md:block h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageDesktop.src})` }}
      >
        <div className="absolute bottom-0 text-white flex items-center justify-center inset-0 bg-black/50">
          <h1 className="text-7xl font-bold flex">
            {bookshopTitle.map((item, index) => (
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
      <div
        className="block md:hidden h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageMobile.src})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-end justify-center p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            {bookshopTitle.map((item, index) => (
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
      <AllProduct/>
      <Flowers/>
      <FooterEnd/>
    </>
  );
};

export default page;
