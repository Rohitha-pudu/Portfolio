"use client";
import { TypewriterEffectSmooth } from "./ui/TypeWriterEffect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
         
      text: "Hi! I am",
      className:'text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
    },
    {
      text: "Rohitha, a",
      className:'text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
    },
    {
      text: " UX Designer",
      className:'text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
    },
    {
      text: "and",
      className:'text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
    },
    {
      text: "Full Stack Developer.",
      className: "text-blue-500 dark:text-blue-500 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl",
    },
  ];
  return (
    
      <TypewriterEffectSmooth words={words} />
      
  );
}
