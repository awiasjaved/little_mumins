"use client";
import FooterEnd from '../Footer/FooterEnd';
import Flowers from '../ShopNow/Flowers';
import Story from '../OurStory/Story';
import bgImageDesktop from '../assets/images/stab.jpg';
import bgImageMobile from '../assets/images/stab.jpg';
const bookshopTitle = [
  { char: "A", color: "text-green-500" },
  { char: "B", color: "text-purple-500" },
  { char: "O", color: "text-orange-500" },
  { char: "U", color: "text-yellow-500" },
  { char: "T", color: "text-pink-500" },
  
];

const page = () => {
  return (
    <>
      {/* Desktop Background */}
      <div
        className="hidden md:block h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageDesktop.src})` }}
      >
        <div className="absolute bottom-0 text-white flex items-center justify-center inset-0 bg-black/50">
          <h1 className="text-7xl font-bold flex">
            {bookshopTitle.map((item, index) => (
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
      <div
        className="block md:hidden h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImageMobile.src})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-end justify-center p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            {bookshopTitle.map((item, index) => (
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
      <Story />
      <Flowers />
      <FooterEnd />

    </>
  );
}

export default page;