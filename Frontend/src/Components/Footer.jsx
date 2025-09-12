import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, 
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="footer"
      ref={ref}
      variants={footerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container">
      
        <motion.div className="footer-section" variants={sectionVariants}>
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

       
        <motion.div className="footer-section" variants={sectionVariants}>
          <h3>Contact</h3>
          <p>
            📞<a href="https://wa.me/918279460782" target="_blank" rel="noopener noreferrer">Join whatsapp</a>
          </p>
          <p>📩<a href="https://t.me/arshan77777" target="_blank" rel="noopener noreferrer">Join Telegram</a></p>
          <p>
            📧<a href="mailto:arshan0782@gmail.com">arshan0782@gmail.com</a>
          </p>
          <div className="footerContact-icons">
            <motion.a href="https://www.linkedin.com/in/mohd-arshan-0786as" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
              <FaLinkedinIn />
            </motion.a>
            <motion.a href="mailto:arshan0782@gmail.com" whileHover={{ scale: 1.2 }}>
              <TfiEmail />
            </motion.a>
            <motion.a href="https://github.com/arshan0782" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="footer-section" variants={sectionVariants}>
          <h3>Quick Intro !!</h3>
          <p id="p">
            Hey there!👋 I'm Mohd Arshan, a Frontend Developer passionate about
            crafting interactive and user-friendly web applications. I
            specialize in HTML, CSS, JavaScript, and React.js focusing on modern
            UI/UX designs with responsive and efficient performance. I have
            worked on various projects, building real-world solutions and
            exploring the latest web technologies. Always eager to learn and
            create something innovative!
          </p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 All Rights Reserved Mohd Arshan.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;