import React from "react";

const ReadMore = () => {
  return (
    <div className="flex flex-col items-center space-y-4 border-t-2 py-48">
      <div className="flex flex-row items-center space-x-2">
        <span className="text-xs font-bold tracking-widest text-[#F9C303]">
          READ MORE
        </span>
        <span className="h-1 w-8 bg-[#F9C303]"></span>
      </div>
      <div className="text-4xl font-bold">You might also like:</div>
    </div>
  );
};

export default ReadMore;
