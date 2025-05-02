"use client";
import React from "react";
import BookCard from "../Dynamic/BookCard";
import bookImage from "../assets/images/khood.jpg";
import { useCart } from "../context/CartContext";

const bookData = {
  id: 1,
  title: "Khoob Maza Aaya",
  cloth: "○ Board book",
  page: "○ Urdu",
  size: "○ Size 5*5 inches",
  price: 340,
  oldPrice: 380,
  image: bookImage,
  hoverImage: null,
  description: [
    "…اور سب سے بہترین دعا 'اَلْـحَمْدُ لِلّٰہِ' ہے۔",
    "(سنن ابن ماجہ: 3805)",
    "پیارے نبی صلی اللہ علیہ وسلم نے فرمایا:",
    "تم میں سے جس نے اس حال میں صبح کی کہ اس کا جسم صحیح سلامت ہو، اس کی جان بے خوف ہو اور اس کے پاس دن کا کھانا بھی میسر ہو، تو ایسا ہے جیسے اس کے لیے دنیا اکٹھی ہوگئی۔",
    "(سنن ابن ماجہ: 4141)",
    "آئیے! دل کے ہر حال میں 'اَلْـحَمْدُ لِلّٰہِ' کہنا اور کرنا سیکھیں۔",
  ],
};

const Page = () => {
  const { cartItems, addToCart } = useCart(); 

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 space-y-10">
      <BookCard
        id={bookData.id}
        title={bookData.title}
        page={bookData.page}
        cloth={bookData.cloth}
        size={bookData.size}
        price={bookData.price}
        oldPrice={bookData.oldPrice}
        image={bookData.image}
        hoverImage={bookData.hoverImage}
        description={bookData.description.join("<br />")}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default Page;
