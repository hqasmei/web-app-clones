import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import Mdx from "@/lib/mdx";
import { allMusings } from "contentlayer/generated";
import ReadMore from "@/components/truewind/read-more";

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
  const recommend = project?.recommend || [];
  const content = project?.body.code ?? "";
 
  return (
    <section>
      <div className="mx-auto max-w-6xl px-8 sm:px-10">
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
            width={900}
            height={1000}
            className="h-[300px] w-full rounded-lg object-cover object-center md:h-[570px]"
          />
        </div>

        <Mdx code={content} />
      </div>

      <ReadMore recommend={recommend} />
    </section>
  );
};

export default BlogPostPage;
