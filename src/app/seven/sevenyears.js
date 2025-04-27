"use client";  // This should be the first line of the file
import React, { useState } from "react";
import Image from "next/image";

import Day from "../assets/images/DayMuslim.jpg"
import Bismillah from "../assets/images/bismillah.jpg"
import Safa from "../assets/images/safa.jpg"
import Sfa from "../assets/images/sfa.jpg"
import Our from "../assets/images/our.jpg"
import Star from "../assets/images/Star.jpg"
import Mekail from "../assets/images/mekail.jpg"
import Revolution from "../assets/images/revelation.jpg"
import Once from "../assets/images/once.jpg"
const sevenyears = () => {
     const [hoveredIndex, setHoveredIndex] = useState(null);
            const [currentPage, setCurrentPage] = useState(1);
            const productsPerPage = 3;
        
            const products = [
                {
                    title: "Our Stars",
                    cloth: "○ Set of 2 Books",
                    size: "○ Get to know 15 Sahaba and 15 Sahabiyat",
                    price: 500,
                    oldPrice: 600,
                    image: Our,
                    hoverImage: Star,
                    description: `The Sahabiyat were the best of people. They were As-Sabiqun, the forerunners. Hence, we should make them our role models.
This book aims to introduce the female companions of Rasul Allah ﷺ to our children from a young age so that they know whom to seek inspiration from. This book will help our children recognize the Sahabiyat as “Our Stars” and help them learn from each Sahabiyah’s exemplary character and life.
As an activity, at the end of the book, parents can ask their children to pick their favorite Sahabiyah and discuss the lessons they learned from the character and life of that Sahabiyah.
May Allah help us and our children to follow the footsteps of Rasul Allah ﷺ and his noble Companions (Ameen)`
                },
               
                {
                    title: " Mikael Goes to Madinah",
                    cloth: "○ Paper Book",
                    page: "○ 16 pages",
                    size: "○ Size 8*8 inches",
                    price: 550,
                    oldPrice: 600,
                    image: Mekail,
                    hoverImage: Bismillah,
                    description: `
            Mikael Goes to Madinah is a fun way to introduce your children to the many charms of the city of Madinah and to create love and longing for the hometown of the Prophet ﷺ (and the Prophet ﷺ himself!) in their hearts.
 `,},
 {
    title: " Once Upon a Revelation",
    cloth: "○ Paper Book",
    page: "○ 170 page",
    size: "○ Size 8*8 inches",
    price:  2800,
    oldPrice: 2900,
    image: Revolution,
    hoverImage: Once,
    description: `
The book in your hands narrates to you the detailed stories of the Prophets (peace be upon them) with eye-catching illustrations and creative text placement with focus on what we can learn from each story. Both children and adults can benefit from this book. It is a labor of love and much effort, designed to create an intimate bond with the Prophets of Allah (SWT).

`,
    
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
       
                                       <p className="text-sm text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: product.description }} />
                                   </div>
       
                                   <div className="mt-4">
                                       {product.oldPrice && (
                                           <span className="text-gray-400 line-through text-sm mr-2">
                                               Rs {product.oldPrice}
                                           </span>
                                       )}
                                       <span className="text-[#a84618] font-bold">Rs {product.price}</span>
       
                                       <button className="block w-full mt-4 bg-[#a84618] text-white py-2 px-4 rounded-full hover:bg-[#852b02] transition">
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
  )
}

export default sevenyears