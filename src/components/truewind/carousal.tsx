"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SightMachine from "@/public/truewind/sight-machine.svg";
import FlagRight from "@/public/truewind/flagright.svg";
import Mio from "@/public/truewind/mio.svg";
import Nimbus from "@/public/truewind/nimbus.svg";
import MozartData from "@/public/truewind/mozart-data.svg";
import YCombinator from "@/public/truewind/ycombinator.svg";

import Marquee from "react-fast-marquee";

const Carousal = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="flex flex-col  items-center justify-center space-y-10">
        <div>
          <span className="text-sm text-blue-500">
            TRUSTED BY HYPER-GROWTH STARTUPS
          </span>
        </div>

        <Marquee>
          <div className="flex flex-row space-x-1 md:space-x-16">
            <Image src={SightMachine} alt="" width={150} height={150} />
            <Image src={Mio} alt="" width={150} height={150} />
            <Image src={Nimbus} alt="" width={150} height={150} />
            <Image src={FlagRight} alt="" width={150} height={150} />
            <Image src={MozartData} alt="" width={150} height={150} />
            <Image src={YCombinator} alt="" width={150} height={150} />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Carousal;
