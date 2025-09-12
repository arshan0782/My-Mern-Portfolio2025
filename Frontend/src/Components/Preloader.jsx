import React from "react";
import loaderPng from "../assets/preloader.gif";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loaderPng} alt="Loading..." className="loaderImg" />
      <h2 className="loaderText">Loading...</h2>
    </div>
  );
};

export default Preloader;
