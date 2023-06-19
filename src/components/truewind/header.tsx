"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/truewind/logo.png";
import { navItems } from "@/lib/constants";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16  border bg-white text-black md:h-20">
        <div className="relative mx-auto flex w-full flex-row items-center justify-between md:max-w-7xl md:px-10">
          <Link href="/truewind/" className="px-8 md:px-0">
            <Image src={Logo} alt="" width={130} height={130} />
          </Link>

          <div className="hidden items-center text-sm md:flex md:flex-row md:space-x-10">
            <div className="flex flex-row space-x-6">
              {navItems.map((item, idx) => {
                if (item.name === "Hiring") {
                  return (
                    <Link
                      key={idx}
                      href={item.path}
                      target="_blank"
                      className={
                        pathname == item.path
                          ? "text-[#F9C303] underline decoration-2 underline-offset-8"
                          : "hover:text-[#F9C303] hover:underline hover:decoration-2 hover:underline-offset-8"
                      }
                    >
                      {item.name}
                    </Link>
                  );
                } else {
                  return (
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
                  );
                }
              })}
            </div>

            <Link
              href="https://form.typeform.com/to/SrleFO1U?typeform-source=www.truewind.ai"
              target="_blank"
              className="duration-400 rounded-lg bg-[#F9C303] px-8 py-[.6rem] font-medium transition hover:scale-[.95]"
            >
              Contact Us
            </Link>
          </div>

          <div
            className="hamburger-menu relative z-50 hover:cursor-pointer md:hidden"
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
        <div
          className={`fixed inset-y-0 w-[280px] right-0  z-20 h-full border border-r bg-white shadow-xl transition duration-300 md:hidden lg:static lg:w-auto lg:border-r-0 lg:shadow-none
 ${isOpen ? "translate-x-0" : "translate-x-[100%]"}`}
        >
          <div className="flex flex-col p-4">
            <div className="flex flex-col space-y-6 pt-28">
              <div className="mb-4 flex flex-col space-y-8">
                {navItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col space-y-4">
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium ${
                        pathname == item.path ? "text-[#F9C303]" : ""
                      } `}
                    >
                      {item.name}
                    </Link>

                    <span
                      className={`h-0.5  ${
                        pathname == item.path ? "bg-[#F9C303]" : "bg-gray-200"
                      } `}
                    ></span>
                  </div>
                ))}
              </div>

              <Link
                href="/truewind"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-[#F9C303] px-8 py-[.6rem] text-center font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
