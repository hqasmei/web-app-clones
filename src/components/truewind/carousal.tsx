import React from "react";
import Image from "next/image"; 
import SightMachine from "../../../public/truewind/sight-machine.svg";
import FlagRight from "../../../public/truewind/flagright.svg";
import Mio from "../../../public/truewind/mio.svg";
import Nimbus from "../../../public/truewind/nimbus.svg";
import MozartData from "../../../public/truewind/mozart-data.svg";
import YCombinator from "../../../public/truewind/ycombinator.svg";

const Carousal = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-10">
      <div>
        <span className="text-sm text-blue-500">
          TRUSTED BY HYPER-GROWTH STARTUPS
        </span>
      </div>
      <div className="flex flex-row space-x-10">
        <Image src={SightMachine} alt="" width={130} height={130} />
        <Image src={Mio} alt="" width={130} height={130} />
        <Image src={Nimbus} alt="" width={130} height={130} />
        <Image src={FlagRight} alt="" width={130} height={130} />
        <Image src={MozartData} alt="" width={130} height={130} />
        <Image src={YCombinator} alt="" width={130} height={130} />
      </div>
    </section>
  );
};

export default Carousal;
