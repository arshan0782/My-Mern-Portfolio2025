import React from 'react'
import yourImage from '../assets/arshanart.jpg'
import { FiAward } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { useEffect, useRef } from "react";

const About = () => {

  return (
    <section id="about">
      <h1 className="title">
        About <span style={{ color: '#00ced1' }}> Me</span>
      </h1>
      <div className="about-container">
        <div className="circular">
          <div className="about-img">
            <img src={yourImage} alt="ProfileArshan" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <div className="card">
              <FiAward size={35}/>
              <h3>Experience</h3>
              <p>in</p>
              <p>MERN Stack Developer</p>
            </div>

            <div className="card">
              <FaUserTie size={35}/>
              <h3>Education</h3>
              <h4>The ICFAI University,Dehradun</h4>
              <p>in</p>
              <p>Bachelor of Computer Application</p>
            </div>
          </div>

          <p>
           Hi, I’m Mohd Arshan, a MERN Stack and Frontend Developer.
I am skilled in HTML, CSS, JavaScript, React.js, and Python, and I use these to build visually appealing, responsive, and user-friendly web experiences.
I also work with GSAP to create smooth animations and have a strong understanding of backend APIs, which I can integrate seamlessly with frontend applications.
My focus is on building modern, performance-driven websites while solving problems, writing clean code, and continuously learning new technologies to sharpen my skills.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About