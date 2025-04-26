"use client";
import bgImage from '../assets/images/baali.jpg'; // apni image ka path adjust karein
import FooterEnd from '../Footer/FooterEnd';
import Flowers from '../ShopNow/Flowers';
import Story from '../OurStory/Story';
const page = () => {
  return (
    <div>
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
     
      <div className="text-white text-center pt-32">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-xl">Welcome to our journey!</p>
      </div>
    </div>
    <Story/>
    <Flowers/>
    <FooterEnd/>
    </div>
  );
}

export default page;