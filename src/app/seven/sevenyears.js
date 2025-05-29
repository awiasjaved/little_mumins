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
import Goat from "../assets/images/abdullah.jpg"
import Goat1 from "../assets/images/Abdullahs-Eid-Goat.jpg";
import Hajj from "../assets/images/dulhaaj.jpg";
import Hajj1 from "../assets/images/dhulhijjahadventu.png";
import DuaJ from "../assets/images/duajournal.png";
import DuaJ1 from "../assets/images/duajourone.jpg";
import quran from "../assets/images/quran_sa_dosti.png"
import quran1 from "../assets/images/quran_sa_dosti1.png"
const SevenYears = () => {  // Changed to Uppercase
    const products = [
        {
            id: 1,
            title: "Our Stars",
            cloth: "○ Set of 2 Books",
            size: "○ Get to know 15 Sahaba and 15 Sahabiyat",
            price: 810,
            oldPrice: 900,
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
            price: 610,
            oldPrice: 680,
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
            badgeText: "20% Discount",
            price: 2500,
            oldPrice: 3125,
            image: Revolution,
            hoverImage: Once,
            description: `The book in your hands narrates to you the detailed stories of the Prophets...`
        },
        {
            id: 4,
            title: "Abdullah’s Eid Goat",
            cloth: "○ Story Book",
            page: "○ English",
            size: "○ Size 8*8 inches",
            price: 700,
            oldPrice: 780,
            image: Goat,
            hoverImage: Goat1,
            description: `
                                          This book narrates the story of a boy who gets attached to his goat but ultimately learns to let go of him for the sake of Allah. It also narrates the story of Ibrahim A.S and Ismail A.S in a unique way along with giving a lot of lessons from the Quran and Sunnah
                                          `,
        },
        {
            id: 5,
            title: "Dhul-Hijjah Adventures",
            cloth: "○ Activity Book",
            page: "○ English",
            size: "○ 7-13years",
            price: 1375,
            oldPrice: 1100,
            image: Hajj,
            hoverImage: Hajj1,
            description: `
                                                                         A unique Dhul-hijjah activity book which includes more than 30 activities, stories and poems and lessons on Deen, Science and Geography! With a child friendly style and beautiful illustrations children are bound to love this one!`,
        },
      {
                                       id: 6,
                                       title: "Dua Journal",
                                       cloth: "○ Activity Book / Dua Book",
                                       page: "○ English",
                                       size: "○ 7-13years",
                                       price: 480,
                                       oldPrice: 530,
                                       image:  DuaJ,
                                       hoverImage:  DuaJ1,
                                       description: `A journal for kids to learn 12 quranic and sunnah duas (along with translations and unique explanations), record their thoughts and learn the etiquettes of making dua
                                      `,
                                     },
                                     {
                                                                       id: 7,
                                                                       title: "Quran se Dosti",
                                                                       cloth: "○ Activity Book / Dua Book",
                                                                       page: "○ English",
                                                                       size: "○ 7-13years",
                                                                       price: 430,
                                                                       oldPrice:480,
                                                                       image: quran,
                                                                       hoverImage:  quran1,
                                                                       description: `Activity Book`,
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
                        <h3 className="text-2xl font-semibold mb-8">7-13 Years Products Little Mumins</h3>
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
