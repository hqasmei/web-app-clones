import React from "react";

import Link from "next/link";
import Image from "next/image";

import Featured1 from "@/public/truewind/featured/featured1.svg";
import Featured2 from "@/public/truewind/featured/featured2.svg";
import Featured3 from "@/public/truewind/featured/featured3.svg";
import Featured4 from "@/public/truewind/featured/featured4.svg";

const Featured = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-56 py-52">
      <div className="flex flex-col items-center space-y-6">
        <span className="font-semibold tracking-widest"> FEATURED BY</span>
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-6">
          <Image src={Featured1} alt="" width={250} height={150} />
          <Image src={Featured2} alt="" width={250} height={150} />
          <Image src={Featured3} alt="" width={250} height={150} />
          <Image src={Featured4} alt="" width={250} height={150} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 text-center">
        <span className="text-4xl font-bold md:text-5xl">
          Get peace of mind with Truewind
        </span>
        <span className="px-6 font-medium leading-7 text-gray-600 md:px-36 md:text-lg md:leading-9">
          We designed Truewind to be the finance solution that startup founders
          deserve. Get set up on Truewind in a few minutes and we’ll take care
          of the rest.
        </span>

        <Link
          href="https://form.typeform.com/to/SrleFO1U?typeform-source=www.truewind.ai"
          target="_blank"
          className="duration-400 rounded-lg bg-[#F9C303] px-10 py-3 text-lg font-semibold transition hover:scale-[.95]"
        >
          Last time, let's get started 🙂
        </Link>
      </div>
    </div>
  );
};

export default Featured;
