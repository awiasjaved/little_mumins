"use client";

import Image from "next/image";
import Muslim from "../assets/images/DayMuslim.jpg"
const products = [
  {
    title: "Janwaron ki Dunya - Urdu Flap Book",
    price: 750,
    image: Muslim
  },
  {
    title: "I Am Alone - Arabic Story Book",
    price: 400,
    oldPrice: 650,
    image: "/images/i-am-alone.jpg",
  },
  {
    title: "My First Bilingual Arabic-English Library",
    price: 1250,
    oldPrice: 1500,
    image: "/images/bilingual-library.jpg",
  },
  {
    title: "Quran se Dosti - Activity Book",
    price: 450,
    image: "/images/quran-se-dosti.jpg",
  },
  {
    title: "Eid Catastrophe",
    price: 700,
    oldPrice: 800,
    image: "/images/eid-catastrophe.jpg",
  },
  {
    title: "30 Duas For 30 Days",
    price: 700,
    oldPrice: 800,
    image: "/images/30-duas.jpg",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-sm text-gray-500 uppercase">New Arrivals</h2>
      <h3 className="text-2xl font-semibold mb-8">
        Our Newest Iman Bloomers
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <div className="relative h-64 w-full mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
            <h4 className="text-lg font-medium">{product.title}</h4>
            <div className="mt-2">
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-sm mr-2">
                  Rs {product.oldPrice}
                </span>
              )}
              <span className="text-pink-600 font-bold">Rs {product.price}</span>
            </div>
            <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition">
        View All Products →
      </button>
    </section>
  );
}
