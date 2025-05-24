"use client";
import { useState } from "react";
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
import { motion } from "framer-motion"; 
const FreeBies = () => {
  const [hoveredIndex,  setHoveredIndex] = useState(null);
  const products = [
    {
      title: "ISLAMIC CAP",
      badgeText: null, 
      image: IslamicCap,
      hoverImage: DIslamicCap,
    },
    {
      title: "ISLAMIC PENCIL",
      badgeText: null,
      image: IslamicPencil,
      hoverImage: Islamic2,
    },
    {
      title: "MASWAAK",
      badgeText: null,
      image: Maswak,
      hoverImage:  Maswak1 ,
    },
    {
      title: "Sandal Wood Tasbih",
      badgeText: null,
      image:Tasbih ,
      hoverImage: Tasbih1 ,
    },
    {
      title: "ZamZam",
      badgeText: null,
      image: Zamzam1,
      hoverImage: Zamzam2,
    },
    {
      title: "Little Mumins Candy",
      badgeText: null,
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
    <div
    className="min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/back.png')" }}
  >
    <Container>
    <section className="py-10 text-center">
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pb-20"
      >
        <div className="pb-20">
            <h3 className="text-2xl font-semibold mb-8">Freebies Little Mumins</h3>
        </div>
        </motion.div>
        {/* Product Grid */}
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="pb-20"
>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
                <DynamicCard
                    key={product.title}  // key added here using unique title
                    {...product}
                    onAddToCart={addToCart}
                />
            ))}
        </div>
        </motion.div>
        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-4 py-2 border rounded-md cursor-pointer ${
                        currentPage === i + 1
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
}

export default FreeBies