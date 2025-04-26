// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import dynamic from "next/dynamic";
// import Room from "../assets/images/north.jpg";
// import algo from "../assets/images/ult.png";
// import { FaTripadvisor, FaFacebookSquare, FaYoutube } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";

// const MenuList = ({ closeMenu }) => {
//   const [activeSection, setActiveSection] = useState(null);
//   const router = useRouter();

//   const menuItems = [
//     {
//       id: "I",
//       name: "Rooms",
//       details: "51 comfortable rooms",
//       link: "#latest",
//     },
//     {
//       id: "II",
//       name: "Wellness",
//       details: "26 spacious suites",
//       link: "#masteri",
//     },
//     { id: "III", name: "Gastro", details: "4 private villas", link: "#extend" },
//     { id: "IV", name: "Hotel", details: "Packages", link: "#explore" },
//     { id: "V", name: "Events", details: "4 private villas", link: "#besbok" },
//     { id: "VI", name: "Info", details: "26 spacious suites", link: "#step" },
//   ];
//   const submenuItems = [
//     {
//       name: "51 comfortable rooms",
//       link: "#latest",
//     },
//     {
//       name: "26 spacious suites",
//       link: "#masteri",
//     },
//     { name: "4 private villas", link: "#extend" },
//     { name: "26 spacious suites", link: "#explore" },
//     { name: "26 spacious suites", link: "#besbok" },
//     { name: "4 private villas", link: "#step" },
//   ];

//   const socialIcons = [
//     { id: "tripadvisor", icon: <FaTripadvisor /> },
//     { id: "facebook", icon: <FaFacebookSquare /> },
//     { id: "instagram", icon: <AiFillInstagram /> },
//     { id: "youtube", icon: <FaYoutube /> },
//   ];

//   return (
//     <div className="relative h-screen w-full overflow-hidden overflow-y-scroll">
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={Room}
//           alt="Hotel Background"
//           fill
//           style={{ objectFit: "cover" }}
//           quality={100}
//           className="brightness-[0.7]"
//         />
//       </div>

//       <button
//         onClick={closeMenu}
//         className="absolute top-6 right-6 text-white  text-3xl z-20 cursor-pointer"
//       >
//         ✕
//       </button>
//       <div className="absolute left-0 top-20 sm:top-0 h-full w-full  z-10 flex  justify-start items-start sm:items-center px-3  md:pl-12 space-y-6">
//         <div className="flex flex-col justify-start items-start px-6 md:pl-12 space-y-6">
//           {menuItems.map((item, index) => (
//             <div
//               key={item.id}
//               className={`flex flex-col items-center w-full py-3  mb-0 sm:mb-4 cursor-pointer group ${
//                 activeSection === item.name
//                   ? "text-white"
//                   : "text-gray-200 hover:text-white"
//               }`}
//               onMouseEnter={() => setActiveSection(item.name)}
//               onMouseLeave={() => setActiveSection(null)}
//               onClick={() => {
//                 if (item.link) {
//                   router.push(item.link);
//                 }
//                 closeMenu();
//               }}
//               initial={{ opacity: 0.5, x: -20 }}
//               whileHover={{ x: 15, opacity: 1 }}
//               transition={{ type: "spring", stiffness: 120, damping: 10 }}
//             >
//               <div className="flex items-center justify-start space-x-4 w-full">
//                 <span className="text-lg md:text-xl opacity-50 font-light">
//                   {item.id}
//                 </span>
//                 <h3 className="text-2xl md:text-3xl font-light ml-3 hover:tracking-wider transition-all duration-300">
//                   {item.name}
//                 </h3>
//               </div>
//               {/* {item.details && (
//                 <div className="mt-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="text-sm text-center">{item.details}</p>
//                 </div>
//               )} */}
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col mt-4 sm:mt-0  justify-start items-start px-3 sm:px-6 space-y-2">
//           {submenuItems.map((item) => (
//             <div
//               key={item.id}
//               className={`flex items-start  md:space-x-6 cursor-pointer group ${
//                 activeSection === item.name
//                   ? "text-white"
//                   : "text-gray-200 hover:text-white"
//               }`}
//               onMouseEnter={() => setActiveSection(item.name)}
//               onMouseLeave={() => setActiveSection(null)}
//               onClick={() => {
//                 if (item.link) {
//                   router.push(item.link);
//                 }
//                 closeMenu();
//               }}
//               initial={{ opacity: 0.5, x: -20 }}
//               whileHover={{ x: 15, opacity: 1 }}
//               transition={{ type: "spring", stiffness: 120, damping: 10 }}
//             >
//               <span
//                 className="text-lg md:text-xl opacity-50 font-light"
//                 initial={{ x: -10 }}
//                 whileHover={{ x: 5 }}
//               >
//                 {item.id}
//               </span>
//               <div>
//                 <h5 className="text-lg md:text-xl font-light whitespace-nowrap">
//                   {item.name}
//                 </h5>
//                 {item.details && (
//                   <p className="text-sm opacity-0 group-hover:opacity-100">
//                     {item.details}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side Contact Info (Moves to bottom on mobile) */}
//       <div className="absolute right-0 bottom-0 md:top-0 md:h-full w-full md:w-1/4 z-10 bg-[#1D3B46] flex flex-col justify-center items-center text-white text-center p-6 md:p-0">
//         <Image
//           src={algo}
//           alt="Kaskady Logo"
//           width={80}
//           height={80}
//           className="mx-auto rounded-full mb-4"
//         />
//         <h2 className="text-xl md:text-2xl font-light">
//           Hotel & Spa Resort Kaskady
//         </h2>
//         <p className="text-sm md:text-base">Letecká 19</p>
//         <p className="text-sm md:text-base">962 31 Sliač - Sielnica</p>
//         <p className="text-sm md:text-base">Slovakia</p>
//         <div className="mt-4 md:mt-6">
//           <p className="text-sm md:text-base">+421 45 530 00 00</p>
//           <p className="text-sm md:text-base">recepcia@hotelkaskady.sk</p>
//         </div>

//         {/* Social Media Icons - Responsive */}
//         <div className="flex justify-center space-x-4 mt-4 md:mt-6">
//           {socialIcons.map((item) => (
//             <a
//               key={item.id}
//               href="#"
//               className="text-white hover:text-gray-300 text-xl md:text-2xl"
//             >
//               {item.icon}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default dynamic(() => Promise.resolve(MenuList), { ssr: false });
