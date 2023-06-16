import React from "react";
import BlogCard from "./blog-card";

import { allMusings } from "contentlayer/generated";

const BlogsGrid = async () => {
  const featureMusings = allMusings.filter(
    (project) => project.featured === true
  );

  const nonFeatureMusings = allMusings.filter(
    (project) => project.featured === false
  );

  return (
    <div className="mx-auto flex max-w-xl flex-col space-y-12 px-4 pb-4 md:max-w-6xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {featureMusings.map((post, idx) => {
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
      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3">
        {nonFeatureMusings
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

export default BlogsGrid;
