import React from "react";

import BlogsGrid from "@/components/truewind/blogs-grid";

const MusingsPage = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-4 py-10">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-xs font-bold tracking-widest text-[#F9C303]">
            MUSINGS
          </span>
          <span className="h-1 w-8 bg-[#F9C303]"></span>
        </div>

        <span className="text-5xl font-bold">Thought starters</span>
      </div>

      <BlogsGrid />
    </section>
  );
};

export default MusingsPage;
