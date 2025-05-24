"use client";  // This should be the first line of the file
import React, { useState } from "react";

import Jannah from "../assets/images/Jannah.jpg";
import Annah from "../assets/images/Jannah.jpg";
import count from "../assets/images/count.jpg"
import count1 from "../assets/images/count1.jpg"
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
const Hardcover = () => {
    const products = [
         {
            id: 1,
            title: "THE JOY OF JANNAH",
            cloth: "○ Hard cover",
            page: "○ 14 pages",
            size: "○ Size 8*8 inches",
            price: 540,
            oldPrice: 600,
            image: Jannah,
            hoverImage: Annah,
            description: `This book aims to introduce the concept of Jannah to young minds in simple words with interesting details to open conversations to the endless possibilities of what the readers might feel...`,
          },
        {
            id: 2,
            title: " Count Your Way to Jannah",
            cloth: "○ Paper Book",
            page: "○ English",
            size: "○ Size 8*8 inches",
            price: 540,
            oldPrice: 660,
            image: count,
            hoverImage: count1,
            description: `
         Count Your Way to Jannah” is a unique counting book which aims to teach toddlers counting from 1 to 10 through Islamic concepts. Through this book, toddlers will not only learn numbers but will also learn ten different Islamic facts and concepts in a fun and exciting way along with captivating illustrations. `,

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
        <h3 className="text-7xl font-semibold mb-8">Hard Cover</h3>
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

export default Hardcover