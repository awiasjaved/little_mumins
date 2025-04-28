"use client";
import React from 'react';
import Footer from '../Footer/FooterEnd';
import bgImageDesktop from '../assets/images/saatyear.jpg';
import bgImageMobile from '../assets/images/mobilefive.jpg';
import Seven from "./sevenyears";
import Flowers from '../ShopNow/Flowers';

const Page = () => {
  return (
    <>
     {/* Desktop Background */}
     <div
        className="hidden md:block h-[70vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageDesktop.src})` }}
      >
        <div className="absolute bottom-0 left-8 text-white text-center pb-4">
          <h1 className="text-7xl font-bold">7-12years</h1>
        </div>
      </div>

        {/* Mobile Background */}
        <div
        className="block md:hidden h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageMobile.src})` }}
      >
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
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
