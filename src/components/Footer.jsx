// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h3 className="footer-name">Durga Devi N</h3>
          <p className="footer-copy">© 2025 All rights reserved.</p>
        </div>

        {/* CENTER MENU */}
        <ul className="footer-menu">
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* SOCIALS */}
        <div className="footer-socials">
          <a href="https://github.com/DurgaDevi-2410" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/durga-devi-n-a64087298" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
         
          <a href="mailto:durgadevi.nagarajan2410@gmail.com">
            <FiMail />
          </a>
        </div>

      </div>

      {/* SCROLL TO TOP */}
      <div className="scroll-top" onClick={scrollTop}>
        <FiArrowUp />
      </div>

    </footer>
  );
}
