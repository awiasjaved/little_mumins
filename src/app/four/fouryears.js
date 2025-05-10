"use client";  // This should be the first line of the file
import React, { useState } from "react";

import Day from "../assets/images/DayMuslim.jpg"
import Bismillah from "../assets/images/bismillah.jpg"
import Safa from "../assets/images/safa.jpg"
import Sfa from "../assets/images/sfa.jpg"
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
const Fouryears = () => {
    const products = [
        {
            id: 1,
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
            id: 2,
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
    const { addToCart } = useCart();
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;
    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const paginatedProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

return (
    <div
    id="three-pic" 
    className="min-h-screen bg-cover bg-center bg-no-repeat scroll-smooth"
    style={{ backgroundImage: "url('/back.png')" }}
  >
    <Container>
        <section className="py-10 text-center">
        <div className="pb-20">
        <h2 className="text-lg text-gray-900 uppercase">New Arrivals</h2>
        <h3 className="text-2xl font-semibold mb-8">4-7 Years Products Little Mumins</h3>
      </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                    <DynamicCard
                        key={product.id}
                        {...product}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-4 py-2 border rounded-md cursor-pointer ${currentPage === i + 1
                                ? "bg-[#852b02] text-white"
                                : "bg-white text-black"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

        </section>
    
    </Container>
    </div>
)
};

export default Fouryears