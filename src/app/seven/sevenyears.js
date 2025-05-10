"use client";  // This should be the first line of the file
import React, { useState } from "react";
import Bismillah from "../assets/images/bismillah.jpg";
import Our from "../assets/images/our.jpg";
import Star from "../assets/images/Star.jpg";
import Mekail from "../assets/images/mekail.jpg";
import Revolution from "../assets/images/revelation.jpg";
import Once from "../assets/images/once.jpg";
import { useCart } from '../context/CartContext';
import Container from "../Container";
import DynamicCard from "../Dynamic/DynamicCard";

const SevenYears = () => {  // Changed to Uppercase
    const products = [
        {
            id: 1,
            title: "Our Stars",
            cloth: "○ Set of 2 Books",
            size: "○ Get to know 15 Sahaba and 15 Sahabiyat",
            price: 500,
            oldPrice: 600,
            image: Our,
            hoverImage: Star,
            description: `The Sahabiyat were the best of people. They were As-Sabiqun, the forerunners...`
        },
        {
            id: 2,
            title: "Mikael Goes to Madinah",
            cloth: "○ Paper Book",
            page: "○ 16 pages",
            size: "○ Size 8*8 inches",
            price: 550,
            oldPrice: 600,
            image: Mekail,
            hoverImage: Bismillah,
            description: `Mikael Goes to Madinah is a fun way to introduce your children to the many charms...`
        },
        {
            id: 3,
            title: "Once Upon a Revelation",
            cloth: "○ Paper Book",
            page: "○ 170 page",
            size: "○ Size 8*8 inches",
            price: 2800,
            oldPrice: 2900,
            image: Revolution,
            hoverImage: Once,
            description: `The book in your hands narrates to you the detailed stories of the Prophets...`
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
                    <h3 className="text-2xl font-semibold mb-8">7-12 Years Products Little Mumins</h3>
                </div>
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {paginatedProducts.map((product) => (
                        <DynamicCard
                            key={product.id}
                            {...product}
                            onAddToCart={addToCart}
                        />
                    ))}
                </div>

                {/* Pagination Controls */}
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
    );
};

export default SevenYears;  
