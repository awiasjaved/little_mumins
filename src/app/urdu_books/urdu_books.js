"use client";  // This should be the first line of the file
import React, { useState } from "react";

import Khood from "../assets/images/khood.jpg";
import Hoob from "../assets/images/hoob.jpg";
import Jannat from "../assets/images/jannat.jpg";
import Annat from "../assets/images/annat.jpg";
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
import bella from "../assets/images/bela.jpg";
import bella1 from "../assets/images/belasheroo.jpg";
import janwar from "../assets/images/janwar.jpg"
import janwar1 from "../assets/images/janwar1.jpg"
import quran from "../assets/images/quran_sa_dosti.png"
import quran1 from "../assets/images/quran_sa_dosti1.png"
import artboard from "../assets/images/Artboard.jpg"
import artboard1 from "../assets/images/Artboard1.jpg"
import Allah from "../assets/images/Allah.png"
import Allah1 from "../assets/images/Allah1.png"
import pyaraAllah from "../assets/images/pyara_Allah.jpg"
import pyaraAllah1 from "../assets/images/pyara_Allah.jpg"

const Urdu_books = () => {
    const products = [
        {
            id: 1,
            title: "Raah-e-Jannat Ki Ginti",
            cloth: "○ Paper Book",
            page: "○ 16 pages",
            size: "○ Size 8*8 inches",
            price: 380,
            oldPrice: 420,
            image: Jannat,
            hoverImage: Annat,
            description: `
              "راہ جنت کی کہانی" ایک منفرد کہانی کی کتاب ہے جس کا مقصد بچوں کو دینی تصورات کے ذریعے تعلیم دینا ہے
              <br/>
              اس کتاب کو پڑھ کر بچے یہ سمجھیں گے کہ ایک نیکی اسلام کے مختلف پہلوؤں سے ایک پیکج بن کر، خوشنودیِ اللہ اور جنت کے انعامات کا باعث بن سکتی ہے۔
              <br/>
              اس کتاب کی دلکش تصاویر بچوں کو اپنی طرف متوجہ رکھیں گی اِن شاء اللہ۔
              <br/>
              دُعا ہے اللہ تعالیٰ ہمارے لیے اور ہمارے بچوں کے لیے علم کے دروازے کھول دے۔ آمین
            `,
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
                                            id: 3,
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
     {
                                            id: 6,
                                            title: "Kaise they hamare piyare Nabi Muhammad SAW",
                                            cloth: "○ Activity Book / Dua Book",
                                            page: "○ English",
                                            size: "○ 4-07years",
                                            price: 430,
                                            oldPrice:480,
                                            image: artboard,
                                            hoverImage:  artboard1,
                                            description: `Kaise they hamare piyare Nabi Muhammad SAW`,
                                          },
       {
                                         id: 7,
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
                                   id: 8,
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
        <section className="pt-30 py-10 text-left">
        <div className="pb-20">
        <h3 className="text-7xl font-semibold mb-8">Urdu Books</h3>
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

export default Urdu_books