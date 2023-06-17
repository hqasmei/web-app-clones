"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const heroVariants = {
    initial: {
      opacity: 0,
      translateY: "20px",
    },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 md:py-36">
      <motion.section
        className="hero"
        initial="initial"
        animate="animate"
        variants={heroVariants}
      >
        <div className="flex w-full flex-col items-center justify-center space-y-12 text-center">
          <span className="px-28 text-[2.5rem] font-bold leading-[3.5rem] md:text-[2.75rem]">
            AI-Powered Bookkeeping & Finance for Startups
          </span>
          <span className="mx-auto w-full px-14 text-xl font-medium leading-[2rem] text-gray-500 md:px-24">
            Using AI to power bookkeeping & finance means less errors, more
            transparency, and faster monthly close. Get peace of mind with
            Truewind
          </span>

          <Link
            href="/truewind"
            className="duration-400 rounded-lg bg-[#F9C303] px-10 py-[.6rem] font-medium transition hover:scale-[.95]"
          >
            Get Started
          </Link>
        </div>
      </motion.section>
    </section>
  );
};

export default HeroSection;
