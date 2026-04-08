import React from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import "./HeroSection.css";
import avatar from "../assets/durga.png";

const Hero = () => {
  return (
    <section className="hero mobile-stack" id="home">
      {/* LEFT CONTENT */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.p
          className="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hey, I’m <span>Durga</span> 👋
        </motion.p>

        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Python Full Stack Developer
        </motion.h1>

        <motion.p
          className="desc"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I create clean, responsive full-stack web applications with React,
          Django, and SQL, focused on performance and usability.
        </motion.p>

        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a href="#projects" className="btn-exact btn-view">
            View Projects <span className="arrow">›</span>
          </a>

          <a
            href="/Durga Devi N.pdf"
            className="btn-exact btn-download"
            download
          >
            <FiDownload className="icond" />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="orbit-wrapper">
          {/* soft glow */}
          <div className="orbit-glow"></div>

          {/* dotted circle */}
          <div className="orbit-circle"></div>

          {/* avatar floating */}
          <motion.img
            src={avatar}
            alt="Durga Avatar"
            className="avatar"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
