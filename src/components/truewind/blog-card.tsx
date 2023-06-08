import Link from "next/link";
import React from "react";

const BlogCard = ({ title, date }: { title: string; date: string }) => {
  return (
    <Link href={`/truewind/blog-posts/${title}`} className="group flex h-80 flex-col space-y-4 rounded-xl bg-gray-100 p-4">
      <span className=" text-2xl font-bold transition duration-300 group-hover:text-[#F9C303]">
        {title}
      </span>
      <div className="flex items-start">
        <div className="flex items-center justify-center rounded-full bg-[#F9C303] px-2 py-1">
          <span className="text-sm font-semibold">{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
