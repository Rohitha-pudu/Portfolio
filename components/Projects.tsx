"use client";
import React from "react";
import Slider from "react-slick";
import { PinContainer } from "./ui/ThreeDPin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="mt-[10rem]">
      <div className="flex justify-center text-center text-[40px] md:text-5xl lg:text-5xl">Projects</div>
      <div className="flex items-center justify-center">
        <div className="hidden lg:flex h-[40rem] w-full flex-wrap items-center justify-center gap-4">
          <Link href="https://github.com/Rohitha-pudu">
          <PinContainer  title="NextJs/MERN/Js">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">My Projects</h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">Transforming Concepts into Creations.</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <Image
                  src="/pr014.png" // Path to your image, assuming it's in the public directory
                  alt="Profile Image"
                  width={100} // Specify the width of the image
                  height={100} // Specify the height of the image
                  className='w-[20rem] rounded-lg'
                  />
                  </div>
            </div>
          </PinContainer>
          </Link>
          <Link href="https://github.com/Rohitha-pudu">
          <PinContainer title="MERN/NextJs/React">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Practise Projects</h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">Learning Through Creation.</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <Image
                  src="/pro12.png" // Path to your image, assuming it's in the public directory
                  alt="Profile Image"
                  width={100} // Specify the width of the image
                  height={100} // Specify the height of the image
                  className='w-[20rem] rounded-lg'
                  />
                  </div>
              {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            </div>
          </PinContainer>
          </Link>
          <Link href='#myprojects'>
          <PinContainer title="Figma/Framer/AdobeXD" >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Designs</h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">Crafting Tomorrow’s Visuals, Pixel.</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <Image
                  src="/pro7.png" // Path to your image, assuming it's in the public directory
                  alt="Profile Image"
                  width={100} // Specify the width of the image
                  height={100} // Specify the height of the image
                  className='w-[20rem] rounded-lg'
                  />
                  </div>
            </div>
          </PinContainer>
          </Link>
        </div>

        <div className="lg:hidden w-full px-4 mt-16">
          <Slider {...settings}>
            <div className="h-[40rem] w-full flex items-center justify-center">
            <Link href="https://github.com/Rohitha-pudu">
              <PinContainer title="NextJs/MERN/Js">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">My Projects</h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">Transforming Concepts into Creations.</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <Image
                  src="/pr014.png" // Path to your image, assuming it's in the public directory
                  alt="Profile Image"
                  width={100} // Specify the width of the image
                  height={100} // Specify the height of the image
                  className='w-[20rem] rounded-lg'
                  />
                  </div>
                </div>
              </PinContainer>
              </Link>
            </div>

            <div className="h-[40rem] w-full flex items-center justify-center">
            <Link href="https://github.com/Rohitha-pudu">
              <PinContainer title="MERN/NextJs/React">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Practise Projects</h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">Learning Through Creation.</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <Image
                  src="/pro12.png" // Path to your image, assuming it's in the public directory
                  alt="Profile Image"
                  width={100} // Specify the width of the image
                  height={100} // Specify the height of the image
                  className='w-[20rem] rounded-lg'
                  />
                  </div>
                   {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                </div>
              </PinContainer>
              </Link>
            </div>

            <div className="h-[40rem] w-full flex items-center justify-center">
              <Link href='#myprojects'>
              <PinContainer title="Figma/Framer/AdobeXD">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Designs</h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">Crafting Tomorrow’s Visuals, Pixel.</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <Image
                  src="/pro7.png" // Path to your image, assuming it's in the public directory
                  alt="Profile Image"
                  width={100} // Specify the width of the image
                  height={100} // Specify the height of the image
                  className='w-[20rem] rounded-lg'
                  />
                  </div>
                </div>
              </PinContainer>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
