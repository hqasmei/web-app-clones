import React from "react";

import Link from "next/link";
import ColorBlob from "../color-blob";

const Footer = () => {
  return (
    <footer className="flex   flex-col items-center justify-center text-black">
      <div className="mb-28 flex flex-1 flex-col items-center justify-center space-y-10 text-black">
        <span className="text-6xl font-bold">Start Creating Today</span>
        <span className="text-lg text-gray-600">
          Slayer is currently in Beta
        </span>
        <Link
          href="/"
          className="rounded-full bg-white px-6 py-3 drop-shadow-xl"
        >
          Try Slayer
        </Link>
      </div>

      <ColorBlob color="from-red-400 to-yellow-400" />
      <ColorBlob color="from-blue-400 to-indigo-400" />
      <ColorBlob color="from-green-400 to-teal-400" />

      <div className="flex flex-row items-center justify-around space-x-4 py-8 text-sm text-gray-400">
        <Link href="/" className="hover:font-semibold hover:text-gray-800">
          © 2023 SlayerAI Inc
        </Link>
        <span className="p-.5 h-1 w-1 rounded-full bg-gray-400 "></span>
        <Link href="/" className="hover:font-semibold hover:text-gray-800">
          {" "}
          Try Slayer
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
