"use client";

import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

// Usage

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="sm:max-w-xl md:max-w-6xl">
      <div className="flex flex-col space-y-4">
        {items.map((item, index) => (
          <div key={index} className="rounded-3xl bg-white p-6 shadow-2xl">
            <button
              className="flex flex-row  justify-center space-x-2 focus:outline-none  "
              onClick={() => toggleAccordion(index)}
            >
              <span className="rotate-0 transform transition-all duration-300">
                {activeIndex === index ? (
                  <FiChevronDown size={25} />
                ) : (
                  <FiChevronRight size={25} />
                )}
              </span>
              <span className="text-left text-xl  font-bold  ">
                {item.title}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-4 text-left text-gray-600">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
