// "use client";
// import Head from 'next/head';
// import Image from 'next/image';
// import { useState } from 'react';
// import sakardo from "../assets/images/sakardo.jpg"
// import Container from '../Container';
// import CommonButton from '../CommonButton';
// const ExtendPic = () => {
//   const [selectedHotel, setSelectedHotel] = useState(null);

//   return (
//     <section id="extend">
//     <Container>
//       <div className="relative min-h-screen">
//         <Head>
//           <title>Ultima Collection</title>
//           <meta name="description" content="Luxury hotel experience" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <main className="relative h-screen w-full overflow-hidden">
//           <div className="absolute inset-0">
//             <Image
//               src={sakardo}
//               alt="Luxury hotel interior with wooden floors, crystal chandelier, and Christmas decorations"
//               layout="fill"
//               objectFit="cover"
//               priority
//             />
//           </div>
//           <div className="absolute top-0 justify-center sm:justify-start sm:left-4 w-full h-full flex items-center">
//             <div className="bg-white p-6 shadow-lg max-w-[300px] h-[500px] sm:ml-6 flex flex-col justify-between">
//               <div>
//                 <div className="uppercase text-gray-500 text-xs tracking-wider mb-4">OFFERS</div>
//                 <h2 className="text-lg font-light text-gray-800 mb-4">
//                   Extend your stay with Ultima Collection – on us
//                 </h2>
//                 <p className="text-xs text-gray-600 mb-4">
//                   Make the most of your stay on selected dates and stay for four
//                   nights and pay for three nights, or stay for seven and only pay for five.
//                 </p>
//               </div>

//               <div>
//                 <button
//                   onClick={() => setSelectedHotel('gstaad')}
//                   className="block w-full py-3 bg-gray-800 text-white text-xs uppercase tracking-wider mb-2">
//                   ULTIMA HOTEL GSTAAD
//                 </button>

//                 <CommonButton text={"ULTIMA HOTEL COURCHEVEL"} />
//               </div>
//             </div>
//           </div>

//         </main>
//       </div>
//     </Container>
//     </section>
//   )
// }

// export default ExtendPic