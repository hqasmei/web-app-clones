"use client";
import React from "react";
import Image from "next/image";

import Icon from "@/public/truewind/aboutIcon.svg";
import YCombinator from "@/public/truewind/ycombinator.svg";

import { motion } from "framer-motion";

import { team } from "@/utils/constants";

import { BiChevronDown } from "react-icons/bi";

const AboutPage = () => {
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
    <section>
      <div className="flex flex-col items-center py-12 md:flex-row md:py-36">
        <motion.div
          className="hero"
          initial="initial"
          animate="animate"
          variants={heroVariants}
        >
          <div className="mt-12 w-full px-10">
            <div className="mb-16 flex flex-col items-center justify-center space-y-16 text-center">
              <span className="text-5xl  font-bold lg:px-24">
                Meet the people behind Truewind
              </span>
              <span className="text-2xl font-medium leading-10 text-gray-500 lg:px-24">
                We love finance & accounting. We're a team of technology
                engineers with one shared goal: give you peace of mind
              </span>
            </div>
            <div className="flex flex-col items-start justify-start space-y-2 px-4 lg:px-16">
              <span className="text-xl font-semibold">Meet the team</span>
              <motion.div
                className="lg:-ml-1"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <span>
                  <BiChevronDown size={30} />
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 w-full sm:w-1/2 md:p-10">
          <Image src={Icon} alt="" width={700} height={100} />
        </div>
      </div>

      <motion.div
        className="hero"
        initial="initial"
        animate="animate"
        variants={heroVariants}
      >
        <div className="flex flex-col items-center justify-center space-y-10 px-4 py-12 text-center md:px-8 md:py-36">
          <span className="text-3xl font-semibold">
            Why the name - Truewind?
          </span>
          <span className="text-xl font-medium text-gray-500">
            true:/wind/: 1. relative to a fixed point, an observation which is
            not affected by motion of the observer
          </span>
          <span className="text-xl font-medium text-gray-500">
            The wind speed you experience while sailing is relative to the
            movement of the boat. The true wind speed can only be measured by a
            stationary point on land, which is the role of finance. We give you
            the true wind speed readings so you can navigate the seas.
          </span>
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center bg-[#ECF0F2] py-36">
        <div className="flex flex-col items-center justify-center space-y-2 ">
          <div className="flex flex-row items-center space-x-2">
            <span className="text-sm font-bold tracking-widest text-[#F9C303]">
              TEAM
            </span>
            <span className="h-1 w-8 bg-[#F9C303]"></span>
          </div>

          <span className="text-5xl font-bold">The Truewind Crew</span>
        </div>
        <motion.div
          className="hero"
          initial="initial"
          animate="animate"
          variants={heroVariants}
        >
          <div className="mt-16 grid grid-cols-2 gap-20 md:grid-cols-4">
            {team.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center space-y-4 text-center"
              >
                <div className="relative overflow-hidden rounded-full p-2 md:pb-6 md:pr-6">
                  <div className="absolute inset-0 bottom-2 left-6 right-2 top-6 z-0 hidden rounded-full border border-black md:block" />

                  <div className="relative h-36 w-36 overflow-hidden rounded-full bg-black">
                    <Image
                      src={item.image}
                      alt=""
                      width={300}
                      height={300}
                      className=""
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-2xl font-bold">{item.name}</span>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-12 py-36 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-row items-center space-x-2">
            <span className="text-sm font-bold tracking-widest text-[#F9C303]">
              PARTNERS
            </span>
            <span className="h-1 w-8 bg-[#F9C303]"></span>
          </div>

          <span className="text-5xl font-bold">
            Backed by world class investors
          </span>
        </div>

        <Image src={YCombinator} alt="" width={200} height={100} />
      </div>
    </section>
  );
};

export default AboutPage;
