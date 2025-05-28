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
import Creat from "../assets/images/photo-output.jpg";
import Created from "../assets/images/who_created_1.jpeg";
import Nabi from "../assets/images/Nabi.jpg";
import Nabi1 from "../assets/images/Nabi1.jpg";
import sahaba from "../assets/images/sahaba_stories.jpeg";
import Count from "../assets/images/count.jpg";
import Count1 from "../assets/images/count1.jpg";
import Five from "../assets/images/fivesense.jpg";
import Five1 from "../assets/images/five.jpg";
import Goat from "../assets/images/abdullah.jpg"
import Goat1 from "../assets/images/Abdullahs-Eid-Goat.jpg";
import Hajj from "../assets/images/dulhaaj.jpg";
import Hajj1 from "../assets/images/dhulhijjahadventu.png"
import DuaJ from "../assets/images/duajournal.png";
import DuaJ1 from "../assets/images/duajourone.jpg";
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
import firstbook from "../assets/images/first_book.jpg"
import firstbook1 from "../assets/images/first_book1.jpg"
import pyaraAllah from "../assets/images/pyara_Allah.jpg"
import pyaraAllah1 from "../assets/images/pyara_Allah.jpg"
import dulhaj from "../assets/images/dulhaaj.jpg"
import dulhaj1 from "../assets/images/dhulhijjahadventu.png"

