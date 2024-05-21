"use client"
import React from 'react'
import { HoverBorderGradient } from './ui/ResumeButton'
import { FaBolt, FaLaptopCode} from 'react-icons/fa'
import { MdPalette } from 'react-icons/md'; // Importing the palette icon
import Image from 'next/image';
import { SparklesCore } from './ui/Sparkles';


const Resume = () => {
  return (
    <>
     
    <div className='flex flex-col items-center justify-center gap-8'>
        <div className='mt-9'>
        <Image
          src="/profile.png" // Path to your image, assuming it's in the public directory
          alt="Profile Image"
          width={100} // Specify the width of the image
          height={100} // Specify the height of the image
          className='border rounded-[20rem] w-[8rem] h-[8rem] '
        />
        </div>
        <div className='text-[21px]'>Pudu Rohitha</div>
        <div className='flex  items-start text-[14px] flex-row'>
        <div className='flex flex-wrap justify-center text-[#d8d5d5]'>
          <div className='flex items-center flex-shrink-0'>
            <MdPalette className='mx-2 color="#ae5e20"' />
            UI/UX Designer |
          </div>
          <div className='flex items-center flex-shrink-0'>
            <FaLaptopCode className='mx-2' color="#1E90FF"/> Full Stack Developer |
          </div>
          <div className='flex items-center flex-shrink-0'>
            <FaBolt className='mx-2' color="#FFD700"/>GSSOC24
          </div>
          </div>
        </div>
        <HoverBorderGradient
        containerClassName="rounded-lg"
        as="button"
        className="dark:bg-black w-60 h-10 bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span className='p-8 text-[15px]'>Download Resume</span>
      </HoverBorderGradient>
    </div>
    </>
  )
}

export default Resume