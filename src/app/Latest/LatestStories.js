// "use client";
// import React from "react";
// import Image from "next/image";
// import dinner from "../assets/images/dinner.jpg";
// import swiming from "../assets/images/swiming.jpg";
// import baali from "../assets/images/baali.jpg";
// import maldives from "../assets/images/maldive.jpg";
// import goa from "../assets/images/goa.jpg";
// import Container from "../Container";
// import WrapperSlider from "../WraperSlider";
// import CommonButton from "../CommonButton";
// import { motion } from "framer-motion";

// const LatestStories = () => {
//   const destinations = [
//     {
//       id: 1,
//       name: "Swiss Alps",
//       image: dinner,
//       heading: "Step inside Ultima Hotel Gstaad",
//       discription:
//         "Unlock exclusive access to our latest news and offers, stories by world-leading experts, plus the behind-the-scenes moments.",
//     },
//     {
//       id: 2,
//       name: "Lake Geneva",
//       image: swiming,
//       heading: "Step inside Ultima Hotel Gstaad",
//       discription:
//         "Unlock exclusive access to our latest news and offers, stories by world-leading experts, plus the behind-the-scenes moments.",
//     },
//     {
//       id: 3,
//       name: "French Alps",
//       image: baali,
//       heading: "Step inside Ultima Hotel Gstaad",
//       discription:
//         "Unlock exclusive access to our latest news and offers, stories by world-leading experts, plus the behind-the-scenes moments.",
//     },
//     {
//       id: 4,
//       name: "Corfu",
//       image: maldives,
//       heading: "Step inside Ultima Hotel Gstaad",
//       discription:
//         "Unlock exclusive access to our latest news and offers, stories by world-leading experts, plus the behind-the-scenes moments.",
//     },
//     {
//       id: 5,
//       name: "Canouan",
//       image: goa,
//       heading: "Step inside Ultima Hotel Gstaad",
//       discription:
//         "Unlock exclusive access to our latest news and offers, stories by world-leading experts, plus the behind-the-scenes moments.",
//     },
//   ];

//   const slides = destinations.map((destination, index) => (
//     <motion.div
//       key={destination.id}
//       className="w-[90%] mx-auto"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
//       viewport={{ once: false, amount: 0.3 }}
//     >
//       <div className="flex flex-col min-h-[250px] sm:min-h-[320px] bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="relative aspect-[4/3] md:aspect-[3/2] w-full overflow-hidden">
//           <Image
//             src={destination.image}
//             alt={destination.name}
//             layout="fill"
//             objectFit="cover"
//             className="transition-transform duration-500 hover:scale-105"
//           />
//         </div>
//         <div className="p-3 sm:p-4 flex flex-col flex-grow">
//           <p className="text-md font-light text-gray-400 text-left">
//             {destination.name}
//           </p>
//           <h1 className="text-lg sm:text-xl pb-2">{destination.heading}</h1>
//           <p className="text-md text-gray-600 text-left overflow-hidden line-clamp-3 sm:line-clamp-none">
//             {destination.discription}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   ));

 
//   const customBreakpoints = {
   
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
    
//     640: {
//       slidesPerView: 1.5,
//       spaceBetween: 15,
//     },
    
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1024: {
//       slidesPerView: 3.3,
//       spaceBetween: 20,
//     },
//   };

//   return (
//     <section id="latest">
//       <Container>
//         <motion.div
//           className="w-full flex justify-center items-center"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           <div className="w-full sm:w-[80%] flex flex-col sm:flex-row justify-between items-center py-4 gap-4 sm:gap-0">
//             <h1 className="text-center text-2xl font-bold">Latest Stories</h1>
//             <CommonButton text={"SEE ALL STORIES"} />
//           </div>
//         </motion.div>
//         <WrapperSlider
//           slides={slides}
//           slidesPerView={3.3}
//           navigation={true}
//           pagination={true}
//           breakpoints={customBreakpoints}
//         />
//       </Container>
//     </section>
//   );
// };

// export default LatestStories;
