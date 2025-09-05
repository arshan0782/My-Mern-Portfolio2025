import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { IoMenu,IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <a href="#">
        <img src={logo} className="logo" alt="Main Logo" />
      </a>

    
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoClose className="menu-icon" />
        ) : (
          <IoMenu className="menu-icon" />
        )}
      </div>

    
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
        <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>SKILLS</a>
        <a href="#project" onClick={() => setIsOpen(false)}>PROJECTS</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
