// src/components/About.jsx
import React from "react";
import "./About.css";
import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

import AnimatedSection from "../navbar/AnimatedSection";

function About() {
  return (
    <AnimatedSection id="about">
    <section className="about-wrapper" id="about">

      {/* LABEL */}
      <motion.p
        className="about-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ABOUT ME
      </motion.p>

      {/* HEADING */}
      <motion.h1
        className="about-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
      >
        Get to Know Me
      </motion.h1>

      <div className="about-container">

        {/* IMAGE */}
        <motion.div
          className="about-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="about-img-card">
            <img src={aboutImg} alt="Durga Devi" className="about-img" />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="about-right"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="about-hello">
            Hello! I'm <span className="highlight">Durga Devi</span>
          </h2>

          <p className="about-text">
            I'm a passionate full-stack developer with expertise in building modern
            web applications. I enjoy creating seamless digital experiences that are
            both beautiful and functional.
          </p>

          <p className="about-text">
            My journey in tech started with curiosity and has grown into a strong
            interest in solving problems, learning new technologies, and building
            meaningful products.
          </p>

          <div className="about-btn-section">
            <a href="#projects" download>
              <button className="about-btn">
               
                View More
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
   </AnimatedSection>
  );
}

export default About;
