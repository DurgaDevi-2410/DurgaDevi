import React, { useState, useEffect } from "react";
import "./Projects.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import crmImg from "../assets/crm1.png";
import zenvora from "../assets/e-commerce.png";
import games from "../assets/games1.png";
import todo from "../assets/todo.png";
import diary from "../assets/diary.png";
import chat from "../assets/chat.png";
import fleet from "../assets/fleet.png";

/* 🔥 STAGGER CONTAINER */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* 🔥 EACH CARD ANIMATION */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* 🔥 CONTENT OPEN/CLOSE */
const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.25 },
  },
};

function Projects() {
  const [activeId, setActiveId] = useState(null);

  const projects = [
    {
      id: 1,
      src: zenvora,
      category: "Web",
      title: "Zenvora",
      desc: "A responsive e-commerce web application with a smooth shopping interface.",
      tags: ["React", "Bootstrap", "JS"],
      demo: "https://zenvora-fjon.vercel.app/",
      code: "https://github.com/DurgaDevi-2410/zenvora",
    },
    {
      id: 2,
      src: crmImg,
      category: "Web",
      title: "CRM Institute",
      desc: "An educational institute website designed to showcase courses and faculty.",
      tags: ["React", "Django", "JS"],
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      src: games,
      category: "Games",
      title: "Games Hub",
      desc: "A collection of 21 simple web games built to provide fun and improve logical thinking.",
      tags: ["React", "JavaScript"],
      demo: "https://games-hub-roan.vercel.app/",
      code: "https://github.com/DurgaDevi-2410/games-hub",
    },
    {
      id: 4,
      src: todo,
      category: "Web",
      title: "ToDo",
      desc: "A task management app to organize daily activities efficiently.",
      tags: ["React", "Django", "MySQL"],
      demo: "https://todo-frontend-bydo.vercel.app/",
      code: "https://github.com/DurgaDevi-2410/todo_frontend",
    },
    {
      id: 5,
      src: diary,
      category: "Web",
      title: "Diary",
      desc: "A secure personal diary to write and manage daily entries.",
      tags: ["React", "Django", "MySQL"],
      demo: "https://diary-frontend-delta.vercel.app",
      code: "https://github.com/DurgaDevi-2410/diary-frontend",
    },
    {
      id: 6,
      src: chat,
      category: "Web",
      title: "Chat Web Application",
      desc: "A real-time chat application that allows users to send and receive messages securely with a smooth user interface.",
      tags: ["React", "Node.js", "Express.js", "MySQL"],
      demo: "/chat-demo.pdf",
      code: "https://github.com/DurgaDevi-2410/CHATAPP-FRONTEND",
    },
    {
      id: 7,
      src: fleet,
      category: "Web",
      title: "Fleet Management System",
      desc: "A full-stack fleet management system that helps businesses manage vehicles, bookings, expenses, and track operations with real-time insights.",
      tags: ["React", "Node.js", "Express.js", "MySQL"],
      demo: "https://drive.google.com/file/d/1FeO6-4-ZVbb79mGliH_9JMhO_Yx7D4OU/view?usp=drive_link",
      code: "https://github.com/DurgaDevi-2410/Sri-Vignesh-Transports",
    }
  ];

  return (
    <section className="projects-wrapper" id="projects">
      <h3 className="pro">PROJECT</h3>
      <h2 className="projects-heading">Featured Projects</h2>

      {/* 🔥 STAGGER WRAPPER */}
      <motion.div
        className="projects-accordion"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.id}
            className={`project-card ${activeId === p.id ? "active" : ""
              }`}
            style={{ backgroundImage: `url(${p.src})` }}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              setActiveId(activeId === p.id ? null : p.id)
            }
          >
            <span className="vertical-title">{p.title}</span>

            <AnimatePresence>
              {activeId === p.id && (
                <motion.div
                  className="project-content"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p className="project-category">{p.category}</p>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>

                  <div className="project-tags">
                    {p.tags.map((tag, i) => (
                      <span key={i} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="demo-btn"
                    >
                      <FiExternalLink /> Demo
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="code-btn"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
