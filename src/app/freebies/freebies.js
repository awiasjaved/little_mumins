"use client";
import { useState } from "react";
import Image from "next/image";
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
const FreeBies = () => {
  const [hoveredIndex,  setHoveredIndex] = useState(null);
  const products = [
    {
      title: "ISLAMIC CAP",
      price: 0,
      image: IslamicCap,
      hoverImage: DIslamicCap,
    },
    {
      title: "ISLAMIC PENCIL",
      price: 0,
      image: IslamicPencil,
      hoverImage: Islamic2,
    },
    {
      title: "MASWAAK",
      price: 0,
      image: Maswak,
      hoverImage:  Maswak1 ,
    },
    {
      title: "Sandal Wood Tasbih",
      price: 0,
      image:Tasbih ,
      hoverImage: Tasbih1 ,
    },
    {
      title: "ZamZam",
      price: 0,
      image: Zamzam1,
      hoverImage: Zamzam2,
    },
    {
      title: "Little Mumins Candy",
      price: 0,
      image: Candy1,
      hoverImage: Candy2,
    },
 
  ];

  return (
    <section className="py-10 text-center">
    
    <h3 className="text-6xl font-semibold mb-8">FreeBies</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
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
          <div className="mt-2">
            
            <span className="text-[#a84618] font-bold">Rs {product.price}</span>
          </div>
          <button className="btn mt-4  text-white py-2 px-4 rounded-ful transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>

    <button className="mt-10 bg-[#a84618] text-white py-2 px-6 rounded-full hover:bg-[#852b02] transition">
      View All Products →
    </button>
  </section>
  )
}

export default FreeBies