"use client";

import { useState, useEffect, useRef } from "react";
import { FaVolumeDown, FaVolumeMute, FaPlay } from "react-icons/fa";
import { IoPause } from "react-icons/io5";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import "./Banner.css";
function BannerSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [audio, setAudio] = useState(null);
  const playerRef = useRef(null);
  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function () {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "kPLRKLXyNmc",
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 1,
          loop: 1,
          playlist: "kPLRKLXyNmc",
          modestbranding: 1,
          mute: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          origin: window.location.origin,
          iv_load_policy: 3,
          color: "white",
          cc_load_policy: 0,
          widget_referrer: window.location.href,
          frameborder: 0,
          allowfullscreen: true,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          width: "100%",
          height: "100%",
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    if (typeof window !== "undefined") {
      setAudio(new Audio("/sound.mp3"));
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);
 const onPlayerReady = (event) => {
    console.log("YouTube player is ready");
    event.target.playVideo();
  };
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
    }
  };
  const toggleVideo = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };
  const toggleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };
  return (
    <div className="main-banner">
      {/* YouTube Video Background */}
      <div id="youtube-player"></div>

      {/* Overlay for better text readability */}
      <div className="video-overlay"></div>

      {/* Content with Scroll-Based Fade-Up Animation */}
      <motion.div
        className="content-wrapper flex flex-col justify-center items-center text-white font-kepler"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        {/* Heading with Scroll-Based Fade-Up Animation */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Little Mum'mins
        </motion.h1>

        {/* Buttons with Staggered Fade-Up Animation */}
        <motion.div
          className="mt-4 flex gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, duration: 1.2, ease: "easeOut" },
            },
          }}
        >
          <motion.button
            onClick={toggleVideo}
            className="p-2 border-2 rounded-full shadow-md hover:bg-white hover:text-black hover:bg-opacity-20 transition-all"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <IoPause size={24} /> : <FaPlay size={24} />}
          </motion.button>
          <motion.button
            onClick={toggleMute}
            className="p-2 border-2 rounded-full shadow-md hover:bg-white hover:text-black hover:bg-opacity-20 transition-all"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeDown size={24} />}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default BannerSection;
