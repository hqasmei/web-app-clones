import React from "react";
import Link from "next/link";
import Image from "next/image";
import ComingSoonBg from "@/public/slayerai/coming-soon.svg";

const ComingSoon = () => {
  return (
    <div className="flex md:h-screen flex-col bg-black py-24 text-center text-white items-center">
      <div className="mb-6 flex flex-col items-center justify-center">
        <span className="mb-4 items-center justify-center rounded-full bg-blue-950 px-4 py-1 text-center text-xs font-semibold text-blue-600">
          Coming Soon
        </span>
        <span className="mb-4 text-5xl font-bold">Juice Box</span>
        <span className="text-gray-400">Personalization Meets Audio</span>
      </div>
      <Image src={ComingSoonBg} alt="" width={1000} height={ 100} className=""/>
    </div>
  );
};

export default ComingSoon;
