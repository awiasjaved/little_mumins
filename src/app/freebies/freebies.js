"use client";
import { useState } from "react";
import Image from "next/image";
import IslamicCap from "../assets/images/images (1).jpeg";
import DIslamicCap from "../assets/images/images.jpeg"
import IslamicPencil from "../assets/images/PENCIL.jpg"
import Islamic2 from "../assets/images/islamicpencil.jpg"
import Maswak from "../assets/images/maswak.jpg"
import Maswak1 from "../assets/images/ismaswak.jpg"
import Tasbih from "../assets/images/tasbih_.jpg"
import Tasbih1 from "../assets/images/rtasbih.jpeg"
import Zamzam1 from "../assets/images/zamzam1.jpg"
import Zamzam2 from "../assets/images/zamzam2.jpg"
import Candy1 from "../assets/images/8.jpg"
import Candy2 from "../assets/images/candy.jpg"
import { useCart } from '../context/CartContext'; 
import DynamicCard from "../Dynamic/DynamicCard";
import Container from "../Container";
const FreeBies = () => {
  const [hoveredIndex,  setHoveredIndex] = useState(null);
  const products = [
    {
      id:1,
      title: "ISLAMIC CAP",
      image: IslamicCap,
      hoverImage: DIslamicCap,
    },
    {
      id:2,
      title: "ISLAMIC PENCIL",
      image: IslamicPencil,
      hoverImage: Islamic2,
    },
    {
      id:3,
      title: "MASWAAK",
      image: Maswak,
      hoverImage:  Maswak1 ,
    },
    {
      id:4,
      title: "Sandal Wood Tasbih",
      image:Tasbih ,
      hoverImage: Tasbih1 ,
    },
    {
      id:5,
      title: "ZamZam",
      image: Zamzam1,
      hoverImage: Zamzam2,
    },
    {
      id:6,
      title: "Little Mumins Candy",
      image: Candy1,
      hoverImage: Candy2,
    },
 
  ];
     const { addToCart } = useCart();
      
      // Pagination states
      const [currentPage, setCurrentPage] = useState(1);
      const productsPerPage = 6;
  
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
    <section className="py-10 text-center">
        <div className="pb-20">
            <h3 className="text-2xl font-semibold mb-8">Freebies Little Mumins</h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
                <DynamicCard
                    key={product.title}  // key added here using unique title
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
                    className={`px-4 py-2 border rounded-md cursor-pointer ${
                        currentPage === i + 1
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
}

export default FreeBies