"use-client";

import Footer from '../Footer/FooterEnd';
import bgImage from '../assets/images/yerasfour.png';
import Four from './fouryears';
import Flowers from '../ShopNow/Flowers';
const page = () => {
  return (
    <>
      <div
         className="h-[70vh]  bg-cover bg-center"
         style={{ backgroundImage: `url(${bgImage.src})` }}
       >
        
         <div className="text-white text-center pt-32">
           <h1 className="text-7xl font-bold">4-6years</h1>
         </div>
       </div>
    <Four/>
    <Flowers/>
    <Footer/>
    </>
  )
}

export default page;