import React from "react";

import Image from "next/image";

import { items } from "@/lib/constants";

const SmartBookkeeping = () => {
  return (
    <section className="mx-auto  max-w-7xl py-36">
      <div className="mb-20 flex flex-col items-center justify-center space-y-8 text-center">
        <span className="mx-4 text-4xl font-bold">
          Smarter Bookkeeping & Finances
        </span>
        <span className="text-md px-4 font-medium leading-8 text-gray-600 md:px-36 md:text-lg">
          Through a combination of AI and concierge service, we deliver a
          delightful financial back office experience. Reliable bookkeeping,
          detailed financial models, built exclusively for startups
        </span>
      </div>
      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex  flex-col space-y-6 rounded-lg border p-4"
          >
            <div className="flex flex-1  flex-col space-y-4">
              <div className="flex flex-row items-center space-x-2">
                <span className="text-sm font-semibold tracking-widest text-[#F9C303]">
                  {item.headline}
                </span>
                <span className="h-1 w-8 bg-[#F9C303]"></span>
              </div>
              <span className="text-2xl font-bold">{item.subtitle}</span>
              <span className="text-gray-600">{item.description}</span>
            </div>

            <Image src={item.image} alt="" width={800} height={800} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmartBookkeeping;
