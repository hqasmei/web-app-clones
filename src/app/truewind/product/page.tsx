"use client";
import React from "react";
import Image from "next/image";

import Icon from "@/public/truewind/productIcon.svg";

import { motion } from "framer-motion";

import { accountingInfo, financeInfo } from "@/utils/constants";

import { BiChevronDown } from "react-icons/bi";

const ProductPage = () => {
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
                AI-Powered Bookkeeping and Finance
              </span>
              <span className="text-2xl font-medium leading-10 text-gray-500 lg:px-24">
                Accounting and finance requires context. We use AI to capture
                the business context that only you have 😌
              </span>
            </div>
            <div className="flex flex-col items-start justify-start space-y-2 px-4 lg:px-16">
              <span className="text-xl font-semibold">
                Here's what the journey looks like
              </span>
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

      <div className="flex flex-col items-center bg-[#ECF0F2] px-8 py-36">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-xs font-bold tracking-widest text-[#F9C303]">
            ACCOUNTING
          </span>
          <span className="h-1 w-8 bg-[#F9C303]"></span>
        </div>

        <span className="mt-6 text-4xl font-bold">
          Our engine is accurate and transparent
        </span>

        <div className="mt-12 w-full">
          <div className="relative  grid  grid-cols-2 gap-1">
            {accountingInfo.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx % 2 == 0 && (
                  <React.Fragment>
                    <div className="h-48"></div>

                    <div className="relative flex h-48 flex-col space-y-4 pl-8">
                      <span className="text-xs font-semibold tracking-widest text-[#F9C303]">
                        {item.title}
                      </span>
                      <span className="text-2xl font-bold">{item.detail}</span>
                      <span className="text-sm font-medium leading-6 tracking-wide text-gray-600">
                        {item.subtitle}
                      </span>
                      <div className="absolute -left-1 -top-5 h-[21rem] w-1 bg-[#F9C303]">
                        <span className="absolute -right-2 h-5 w-5 rounded-full bg-[#F9C303]"></span>
                        <span className="absolute -right-1 top-1 z-10 h-3 w-3 rounded-full bg-black"></span>
                        <span className="absolute  top-2 h-1 w-7 bg-[#F9C303]"></span>
                      </div>
                    </div>
                  </React.Fragment>
                )}

                {idx % 2 != 0 && (
                  <React.Fragment>
                    <div className="flex h-48 flex-col space-y-4 pr-8 text-right">
                      <span className="text-xs font-semibold tracking-widest text-[#F9C303]">
                        {item.title}
                      </span>
                      <span className="text-2xl font-bold">{item.detail}</span>
                      <span className="text-sm font-medium leading-6 tracking-wide text-gray-600">
                        {item.subtitle}
                      </span>
                    </div>

                    <div className="relative h-48">
                      <div className="absolute -left-1 -top-1 h-[21rem] w-1 bg-[#F9C303]">
                        <span className="absolute -right-2 h-5 w-5 rounded-full bg-[#F9C303]"></span>
                        <span className="absolute -right-1 top-1 z-10 h-3 w-3 rounded-full bg-black"></span>
                        <span className="absolute -left-7 top-2 h-1 w-10 bg-[#F9C303]"></span>
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center  justify-center space-y-12 px-8 py-36 text-center">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-xs font-bold tracking-widest text-[#F9C303]">
            FINANCE
          </span>
          <span className="h-1 w-8 bg-[#F9C303]"></span>
        </div>
        <span className="mt-6 text-4xl font-bold">
          Get ready for fundraising with a financial model
        </span>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
            {financeInfo.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start text-left">
                <Image src={item.icon} alt="" width={50} height={30} />
                <span className="mb-4 text-xl font-semibold">{item.title}</span>
                <span className="text-gray-600">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
