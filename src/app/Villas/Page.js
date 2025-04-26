// components/PropertyCard.jsx
"use client";

import Image from "next/image";
import StLittle from "../assets/images/script.png"
import Market from "../assets/images/market.png"
import apartment from "../assets/images/apartment.jpg";
import ajiz from "../assets/images/ajiz.jpg";
import Container from "../Container";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: `Join Little Mumins to spark hope and inspiration in hearts!`,
    description:
      `Unleash your creative spirit and make a lasting impact!
Authors craft stories that nurture faith, while illustrators bring emotions to life through art.
At Little Mumins, let's come together to enlighten and empower the next generation.`,
    image: StLittle,
    
  },
  {
    id: 2,
    title: `Become the light that nourishes and uplifts Iman!`,
    description:
      `Want to spread goodness and highlight your products? Apply now for in-depth details and join our network as a valued partner. Our team will get in touch with you shortly, ready to help you grow and succeed.`,
    image: Market,
    
  },
  {
    id: 3,
    title: "Luxury Hotels",
    category: "HOTELS",
    description:
      "Our elegant boutique hotels redefine the idea of elevated luxury, offering stylish and discrete oases right in the thick of the action.",
    image: ajiz,
  },
];

const PropertyCard = () => {
  return (
    <Container className="px-3">
    <div className="flex flex-wrap justify-center items-center gap-6 max-w-[1200px] mx-auto h-auto">
      {properties.slice(0, 2).map((property, index) => (   // Yahan sirf 2 properties select ki hain
        <motion.div
          key={property.id}
          className="w-[500px]  overflow-hidden flex flex-col"   // Width fixed kar di images ki
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: index * 0.3,
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
  className="relative h-[550px] overflow-hidden w-full rounded-xl"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
    delay: index * 0.3,
  }}
  viewport={{ once: false, amount: 0.3 }}
>
  <Image
    src={property.image}
    alt={property.title}
    layout="fill"
    objectFit="cover"
    className="transition-transform duration-500 overflow-hidden rounded-xl"
  />
</motion.div>

  
          <div className="px-4 py-5">
            <div className="uppercase text-xs tracking-wider text-stone-400 mb-2">
              {property.category}
            </div>
            <h3 className="text-xl font-light text-stone-800 mb-3">
              {property.title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {property.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Container>
  
  );
};
export default PropertyCard;
