"use client";
import Container from "../Container";
import DynamicCard from "../Dynamic/DynamicCard";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
// Images
import Jannah from "../assets/images/Jannah.jpg";
import Annah from "../assets/images/joy.jpg";
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
import Our from "../assets/images/our.jpg";
import Star from "../assets/images/Star.jpg";
import Mekail from "../assets/images/mekail.jpg";
import Revolution from "../assets/images/revelation.jpg";
import Once from "../assets/images/once.jpg";

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
    description: `This Islamic cloth book will not only stimulate your baby's sensory activity and boost their brain development, but also introduce them to many key Islamic concepts and serve as a great bonding opportunity for you and your baby!`,
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
      As she soars through the skies, Safa discovers the breathtaking beauty of Allah's colourful world, where every colour tells a story. From gardens filled with flowers to cool rivers with pink fish, each moment is filled with fascinating facts from the Quran.
      <br/>
      And when the journey ends, the fun continues with exciting activities that will make you see the vibrant world around you in a whole new light of Quran and Hadith. This unforgettable adventure will leave little readers exploring colours and nature with gratitude and wonder long after the adventure ends.
    `,
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
];

const AllProduct = () => {
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
    className="min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/back.png')" }}
  >
    <Container>
    <section className="py-10 text-center">
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pb-20"
      >
        
     
        <h2 className="text-2xl font-semibold mb-8">New Arrivals</h2>
        </motion.div>

      {/* Product Grid */}
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="pb-20"
>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        {paginatedProducts.map((product) => (
          <DynamicCard
            key={product.id}
            {...product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
      </motion.div>
      {/* Pagination Controls */}
      <div className="mt-10 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 border rounded-md cursor-pointer ${
              currentPage === i + 1
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
  );
};

export default AllProduct;
