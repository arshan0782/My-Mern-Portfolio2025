import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import contactSvg from "../assets/contact-me.svg";
import Swal from "sweetalert2";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      Swal.fire("Error", "Please enter your name", "error");
      return;
    }
    if (!/^[0-9]{10}$/.test(formData.number)) {
      Swal.fire("Error", "Please enter a valid 10-digit number", "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      Swal.fire("Error", "Please enter a valid email", "error");
      return;
    }
    if (formData.message.trim().length < 5) {
      Swal.fire("Error", "Message should be at least 5 characters", "error");
      return;
    }

    try {
      const res = await fetch(
        "https://my-mern-portfolio2025.vercel.app/contact/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Message sent successfully!!",
          icon: "success",
          draggable: true,
        });
        setFormData({ name: "", number: "", email: "", message: "" });
      } else {
        Swal.fire(
          "Error",
          "Failed to send message. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
      });
    }
  };

  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Contact</motion.h2>

    
      <motion.img
        src={contactSvg}
        alt="contact_img"
        className="contact-image"
        variants={itemVariants}
        animate={{
          y: [0, -15, 0, 15, 0], 
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
          boxShadow: "0px 0px 20px rgba(0, 171, 240, 0.6)", 
        }}
      />

      <motion.div className="contact-form" variants={itemVariants}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
            autoComplete="off"
          />
          <input
            type="text"
            id="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter Your Number"
            inputMode="numeric"
            required
            autoComplete="off"
          />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
            autoComplete="off"
          />
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
