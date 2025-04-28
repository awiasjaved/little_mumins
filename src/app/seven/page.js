"use client";
import React from 'react';
import Footer from '../Footer/FooterEnd';
import bgImageDesktop from '../assets/images/sevenyears.jpg';
import bgImageMobile from '../assets/images/mobilesevenyears.jpg';
import Seven from "./sevenyears";
import Flowers from '../ShopNow/Flowers';

const Page = () => {
  return (
    <>
      {/* Desktop Background */}
      <div
        className="hidden md:block h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImageDesktop.src})` }}
      >
        <div className="text-white text-center pt-32">
          <h1 className="text-7xl font-bold">7-12years</h1>
        </div>
      </div>

      {/* Mobile Background */}
      <div
        className="block md:hidden h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImageMobile.src})` }}
      >
        <div className="text-white text-center pt-24">
          <h1 className="text-4xl font-bold">7-12years</h1>
        </div>
      </div>

      <Seven />
      <Flowers />
      <Footer />
    </>
  )
}

export default Page;
