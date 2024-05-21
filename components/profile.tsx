"use client";
import React from "react";
import { BackgroundBeams } from "./ui/Beam";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";

export default function BackgroundBeamsDemo() {
  return (
    <>
      <div className="border border-[#20136b] h-auto min-h-[40rem] w-full rounded-md bg-neutral-950 relative flex justify-center antialiased p-4 md:p-6">
        <div className="py-9 gap-y-10 text-[15px] md:text-[16px] flex flex-col items-start z-10 text-[#d2cece]">
          <div className="flex flex-col gap-6 md:gap-8">
            {[
              {
                href: 'https://www.linkedin.com/in/rohitha-pudu-52b0bb253/',
                icon: <FaLinkedin size={20} className="" />,
                label: 'LinkedIn',
                name: 'Rohitha Pudu',
              },
              {
                href: 'https://github.com/Rohitha-pudu',
                icon: <FaGithub size={24} />,
                label: 'Github',
                name: 'Rohitha Pudu',
              },
              {
                href: '',
                icon: <FaGithub size={24} />,
                label: 'Leetcode',
                name: 'Rohitha Pudu',
              },
              {
                href: '',
                icon: <FaLinkedin size={20} />,
                label: 'Code Chef',
                name: 'rohithapudu16',
              },
              {
                href: '',
                icon: <FaLinkedin size={20} />,
                label: 'DevPost',
                name: 'Rohitha Pudu',
              },
              {
                href: '',
                icon: <FaLinkedin size={20} />,
                label: 'Unstop',
                name: 'Rohitha Pudu',
              },
              {
                href: '',
                icon: <FiMail size={20} />,
                label: 'Mail',
                name: 'rohithapudu@gmail.com',
              },
              {
                href: '',
                icon: <AiOutlinePhone size={20} />,
                label: 'Contact',
                name: '9652332236',
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between w-full cursor-pointer">
                <Link href={item.href} className="flex flex-row gap-2 w-full md:w-40 pt-3">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
                <Link href={item.href} className="flex flex-row pt-3">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
