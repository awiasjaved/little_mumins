"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StepInto = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        email: ''
    });

    const { ref, inView } = useInView({
        triggerOnce: false,  // Animation scroll up/down hone par repeat ho
        threshold: 0.2       // 20% form viewport me aaye to trigger ho
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section id="step">
        <motion.div
            ref={ref}
            className="w-full bg-stone-100 p-6"
            initial={{ opacity: 0, y: 50 }}  // Initial state (Hidden & Bottom)
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}  // Animate when in view
            transition={{ duration: 0.8, ease: "easeOut" }}  // Smooth effect
        >
            <div className="bg-stone-100 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-serif text-stone-800 mb-4">Step into our world...</h1>

                <p className="text-stone-600 mb-4">
                    Unlock exclusive access to our latest news and offers, stories by world-leading experts, plus the behind-the-scenes moments.
                </p>

                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name*"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full lg:w-[360px] placeholder:text-sm font-serif px-2 py-2 bg-[#ece3de] border border-transparent focus:border-stone-600 focus:outline-none transition-all duration-300 text-normal placeholder-stone-400"
                        />

                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname*"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                            className="w-full lg:w-[360px] placeholder:text-sm font-serif px-2 py-2 bg-[#ece3de] border border-transparent focus:border-stone-600 focus:outline-none transition-all duration-300 text-normal placeholder-stone-400"
                        />
                   
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full lg:w-[360px] placeholder:text-sm px-2 py-2 bg-[#ece3de] border border-transparent focus:border-stone-600 focus:outline-none transition-all duration-300 placeholder-stone-400"
                        />

                        <button
                            type="submit"
                            className="w-full lg:w-[150px] font-serif px-2 py-2 border border-stone-800 text-stone-800 uppercase text-sm tracking-wider hover:bg-stone-800 hover:text-white transition-colors duration-300 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="text-xs text-stone-500">
                    By signing up, you declare that you have read our{' '}
                    <Link href="/terms" className="underline hover:text-stone-800">
                        Terms & Conditions
                    </Link>{' '}
                    and consent to receive offers, information and content via current means of communication as per our{' '}
                    <Link href="/privacy" className="underline hover:text-stone-800">
                        Privacy Policy
                    </Link>.
                </p>
            </div>
        </motion.div>
        </section>
    );
};

export default StepInto;
