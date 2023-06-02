import React from "react";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-36">
      <div className="px-18 mx-auto flex w-full flex-col items-center justify-center space-y-12 text-center">
        <span className="text-5xl font-bold">
          AI-Powered Bookkeeping & Finance for Startups
        </span>
        <span className="mx-auto w-full px-24 text-xl font-medium leading-[2rem] text-gray-500">
          Using AI to power bookkeeping & finance means less errors, more
          transparency, and faster monthly close. Get peace of mind with
          Truewind
        </span>
        <Link
          href="/truewind"
          className="rounded-lg bg-[#F9C303] px-10 py-[.6rem] font-medium hover:scale-[.95] transition duration-400"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
