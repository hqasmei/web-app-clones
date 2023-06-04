"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/truewind/logo.png";
import { navItems } from "@/utils/constants";

import { usePathname } from "next/navigation"; 

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex h-16 items-center border bg-white text-black md:h-20">
        <div className="mx-auto flex w-full flex-row items-center justify-between md:max-w-7xl md:px-10">
          <div className="px-8 md:px-0">
            <Image src={Logo} alt="" width={130} height={130} />
          </div>

          <div className="hidden items-center space-x-10 text-sm md:flex md:flex-row">
            <div className="flex flex-row space-x-6">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className={
                    pathname == item.path
                      ? "text-[#F9C303] underline decoration-2 underline-offset-8"
                      : "hover:text-[#F9C303] hover:underline hover:decoration-2 hover:underline-offset-8"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="/truewind"
              className="duration-400 rounded-lg bg-[#F9C303] px-8 py-[.6rem] font-medium transition hover:scale-[.95]"
            >
              Contact Us
            </Link>
          </div>

          <div
            className="hamburger-menu hover:cursor-pointer md:hidden"
            onClick={handleToggle}
          >
            <div className="hamburger">
              <div
                className={`hamburger-line-first ${
                  isOpen ? "hamburger-line-first-open " : ""
                }`}
              ></div>
              <div
                className={`hamburger-line-second ${
                  isOpen ? "hamburger-line-second-open " : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 mt-16 h-full  border-r bg-white shadow-xl transition duration-300 lg:static lg:w-auto lg:border-r-0 lg:shadow-none
 ${
   isOpen
     ? "translate-x-[calc(100%-16rem)]"
     : "translate-x-[100%]"
 }`}
      >
        <div className="p-4">
          <div className="flex flex-col space-y-6 pt-10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  <Link
                    href={item.path}
                    className={`text-sm font-medium ${
                      pathname == item.path ? "text-[#F9C303]" : ""
                    } `}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`h-0.5 w-full  ${
                      pathname == item.path ? "bg-[#F9C303]" : "bg-gray-200"
                    } `}
                  ></span>
                </div>
              ))}
            </div>

            <Link
              href="/truewind"
              className="rounded-lg bg-[#F9C303] px-8 py-[.6rem] text-center font-medium w-1/4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
