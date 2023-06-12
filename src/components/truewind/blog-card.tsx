import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogCard = ({
  title,
  date,
  image,
  slug,
}: {
  title: string;
  date: string;
  image: string;
  slug: string;
}) => {
  return (
    <Link
      href={`/truewind/blog-posts/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg  bg-gray-100"
    >
      <Image
        width={1000}
        height={1000}
        className="w-full object-cover object-center md:h-36 lg:h-48"
        src={image}
        alt=""
      />

      <div className="flex flex-col space-y-4 p-6">
        <span className="text-2xl font-bold transition duration-300 group-hover:text-[#F9C303]">
          {title}
        </span>
        <div className="flex items-start">
          <div className="flex items-center justify-center rounded-full bg-[#F9C303] px-2 py-1">
            <span className="text-sm font-semibold">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
