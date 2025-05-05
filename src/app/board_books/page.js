"use client";
import Container from "../Container";
import DynamicCard from "../Dynamic/DynamicCard";
import { useCart } from "../context/CartContext";
import Khood from "../assets/images/khood.jpg";
import Hoob from "../assets/images/hoob.jpg";
import Jannah from "../assets/images/Jannah.jpg";
import Annah from "../assets/images/Jannah.jpg";

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
];
const page = () => {
  const { addToCart } = useCart();
  return (
    <Container>
    <section className="py-10 text-center">
      <div className="pb-20">
        <h2 className="text-lg text-gray-900 uppercase">Little Mumins</h2>
        <h3 className="text-2xl font-semibold mb-8">Boards BOOKS</h3>
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
      
    </section>
  </Container>
  )
}

export default page