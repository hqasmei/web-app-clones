"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/slayerai/logo.svg";

import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`sticky top-0 z-50 bg-[#f3f3f3] transition-shadow  ${
        scrollPosition > 0
          ? "bg-opacity-70 shadow backdrop-blur-lg backdrop-filter "
          : "shadow-none"
      }`}
    >
      <div className="mx-auto   flex h-[9vh] md:max-w-6xl flex-row items-center justify-between px-4 text-black">
        <Image src={Logo} alt="" width={140} height={140} />

        <Link
          href="/"
          className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
        >
          Try Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
