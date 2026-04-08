import React from "react";
import "./Contact.css";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiRefreshCw,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      className="contact-wrapper"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.p className="contact-label">GET IN TOUCH</motion.p>

      <motion.h1 className="contact-heading">
        Let's Work Together
      </motion.h1>

      <motion.p className="contact-subtext">
        Have a project in mind? I'd love to hear from you.
      </motion.p>

      <div className="contact-container">
        {/* LEFT */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form
            className="contact-form"
            action="https://formspree.io/f/meeqznyk"
            method="POST"
          >
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" required />

            <label>Email</label>
            <input type="email" name="email" placeholder="your@email.com" required />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
            />

            <label>What is 6 + 10?</label>
            <div className="answer-box">
              <input type="text" name="captcha" placeholder="Answer" required />
              <FiRefreshCw className="refresh-icon" />
            </div>

            <button type="submit" className="contact-btn">
              <FiSend /> Send Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-card">
            <div className="contact-icon-box">
              <FiMail />
            </div>
            <div className="contact-text">
              <h3>Email Me</h3>
              <p className="break-text">
                durgadevi.nagarajan2410@gmail.com
              </p>
            </div>
          </div>

          <div className="contact-social-card">
            <h3>Connect With Me</h3>
            <div className="social-icons-row">
              <a href="https://github.com/DurgaDevi-2410/" target="_blank" rel="noreferrer">
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

          <div className="contact-response">
            <FiCheckCircle />
            <span>Usually responds within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
