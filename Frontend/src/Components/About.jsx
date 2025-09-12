import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react'; 
import yourImage from '../assets/arshanart.jpg';
import { FiAward } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" ref={ref}>
      <motion.h1
        className="title"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        About <span style={{ color: '#00ced1' }}> Me</span>
      </motion.h1>

      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="circular"
          variants={itemVariants}
        >
          <div className="about-img">
            <img src={yourImage} alt="ProfileArshan" />
          </div>
        </motion.div>

        <motion.div className="about-content">
          <motion.div className="about-cards" variants={containerVariants}>
            <motion.div
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FiAward size={35} />
              <h3>Experience</h3>
              <p>in</p>
              <p>MERN Stack Developer</p>
            </motion.div>

            <motion.div
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FaUserTie size={35} />
              <h3>Education</h3>
              <h4>The ICFAI University,Dehradun</h4>
              <p>in</p>
              <p>Bachelor of Computer Application</p>
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
          >
             Hi, I’m Mohd Arshan, a MERN Stack and Frontend Developer.
            I am skilled in HTML, CSS, JavaScript, React.js, and Python, and I use these to build visually appealing, responsive, and user-friendly web experiences.
            I also work with GSAP to create smooth animations and have a strong understanding of backend APIs, which I can integrate seamlessly with frontend applications.
            My focus is on building modern, performance-driven websites while solving problems, writing clean code, and continuously learning new technologies to sharpen my skills.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;