import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimatedSection = ({ children }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,

    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,

    [0, 0.2, 0.8, 1],[0.4, 1, 1, 0.4]
  );

  const filter = useTransform(
    scrollYProgress,

    [0, 0.2, 0.8, 1],

    ["blur(5px)", "blur(0px)", "blur(0px)", "blur(5px)"]
  );

  return (
     <motion.div style={{ opacity, filter, position:'relative' }} ref={targetRef}>
    {children}
  </motion.div>
  );
};

export default ScrollAnimatedSection;
