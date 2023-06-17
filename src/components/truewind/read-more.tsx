import React from "react";

import BlogCard from "./blog-card";

import { allMusings } from "contentlayer/generated";

const ReadMore = (recommend: any) => {
  const { recommend: recommendedPosts } = recommend;

  const posts = allMusings.filter((project) =>
    recommendedPosts.includes(project.slug)
  );

  return (
    <div className="flex flex-col items-center border-t-2 py-48">
      <div className="flex flex-row items-center space-x-2">
        <span className="text-xs font-bold tracking-widest text-[#F9C303]">
          READ MORE
        </span>
        <span className="h-1 w-8 bg-[#F9C303]"></span>
      </div>
      <div className="mt-6 text-4xl font-bold">You might also like:</div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 px-8 sm:grid-cols-2 sm:px-10 md:grid-cols-3">
        {posts
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          )
          .map((post, idx) => {
            const title = post.title ?? "";
            const dateStr = post.publishedAt;
            const date = new Date(dateStr ?? "");
            const image = post.image ?? "";
            const options: Intl.DateTimeFormatOptions = {
              timeZone: "UTC",
              month: "long",
              day: "numeric",
              year: "numeric",
            };
            const formattedDate = date.toLocaleString("en-US", options);

            return (
              <BlogCard
                key={idx}
                title={title}
                date={formattedDate}
                image={image}
                slug={post.slug}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ReadMore;
