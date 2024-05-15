import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCircle = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const circleRadius = 50; // Adjust radius as desired

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  const pathLength = Math.PI * 2 * circleRadius;

  const variants = {
    initial: {
      pathLength: 0,
      strokeDasharray: `${pathLength} ${pathLength}`, // Full circle initially hidden
      strokeDashoffset: pathLength,
    },
    animate: {
      pathLength: pathLength,
      strokeDasharray: `${pathLength} ${pathLength}`, // Maintain circle shape
      strokeDashoffset: 0, // Animate from hidden to full circle
      transition: { duration: 1 }, // Adjust duration as needed
    },
  };

  return (
    <motion.svg
      viewBox={`0 0 ${circleRadius * 2} ${circleRadius * 2}`}
      className="fixed top-0 left-0 w-full h-full z-10"
    >
      <motion.circle
        cx={circleRadius}
        cy={circleRadius}
        r={circleRadius}
        fill="transparent"
        stroke="currentColor" // Adjust stroke color
        strokeWidth="4" // Adjust stroke width
        strokeLinecap="round"
        variants={variants}
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
      />
    </motion.svg>
  );
};

export default AnimatedCircle;
