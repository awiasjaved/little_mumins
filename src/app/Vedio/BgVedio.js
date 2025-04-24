"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoPause } from "react-icons/io5";
import { FaVolumeDown, FaVolumeMute, FaPlay } from "react-icons/fa";
import styles from "../Vedio/BgVedio.module.css";
import { Container } from "lucide-react";
const BgVedio = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState("/assets/Ultima_2.mp4");
  // Detect screen size and set appropriate video
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("/assets/Little.mp4");
      } else {
        setVideoSrc("/assets/Ultima_2.mp4");
      }
    };    checkScreen(); // on mount
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
  return (
    <main className={styles.main}>
      {/* Centered Heading */}
      <div className={styles.content}>
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Ultima Collection
        </motion.h1>
      </div>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className={styles.video}
        key={videoSrc} // force re-render when src changes
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Control Buttons */}
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
