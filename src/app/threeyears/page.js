"use-client";
import Footer from '../Footer/FooterEnd';
import bgImage from '../assets/images/three.png';
import Three from "../threeyears/threepic"
import Flowers from '../ShopNow/Flowers';
const page = () => {
  return (
    <>
      <div
         className="h-[70vh]  bg-cover bg-center"
         style={{ backgroundImage: `url(${bgImage.src})` }}
       >
        
         <div className="text-white text-center pt-32">
           <h1 className="text-7xl font-bold">About Us</h1>
         </div>
       </div>
    <Three/>
    <Flowers/>
    <Footer/>
    </>
  )
}

export default page;