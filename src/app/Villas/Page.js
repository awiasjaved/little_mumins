// // components/PropertyCard.jsx
// "use client";

// import Image from "next/image";
// import hotel from "../assets/images/hotel.jpg";
// import apartment from "../assets/images/apartment.jpg";
// import ajiz from "../assets/images/ajiz.jpg";
// import Container from "../Container";
// import { motion } from "framer-motion";

// const properties = [
//   {
//     id: 1,
//     title: "Villas & Chalets",
//     category: "PRIVATE HOMES",
//     description:
//       "Spellbinding properties in Europe's most astonishing locations, from snow-capped mountains to coastal retreats.",
//     image: hotel,
    
//   },
//   {
//     id: 2,
//     title: "Residences",
//     category: "PRIVATE HOMES",
//     description:
//       "Our exclusive residences bear our signature hallmarks of design, privacy and playfulness while also offering the utmost flexibility.",
//     image: apartment,
    
//   },
//   {
//     id: 3,
//     title: "Luxury Hotels",
//     category: "HOTELS",
//     description:
//       "Our elegant boutique hotels redefine the idea of elevated luxury, offering stylish and discrete oases right in the thick of the action.",
//     image: ajiz,
//   },
// ];

// const PropertyCard = () => {
//   return (
//     <Container className="px-3">
//       <div className="grid gap-2 lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 items-center justify-center max-w-[1200px]  h-auto"
//       >
//        {properties.map((property, index) => (
//   <motion.div
//     key={property.id}
//     className="w-full md:col-span-2 lg:col-span-1 max-w-sm md:max-w-full overflow-hidden"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{
//       duration: 1,
//       ease: "easeOut",
//       delay: index * 0.3,
//     }}
//     viewport={{ once: false, amount: 0.3 }}
//   >
//     <motion.div 
//       className="relative h-[550px] overflow-hidden w-full"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 1,
//         ease: "easeOut",
//         delay: index * 0.3,
//       }}
//       viewport={{ once: false, amount: 0.3 }}
//     >
//       <Image
//         src={property.image}
//         alt={property.title}
//         layout="fill"
//         objectFit="cover"
//         className="transition-transform duration-500 overflow-hidden"
//       />
//     </motion.div>

//     <div className="px-4 py-5">
//       <div className="uppercase text-xs tracking-wider text-stone-400 mb-2">
//         {property.category}
//       </div>
//       <h3 className="text-xl font-light text-stone-800 mb-3">
//         {property.title}
//       </h3>
//       <p className="text-sm text-stone-600 leading-relaxed">
//         {property.description}
//       </p>
//     </div>
//   </motion.div>
// ))}

//       </div>
//     </Container>
//   );
// };
// export default PropertyCard;
