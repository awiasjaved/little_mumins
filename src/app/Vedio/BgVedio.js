"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoPause } from "react-icons/io5";
import { FaVolumeDown, FaVolumeMute, FaPlay } from "react-icons/fa";
import styles from "./BgVedio.module.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textBottomToTop = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BgVedio = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState("/assets/Cartoon.mp4");
  const [showText, setShowText] = useState(true); // for repeating text
  const [showBottomText, setShowBottomText] = useState(true); // for the new text
  const [isClient, setIsClient] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if video file exists
    const video = document.createElement('video');
    video.src = videoSrc;
    video.onloadeddata = () => {
      setVideoError(false);
    };
    video.onerror = () => {
      console.error("Video failed to load:", videoSrc);
      setVideoError(true);
    };

    return () => {
      video.onloadeddata = null;
      video.onerror = null;
    };
  }, [videoSrc]);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("../assets/Cartoon.mp4"); // Ensure this path is correct
      } else {
        setVideoSrc("../assets/Cartoon.mp4"); // Ensure this path is correct
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

  // Looping text every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setShowText(true);
      }, 100); // brief pause before re-showing
    }, 4000); // adjust delay as needed
    return () => clearInterval(interval);
  }, []);

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
    { char: "'", color: "text-blue-500" },
    { char: "M", color: "text-blue-500" },
    { char: "I", color: "text-blue-500" },
    { char: "N", color: "text-blue-500" },
    { char: "S", color: "text-blue-500" },
  ];

  if (!isClient) return null;

  return (
    <main className={styles.main}>
      {/* Animated Heading */}
      <div className={styles.content}>
        <AnimatePresence>
          {showText && (
            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl font-bold flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              key={Math.random()} // force re-animation
            >
              {title.map((item, index) => (
                <motion.span key={index} variants={letter} className={item.color}>
                  {item.char}
                </motion.span>
              ))}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom-to-top Text */}
      <div className="absolute bottom-70 left-32 w-full flex justify-start z-10">
        <AnimatePresence>
          {showBottomText && (
            <motion.h2
              className="text-3xl sm:text-xl md:text-2xl font-medium text-white"
              variants={textBottomToTop}
              initial="hidden"
              animate="show"
              exit="hidden"
              key="bottom-text"
            >
              Nurturing little hearts with stories of imaan
            </motion.h2>
          )}
        </AnimatePresence>
      </div>
      
      {/* Background Video */}
      {videoError ? (
        <div className={styles.videoFallback}>
          <p>Video could not be loaded</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className={styles.video}
          key={videoSrc}
          onError={() => setVideoError(true)}
          playsInline // Important for iOS
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
  );
};

export default BgVedio;