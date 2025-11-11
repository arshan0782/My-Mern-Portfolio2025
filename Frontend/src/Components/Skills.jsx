import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    }),
  };

  const skillsData = [
    { name: 'HTML5', percentage: 90, color: '#2ad42a' },
    { name: 'CSS3', percentage: 80, color: '#264de4' },
    { name: 'JavaScript (ES6+)', percentage: 80, color: '#f0db4f' },
    { name: 'React.js', percentage: 85, color: '#61dafb' },
    { name: 'Git & GitHub', percentage: 60, color: '#f1502f' },
    { name: 'Python', percentage: 70, color: '#306998' },
    { name: 'Power BI', percentage: 50, color: '#f2c811' },
    { name: 'TypeScript', percentage: 60, color: '#f29111' },
    { name: 'MongoDB', percentage: 80, color: '#4db33d' },
    { name: 'Responsive Web Design', percentage: 85, color: '#33cc33' },
    
  ];

  return (
    <section id="skills" ref={ref}>
      <h2>Skills</h2>
      <motion.div
        className="skills"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            className="skill"
            key={index}
            variants={skillVariants}
          >
            <p>{skill.name}</p>
            <div className="progress-bar">
              <motion.div
                className="progress"
                style={{ width: 0, backgroundColor: skill.color }} 
                variants={progressVariants}
                custom={skill.percentage}
              >
                {skill.percentage}%
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;