import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import bgImage from "../assets/arshanhome_pic 1.svg";

const Home = () => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameRef.current, {
      strings: ["Hi, I'm Arshan"],
      typeSpeed: 50,
      showCursor: false,
    });

    const typedRole = new Typed(roleRef.current, {
      strings: [
        `<span style="color:#00abf0;">MERN Stack Developer</span>`,
        `<span style="color:#f39c12;">Web Development</span>`,
        `<span style="color:#e74c3c;">UI/UX Designer</span>`,
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      startDelay: 1500,
      smartBackspace: true,
    });

    return () => {
      typedName.destroy();
      typedRole.destroy();
    };
  }, []);

  return (
    <section
      className="home"
      id="home"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // full screen height
        backgroundRepeat: "no-repeat", 
      }}
    >
      <div className="home-content">
        <h1>
          <span ref={nameRef}></span>
        </h1>
        <h3>
          <span ref={roleRef}></span>
        </h3>
        <p>
          Passionate about building interactive and user-friendly web
          experiences.
        </p>

        <div className="btn-social-box">
          <div className="btn-box">
            <a href="#about" className="btn">
              About More
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/mohd-arshan-0786as"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a href="mailto:arshan0782@gmail.com">
              <TfiEmail />
            </a>
            <a
              href="https://github.com/arshan0782"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
