import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutData } from "../data/projectData";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <section id="about" ref={ref}>
      <motion.h1
        className="title"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {aboutData.title.split(" ")[0]}{" "}
        <span style={{ color: "#00ced1" }}>{aboutData.highlight}</span>
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
            <img src={aboutData.image} alt="ProfileArshan" />
          </div>
        </motion.div>

        {/* Cards + Description */}
        <motion.div className="about-content">
          <motion.div className="about-cards" variants={containerVariants}>
            {aboutData.cards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  className="card"
                  variants={itemVariants}
                  animate={{
                    y: [0, -10, 0, 10, 0],
                    scale: [1, 1.05, 1, 1.05, 1],
                    rotate: card.id % 2 === 0 ? [0, -2, 0, 2, 0] : [0, 2, 0, -2, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                  whileHover={{
                    scale: 1.1,
                    rotate: card.id % 2 === 0 ? -3 : 3,
                    boxShadow: "0px 0px 20px rgba(0, 171, 240, 0.5)",
                  }}
                >
                  <Icon size={35} color={card.color} />
                  <h3>{card.title}</h3>
                  <p>{card.subtitle1}</p>
                  <p>{card.subtitle2}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {aboutData.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
