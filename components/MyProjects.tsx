
"use client";

import Design1 from './Design1';
import Design2 from './Design2';
import Design3 from './Design3';
import Design4 from './Design4';
import Design5 from './Design5';
import Design6 from './Design6';
const MyProjects = () => {
  return (
    <section id="myprojects">
        <div className="flex justify-center text-center text-[40px] md:text-5xl lg:text-5xl">Designs</div>
        
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5'>
        <Design1/>
        <Design2/>
        <Design3/>
        
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5'>
        <Design4/>
        <Design5/>
        <Design6/>
        
        </div>
    </section>
  )
}

export default MyProjects