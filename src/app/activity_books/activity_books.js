"use client";  // This should be the first line of the file
import React, { useState } from "react";

import Day from "../assets/images/DayMuslim.jpg"
import Bismillah from "../assets/images/bismillah.jpg"
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
import Nabi from "../assets/images/Nabi.jpg";
import Nabi1 from "../assets/images/Nabi1.jpg";
const Activity_books = () => {
    const products = [
        {
            id: 1,
            title: "Our Nabi Hadith book",
            cloth: "○ Activity Book",
            size: "○ Comes with a sticker sheet",
            price: 610,
            oldPrice: 680,
            image: Nabi,
            hoverImage: Nabi1,
            description: `None of you will have faith, till he loves me more than his father, his children, and all mankind.”
            (Sahih Bukhari)`
        },
       {
           id: 2,
           title: "A Day in the Life of a Muslim",
           cloth: "○ Colouring Book",
           size: "○ Comes with a sticker sheet",
           price: 250,
           oldPrice: 280,
           image: Day,
           hoverImage: Bismillah,
           description: `This engaging colouring book introduces kids to basic Islamic values and daily Sunnahs in a fun and creative way. From morning duas to bedtime habits, children will learn, colour and decorate their way through simple sunnah practices that bring them closer to Allah. Perfect for nurturing love for Islam while sparking imagination!`,
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
        <section className="pt-30 py-10 text-left">
        <div className="pb-20">
        <h3 className="text-7xl font-semibold mb-8">Activity Books</h3>
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

export default Activity_books