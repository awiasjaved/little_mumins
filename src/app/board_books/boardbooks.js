"use client";  // This should be the first line of the file
import React, { useState } from "react";


import Khood from "../assets/images/khood.jpg";
import Hoob from "../assets/images/hoob.jpg";
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Creat from "../assets/images/photo-output.jpg";
import Created from "../assets/images/who_created_1.jpeg";
import Container from "../Container";
import Five from "../assets/images/fivesense.jpg";
import Five1 from "../assets/images/five.jpg"
import janwar from "../assets/images/janwar.jpg"
import janwar1 from "../assets/images/janwar1.jpg"
import Allah from "../assets/images/Allah.png"
import Allah1 from "../assets/images/Allah1.png"
import pyaraAllah from "../assets/images/pyara_Allah.jpg"
import pyaraAllah1 from "../assets/images/pyara_Allah.jpg"
const Board_books = () => {
    const products = [
       {
          id: 1,
          title: "Khoob Maza Aaya",
          cloth: "○ Board book",
          page: "○ Urdu",
          size: "○ Size 5*5 inches",
          price: 380,
          oldPrice: 420,
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
            title: " Who created",
            cloth: "○ Paper Book",
            page: "○ English",
            size: "○ Size 8*8 inches",
            price: 665,
            oldPrice: 740,
            image: Creat,
            hoverImage: Created,
            description: `
         The book in your hands is a unique bilingual book which along with introducing colours to toddlers, also instills in them the concept that the Creator of everything around us is our Lord, Allah SWT. `,

        },
            {
                                          id: 3,
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
     {
                                       id: 4,
                                       title: "Janwarun ki Dunya",
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
                                       id: 5,
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
                                  id: 6,
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

export default Board_books