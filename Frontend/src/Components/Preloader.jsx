import React from "react";
import { motion } from "framer-motion";
import loaderPng from "../assets/preloader.gif";

const Preloader = () => {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #00abf0, #663399)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <motion.img
        src={loaderPng}
        alt="Loading..."
        className="loaderImg"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{ width: 120, height: 120 }}
      />
      <motion.h2
        className="loaderText"
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        style={{ color: "white", marginTop: 20, fontSize: 24, fontWeight: "bold" }}
      >
        Loading...
      </motion.h2>
    </motion.div>
  );
};

export default Preloader;
