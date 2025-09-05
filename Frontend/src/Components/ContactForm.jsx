import React, { useState } from "react";
import contactSvg from "../assets/contact-me.svg";
import Swal from "sweetalert2";

const Contact = () => {
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

    // Frontend Validations
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
      const res = await fetch("http://localhost:3001/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check response status (200–299 = OK)
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
      
        Swal.fire("Error", "Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error:", error);

      // Server error ya network error case
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
      });
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <img src={contactSvg} alt="contact_img" />
      <div className="contact-form">
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
      </div>
    </section>
  );
};
export default Contact;