const products = [
  {
    id: 1,
    title: "THE JOY OF JANNAH",
    cloth: "○ Hard cover",
    page: "○ 14 pages",
    size: "○ Size 8*8 inches",
    price: 540,
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
    id: 4,
    title: "The Most Blessed",
    cloth: "○ Cloth book",
    page: "○ 12 pages",
    size: "○ Size 5*5 inches",
    price: 665,
    oldPrice: 740,
    image: Most,
    hoverImage: Blessed,
    description: `This Islamic cloth book will not only stimulate your baby's sensory activity and boost their brain development, but also introduce them to many key Islamic concepts and serve as a great bonding opportunity for you and your baby!`,
  },
  {
    id: 5,
    title: "A Day in the Life of a Muslim",
    cloth: "○ Colouring Book",
    size: "○ Comes with a sticker sheet",
    price: 250,
    oldPrice: 280,
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
    price: 610,
    oldPrice: 680,
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
    price: 810,
    oldPrice: 900,
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
    price: 610,
    oldPrice: 680,
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
    badgeText: "20% Discount", 
    price: 2500,
    oldPrice: 3125,
    image: Revolution,
    hoverImage: Once,
    description: `
      The book in your hands narrates to you the detailed stories of the Prophets (peace be upon them) with eye-catching illustrations and creative text placement with focus on what we can learn from each story. Both children and adults can benefit from this book. It is a labor of love and much effort, designed to create an intimate bond with the Prophets of Allah (SWT).
    `,
  },
          {
              id: 10,
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
                      id: 11,
                      title: "Our Nabi Hadith book",
                      cloth: "○ Activity Book",
                      size: "○ Comes with a sticker sheet",
                      price: 610,
                      oldPrice: 680,
                      image: Nabi,
                      hoverImage: Nabi1,
                      description: `None of you will have faith, till he loves me more than his father, his children, and all mankind.”
                      (Sahih Bukhari)`
                  },
                     {
                                  id: 12,
                                  title: "⁠Sahaba Stories",
                                  cloth: "○ Set of 2 Books",
                                  page: "○ English",
                                  size: "○ Size 8*8 inches",
                                  price: 1350,
                                  oldPrice: 1500,
                                  image: sahaba,
                                  description: `
                                   Sahaba Stories are powerful tales of the noble companions of Prophet Muhammad (PBUH), who stood by him through every trial. They sacrificed their wealth, time, and even lives for the sake of Islam. Each story carries a deep lesson in faith, patience, and truthfulness. From Abu Bakr’s loyalty to Umar’s justice,
                                    <br/>
                                   Uthman’s generosity to Ali’s wisdom—each companion offers a unique example to follow. These stories are spiritually uplifting for both children and adults. They teach us to love Islam, prepare for the Hereafter, and develop strong moral character.
                                  `,
                                },
                                {
                                  id: 13,
                                  title: "Count your way to jannah",
                                  cloth: "○ Set of 2 Books",
                                  page: "○ English",
                                  size: "○ Size 8*8 inches",
                                  price: 540,
                                  oldPrice: 600,
                                  image: Count,
                                  hoverImage: Count1,
                                  description: `
                                   Count Your Way to Jannah” is a unique counting book which aims to teach toddlers counting from 1 to 10 through Islamic concepts. Through this book, toddlers will not only learn numbers but will also learn ten different Islamic facts and concepts in a fun and exciting way along with captivating illustrations.
                                  
                                  `,
                                },
                                      {
                                  id: 14,
                                  title: "Five Senses, Five Blessings (Board Book)",
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
                                  id: 15,
                                  title: "Abdullah’s Eid Goat",
                                  cloth: "○ Story Book",
                                  page: "○ English",
                                  size: "○ 7-13years",
                                  price: 700,
                                  oldPrice: 780,
                                  image:  Goat,
                                  hoverImage:  Goat1,
                                  description: `
                                  This book narrates the story of a boy who gets attached to his goat but ultimately learns to let go of him for the sake of Allah. It also narrates the story of Ibrahim A.S and Ismail A.S in a unique way along with giving a lot of lessons from the Quran and Sunnah
                                  `,
                                },
                                       {
                                  id: 16,
                                  title: "Dhul-Hijjah Adventures",
                                  cloth: "○ Activity Book",
                                  page: "○ English",
                                  size: "○ 7-13years",
                                  price: 1375,
                                  oldPrice: 1100,
                                  image:  Hajj,
                                  hoverImage:  Hajj1,
                                  description: `
                                 A unique Dhul-hijjah activity book which includes more than 30 activities, stories and poems and lessons on Deen, Science and Geography! With a child friendly style and beautiful illustrations children are bound to love this one!`,
                                },
                                     {
                                  id: 17,
                                  title: "Dua Journal",
                                  cloth: "○ Activity Book / Dua Book",
                                  page: "○ English",
                                  size: "○ 7-13years",
                                  price: 480,
                                  oldPrice: 530,
                                  image:  DuaJ,
                                  hoverImage:  DuaJ1,
                                  description: `A journal for kids to learn 12 quranic and sunnah duas (along with translations and unique explanations), record their thoughts and learn the etiquettes of making dua
                                 `,
                                },
                                  {
                                  id: 18,
                                  title: "Dhul-Hijjah Adventures",
                                  cloth: "○ Activity Book / Dua Book",
                                  page: "○ English",
                                  size: "○ 7-13years",
                                  price: 1375,
                                  oldPrice: 1100,
                                  image:  dulhaj,
                                  hoverImage:  dulhaj1,
                                  description: `A journal for kids to learn 12 quranic and sunnah duas (along with translations and unique explanations), record their thoughts and learn the etiquettes of making dua
                                 `,
                                },
                                  {
                                  id: 19,
                                  title: "Bela ka Sheru – Qurbani ki Kahani",
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
                                  id: 20,
                                  title: "Janwarun ki Dunya –  Urdu Flap Book",
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
                                  id: 21,
                                  title: "Quran se Dosti –  Activity Book",
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
                                  id: 22,
                                  title: "Kaise they hamare piyare Nabi Muhammad SAW - Urdu Books",
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
                                  id: 22,
                                  title: "Allah sab… Jante hain! –  Board Book",
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
                                  id: 23,
                                  title: "My First Book of Daily Duas",
                                  cloth: "○ Activity Book / Dua Book",
                                  page: "○ English",
                                  size: "○ 4-07years",
                                  price: 405,
                                  oldPrice:450,
                                  image: firstbook,
                                  hoverImage:  firstbook1,
                                  description: `Read & Learn the Duas of daily Basis in Arabic`,
                                },
                                {
                                  id: 24,
                                  title: "Merey Pyarey Allah Taala - Board Books",
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

const AllProduct = () => {
  const { addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const paginatedProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return (
      <div className="flex items-center gap-1 mt-10 justify-center">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded text-lg text-gray-500 disabled:opacity-30"
        >
          &#x2039;
        </button>

        {/* Page numbers */}
        {pages.map((page, idx) =>
          page === "..." ? (
            <span key={idx} className="px-3 py-2 text-gray-400">...</span>
          ) : (
            <button
              key={idx}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-[#852b02] text-white"
                  : "bg-white border text-black"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded text-lg text-gray-500 disabled:opacity-30"
        >
          &#x203A;
        </button>
      </div>
    );
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

          {/* Styled Pagination */}
          {renderPagination()}
        </section>
      </Container>
    </div>
  );
};

export default AllProduct;