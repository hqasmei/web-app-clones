import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/truewind/logo.svg";

const Header = () => {
  return (
    <header className="flex h-20 items-center  border bg-white text-black">
      <div className="mx-auto flex w-full flex-row items-center justify-between px-10 md:max-w-7xl">
        <div>
          <Image src={Logo} alt="" width={130} height={130} />
        </div>

        <div className="flex flex-row space-x-10 text-sm">
          <div className="flex flex-row space-x-6">
            <Link href="/truewind">Home</Link>
            <Link href="/truewind">About</Link>
            <Link href="/truewind">Product</Link>
            <Link href="/truewind">Musings</Link>
            <Link href="/truewind">Hiring</Link>
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
