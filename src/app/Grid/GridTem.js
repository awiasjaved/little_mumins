"use client";
import React from "react";
import Form from "next/form";
import { useState } from "react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import { formAction } from "../action/FormAction";
import { useRouter } from "next/navigation";
export const GridTem = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  // const router = useRouter();

  let ref = useRef()
  const countryCityMap = {
    Pakistan: ["Karachi", "Lahore", "Islamabad", "Multan", "Faisalabad", "Peshawar", "Quetta"],
    India: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Ahmedabad"],
    UAE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Al Ain", "Ras Al Khaimah"]
  };

  // const handleClick = () => {
  //   // Navigate to dynamic page
  //   // router.push(`../page.js`);
  // };



  return (


    <div className="flex min-h-screen bg-white">

      <div className="w-2/3 p-12">

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">FORM</h1>
          </div>
          <Form ref={ref} action={(e) => { formAction(e), ref.current.reset() }}>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  name="FirstName:"
                  minLength={3}
                  maxLength={40}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Surname*
                </label>
                <input
                  type="text"
                  name="SurName:"
                  minLength={3}
                  maxLength={40}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                  placeholder="Enter  SurName"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address*
                </label>
                <input
                  type="email"
                  name="Email:"
                  required
                  placeholder="Enter email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role*
                </label>
                <input
                  type="text"
                  name="Role:"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name*
                </label>
                <input
                  type="text"
                  name="CompanyName:"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry*
                </label>
                <input
                  type="text"
                  name="Industry:"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>


            <div className="grid grid-cols-2 gap-6  mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country*
                </label>
                <select
                  value={selectedCountry}

                  onChange={(e) => {
                    const selected = e.target.value;
                    setSelectedCountry(selected);
                    setCities(countryCityMap[selected] || []);
                    setCity("");
                  }}
                  name="Country:"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                  required
                >
                  <option value="" disabled>Select Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="UAE">UAE</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City*
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  name="City:"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  disabled={!cities.length}
                  required
                >
                  <option value="" disabled>Select City</option>
                  {cities.map((c, index) => (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

            </div>


            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password",{required:true,pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message:"At least one lowercase,one uppercase,one number and one special character"}})}
                    min={8}
                    name="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <span>Show</span> : <span>Show</span>}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password*
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("Confirm Password",{required:true})}
                    name="Confirm Password"
                   
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <span>Show</span>
                    ) : (
                      <span>Show</span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to{" "} <a href="#" className="text-blue-600 hover:underline">terms & conditions </a>{" "}
                  &{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {!agreeTerms && (
                <p className="text-red-500 text-sm mt-1">
                  Please agree terms and conditions to be able to &quot;Register&quot;
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
            >
              Register Account
            </button>

            {/*       <div className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Your data is safely secured
          </div> */}
          </Form>
        </div>
      </div>
























      {/* Left sidebar */}
      {/* <div className="w-1/3 bg-blue-700 text-white p-8 relative"> */}
      {/* <div className="mb-12">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold">Company Logo</span>
        </div>
      </div> */}

      {/* Decorative elements */}
      {/* <div className="absolute top-20 left-10 opacity-20">
        <div className="w-16 h-16 rounded-full border-2 border-white"></div>
      </div> */}
      {/* <div className="absolute top-40 left-40 opacity-10">
        <div className="w-24 h-24 rounded-md border-2 border-white grid grid-cols-3 grid-rows-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-white/30 rounded-sm"></div>
          ))}
        </div>
      </div> */}
      {/* <div className="absolute bottom-40 left-0 opacity-20">
        <div className="w-32 h-32 rounded-full border-2 border-white/50"></div>
      </div> */}

      {/* Testimonial quote */}
      {/* <div className="relative z-10 mt-24">
        <div className="text-4xl text-blue-300 mb-4">"</div>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut
        </p>
        <div className="text-right mr-6">
          <div className="h-8 w-8 bg-white inline-block mb-2"></div>
        </div>
        <p className="text-sm">-Mutas</p>
      </div> */}
      {/* </div> */}

      {/* Main content */}
    </div>




































    // <div className="w-full p-8 border-4 border-black space-y-8">
    //   <div className="flex flex-col-1 md:flex-row-2 flex-wrap gap-4 w-full">
    //     <div className="h-48 border-4 border-black order-3 md:order-1 flex-1"></div>
    //     <div className="h-24 border-4 border-black self-start order-2 md:order-2 flex-1"></div>
    //     <div className="h-24 border-4 border-black self-end order-1 md:order-3 flex-1"></div>
    //     <div className="h-48 border-4 border-black order-4 md:order-4 flex-1"></div>
    //   </div>ana
    //   <div className="flex flex-wrap gap-4">
    //     <div className="h-48 border-4 border-black flex-1 min-w-48 md:min-w-30 lg:min-w-15"></div>
    //     <div className="h-48 border-4 border-black flex-1 min-w-48 md:min-w-30 lg:min-w-15"></div>
    //     <div className="h-48 border-4 border-black flex-1 min-w-48 md:min-w-30 lg:min-w-15"></div>
    //     <div className="h-48 border-4 border-black flex-1 min-w-48 md:min-w-30 lg:min-w-15"></div>
    //     <div className="h-48 border-4 border-black flex-1 min-w-48 md:min-w-30 lg:min-w-15"></div>
    //     <div className="h-48 border-4 border-black flex-1 min-w-48 md:min-w-30 lg:min-w-15"></div>
    //   </div>cel
    //   <div className="flex flex-wrap gap-4 w-full">
    //     <div className="h-48 bg-red-200 border-4 border-black flex-1 min-w-48 lg:min-w-22"></div>
    //     <div className="h-48 bg-red-200 border-4 border-black flex-1 min-w-[48%] lg:min-w-22"></div>
    //     <div className="h-48 border-4 border-black flex-1 min-w-[48%] lg:min-w-22"></div>
    //     <div className="h-48 border-4 border-black flex-1 min-w-[48%] lg:min-w-22"></div>
    //   </div>
    //   <div className="flex flex-wrap gap-4 w-full">
    //     <div className="h-48 border-4 border-black flex-1"></div>
    //     <div className="h-48 border-4 border-black flex-1"></div>
    //   </div>
    //   <div className="flex flex-wrap gap-4 w-full">
    //     <div className="h-48 bg-yellow-200 border-black flex-1">1/3 Width</div>
    //     <div className="h-48 bg-red-200 border-black flex-1">2/3 Width</div>
    //   </div>
    // </div>




    // <div className="w-full   p-8  border-4 border-black">
    //   <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full mt-8">
    //     <div className="h-48 border-4 border-black order-3 md:order-1"></div>
    //     <div className="h-24 border-4 border-black self-start order-2 md:order-2"></div>
    //     <div className="h-24 border-4 border-black self-end order-1 md:order-3"></div>
    //     <div className="h-48 border-4 border-black order-4 md:order-4"></div>
    //   </div>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-4 mt-8  ">
    //     <div className="h-48 border-4 border-black"></div>
    //     <div className=" h-48 border-4 border-black"></div>
    //     <div className=" h-48 border-4 border-black"></div>
    //     <div className=" h-48 border-4 border-black"></div>
    //     <div className="h-48 border-4 border-black"></div>
    //     <div className=" h-48 border-4 border-black"></div>
    //   </div>

    //   <div className=" grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-[1fr_1fr_1fr_1fr]  gap-4 mt-8 w-full ">
    //     <div className="h-48 bg-red-200  border-4 border-black"></div>
    //     <div className=" h-48 bg-red-200  border-4 border-black"></div>
    //     <div className="h-48  border-4 border-black"></div>
    //     <div className="h-48 border-4 border-black"></div>
    //   </div>
    //   <div className=" grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-4 mt-8 w-full ">
    //     <div className="h-48 border-4 border-black"></div>
    //     <div className="h-48   border-4 border-black"></div>
    //   </div>
    //   <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-[1fr_2fr] gap-4 mt-8 w-full">
    //     <div className=" h-48  bg-yellow-200 border-black ">1/3 Width</div>
    //     <div className=" h-48  bg-red-200  border-black">2/3 Width</div>
    //   </div>
    // </div>
  );
};
export default GridTem;
