import React from "react";
import Link from "next/link";
import Image from "next/image";

import Phone1 from "@/public/slayerai/phone1.svg";
import Phone2 from "@/public/slayerai/phone2.svg";
import Customize from "@/public/slayerai/customize.svg";
import Generate from "@/public/slayerai/generate.svg";
import Prompt from "@public/slayerai/prompt.svg";

const items = [
  {
    headline: "Customize",
    description: "Choose the medium, voice, and duration for your audio.",
    image: Customize,
  },
  {
    headline: "Prompt",
    description:
      "Input what you want to hear about. Fantasy stories, meditations, podcasts and more!",
    image: Generate,
  },
  {
    headline: "Generate",
    description:
      "Press generate, enjoy your creation and share it with others.",
    image: Prompt,
  },
];

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#f3f3f3] text-center text-black">
      <div className="mt-10 flex w-full  flex-col items-center space-y-8 px-4 py-12 sm:max-w-xl md:max-w-5xl">
        <span className="text-4xl font-bold sm:text-5xl sm:leading-[3rem] md:text-7xl md:leading-[5rem]">
          Create
          <span className="mx-2 flex-shrink-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 bg-clip-text text-transparent sm:flex-1">
            Personalized Podcasts
          </span>
          in Seconds
        </span>
        <span className="font-medium text-gray-500">With Slayer AI</span>

        <Link
          href="/"
          className="w-36 rounded-full bg-white p-4 font-medium drop-shadow-2xl"
        >
          Learn More
        </Link>
      </div>
      <div className="py-24">
        <Image src={Phone1} alt="" className="rounded-[40px] shadow-xl" />
      </div>

      <div className="mb-6 flex flex-col items-center justify-center">
        <span className="mb-2 items-center justify-center rounded-full bg-red-100 px-4 py-1 text-center text-sm font-semibold text-red-500">
          Slyer
        </span>
        <span className="mb-6 text-4xl font-bold">Getting Started</span>
        <span className="text-gray-500">You're only a few clicks away</span>
      </div>
      <div className="mb-20 grid w-full grid-cols-1 gap-4 px-4 sm:max-w-xl md:max-w-6xl md:grid-cols-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center space-y-4  rounded-3xl bg-white p-10 shadow-xl"
          >
            <Image src={item.image} alt="" />
            <span className="text-2xl font-bold">{item.headline}</span>
            <span className="text-sm leading-6 text-gray-500">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
