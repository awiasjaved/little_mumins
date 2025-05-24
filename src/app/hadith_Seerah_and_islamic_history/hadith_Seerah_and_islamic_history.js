"use client";  // This should be the first line of the file
import React, { useState } from "react";

import sahaba from "../assets/images/sahaba_stories.jpeg"
import Nabi from "../assets/images/Nabi.jpg";
import Nabi1 from "../assets/images/Nabi1.jpg";
import Our from "../assets/images/our.jpg";
import Star from "../assets/images/Star.jpg";
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
const Hadith_Seerah_and_islamic_history = () => {
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
           title: "Our Stars",
           cloth: "○ Set of 2 Books",
           size: "○ Get to know 15 Sahaba and 15 Sahabiyat",
           price: 810,
           oldPrice: 900,
           image: Our,
           hoverImage: Star,
           description: `The Sahabiyat were the best of people. They were As-Sabiqun, the forerunners. Hence, we should make them our role models.
           This book aims to introduce the female companions of Rasul Allah ﷺ to our children from a young age so that they know whom to seek inspiration from. This book will help our children recognize the Sahabiyat as “Our Stars” and help them learn from each Sahabiyah’s exemplary character and life.
           As an activity, at the end of the book, parents can ask their children to pick their favorite Sahabiyah and discuss the lessons they learned from the character and life of that Sahabiyah.
           May Allah help us and our children to follow the footsteps of Rasul Allah ﷺ and his noble Companions (Ameen)`,
         },
          {
                        id: 3,
                        title: "⁠Sahaba Stories",
                        cloth: "○ Set of 2 Books",
                        page: "○ English",
                        size: "○ Size 8*8 inches",
                        price: 1350,
                        oldPrice: 1500,
                        image: sahaba,
                        description: `
                         Sahaba Stories are powerful tales of the noble companions of Prophet Muhammad (PBUH), who stood by him through every trial. They sacrificed their wealth, time, and even lives for the sake of Islam. Each story carries a deep lesson in faith, patience, and truthfulness. From Abu Bakr’s loyalty to Umar’s justice,
                          <br/>
                         Uthman’s generosity to Ali’s wisdom—each companion offers a unique example to follow. These stories are spiritually uplifting for both children and adults. They teach us to love Islam, prepare for the Hereafter, and develop strong moral character.
                        `,
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
        <h3 className="text-7xl font-semibold mb-8">Hadith Seerah And Islamic History</h3>
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

export default Hadith_Seerah_and_islamic_history