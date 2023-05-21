"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function getRandomValue(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function ColorBlob({ color }: { color: string }) {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      filter: `blur(${getRandomValue(5, 10)}px)`,
      x: getRandomValue(-100, 100),
      y: getRandomValue(-100, 100),
      transition: {
        duration: getRandomValue(1, 3),
        onComplete: startAnimation,
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="relative">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${color} h-14 w-10 rounded-full`}
        animate={controls}
      />
    </div>
  );
}

export default ColorBlob;
