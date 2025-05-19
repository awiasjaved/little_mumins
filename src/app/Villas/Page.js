"use client";

import Image from "next/image";
import Shop from "../assets/images/shop.png"
import Container from "../Container";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    image: Shop,
  },
];

const PropertyCard = () => {
  return (
    <div
    className="max-h-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/back.png')" }}
  >
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
              className="relative h-[300px] sm:h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden"
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
              <div className="absolute inset-0 bg-[#fcfffc]/10 rounded-xl" />
            </motion.div>

            <div className="px-4 py-5">
              <h3 className="text-3xl font-light text-black mb-3">
                {property.title}
              </h3>
              <p className="text-lg text-black leading-relaxed">
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
