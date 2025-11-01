// import React from "react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import project1 from "../assets/Restaurant web app.png";
// import project2 from "../assets/EMS.png";
// import project3 from "../assets/diceRollerimage.png";
// import project4 from "../assets/projectimg.png";
// import { FaExternalLinkAlt } from "react-icons/fa";

// const Projects = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const projectVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   };

//   return (
//     <section className="work-section" id="project" ref={ref}>
//       <h2>Project</h2>

//       <motion.div
//         className="projects-list"
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//       >
//         {/* Project 1 */}
//         <motion.div
//           className="project"
//           variants={projectVariants}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="project-img">
//             <motion.img
//               src={project1}
//               alt="Restaurant Web"
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <div className="projectlink">
//               <a
//                 href="https://github.com/arshan0782/Restaurant-Food-Ordering-Reservation-Web"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="visit-site"
//               >
//                 Restaurant Web <FaExternalLinkAlt />
//               </a>
//             </div>
//           </div>
//           <div className="project-details">
//             <h3>Restaurant Food Ordering & Reservation Web</h3>
//             <span>(Online Ordering & Reservations)</span>
//             <p>
//               Designed an engaging restaurant web app where users get attracted
//               by a delicious menu, easily place food orders, and reserve tables
//               by filling a simple contact form with a smooth success flow.
//             </p>
//             <ul>
//               <li>#MERN</li>
//               <li>#CSS</li>
//               <li>#JavaScript</li>
//               <li>#Reactjs</li>
//               <li>#MongoDB</li>
//               <li>#FoodApp</li>
//               <li>#Reservations</li>
//               <li>#Express.js</li>
//               <li>#Routes</li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* Project 2 */}
//         <motion.div
//           className="project"
//           variants={projectVariants}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="project-img">
//             <motion.img
//               src={project2}
//               alt="EMS"
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <div className="projectlink">
//               <a
//                 href="https://github.com/arshan0782/Employee-Management-Task"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="visit-site"
//               >
//                 EMS <FaExternalLinkAlt />
//               </a>
//             </div>
//           </div>
//           <div className="project-details">
//             <h3 style={{ color: "#663399" }}>
//               Employee Management System (EMS)
//             </h3>
//             <span style={{ color: "#663399" }}>
//               (Admin & Employee Task Workflow)
//             </span>
//             <p>
//               Developed a secure EMS with Admin and Employee login
//               authentication. Admin can create and assign tasks, while employees
//               can accept, work on, and submit them. Includes real-time task
//               status tracking (New, Active, Completed, Failed) with a clean
//               dashboard UI.
//             </p>
//             <ul>
//               <li>#EMS</li>
//               <li>#React</li>
//               <li>#NodeJS</li>
//               <li>#MongoDB</li>
//               <li>#Authentication</li>
//               <li>#TaskManagement</li>
//               <li>#CompleteTask</li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* Project 3 */}
//         <motion.div
//           className="project"
//           variants={projectVariants}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="project-img">
//             <motion.img
//               src={project3}
//               alt="Dice-Roller"
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <div className="projectlink">
//               <a
//                 href="https://arshan0782.github.io/Dice-Roller/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="visit-site"
//               >
//                 Dice-Roller <FaExternalLinkAlt />
//               </a>
//             </div>
//           </div>
//           <div className="project-details">
//             <h3>Dice-Roller</h3>
//             <span>(Fun & Interactive Dice Simulator)</span>
//             <p>
//               Created a simple web-based dice roller with smooth animations and
//               random number generation for a real dice experience.
//             </p>
//             <ul>
//               <li>#HTML</li>
//               <li>#CSS</li>
//               <li>#JavaScript</li>
//               <li>DiceRoller</li>
//               <li>#FunProject</li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* Project 4 */}
//         <motion.div
//           className="project"
//           variants={projectVariants}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="project-img">
//             <motion.img
//               src={project4}
//               alt="ProdigyData"
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{
//                 duration: 7,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 ease: "easeInOut",
//               }}
//             />
//             <div className="projectlink">
//               <a
//                 href="https://github.com/arshan0782/PRODIGGY_DS_01/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="visit-site"
//               >
//                 Prodigy InfoTech <FaExternalLinkAlt />
//               </a>
//             </div>
//           </div>
//           <div className="project-details" id="color">
//             <h3 style={{ color: "#663399" }}>Prodigy InfoTech Dashboard</h3>
//             <span style={{ color: "#663399" }}>
//               (Intelligent Data Visualization)
//             </span>
//             <p>
//               Designed an interactive Power BI dashboard to analyze global based
//               population trends. Integrated various datasets to display insights
//               on country-wise populations, income-based rankings, and
//               demographic distributions.
//             </p>
//             <ul>
//               <li>#PowerBI</li>
//               <li>#DataAnalytics</li>
//               <li>#DAX</li>
//               <li>#Dashboard</li>
//               <li>#Excel</li>
//             </ul>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projectData";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="work-section" id="project" ref={ref}>
      <h2>Projects</h2>

      <motion.div
        className="projects-list"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project"
            variants={projectVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="project-img">
              <motion.img
                src={project.image}
                alt={project.title}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <div className="projectlink">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-site"
                >
                  {project.title.split(" ")[0]} <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <div className="project-details">
              <h3 style={{ color: project.color }}>{project.title}</h3>
              <span style={{ color: project.color }}>{project.subtitle}</span>
              <p>{project.description}</p>
              <ul>
                {project.tech.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
