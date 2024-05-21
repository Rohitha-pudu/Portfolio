"use client"
import React from "react";
import BackgroundBeamsDemo from "./profile";
import Resume from "./Resume";
import TechStack from "./TechStack";


export default function Grid() {
  return (
    <section id='about'>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-3">
      <div className="grid grid-cols-1 gap-4 ">
        <div className=" bg-black h-[60vh] border border-[#2617a9] rounded-lg">
          <Resume/>
        </div>
        <div className=" bg-[#0c0b0b] border-[#2617a9] h-[30vh] border rounded-lg">
            <TechStack/>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="rounded-lg lg:w-[90vh] lg:h-[92.2vh] h-[80vh] border-[#2617a9]">
          <BackgroundBeamsDemo/>
         </div>
      </div>
    </div>
    
    </section>
  );
}
