import React from "react";
import project1 from "../assets/Restaurant web app.png";
import project2 from "../assets/EMS.png";
import project3 from "../assets/diceRollerimage.png";
import project4 from "../assets/projectimg.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="work-section" id="project">
      <h2>Project</h2>

      {/* Project 1 */}
      <div className="project">
        <div className="project-img">
          <img src={project1} alt="Restaurant Web" />
          <div className="projectlink">
            <a
              href="https://github.com/arshan0782/Restaurant-Food-Ordering-Reservation-Web"
              target="_blank"
              className="visit-site"
            >
              Restaurant Web <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="project-details">
          <h3>Restaurant Food Ordering & Reservation Web</h3>
          <span>(Online Ordering & Reservations)</span>
          <p>
            Designed an engaging restaurant web app where users get attracted by
            a delicious menu, easily place food orders, and reserve tables by
            filling a simple contact form with a smooth success flow.
          </p>
          <ul>
            <li>#MERN</li>
            <li>#CSS</li>
            <li>#JavaScript</li>
            <li>#Reactjs</li>
            <li>#MongoDB</li>
            <li>#FoodApp</li>
            <li>#Reservations</li>
            <li>#Express.js</li>
            <li>#Routes</li>
          </ul>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project">
        <div className="project-img">
          <img src={project2} alt="EMS" />
          <div className="projectlink">
            <a
              href="https://arshan0782.github.io/Dice-Roller/"
              target="_blank"
              className="visit-site"
            >
              EMS <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="project-details">
          <h3 style={{ color: "#663399" }}>Employee Management System (EMS)</h3>
          <span style={{ color: "#663399" }}>
            (Admin & Employee Task Workflow)
          </span>
          <p>
            Developed a secure EMS with Admin and Employee login authentication.
            Admin can create and assign tasks, while employees can accept, work
            on, and submit them. Includes real-time task status tracking (New,
            Active, Completed, Failed) with a clean dashboard UI.
          </p>
          <ul>
            <li>#EMS</li>
            <li>#React</li>
            <li>#NodeJS</li>
            <li>#MongoDB</li>
            <li>#Authentication</li>
            <li>#imagesDice</li>
            <li>#javascript</li>
            <li>#TaskManagement</li>
            <li>#CompleteTask</li>
          </ul>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project">
        <div className="project-img">
          <img src={project3} alt="Dice-Roller" />
          <div className="projectlink">
            <a
              href="https://arshan0782.github.io/Dice-Roller/"
              target="_blank"
              className="visit-site"
            >
              Dice-Roller <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="project-details">
          <h3>Dice-Roller</h3>
          <span>(Fun & Interactive Dice Simulator)</span>
          <p>
            Created a simple web-based dice roller with smooth animations and
            random number generation for a real dice experience.
          </p>
          <ul>
            <li>#HTML</li>
            <li>#CSS</li>
            <li>#JavaScript</li>
            <li>DiceRoller</li>
            <li>#FunProject</li>
            <li>#imagesDice</li>
            <li>#javascript</li>
            <li>#figma</li>
          </ul>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project">
        <div className="project-img">
          <img src={project4} alt="ProdigyData" />
          <div className="projectlink">
            <a
              href="https://github.com/arshan0782/PRODIGGY_DS_01/"
              target="_blank"
              className="visit-site"
            >
              Prodigy InfoTech <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="project-details" id="color">
          <h3 style={{ color: "#663399" }}>Prodigy InfoTech Dashboard</h3>
          <span style={{ color: "#663399" }}>
            (Intelligent Data Visualization)
          </span>
          <p>
            Designed an interactive Power BI dashboard to analyze global based
            population trends. Integrated various datasets to display insights
            on country-wise populations, income-based rankings, and demographic
            distributions.
          </p>
          <ul>
            <li>#PowerBI</li>
            <li>#DataAnalytics</li>
            <li>#swiper.js</li>
            <li>#DAX</li>
            <li>#mongoose</li>
            <li>#Dashboard</li>
            <li>#Excel</li>
            <li>#excelformulae</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
