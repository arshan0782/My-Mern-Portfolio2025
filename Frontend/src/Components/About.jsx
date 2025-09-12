import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import yourImage from "../assets/arshanart.jpg";
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
        About <span style={{ color: "#00ced1" }}> Me</span>
      </motion.h1>

      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Profile Image */}
        <motion.div className="circular" variants={itemVariants}>
          <div className="about-img">
            <img src={yourImage} alt="ProfileArshan" />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div className="about-content">
          <motion.div className="about-cards" variants={containerVariants}>
            {/* Experience Card with floating animation */}
            <motion.div
              className="card"
              variants={itemVariants}
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.05, 1, 1.05, 1],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 3,
                boxShadow: "0px 0px 20px rgba(0, 171, 240, 0.5)",
              }}
            >
              <FiAward size={35} />
              <h3>Experience</h3>
              <p>in</p>
              <p>MERN Stack Developer</p>
            </motion.div>

            {/* Education Card with floating animation */}
            <motion.div
              className="card"
              variants={itemVariants}
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.05, 1, 1.05, 1],
                rotate: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1, // thoda delay taaki dono card ek saath na move kare
              }}
              whileHover={{
                scale: 1.1,
                rotate: -3,
                boxShadow: "0px 0px 20px rgba(0, 171, 240, 0.5)",
              }}
            >
              <FaUserTie size={35} />
              <h3>Education</h3>
              <h4>The ICFAI University, Dehradun</h4>
              <p>in</p>
              <p>Bachelor of Computer Application</p>
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hi, I’m Mohd Arshan, a MERN Stack and Frontend Developer. I am
            skilled in HTML, CSS, JavaScript, React.js, and Python, and I use
            these to build visually appealing, responsive, and user-friendly web
            experiences. I also work with GSAP to create smooth animations and
            have a strong understanding of backend APIs, which I can integrate
            seamlessly with frontend applications. My focus is on building
            modern, performance-driven websites while solving problems, writing
            clean code, and continuously learning new technologies to sharpen my
            skills.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
