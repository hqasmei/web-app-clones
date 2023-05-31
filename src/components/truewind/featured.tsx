import React from "react";
import Image from "next/image";
import Featured1 from "@/public/truewind/featured1.svg";
import Featured2 from "@/public/truewind/featured2.svg";
import Featured3 from "@/public/truewind/featured3.svg";
import Featured4 from "@/public/truewind/featured4.svg";

const Featured = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-56 py-52">
      <div className="flex flex-col items-center space-y-6">
        <span className="font-semibold tracking-widest"> FEATURED BY</span>
        <div className="flex flex-row space-x-6">
          <Image src={Featured1} alt="" width={250} height={150} />
          <Image src={Featured2} alt="" width={250} height={150} />
          <Image src={Featured3} alt="" width={250} height={150} />
          <Image src={Featured4} alt="" width={250} height={150} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 text-center">
        <span className="text-5xl font-bold">
          Get peace of mind with Truewind
        </span>
        <span className="px-36 text-xl font-medium leading-9 text-gray-600">
          We designed Truewind to be the finance solution that startup founders
          deserve. Get set up on Truewind in a few minutes and we’ll take care
          of the rest.
        </span>
        <button className="rounded-lg bg-[#F9C303] px-10 py-3 text-lg font-semibold">
          Last time, let's get started 🙂
        </button>
      </div>
    </div>
  );
};

export default Featured;
