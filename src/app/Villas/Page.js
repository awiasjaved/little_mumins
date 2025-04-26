// components/PropertyCard.jsx
"use client";

import Image from "next/image";
import hotel from "../assets/images/hotel.jpg";
import apartment from "../assets/images/apartment.jpg";
import ajiz from "../assets/images/ajiz.jpg";
import Container from "../Container";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Villas & Chalets",
    category: "PRIVATE HOMES",
    description:
      "Spellbinding properties in Europe's most astonishing locations, from snow-capped mountains to coastal retreats.",
    image: hotel,
    
  },
  {
    id: 2,
    title: "Residences",
    category: "PRIVATE HOMES",
    description:
      "Our exclusive residences bear our signature hallmarks of design, privacy and playfulness while also offering the utmost flexibility.",
    image: apartment,
    
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
  className="relative h-[650px] overflow-hidden w-full rounded-xl"
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
