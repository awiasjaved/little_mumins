"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../assets/images/uc-logo.png";
import Container from "../Container";
import CommonButton from "../CommonButton";

const MasterintArt = () => {
  return (
    <section id="masteri">
   
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16 ">
        
        <Head>
          <title>Ultima Collection - Mastering the art of you</title>
        </Head>
        <main className="w-full max-w-4xl text-center">
          {/* Logo with Scroll-Based Fade-Up Animation */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="h-24 w-24 mx-auto">
              <Image src={logo} width={500} height={500} alt="Ultima Logo" />
            </div>
          </motion.div>

          {/* Heading with Scroll-Based Fade-Up Animation */}
          <motion.h1
            className="text-4xl md:text-5xl font-light text-stone-800 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Mastering the art of you
          </motion.h1>

          {/* Paragraphs with Scroll-Based Staggered Fade-Up Animation */}
          <motion.div
            className="max-w-2xl mx-auto space-y-6 text-stone-600 text-lg font-light mb-16"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.3, duration: 1.2 },
              },
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              This is the moment. It is here, in the outstanding surroundings of your private Ultima 
              Collection property, that you found it. A new level of enjoyment.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              It is these moments that set Ultima Collection apart: moments of joy in your own 
              personal world, where relaxation and revelry know no bounds.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              Is what we do best: Mastering the art of you.
            </motion.p>
          </motion.div>

          {/* Button with Scroll-Based Fade-Up Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <CommonButton text={"Our Collection"} />
          </motion.div>
        </main>
      </div>
   
    </section>
  );
};

export default MasterintArt;
