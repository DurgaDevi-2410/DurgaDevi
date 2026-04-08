import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import  logo  from "../assets/logo1.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigation = (e, target) => {
    e.preventDefault();
    setOpen(false);

    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="nav-wrapper">
      <nav className="nav-container">
        {/* Logo */}
        <div className="nav-left">
          <a
            href="#home"
            onClick={(e) => handleNavigation(e, "#home")}
            className="logo-text"
          >
            <img
              src={logo} 
              alt="Logo"
              className="logo-img"
            />
          </a>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* Menu */}
        <ul className={`nav-menu ${open ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={(e) => handleNavigation(e, "#about")}>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleNavigation(e, "#projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavigation(e, "#skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavigation(e, "#contact")}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, "#contact")}
            className="nav-btn"
          >
            Let’s Talk
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
