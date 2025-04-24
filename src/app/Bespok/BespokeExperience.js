"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "../Container";
import WrapperSlider from "../WraperSlider";
import BespokeImage1 from "../assets/images/sakardo.jpg";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import CommonButton from "../CommonButton";
const BespokeExperience = () => {
  const [hoveredSlide, setHoveredSlide] = useState(null);

  const experiences = [
    {
      id: 1,
      image: BespokeImage1,
      location: "ULTIMA CORFU",
      title: "Boating Day Trips",
      description:
        "Picture this: standing at the front of your private yacht as you dart across the Ionian Sea...",
    },
    {
      id: 2,
      image: BespokeImage1,
      location: "ULTIMA CRANS-MONTANA",
      title: "Wine Tasting",
      description:
        "Experience the finest Swiss wines in our private cellar. Our sommelier will guide you through selections...",
    },
    {
      id: 3,
      image: BespokeImage1,
      location: "ULTIMA CRANS-MONTANA",
      title: "Wine Tasting",
      description:
        "Experience the finest Swiss wines in our private cellar. Our sommelier will guide you through selections...",
    },
    {
      id: 4,
      image: BespokeImage1,
      location: "ULTIMA CRANS-MONTANA",
      title: "Wine Tasting",
      description:
        "Experience the finest Swiss wines in our private cellar. Our sommelier will guide you through selections...",
    },
  ];

  const slides = experiences.map((experience) => (
    <div
      key={experience.id}
      className="relative w-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setHoveredSlide(experience.id)}
      onMouseLeave={() => setHoveredSlide(null)}
    >
      <Image
        src={experience.image}
        alt={experience.title}
        width={800}
        height={400}
        className="w-full"
      />
      <div
        className={`absolute bottom-0 left-0 w-full bg-[#f5f0eb] bg-opacity-95 p-4 transition-all duration-500 ${
          hoveredSlide === experience.id
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full"
        }`}
      >
        <h3 className="text-xs uppercase text-gray-500">
          {experience.location}
        </h3>
        <h2 className="text-lg text-gray-800 font-bold">{experience.title}</h2>
        <p className="text-sm text-gray-700 mt-2">{experience.description}</p>
      </div>
    </div>
  ));

  return (
    <section id="besbok">
    <Container>
      <div className="w-full flex  justify-center items-center">
        <div className="w-[80%] flex flex-col sm:flex-row justify-between items-center  py-4 ">
          <h1 className="text-center text-2xl font-bold mb-4 sm:mb-0">
            Bespoke experiences
          </h1>
          <CommonButton text={"Our Collection"} />
        </div>
      </div>
      <WrapperSlider
        slides={slides}
        slidesPerView={1.2}
        navigation={true}
        pagination={true}
      />
    </Container>
    </section>
  );
};

export default BespokeExperience;
