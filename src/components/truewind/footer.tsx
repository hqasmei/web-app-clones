"use client"
import React from "react";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/truewind/logo.png";
import { navItems } from "@/utils/constants";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

import { usePathname } from "next/navigation";

const Footer = () =>
{
  const pathname = usePathname();
  return (
    <footer className="bg-[#ECF0F2]">
      <div className="mx-auto px-10 md:max-w-7xl">
        <div className="flex flex-row justify-between pb-24 pt-36">
          <div>
            <Image src={Logo} alt="" width={130} height={130} />
          </div>
          <div className="flex flex-col space-y-3 text-sm md:pr-24">
            <span className="font-bold tracking-widest">TRUEWIND</span>
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className={
                  pathname == item.path
                    ? "duration-400 text-[#F9C303] transition hover:text-[#F9C303]"
                    : "duration-400 transition hover:text-[#F9C303]"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between pb-10 text-sm">
          <div className="flex flex-row items-center justify-center space-x-2">
            <Link href="" className="group">
              <div className="relative pb-2 pr-2">
                <div className="duration-400 absolute inset-0 left-1 top-1 z-0 rounded-full border-2 border-black transition group-hover:border-[#F9C303]" />
                <div className="relative rounded-full bg-[#F9C303]  p-2">
                  <IoLogoLinkedin size={20} />
                </div>
              </div>
            </Link>

            <Link href="" className="group">
              <div className="relative pb-2 pr-2">
                <div className="duration-400 absolute inset-0 left-1 top-1 z-0 rounded-full border-2 border-black transition group-hover:border-[#F9C303]" />
                <div className="relative rounded-full bg-[#F9C303]  p-2">
                  <IoLogoTwitter size={20} />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center space-x-1">
            <Link
              href=""
              className="duration-400 transition hover:text-[#F9C303]"
            >
              Terms of Service
            </Link>
            <span>|</span>
            <Link
              href=""
              className="duration-400 transition hover:text-[#F9C303]"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center space-x-1">
            <Link
              href=""
              className="duration-400 transition hover:text-[#F9C303]"
            >
              Preserve our mountains 🏔
            </Link>
            <span>|</span>
            <Link
              href=""
              className="duration-400 transition hover:text-[#F9C303]"
            >
              Basketball is life 🏀
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
