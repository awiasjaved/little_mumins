"use client";
import { useState } from "react";
import Container from "../Container";
import Threepic from "../threeyears/threepic";
import Fouryears from "../four/fouryears";
import Sevenyears from "../seven/sevenyears";

const NewArrival = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const pages = [
    <Threepic key="three" />,
    <Fouryears key="four" />,
    <Sevenyears key="seven" />,
  ];

  const handleNext = () => {
    setPageIndex((prev) => (prev + 1) % pages.length);
  };

  const handlePrev = () => {
    setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <Container>
      <section className="py-10 text-center">
        <h2 className="text-sm text-gray-500 uppercase">New Arrivals</h2>
        <h3 className="text-2xl font-semibold mb-8">Our Newest Iman Bloomers</h3>

        {/* Show only one component at a time */}
        <div className="mb-6">{pages[pageIndex]}</div>

        {/* Pagination Buttons */}
        {/* <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-full transition"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#fb5858] hover:bg-[#852b02] text-white py-2 px-4 rounded-full transition"
          >
            Next →
          </button>
        </div> */}

        {/* View All Button */}
        <button className="mt-10 bg-black text-white py-2 px-6 rounded-full hover:opacity-80 transition">
          View All Products →
        </button>
      </section>
    </Container>
  );
};

export default NewArrival;
