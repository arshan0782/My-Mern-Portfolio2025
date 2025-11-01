// src/data/projectData.js
import project1 from "../assets/Restaurant web app.png";
import project2 from "../assets/EMS.png";
import project3 from "../assets/diceRollerimage.png";
import project4 from "../assets/projectimg.png";
import yourImage from "../assets/arshanart.jpg";
import { FiAward } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";



export const projects = [
  {
    id: 1,
    title: "Restaurant Food Ordering & Reservation Web",
    subtitle: "(Online Ordering & Reservations)",
    description:
      "Designed an engaging restaurant web app where users get attracted by a delicious menu, easily place food orders, and reserve tables by filling a simple contact form with a smooth success flow.",
    tech: ["#MERN", "#CSS", "#JavaScript", "#Reactjs", "#MongoDB", "#FoodApp", "#Reservations", "#Express.js", "#Routes"],
    image: project1,
    link: "https://github.com/arshan0782/Restaurant-Food-Ordering-Reservation-Web",
    color: "#00abf0",
  },
  {
    id: 2,
    title: "Employee Management System (EMS)",
    subtitle: "(Admin & Employee Task Workflow)",
    description:
      "Developed a secure EMS with Admin and Employee login authentication. Admin can create and assign tasks, while employees can accept, work on, and submit them. Includes real-time task status tracking (New, Active, Completed, Failed) with a clean dashboard UI.",
    tech: ["#EMS", "#React", "#NodeJS", "#MongoDB", "#Authentication", "#TaskManagement", "#CompleteTask"],
    image: project2,
    link: "https://github.com/arshan0782/Employee-Management-Task",
    color: "#663399",
  },
  {
    id: 3,
    title: "Dice-Roller",
    subtitle: "(Fun & Interactive Dice Simulator)",
    description:
      "Created a simple web-based dice roller with smooth animations and random number generation for a real dice experience.",
    tech: ["#HTML", "#CSS", "#JavaScript", "#DiceRoller", "#FunProject"],
    image: project3,
    link: "https://arshan0782.github.io/Dice-Roller/",
    color: "#00abf0",
  },
  {
    id: 4,
    title: "Prodigy InfoTech Dashboard",
    subtitle: "(Intelligent Data Visualization)",
    description:
      "Designed an interactive Power BI dashboard to analyze global based population trends. Integrated various datasets to display insights on country-wise populations, income-based rankings, and demographic distributions.",
    tech: ["#PowerBI", "#DataAnalytics", "#DAX", "#Dashboard", "#Excel"],
    image: project4,
    link: "https://github.com/arshan0782/PRODIGGY_DS_01/",
    color: "#663399",
  },
];


 // About section data

export const aboutData = {
  title: "About Me",
  highlight: "Me",
  image: yourImage,
  cards: [
    {
      id: 1,
      icon: FiAward,
      title: "Experience",
      subtitle1: "in",
      subtitle2: "MERN Stack Developer",
      color: "#00abf0",
      delay: 0,
    },
    {
      id: 2,
      icon: FaUserTie,
      title: "Education",
      subtitle1: "The ICFAI University, Dehradun",
      subtitle2: "Bachelor of Computer Application",
      color: "#00abf0",
      delay: 1,
    },
  ],
  description: `Hi, I’m Mohd Arshan, a MERN Stack and Frontend Developer. 
I am skilled in HTML, CSS, JavaScript, React.js, and Python, and I use these to build visually appealing, responsive, and user-friendly web experiences. 
I also work with GSAP to create smooth animations and have a strong understanding of backend APIs, which I can integrate seamlessly with frontend applications. 
My focus is on building modern, performance-driven websites while solving problems, writing clean code, and continuously learning new technologies to sharpen my skills.`,
};


// Footer section data

export const footerData = {
  quickLinks: [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "About", href: "#about" },
    { id: 3, label: "Skills", href: "#skills" },
    { id: 4, label: "Projects", href: "#project" },
    { id: 5, label: "Contact", href: "#contact" },
  ],

  contacts: [
    {
      id: 1,
      type: "Whatsapp",
      value: "Join whatsapp",
      href: "https://wa.me/918279460782",
      icon: null,
    },
    {
      id: 2,
      type: "Telegram",
      value: "Join Telegram",
      href: "https://t.me/arshan77777",
      icon: null,
    },
    {
      id: 3,
      type: "Email",
      value: "arshan0782@gmail.com",
      href: "mailto:arshan0782@gmail.com",
      icon: TfiEmail,
    },
  ],

  socialIcons: [
    {
      id: 1,
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/mohd-arshan-0786as",
    },
    {
      id: 2,
      icon: TfiEmail,
      href: "mailto:arshan0782@gmail.com",
    },
    {
      id: 3,
      icon: FaGithub,
      href: "https://github.com/arshan0782",
    },
  ],

  intro: `Hey there!👋 I'm Mohd Arshan, a Frontend Developer passionate about crafting interactive and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React.js focusing on modern UI/UX designs with responsive and efficient performance. I have worked on various projects, building real-world solutions and exploring the latest web technologies. Always eager to learn and create something innovative!`,

  copyright: "© 2025 All Rights Reserved Mohd Arshan.",
};