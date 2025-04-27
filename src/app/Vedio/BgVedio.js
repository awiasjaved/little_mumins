"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoPause } from "react-icons/io5";
import { FaVolumeDown, FaVolumeMute, FaPlay } from "react-icons/fa";
import styles from "./BgVedio.module.css";

const BgVedio = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState("/assets/Cartoon.mp4");
  const [isClient, setIsClient] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const video = document.createElement("video");
    video.src = videoSrc;
    video.onloadeddata = () => setVideoError(false);
    video.onerror = () => setVideoError(true);
    return () => {
      video.onloadeddata = null;
      video.onerror = null;
    };
  }, [videoSrc]);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("/assets/WhoAllah.mp4");
      } else {
        setVideoSrc("/assets/Cartoon.mp4");
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  };

  const title = [
    { char: "L", color: "text-green-500" },
    { char: "I", color: "text-purple-500" },
    { char: "T", color: "text-orange-500" },
    { char: "T", color: "text-yellow-500" },
    { char: "L", color: "text-pink-500" },
    { char: "E", color: "text-red-500" },
    { char: " ", color: "" },
    { char: "M", color: "text-blue-500" },
    { char: "U", color: "text-blue-500" },
    { char: "M", color: "text-blue-500" },
    { char: "I", color: "text-blue-500" },
    { char: "N", color: "text-blue-500" },
    { char: "S", color: "text-blue-500" },
  ];

  if (!isClient) return null;

  return (
    <div className="mb-5 relative w-full h-screen overflow-hidden">
      <main className={styles.main}>
        {/* Centered Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10 w-[720px]">
          {/* LITTLE MUMINS Title */}
          <motion.div
            className="flex flex-wrap justify-center text-4xl sm:text-6xl md:text-8xl font-bold"
            style={{ WebkitTextStroke: "0.5px #971a32" }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {title.map((itemObj, index) => (
              <motion.span
                key={index}
                variants={item}
                className={`mx-1 ${itemObj.color}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {itemObj.char}
              </motion.span>
            ))}
          </motion.div>

          {/* Nurturing Text with Stroke */}
          <motion.div
            className="flex flex-wrap justify-center text-[#F64F74] text-xl sm:text-2xl md:text-3xl font-semibold mb-9"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ WebkitTextStroke: "0.5px #971a32" }}
          >
            {"Nurturing little hearts with stories of imaan".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
                className="mx-[1px]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Background Video */}
        {videoError ? (
          <div className={styles.videoFallback}>
            <p>Video could not be loaded</p>
          </div>
        ) : (
          <motion.video
            ref={videoRef}
            autoPlay
            muted
            loop
            className={styles.video}
            key={videoSrc}
            onError={() => setVideoError(true)}
            playsInline
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}

        {/* Controls */}
        <div className={styles.controls}>
          <div className={styles.iconWrapper} onClick={toggleVideo}>
            {isPlaying ? <IoPause size={24} /> : <FaPlay size={24} />}
          </div>
          <div className={styles.iconWrapper} onClick={toggleMute}>
            {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeDown size={24} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BgVedio;
