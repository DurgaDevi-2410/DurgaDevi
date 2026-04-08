import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

import {
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPostman,
} from "react-icons/si";

import { GrMysql } from "react-icons/gr";
import { VscCode } from "react-icons/vsc";

import "./SkillsSection.css";

/* Skill Item */
const SkillIcon = ({ icon, name, delay }) => (
  <motion.div
    className="skill-item-new"
    initial={{ opacity: 0, x: -30, y: -30 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 1, ease: "easeInOut", delay }}
  >
    <div className="icon-box-new">{icon}</div>
    <span className="skill-name-new">{name}</span>
    <div className="underline-new"></div>
  </motion.div>
);

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "jQuery", icon: <SiJquery /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "MySQL", icon: <GrMysql /> },
    { name: "REST API", icon: <SiExpress /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "VS Code", icon: <VscCode /> },
    { name: "Postman", icon: <SiPostman /> },
  ];

  const categories = [
    { id: "frontend", label: "Frontend", skills: frontendSkills, icon: <FaLaptopCode /> },
    { id: "backend", label: "Backend", skills: backendSkills, icon: <FaServer /> },
    { id: "tools", label: "Tools", skills: toolsSkills, icon: <FaTools /> },
  ];

  const activeData = categories.find(c => c.id === activeCategory);
  const index = categories.findIndex(c => c.id === activeCategory);
  const fillPercentage = (index / (categories.length - 1)) * 100;

  return (
    <>
      {/* TOP */}
      <motion.section
        className="skills-top-wrapper"
        id="skills"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="skills-small-title">EXPERTISE</p>
        <h1 className="skills-main-title">Skills & Tools</h1>
        <p className="skills-top-subtext">
          Technologies and tools I use to build modern applications.
        </p>
      </motion.section>

      {/* MAIN */}
      <section className="skills-section">
        <div className="container">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="skills-display"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {activeData.skills.map((skill, i) => (
                <SkillIcon
                  key={i}
                  icon={skill.icon}
                  name={skill.name}
                  delay={i * 0.18}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <h3 className="category-title">{activeData.label}</h3>

          {/* SLIDER */}
          <div className="category-slider">
            <div className="slider-line">
              <motion.div
                className="slider-fill"
                animate={{ width: `${fillPercentage}%` }}
                transition={{ duration: 1 }}
              />
            </div>

            <div className="slider-dots">
              {categories.map((cat, i) => (
                <button
                  key={cat.id}
                  className={`slider-dot ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{ left: `${(i / (categories.length - 1)) * 100}%` }}
                >
                  <div className="dot-icon">{cat.icon}</div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
