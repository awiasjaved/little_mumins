"use client";
import Container from "../Container";
import DynamicCard from "../Dynamic/DynamicCard";
import { FaArrowRight } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { motion } from "framer-motion"; // ✅ Imported motion

// Images
import Jannah from "../assets/images/Jannah.jpg";
import Annah from "../assets/images/Jannah.jpg";
import Khood from "../assets/images/khood.jpg";
import Hoob from "../assets/images/hoob.jpg";
import Jannat from "../assets/images/jannat.jpg";
import Annat from "../assets/images/annat.jpg";
import Most from "../assets/images/most.jpg";
import Blessed from "../assets/images/blessed.jpg";
import Day from "../assets/images/DayMuslim.jpg";
import Bismillah from "../assets/images/bismillah.jpg";
import Safa from "../assets/images/safa.jpg";
import Sfa from "../assets/images/sfa.jpg";

const products = [
  {
    id: 1,
    title: "THE JOY OF JANNAH",
    cloth: "○ Hard cover",
    page: "○ 14 pages",
    size: "○ Size 8*8 inches",
    price: 500,
    oldPrice: 600,
    image: Jannah,
    hoverImage: Annah,
    description: `This book aims to introduce the concept of Jannah to young minds in simple words with interesting details to open conversations to the endless possibilities of what the readers might feel...`,
  },
  {
    id: 2,
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
    id: 3,
    title: "Raah-e-Jannat Ki Ginti",
    cloth: "○ Paper Book",
    page: "○ 16 pages",
    size: "○ Size 8*8 inches",
    price: 340,
    oldPrice: 380,
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
    id: 4,
    title: "The Most Blessed",
    cloth: "○ Cloth book",
    page: "○ 12 pages",
    size: "○ Size 5*5 inches",
    price: 600,
    image: Most,
    hoverImage: Blessed,
    description: `This Islamic cloth book will not only stimulate your babys sensory activity and boost their brain development, but also introduce them to many key Islamic concepts and serve as a great bonding opportunity for you and your baby!`,
  },
  {
    id: 5,
    title: "A Day in the Life of a Muslim",
    cloth: "○ Colouring Book",
    size: "○ Comes with a sticker sheet",
    price: 500,
    oldPrice: 600,
    image: Day,
    hoverImage: Bismillah,
    description: `This engaging colouring book introduces kids to basic Islamic values and daily Sunnahs in a fun and creative way. From morning duas to bedtime habits, children will learn, colour and decorate their way through simple sunnah practices that bring them closer to Allah. Perfect for nurturing love for Islam while sparking imagination!`,
  },
  {
    id: 6,
    title: "Safas Colourful Adventure",
    cloth: "○ Paper Book",
    page: "○ English",
    size: "○ Size 8*8 inches",
    price: 600,
    oldPrice: 660,
    image: Safa,
    hoverImage: Sfa,
    description: `
      As she soars through the skies, Safa discovers the breathtaking beauty of Allahs colourful world, where every colour tells a story. From gardens filled with flowers to cool rivers with pink fish, each moment is filled with fascinating facts from the Quran.
      <br/>
      And when the journey ends, the fun continues with exciting activities that will make you see the vibrant world around you in a whole new light of Quran and Hadith. This unforgettable adventure will leave little readers exploring colours and nature with gratitude and wonder long after the adventure ends.
    `,
  },
];

const NewArrival = () => {
  const { addToCart } = useCart();

  return (
    <Container>
      <section className="py-10 text-center">
        <div className="pb-20">
          <h2 className="text-lg text-gray-900 uppercase">New Arrivals</h2>
          <h3 className="text-2xl font-semibold mb-8">Our Newest Iman Bloomers</h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <DynamicCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Motion Button for View All Products */}
        <Link href="/bookshop">
          <motion.button
            whileHover={{ x: [0, -5, 5, -5, 5, 0] }}
            transition={{ duration: 0.6 }}
            className="mt-10 bg-[#f6339a] text-white py-2 px-6 rounded-full cursor-pointer hover:bg-[#d12c89]"
          >
            <div className="flex items-center gap-1">
              View All Products
              <FaArrowRight />
            </div>
          </motion.button>
        </Link>
      </section>
    </Container>
  );
};

export default NewArrival;
