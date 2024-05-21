"use client";
import React, { useState } from "react";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { MultiStepLoader } from "./ui/LoaderCheck";

const loadingStates = [
  {
    text: "HTML",
  },
  {
    text: "CSS",
  },
  {
    text: "Javascript",
  },
  {
    text: "Typescript",
  },
  {
    text: "React",
  },
  {
    text: "Tailwind",
  },
  {
    text: "MaterialUI",
  },
  {
    text: "AceternityUI",
  },
  {
    text: "Node",
  },
  {
    text: "MongoDB",
  },
  {
    text: "Git",
  },
  {
    text: "GitHub",
  },
];

export default function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <>
    
    <div className="flex items-start px-9 py-9 text-[20px] text-[#3ec540] underline">Tech Stack</div>
    <div className="w-full flex items-center justify-center">
      {/* Core Loader Modal */}
      <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={600} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="bg-[#fdffff] hover:bg-[#263ccb] hover:text-white text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
      >
        Click to load
      </button>

      {loading && (
        <div
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </div>
      )}
    </div>
    </>
  );
}
