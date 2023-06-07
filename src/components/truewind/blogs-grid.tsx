import React from "react";

const BlogsGrid = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-12 pb-4">
      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <div className="h-80 rounded-xl bg-gray-300"></div>
        <div className="h-80 rounded-xl bg-gray-300"></div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div className="h-48 rounded-xl bg-gray-300"></div>
        <div className="h-48 rounded-xl bg-gray-300"></div>
        <div className="h-48 rounded-xl bg-gray-300"></div>
        <div className="h-48 rounded-xl bg-gray-300"></div>
        <div className="h-48 rounded-xl bg-gray-300"></div>
        <div className="h-48 rounded-xl bg-gray-300"></div>
        <div className="h-48 rounded-xl bg-gray-300"></div>
        <div className="h-48 rounded-xl bg-gray-300"></div>
      </div>
    </div>
  );
};

export default BlogsGrid;
