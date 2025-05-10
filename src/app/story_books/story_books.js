"use client";  // This should be the first line of the file
import React, { useState } from "react";

import Khood from "../assets/images/khood.jpg";
import Hoob from "../assets/images/hoob.jpg";
import Safa from "../assets/images/safa.jpg";
import Sfa from "../assets/images/sfa.jpg";
import sahaba from "../assets/images/sahaba_stories.jpeg"
import Bismillah from "../assets/images/bismillah.jpg"
import Mekail from "../assets/images/mekail.jpg";
import Our from "../assets/images/our.jpg";
import Star from "../assets/images/Star.jpg";
import Revolution from "../assets/images/revelation.jpg";
import Once from "../assets/images/once.jpg";
import { useCart } from '../context/CartContext';
import DynamicCard from "../Dynamic/DynamicCard"
import Container from "../Container";
const Story_books = () => {
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
            title: "Mikael Goes to Madinah",
            cloth: "○ Paper Book",
            page: "○ 16 pages",
            size: "○ Size 8*8 inches",
            price: 550,
            oldPrice: 600,
            image: Mekail,
            hoverImage: Bismillah,
            description: `
              Mikael Goes to Madinah is a fun way to introduce your children to the many charms of the city of Madinah and to create love and longing for the hometown of the Prophet ﷺ (and the Prophet ﷺ himself!) in their hearts.
            `,
          },
        {
            id: 3,
            title: "Once Upon a Revelation",
            cloth: "○ Paper Book",
            page: "○ 170 page",
            size: "○ Size 8*8 inches",
            price: 2800,
            oldPrice: 2900,
            image: Revolution,
            hoverImage: Once,
            description: `
              The book in your hands narrates to you the detailed stories of the Prophets (peace be upon them) with eye-catching illustrations and creative text placement with focus on what we can learn from each story. Both children and adults can benefit from this book. It is a labor of love and much effort, designed to create an intimate bond with the Prophets of Allah (SWT).
            `,
          },
           {
              id: 4,
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
              May Allah help us and our children to follow the footsteps of Rasul Allah ﷺ and his noble Companions (Ameen)`,
            },
            {
                id: 5,
                title: "Safas Colourful Adventure",
                cloth: "○ Paper Book",
                page: "○ English",
                size: "○ Size 8*8 inches",
                price: 600,
                oldPrice: 660,
                image: Safa,
                hoverImage: Sfa,
                description: `
                  As she soars through the skies, Safa discovers the breathtaking beauty of Allah's colourful world, where every colour tells a story. From gardens filled with flowers to cool rivers with pink fish, each moment is filled with fascinating facts from the Quran.
                  <br/>
                  And when the journey ends, the fun continues with exciting activities that will make you see the vibrant world around you in a whole new light of Quran and Hadith. This unforgettable adventure will leave little readers exploring colours and nature with gratitude and wonder long after the adventure ends.
                `,
              },
              {
                id: 6,
                title: "⁠Sahaba Stories",
                cloth: "○ Set of 2 Books",
                page: "○ English",
                size: "○ Size 8*8 inches",
                price: 1280,
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
        <h3 className="text-7xl font-semibold mb-8">Story Books</h3>
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
    </div>
)
};

export default Story_books