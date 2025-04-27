"use-client";
import Footer from '../Footer/FooterEnd';
import bgImage from '../assets/images/three.png';
import Threepic from './threepic';
import Flowers from '../ShopNow/Flowers';
const page = () => {
  return (
    <>
      <div
         className="h-[70vh]  bg-cover bg-center"
         style={{ backgroundImage: `url(${bgImage.src})` }}
       >
        
         <div className="text-white text-center pt-32">
           <h1 className="text-7xl font-bold">0-3years</h1>
         </div>
       </div>
    <Threepic/>
    <Flowers/>
    <Footer/>
    </>
  )
}

export default page;