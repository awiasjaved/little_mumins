"use client";

import Image from "next/image";
import Shop from "../assets/images/shop.jpg"
import Container from "../Container";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: `Become the light that nourishes and uplifts Iman!`,
    description:
      `Want to spread goodness and highlight your products? Apply now for in-depth details and join our network as a valued partner. Our team will get in touch with you shortly, ready to help you grow and succeed.`,
    image: Shop,
  },
];

const PropertyCard = () => {
  return (
    <div className="">
    <div className="flex flex-wrap justify-center items-center gap-6">
      {properties.map((property, index) => (
        <motion.div
          key={property.id}
          className="w-full sm:w-11/12 md:w-8/12  overflow-hidden flex flex-col"
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
            className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden"
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
              className="transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 rounded-xl" />
          </motion.div>
  
          <div className="px-4 py-5">
            <h3 className="text-3xl font-light text-stone-800 mb-3">
              {property.title}
            </h3>
            <p className="text-lg text-stone-600 leading-relaxed">
              {property.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  
  );
};

export default PropertyCard;
