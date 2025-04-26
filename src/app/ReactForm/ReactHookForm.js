// "use client";
// import React, { useRef } from "react";
// import { useForm } from "react-hook-form";
// import { formAction } from "../action/FormAction";
// const ReactHookForm = () => {
//     const { register, handleSubmit,formState: {errors} } = useForm();

//   const ref = useRef();

//   const countryCityMap = {
//     Pakistan: ["Karachi", "Lahore", "Islamabad", "Multan", "Faisalabad", "Peshawar", "Quetta"],
//     India: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Ahmedabad"],
//     UAE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Al Ain", "Ras Al Khaimah"]
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="flex min-h-screen bg-white">
//       <div className="w-2/3 p-12">
//         <div className="max-w-3xl mx-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold">FORM</h1>
//           </div>

//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             ref={ref}
//             action={(e) => {
//               formAction(e);
//               ref.current.reset();
//             }}
//           >
//             <div className="grid grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   First Name*
//                 </label>
//                 <input
//                   type="text"
//                   {...register("FirstName", {
//                     required: true,
//                     minLength: { value: 3, message: "Minimum 3 characters" },
//                     maxLength: { value: 25, message: "Maximum 20 characters" },
//                   })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   placeholder="Enter First Name"
//                 />
//                {errors.FirstName && <p className="text-red-500 text-sm">{errors.FirstName.message}</p>}

//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Surname*
//                 </label>
//                 <input
//                   type="text"
//                   {...register("SurName", {
//                     required: true,
//                     minLength: { value: 3, message: "Minimum 3 characters" },
//                     maxLength: { value: 20, message: "Maximum 20 characters" },

//                   })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   placeholder="Enter Surname"
//                 />
//                 {errors.SurName && <p className="text-red-500 text-sm">{errors.SurName.message}</p>}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email address*
//                 </label>
//                 <input
//                   type="email"
//                   {...register("Email", {
//                     required: { value: true, message: "Email is required" },
//                   })}
//                   placeholder="Enter email address"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 />
//                 {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Role*
//                 </label>
//                 <input
//                   type="text"
//                   {...register("Role", {
//                     required: true,
//                     minLength: { value: 3, message: "Minimum 3 characters" },
//                     maxLength: { value: 20, message: "Maximum 20 characters" },
//                   })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 />
//                 {errors.Role && <p className="text-red-500 text-sm">{errors.Role.message}</p>}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Company Name*
//                 </label>
//                 <input
//                   type="text"
//                   {...register("CompanyName", {
//                     required: true,
//                     minLength: { value: 3, message: "Minimum 3 characters" },
//                     maxLength: { value: 20, message: "Maximum 20 characters" },
//                   })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 />
//                 {errors.CompanyName && <p className="text-red-500 text-sm">{errors.CompanyName.message}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Industry*
//                 </label>
//                 <input
//                   type="text"
//                   {...register("Industry", {
//                     required: true,
//                     minLength: { value: 3, message: "Minimum 3 characters" },
//                     maxLength: { value: 20, message: "Maximum 20 characters" },
//                   })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 />
//                 {errors.Industry && <p className="text-red-500 text-sm">{errors.Industry.message}</p>}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Country*
//                 </label>
//                 <select
//                   {...register("Country", { required: true })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
//                 >
//                   <option value="">Select Country</option>
//                   <option value="Pakistan">Pakistan</option>
//                   <option value="India">India</option>
//                   <option value="UAE">UAE</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   City*
//                 </label>
//                 <select
//                   {...register("City", { required: true })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 >
//                   <option value="">Select City</option>
//                 </select>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password*
//                 </label>
//                 <input
//                   type="password"
//                   {...register("Password", { required: true })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Confirm Password*
//                 </label>
//                 <input
//                   type="password"
//                   {...register("ConfirmPassword", { required: true })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div className="mb-6">
//               <div className="flex items-center">
//                 <input
//                   id="terms"
//                   type="checkbox"
//                   {...register("terms")}
//                   className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
//                 />
//                 <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
//                   Accept Terms & Conditions
//                 </label>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
//             >
//               Register Account
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReactHookForm;
