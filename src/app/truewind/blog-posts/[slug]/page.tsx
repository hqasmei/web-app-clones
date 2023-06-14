import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import Mdx from "@/lib/mdx";
import { allMusings } from "contentlayer/generated";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = allMusings.find((project) => project.slug === params.slug);

  return {
    title: project?.title,
  };
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const project = allMusings.find((project) => project.slug === params.slug);

  const title = project?.title;
  const dateStr = project?.publishedAt;
  const date = new Date(dateStr ?? "");
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);
  const author = project?.author;
  const image = project?.image || "";

  const content = project?.body.code ?? "";

  return (
    <section className="px-4 ">
      <div className="mx-auto max-w-6xl py-10">
        <Link
          href="/truewind/musings"
          className="group flex flex-row items-center space-x-1  py-12"
        >
          <FiArrowLeft className="group-hover:text-gray-600" />
          <span className="group-hover:text-gray-600">Back</span>
        </Link>
        <div className="mb-10 flex flex-col items-center justify-center space-y-6 text-center">
          <div className="flex flex-row items-center space-x-2">
            <span className="text-xs font-bold tracking-widest text-[#F9C303]">
              {formattedDate.toUpperCase()}
            </span>
            <span className="h-1 w-8 bg-[#F9C303]"></span>
          </div>
          <div className="text-4xl font-bold">{title}</div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-gray-500">
              WRITTEN BY:
            </span>
            <span className="font-bold">{author}</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={image}
            alt=""
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>

        <Mdx code={content} />
      </div>
    </section>
  );
};

export default BlogPostPage;
