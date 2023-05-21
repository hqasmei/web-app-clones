import React from "react";
import Link from "next/link";

import Accordion from "./accordion";

type AccordionItem = {
  title: string;
  content: string;
};

const items: AccordionItem[] = [
  {
    title: "What is Slayer AI?",
    content:
      "Slayer AI is a platform that allows users to generate high-quality custom audio stories, podcasts, and meditations in just seconds. It uses AI  to create audio content tailored to your preferences.",
  },
  {
    title: "How can I get help?",
    content:
      "If you have any questions, please contact our customer support team. We're here to help!",
  },
  {
    title: "Can I share the audio content I create with others?",
    content:
      "Yes, you can easily share your creations with others. Once you have generated your audio, you will have the option to download it and share it through various platforms.",
  },
  {
    title: "Do I own the rights to the audio content I create using Slayer AI?",
    content:
      "Absolutely! When you use Slayer AI to generate audio content, you retain full ownership of the content you create. You have the rights to use, distribute, and monetize the audio as yo",
  },
  {
    title: "Are there any limitations on the usage of Slayer AI?",
    content:
      "While Slayer AI offers a versatile platform for audio generation, it is important to comply with legal and ethical guidelines. Ensure that the content you create using Slayer AI adheres to copyright laws and respects the rights of others.",
  },
];

const FAQ = () => {
  return (
    <div className="flex w-full flex-col bg-gray-100 py-14 text-center text-black items-center">
      <div className="mb-6 flex flex-col items-center justify-center">
        <span className="mb-4 items-center justify-center rounded-full bg-blue-100 px-3 py-1 text-center text-sm font-semibold text-blue-500">
          FAQ
        </span>
        <span className="mb-4 flex w-full max-w-lg text-5xl font-bold">
          Frequently Asked Questions
        </span>
      </div>

      <Accordion items={items} />
    </div>
  );
};

export default FAQ;
