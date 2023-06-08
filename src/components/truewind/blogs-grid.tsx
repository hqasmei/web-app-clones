import React from "react";
import BlogCard from "./blog-card";
import { getAllFeaturedPostsMeta, getAllNonFeaturedPostsMeta } from "@/lib/mdx";

const BlogsGrid = async () => {
  const featuredPosts = await getAllFeaturedPostsMeta();
  const nonFeaturedPosts = await getAllNonFeaturedPostsMeta();

  return (
    <div className="mx-auto flex max-w-xl flex-col space-y-12 px-4 pb-4 md:max-w-6xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {featuredPosts.map((post, idx) => {
          const title = post.title ?? "";
          const dateStr = post.publishedAt;
          const date = new Date(dateStr ?? "");
          const options: Intl.DateTimeFormatOptions = {
            month: "long",
            day: "numeric",
            year: "numeric",
          };
          const formattedDate = date.toLocaleString("en-US", options);

          return <BlogCard key={idx} title={title} date={formattedDate} />;
        })}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3">
        {nonFeaturedPosts.map((post, idx) => {
          const title = post.title ?? "";
          const dateStr = post.publishedAt;
          const date = new Date(dateStr ?? "");
          const options: Intl.DateTimeFormatOptions = {
            month: "long",
            day: "numeric",
            year: "numeric",
          };
          const formattedDate = date.toLocaleString("en-US", options);

          return <BlogCard key={idx} title={title} date={formattedDate} />;
        })}
      </div>
    </div>
  );
};

export default BlogsGrid;
