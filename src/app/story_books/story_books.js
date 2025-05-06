"use client";  // This should be the first line of the file
import React, { useState } from "react";

import Day from "../assets/images/DayMuslim.jpg"
import Bismillah from "../assets/images/bismillah.jpg"
import Our from "../assets/images/our.jpg";
import Star from "../assets/images/Star.jpg";
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
const Story_books = () => {
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
           title: "Our Stars",
           cloth: "○ Set of 2 Books",
           size: "○ Get to know 15 Sahaba and 15 Sahabiyat",
           price: 500,
           oldPrice: 600,
           image: Our,
           hoverImage: Star,
           description: `The Sahabiyat were the best of people. They were As-Sabiqun, the forerunners. Hence, we should make them our role models.
           This book aims to introduce the female companions of Rasul Allah ﷺ to our children from a young age so that they know whom to seek inspiration from. This book will help our children recognize the Sahabiyat as “Our Stars” and help them learn from each Sahabiyah’s exemplary character and life.
           As an activity, at the end of the book, parents can ask their children to pick their favorite Sahabiyah and discuss the lessons they learned from the character and life of that Sahabiyah.
           May Allah help us and our children to follow the footsteps of Rasul Allah ﷺ and his noble Companions (Ameen)`,
         },
         {
            id: 3,
            title: "Our Stars",
            cloth: "○ Set of 2 Books",
            size: "○ Get to know 15 Sahaba and 15 Sahabiyat",
            price: 500,
            oldPrice: 600,
            image: Our,
            hoverImage: Star,
            description: `The Sahabiyat were the best of people. They were As-Sabiqun, the forerunners. Hence, we should make them our role models.
            This book aims to introduce the female companions of Rasul Allah ﷺ to our children from a young age so that they know whom to seek inspiration from. This book will help our children recognize the Sahabiyat as “Our Stars” and help them learn from each Sahabiyah’s exemplary character and life.
            As an activity, at the end of the book, parents can ask their children to pick their favorite Sahabiyah and discuss the lessons they learned from the character and life of that Sahabiyah.
            May Allah help us and our children to follow the footsteps of Rasul Allah ﷺ and his noble Companions (Ameen)`,
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
    <Container>
        <section className="pt-30 py-10 text-left">
        <div className="pb-20">
        <h3 className="text-7xl font-semibold mb-8">Story Books</h3>
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
                                ? "bg-[#f6339a] text-white"
                                : "bg-white text-black"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

        </section>
    
    </Container>
)
};

export default Story_books