"use client";
import Image from "next/image";
import React from "react";

const Age = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/age-background.jpg" // 👉 apni image ka path yahan do
        alt="Age Background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
      />

      {/* Content on top of background */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-5xl font-bold">By Age</h1>
      </div>
    </div>
  );
};

export default Age;