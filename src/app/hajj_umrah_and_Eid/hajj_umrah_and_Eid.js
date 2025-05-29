"use client";  // This should be the first line of the file
import React, { useState } from "react";

import Bismillah from "../assets/images/bismillah.jpg";
import Mekail from "../assets/images/mekail.jpg";
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
import Goat from "../assets/images/abdullah.jpg"
import Goat1 from "../assets/images/Abdullahs-Eid-Goat.jpg";
import DuaJ from "../assets/images/duajournal.png";
import DuaJ1 from "../assets/images/duajourone.jpg";
import dulhaj from "../assets/images/dulhaaj.jpg"
import dulhaj1 from "../assets/images/dhulhijjahadventu.png"
import bella from "../assets/images/bela.jpg";
import bella1 from "../assets/images/belasheroo.jpg";
import quran from "../assets/images/quran_sa_dosti.png"
import quran1 from "../assets/images/quran_sa_dosti1.png"
const Hajj_umrah_and_Eid = () => {
    const products = [
        {
            id: 1,
            title: "Mikael Goes to Madinah",
            cloth: "○ Paper Book",
            page: "○ 16 pages",
            size: "○ Size 8*8 inches",
            price: 610,
            oldPrice: 680,
            image: Mekail,
            hoverImage: Bismillah,
            description: `
              Mikael Goes to Madinah is a fun way to introduce your children to the many charms of the city of Madinah and to create love and longing for the hometown of the Prophet ﷺ (and the Prophet ﷺ himself!) in their hearts.
            `,
          },
          {
                                            id: 2,
                                            title: "Abdullah’s Eid Goat",
                                            cloth: "○ Story Book",
                                            page: "○ English",
                                            size: "○ 7-13years",
                                            price: 700,
                                            oldPrice: 780,
                                            image:  Goat,
                                            hoverImage:  Goat1,
                                            description: `
                                            This book narrates the story of a boy who gets attached to his goat but ultimately learns to let go of him for the sake of Allah. It also narrates the story of Ibrahim A.S and Ismail A.S in a unique way along with giving a lot of lessons from the Quran and Sunnah
                                            `,
                                          },
{
                                  id: 3,
                                  title: "Dhul-Hijjah Adventures",
                                  cloth: "○ Activity Book / Dua Book",
                                  page: "○ English",
                                  size: "○ 7-13years",
                                  price: 1375,
                                  oldPrice: 1100,
                                  image:  dulhaj,
                                  hoverImage:  dulhaj1,
                                  description: `A journal for kids to learn 12 quranic and sunnah duas (along with translations and unique explanations), record their thoughts and learn the etiquettes of making dua
                                 `,
                                },
     {
                                      id: 4,
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
                                  id: 5,
                                  title: "Bela ka Sheru",
                                  cloth: "○ Activity Book / Dua Book",
                                  page: "○ English",
                                  size: "○ 7-13years",
                                  price: 430,
                                  oldPrice:480,
                                  image: bella,
                                  hoverImage:  bella1,
                                  description: `Qurbani ki Kahani`,
                                },
     {
                                       id: 6,
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
        <section className="pt-30 py-10 text-left">
        <div className="pb-20">
        <h3 className="text-7xl font-semibold mb-8">Hajj Umrah And Eid</h3>
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

export default Hajj_umrah_and_Eid