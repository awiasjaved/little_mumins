"use client";  // This should be the first line of the file
import React, { useState } from "react";


import Khood from "../assets/images/khood.jpg";
import Hoob from "../assets/images/hoob.jpg";
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
const Board_books = () => {
    const products = [
       {
          id: 1,
          title: "Khoob Maza Aaya",
          cloth: "○ Board book",
          page: "○ Urdu",
          size: "○ Size 5*5 inches",
          price: 340,
          oldPrice: 380,
          image: Khood,
          hoverImage: Hoob,
          description: `
            "…اور سب سے بہترین دعا 'اَلْـحَمْدُ لِلّٰہِ' ہے۔"
            <br />
            (سنن ابن ماجہ: 3805)
            <br />
            پیارے نبی صلی اللہ علیہ وسلم نے فرمایا:
            <br />
            "تم میں سے جس نے اس حال میں صبح کی کہ اس کا جسم صحیح سلامت ہو، اس کی جان بے خوف ہو اور اس کے پاس دن کا کھانا بھی میسر ہو، تو ایسا ہے جیسے اس کے لیے دنیا اکٹھی ہوگئی۔"
            <br />
            (سنن ابن ماجہ: 4141)
            <br />
            آئیے! دل کے ہر حال میں 'اَلْـحَمْدُ لِلّٰہِ' کہنا اور کرنا سیکھیں۔
          `,
        },
        {
            id: 2,
            title: " Safas Colourful Adventure",
            cloth: "○ Paper Book",
            page: "○ English",
            size: "○ Size 8*8 inches",
            price: 600,
            oldPrice: 660,
            image: Khood,
            hoverImage: Hoob,
            description: `
         As she soars through the skies, Safa discovers the breathtaking beauty of Allah’s colourful world, where every colour tells a story. From gardens filled with flowers to cool rivers with pink fish, each moment is filled with fascinating facts from the Quran.
And when the journey ends, the fun continues with exciting activities that will make you see the vibrant world around you in a whole new light of Quran and Hadith. This unforgettable adventure will leave little readers exploring colours and nature with gratitude and wonder long after the adventure ends. `,

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
    <Container>
        <section className="pt-30 pb-10 text-left">
        <div className="pb-20"> 
        <h3 className="text-7xl font-semibold mb-8">Board Books</h3>
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
};

export default Board_books