"use client";
import bgImage from '../assets/images/about.png'; 
import FooterEnd from '../Footer/FooterEnd';
import Flowers from '../ShopNow/Flowers';
import Story from '../OurStory/Story';
const page = () => {
  return (
    <div>
    <div
      className="h-[50vh]  bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
     
      <div className="text-white text-center pt-32">
        <h1 className="text-7xl font-bold">About Us</h1>
      </div>
    </div>
    <Story/>
    <Flowers/>
    <FooterEnd/>
    </div>
  );
}

export default page;