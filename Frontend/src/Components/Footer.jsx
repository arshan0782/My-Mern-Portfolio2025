import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { footerData } from "../data/projectData";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const sectionVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.footer
      className="footer"
      ref={ref}
      variants={footerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container">
        {/* Quick Links */}
        <motion.div className="footer-section" variants={sectionVariants}>
          <h3>Quick Link</h3>
          <ul>
            {footerData.quickLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className={link.href === "#home" ? "active" : ""}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contacts */}
        <motion.div className="footer-section" variants={sectionVariants}>
          <h3>Contact</h3>
          {footerData.contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <p key={contact.id}>
                {Icon && <Icon />} 
                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                  {contact.value}
                </a>
              </p>
            );
          })}

          <div className="footerContact-icons">
            {footerData.socialIcons.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div className="footer-section" variants={sectionVariants}>
          <h3>Quick Intro !!</h3>
          <p>{footerData.intro}</p>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>{footerData.copyright}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
