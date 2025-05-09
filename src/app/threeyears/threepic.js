// src/app/threeyears/threepic.js
"use client";

import React, { useState, useEffect, useRef } from "react";
import Jannah from "../assets/images/joy.jpg";
import Annah from "../assets/images/Jannah.jpg";
import Jannat from "../assets/images/jannat.jpg";
import Annat from "../assets/images/annat.jpg";
import Khood from "../assets/images/khood.jpg";
import Hoob from "../assets/images/hoob.jpg";
import Most from "../assets/images/most.jpg";
import Blessed from "../assets/images/blessed.jpg";
import { useCart } from "../context/CartContext";
import DynamicCard from "../Dynamic/DynamicCard";
import Container from "../Container";

const ThreePic = () => {
  const products = [
    {
      id: 1,
      title: "THE JOY OF JANNAH",
      cloth: "○ Hard cover",
      page: "○ 14 pages",
      size: "○ Size 8*8 inches",
      price: 500,
      oldPrice: 600,
      image: Jannah,
      hoverImage: Annah,
      description: `This book aims to introduce the concept of Jannah to young minds...`
    },
    {
      id: 2,
      title: "Khoob Maza Aaya",
      cloth: "○ Board book",
      page: "○ Urdu",
      size: "○ Size 5*5 inches",
      price: 340,
      oldPrice: 380,
      image: Khood,
      hoverImage: Hoob,
      description: `“…اور سب سے بہترین دعا ‘اَلْـحَمْدُ لِلّٰہِ’ ہے۔”...`
    },
    {
      id: 3,
      title: "Raah-e-Jannat Ki Ginti",
      cloth: "○ Paper Book",
      page: "○ 16 pages",
      size: "○ Size 8*8 inches",
      price: 340,
      oldPrice: 380,
      image: Jannat,
      hoverImage: Annat,
      description: `“راہِ جنت کی کہانی” ایک منفرد کہانی کی کتاب ہے...`
    },
    {
      id: 4,
      title: "The Most Blessed",
      cloth: "○ Cloth book",
      page: "○ 12 pages",
      size: "○ Size 5*5 inches",
      price: 600,
      image: Most,
      hoverImage: Blessed,
      description: `This Islamic cloth book will not only stimulate your baby's sensory activity...`
    },
  ];

  const { addToCart } = useCart();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const paginatedProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Ref for scrolling the grid into view
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <Container>
      <section className="py-10 text-center">
        <div className="pb-20">
          <h2 className="text-lg text-gray-900 uppercase">New Arrivals</h2>
          <h3 className="text-2xl font-semibold mb-8">1-3 Years Products Little Mumins</h3>
        </div>

        {/* Product Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded-md cursor-pointer ${
                currentPage === i + 1 ? "bg-[#f6339a] text-white" : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ThreePic;
