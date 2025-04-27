"use client";  // This should be the first line of the file
import React, { useState } from "react";
import Image from "next/image";


import Jannat from "../assets/images/jannat.jpg";
import Annat from "../assets/images/annat.jpg";
import Hoob from "../assets/images/hoob.jpg";
import Most from "../assets/images/most.jpg";
import Blessed from "../assets/images/blessed.jpg";
import Day from "../assets/images/DayMuslim.jpg"
import Bismillah from "../assets/images/bismillah.jpg"
import Safa from "../assets/images/safa.jpg"
import Sfa from "../assets/images/sfa.jpg"
const fouryears = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
        const [currentPage, setCurrentPage] = useState(1);
        const productsPerPage = 3;
    
        const products = [
            {
                title: "A Day in the  Life of a Muslim",
                cloth: "○ Colouring Book",
                size: "○ Comes with a sticker sheet",
                price: 500,
                oldPrice: 600,
                image: Day,
                hoverImage: Bismillah,
                description: `This engaging colouring book introduces kids to basic Islamic values and daily Sunnahs in a fun and creative way. From morning duas to bedtime habits, children will learn, colour and decorate their way through simple sunnah practices that bring them closer to Allah. Perfect for nurturing love for Islam while sparking imagination!`
            },
            {
                title: " Safas Colourful Adventure",
                cloth: "○ Paper Book",
                page: "○ English",
                size: "○ Size 8*8 inches",
                price: 600,
                oldPrice: 660,
                image: Safa,
                hoverImage: Sfa,
                description: `
         As she soars through the skies, Safa discovers the breathtaking beauty of Allah’s colourful world, where every colour tells a story. From gardens filled with flowers to cool rivers with pink fish, each moment is filled with fascinating facts from the Quran.
And when the journey ends, the fun continues with exciting activities that will make you see the vibrant world around you in a whole new light of Quran and Hadith. This unforgettable adventure will leave little readers exploring colours and nature with gratitude and wonder long after the adventure ends. `,

            },
        ];
        const totalPages = Math.ceil(products.length / productsPerPage);
    
        // Get current page products
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };
  return (
    <div>
                <section className="py-10 text-center">
                    <h1 className="text-sm text-[#a84618] uppercase">New Arrivals</h1>
                    <h3 className="text-4xl text-[#a84618] font-semibold mb-8">Our Newest Iman Bloomers</h3>
    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                        {currentProducts.map((product, index) => (
                            <div
                                key={index}
                                className="border border-[#a84618] rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between bg-[#fcfcfc]"
                            >
                                <div>
                                    <div
                                        className="relative h-64 w-full mb-4"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <Image
                                            src={hoveredIndex === index ? product.hoverImage : product.image}
                                            alt={product.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="rounded-md transition-all duration-300"
                                        />
                                    </div>
    
                                    <h4 className="text-lg font-medium">{product.title}</h4>
                                    <h4 className="text-sm text-[#a84618]">{product.page}</h4>
                                    <h4 className="text-sm text-[#a84618]">{product.cloth}</h4>
                                    <h4 className="text-sm text-[#a84618]">{product.size}</h4>
    
                                    <p className="text-sm text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: product.description }} />
                                </div>
    
                                <div className="mt-4">
                                    {product.oldPrice && (
                                        <span className="text-gray-400 line-through text-sm mr-2">
                                            Rs {product.oldPrice}
                                        </span>
                                    )}
                                    <span className="text-[#a84618] font-bold">Rs {product.price}</span>
    
                                    <button className="block w-full mt-4 bg-[#a84618] text-white py-2 px-4 rounded-full hover:bg-[#852b02] transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
    
                    {/* Pagination */}
                    <div className="flex justify-center items-center space-x-2 mt-10">
                        {[...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handlePageChange(idx + 1)}
                                className={`px-4 py-2 rounded-full ${currentPage === idx + 1
                                        ? "bg-[#a84618] text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-[#a84618] hover:text-white"
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>
    
                </section>
            </div>
  )
}

export default fouryears