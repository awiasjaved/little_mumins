"use client";
import Footer from '../Footer/FooterEnd';
import bgImageDesktop from '../assets/images/threeyears.jpg';
import bgImageMobile from '../assets/images/mobilethreeyears.jpg';
import Threepic from './threepic';
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
          <h1 className="text-7xl font-bold">0-3years</h1>
        </div>
      </div>

      {/* Mobile Background */}
      <div
        className="block md:hidden h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImageMobile.src})` }}
      >
        <div className="text-white text-center pt-24">
          <h1 className="text-4xl font-bold">0-3years</h1>
        </div>
      </div>

      <Threepic />
      <Flowers />
      <Footer />
    </>
  );
}

export default Page;
