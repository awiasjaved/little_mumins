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
import janwar from "../assets/images/janwar.jpg"
import janwar1 from "../assets/images/janwar1.jpg"
import { useCart } from "../context/CartContext";
import DynamicCard from "../Dynamic/DynamicCard";
import Allah from "../assets/images/Allah.png"
import Allah1 from "../assets/images/Allah1.png"
import pyaraAllah from "../assets/images/pyara_Allah.jpg"
import pyaraAllah1 from "../assets/images/pyara_Allah.jpg"
import Five from "../assets/images/fivesense.jpg";
import Five1 from "../assets/images/five.jpg";
import Container from "../Container";
import { motion } from "framer-motion";

const ThreePic = () => {
  const products = [
    {
      id: 1,
      title: "THE JOY OF JANNAH",
      cloth: "○ Hard cover",
      page: "○ 14 pages",
      size: "○ Size 8*8 inches",
      price: 550,
      oldPrice: 600,
      image: Jannah,
      hoverImage: Annah,
      description: `his book aims to introduce the concept of Jannah to young minds in simple words with interesting details to open conversations to the endless possibilities of what the readers might feel...`
    },
    {
      id: 2,
      title: "Khoob Maza Aaya",
      cloth: "○ Board book",
      page: "○ Urdu",
      size: "○ Size 5*5 inches",
      price: 380,
      oldPrice: 420,
      image: Khood,
      hoverImage: Hoob,
      description: `“…اور سب سے بہترین دعا 'اَلْـحَمْدُ لِلّٰہِ' ہے۔” (سنن ابن ماجہ: 3805) پیارے نبی صلی اللہ علیہ وسلم نے فرمایا: "تم میں سے جس نے اس حال میں صبح کی کہ اس کا جسم صحیح سلامت ہو، اس کی جان بے خوف ہو اور اس کے پاس دن کا کھانا بھی میسر ہو، تو ایسا ہے جیسے اس کے لیے دنیا اکٹھی ہوگئی۔” (سنن ابن ماجہ: 4141) آئیے! دل کے ہر حال میں 'اَلْـحَمْدُ لِلّٰہِ' کہنا اور کرنا سیکھیں۔`,
  },
    {
      id: 3,
      title: "Raah-e-Jannat Ki Ginti",
      cloth: "○ Paper Book",
      page: "○ 16 pages",
      size: "○ Size 8*8 inches",
      price: 380,
      oldPrice: 420,
      image: Jannat,
      hoverImage: Annat,
      description: `"راہ جنت کی کہانی" ایک منفرد کہانی کی کتاب ہے جس کا مقصد بچوں کو دینی تصورات کے ذریعے تعلیم دینا ہے ... دُعا ہے اللہ تعالیٰ ہمارے لیے اور ہمارے بچوں کے لیے علم کے دروازے کھول دے۔ آمین`,
    },
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
      description: `This Islamic cloth book will not only stimulate your babys sensory activity and boost their brain development, but also introduce them to many key Islamic concepts and serve as a great bonding opportunity for you and your baby!`,
  },
  {
                                    id: 5,
                                    title: "Janwarun ki Dunya ",
                                    cloth: "○ Activity Book / Dua Book",
                                    page: "○ English",
                                    size: "○ 0-4years",
                                    price: 720,
                                    oldPrice:800,
                                    image: janwar,
                                    hoverImage:  janwar1,
                                    description: `Urdu Flap Book`,
                                  },
   {
                                    id: 6,
                                    title: "Allah sab… Jante hain!",
                                    cloth: "○ Activity Book / Dua Book",
                                    page: "○ English",
                                    size: "○ 4-07years",
                                    price: 430,
                                    oldPrice:480,
                                    image: Allah,
                                    hoverImage:  Allah1,
                                    description: `A sweet and simple board book on making children aware of the fact that Allah knows, sees and listens to everything!`,
                                  }, 
    {
                                      id: 7,
                                      title: "Merey Pyarey Allah Taala",
                                      cloth: "○ Activity Book / Dua Book",
                                      page: "○ English",
                                      size: "○ 0-04years",
                                      price: 680,
                                      oldPrice:610,
                                      image: pyaraAllah,
                                      hoverImage:  pyaraAllah1,
                                      description: `A unique Urdu board book which encourages children to remember Allah at all times and to recognize the fact that everything around is happening by the will of Allah!`,
                                    },
   {
                                     id: 8,
                                     title: "Five Senses, Five Blessings",
                                     cloth: "○ Set of 2 Books",
                                     page: "○ English",
                                     size: "○ Size 8*8 inches",
                                     price: 410,
                                     oldPrice: 490,
                                     image: Five,
                                     hoverImage: Five1,
                                     description: `
                                      A board book which teaches toddlers the five senses and the fact that they are a gift from Allah.
                                     
                                     `,
                                   },                                                              
  ];

  const { addToCart } = useCart();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const paginatedProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const gridRef = useRef(null);

  // Function to handle page change and prevent scrolling to footer
  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(30, 1500); // Scroll to 30px from left, 1800px from top
  };

  // useEffect without scroll
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // Mobile view adjustments can be handled here if needed
      // Grid logic or animation related to mobile view could be added here
    }
  }, [currentPage]);

  return (
    <div
      id="three-pic" 
      className="min-h-screen bg-cover bg-center bg-no-repeat scroll-smooth"
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
              <h2 className="text-lg text-gray-900 uppercase">New Arrivals</h2>
              <h3 className="text-2xl font-semibold mb-8">
                0-3 Years Products Little Mumins
              </h3>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
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
                onClick={() => handlePaginationClick(i + 1)} // Changed to custom handler
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
  );
};

export default ThreePic;
