import React from 'react'
"use-client";
import Footer from '../Footer/FooterEnd';
import bgImage from '../assets/images/seventh.png';
import Seven from "./sevenyears";
import Flowers from '../ShopNow/Flowers';
const page = () => {
  return (
    <>
    <div
       className="h-[70vh]  bg-cover bg-center"
       style={{ backgroundImage: `url(${bgImage.src})` }}
     >
      
       <div className="text-white text-center pt-32">
         <h1 className="text-7xl font-bold">7-12years</h1>
       </div>
     </div>
  <Seven/>
  <Flowers/>
  <Footer/>
  </>
  )
}

export default page