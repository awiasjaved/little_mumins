"use client";  // This should be the first line of the file
import React, { useState } from "react";
import Image from "next/image";
import Muslim from "../assets/images/DayMuslim.jpg";
import Day from "../assets/images/MuslimLife.jpg";
import Jannah from "../assets/images/joy.jpg";
import Annah from "../assets/images/Jannah.jpg";
import Jannat from "../assets/images/jannat.jpg";
import Annat from "../assets/images/annat.jpg";
import Khood from "../assets/images/khood.jpg";
import Hoob from "../assets/images/hoob.jpg";
import Most from "../assets/images/most.jpg";
import Blessed from "../assets/images/blessed.jpg";
import { useCart } from '../context/CartContext'; 
const Threepic = () => {
    const { addToCart } = useCart(); 
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    const products = [
        {
            title: "THE JOY OF JANNAH",
            cloth: "○ Hard cover",
            page: "○ 14 pages",
            size: "○ Size 8*8 inches",
            price: 500,
            oldPrice: 600,
            image: Jannah,
            hoverImage: Annah,
            description: `This book aims to introduce the concept of Jannah to young minds in simple words with interesting details to open conversations to the endless possibilities of what te readers iefelta ve thy is in the mina sination and colourful images to keep
      We hope this book will be cherished by little hands and that it opens the door to a desire to learn more about what Jannah is and how to get there, with Allah’s mercy. May Allah accept our efforts and keep us on the straight path.
Ameen`
        },
        {
            title: "Khoob Maza Aaya",
            cloth: "○ Board book",
            page: "○ Urdu",
            size: "○ Size 5*5 inches",
            price: 340,
            oldPrice: 380,
            image: Khood,
            hoverImage: Hoob,
            description: `
      “…اور سب سے بہترین دعا ‘اَلْـحَمْدُ لِلّٰہِ’ ہے۔”
      <br />
      (سنن ابن ماجہ: 3805)
      <br />
      پیارے نبی صلی اللہ علیہ وسلم نے فرمایا:
      <br />
      “تم میں سے جس نے اس حال میں صبح کی کہ اس کا جسم صحیح سلامت ہو، اس کی جان بے خوف ہو اور اس کے پاس دن کا کھانا بھی میسر ہو، تو ایسا ہے جیسے اس کے لیے دنیا اکٹھی ہوگئی۔”
      <br />
      (سنن ابن ماجہ: 4141)
      <br />
      آئیے! دل کے ہر حال میں ‘اَلْـحَمْدُ لِلّٰہِ’ کہنا اور کرنا سیکھیں۔
      `,
        },
        {
            title: "Raah-e-Jannat Ki Ginti",
            cloth: "○ Paper Book",
            page: "○ 16 pages",
            size: "○ Size 8*8 inches",
            price: 340,
            oldPrice: 380,
            image: Jannat,
            hoverImage: Annat,
            description: `
      “راہ جنت کی کہانی” ایک منفرد کہانی کی کتاب ہے جس کا مقصد بچوں کو دینی تصورات کے ذریعے تعلیم دینا ہے
      <br/>
      اس کتاب کو پڑھ کر بچے یہ سمجھیں گے کہ ایک نیکی اسلام کے مختلف پہلوؤں سے ایک پیکج بن کر، خوشنودیِ اللہ اور جنت کے انعامات کا باعث بن سکتی ہے۔
      <br/>
      اس کتاب کی دلکش تصاویر بچوں کو اپنی طرف متوجہ رکھیں گی اِن شاء اللہ۔
      <br/>
      دُعا ہے اللہ تعالیٰ ہمارے لیے اور ہمارے بچوں کے لیے علم کے دروازے کھول دے۔ آمین
      `,
        },
        {
            title: "The Most Blessed",
            cloth: "○ Cloth book",
            page: "○ 12 pages",
            size: "○ Size 5*5 inches",
            price: 600,
            image: Most,
            hoverImage: Blessed,
            description: `This Islamic cloth book will not only stimulate your babys sensory activity and boost their brain development, but also introduce them to many key Islamic concepts and serve as a great bonding opportunity for you and your baby!`,
        },
    ];
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Get current page products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <section className="py-10 text-center">
                <h1 className="text-sm text-[#a84618] uppercase">New Arrivals</h1>
                <h3 className="text-4xl text-[#a84618] font-semibold mb-8">Our Newest Iman Bloomers</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {currentProducts.map((product, index) => (
                        <div
                            key={index}
                            className="border border-[#a84618] rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between bg-[#fcfcfc]"
                        >
                            <div>
                                <div
                                    className="relative h-64 w-full mb-4"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <Image
                                        src={hoveredIndex === index ? product.hoverImage : product.image}
                                        alt={product.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-md transition-all duration-300"
                                    />
                                </div>

                                <h4 className="text-lg font-medium">{product.title}</h4>
                                <h4 className="text-sm text-[#a84618]">{product.page}</h4>
                                <h4 className="text-sm text-[#a84618]">{product.cloth}</h4>
                                <h4 className="text-sm text-[#a84618]">{product.size}</h4>

                <p
                  className="text-sm text-gray-700 mt-2"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              {/* ⭐ Add to Cart Button */}
              <div className="mt-4">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm mr-2">
                    Rs {product.oldPrice}
                  </span>
                )}
                <span className="text-[#a84618] font-bold">Rs {product.price}</span>

                <button
                  onClick={() => {
                    addToCart({
                      id: `${index}-${product.title}`,
                      title: product.title,
                      price: product.price,
                    });
                  }}
                  className="block w-full mt-4 bg-[#a84618] text-white py-2 px-4 rounded-full hover:bg-[#852b02] transition"
                >
                  Add to Cart
                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center space-x-2 mt-10">
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handlePageChange(idx + 1)}
                            className={`px-4 py-2 rounded-full ${currentPage === idx + 1
                                    ? "bg-[#a84618] text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-[#a84618] hover:text-white"
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>

            </section>
        </div>
    );
};

export default Threepic;
