"use client";

import Footer from '../Footer/FooterEnd';
import bgFourDesktop from '../assets/images/four.jpg';
import bgFourMobile from '../assets/images/four.jpg'; // Mobile image
import Four from './fouryears';
import Flowers from '../ShopNow/Flowers';


const FourYearsTitle = [
  { char: "4", color: "text-green-500" },
  { char: "-", color: "text-purple-500" },
  { char: "7", color: "text-orange-500" },
  { char: "", color: "" },
  { char: "Y", color: "text-yellow-500" },
  { char: "e", color: "text-pink-500" },
  { char: "a", color: "text-red-500" },
  { char: "r", color: "text-blue-500" },
  { char: "s", color: "text-indigo-500" },
];


const Page = () => {
  return (
    <>
      {/* Desktop Background */}
      <div
        className="hidden md:block h-[70vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgFourDesktop.src})` }}
      >
        <div className="absolute bottom-0 text-white flex items-center justify-center inset-0 bg-black/50">
        <h1 className="text-7xl font-bold flex">
            {FourYearsTitle.map((item, index) => (
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
      {/* Mobile Background */}
      <div
        className="block md:hidden h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgFourMobile.src})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-end justify-center p-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            {FourYearsTitle.map((item, index) => (
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
      <Four/>
      <Flowers />
      <Footer />
    </>
  )
}

export default Page;
