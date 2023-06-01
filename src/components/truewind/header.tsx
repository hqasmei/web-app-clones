"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/truewind/logo.png";
import { navItems } from "@/utils/constants";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center border bg-white text-black">
      <div className="mx-auto flex w-full flex-row items-center justify-between px-10 md:max-w-7xl">
        <div>
          <Image src={Logo} alt="" width={130} height={130} />
        </div>

        <div className="flex flex-row space-x-10 text-sm">
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

          <div>
            <Link
              href="/truewind"
              className="rounded-lg bg-[#F9C303] px-8 py-[.6rem] font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
