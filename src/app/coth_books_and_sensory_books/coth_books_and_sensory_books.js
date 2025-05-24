"use client";  // This should be the first line of the file
import React, { useState } from "react";

import Most from "../assets/images/most.jpg";
import Blessed from "../assets/images/blessed.jpg";
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
const Coth_books_and_sensory_books = () => {
    const products = [
          {
            id: 4,
            title: "The Most Blessed",
            cloth: "○ Cloth book",
            page: "○ 12 pages",
            size: "○ Size 5*5 inches",
            price: 665,
            oldPrice: 740,
            image: Most,
            hoverImage: Blessed,
            description: `This Islamic cloth book will not only stimulate your baby's sensory activity and boost their brain development, but also introduce them to many key Islamic concepts and serve as a great bonding opportunity for you and your baby!`,
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
        <h3 className="text-7xl font-semibold mb-8">Coth Books And Sensory Books</h3>
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

export default Coth_books_and_sensory_books