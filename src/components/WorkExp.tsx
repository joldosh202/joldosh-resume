import React from 'react';
import {useRef} from "react"
import Navbar from './Navbar';
const WorkExp = () => {
   // interface ChildComponentProps {
   //    bottomEl: React.MutableRefObject<HTMLDivElement | null>;
   //  }
   // const bottomEl = useRef<null | HTMLDivElement>(null);
   
   return (
      <div>
         <div className='bg-gray-700 h-2'></div>
         <div className='bg-gray-800 h-[600px] w-full flex flex-col items-center text-white '>
        <div className='w-[360px] sm:w-[800px] mt-10 sm:mt-20'>
          <div className='text-center text-[30px] font-bold mb-10 font-montserrat'>work exprerience</div>
        
          <div className='text-[20px]  font-bold mb-5 font-montserrat'>
          I was participating in many hachathons and builded some projects with other talanted developers
          </div>
         <div className=' text-[20px] font-bold mb-5 font-montserrat'>
          here's some of them:
          </div>
          <div className='flex flex-col justify-between h-[200px]'>
            
            <div className=' text-[20px] font-bold mb-5 font-montserrat'>
                Smart Manage website for managing personal finances. And Our team got an award of best team
            </div>
            <div className=' text-[20px] font-bold mb-5 font-montserrat'>
                  live link:  <a href='https://smartmanage-d365a.web.app/' className='text-blue-600' target='blank'>click</a>
            </div>
              <div className=' text-[20px] font-bold mb-5 font-montserrat'>
                "Jobsearch.kg" is a service that helps to find a job and recruit personnel in Kyrgyzstan!
             </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-500 h-2'></div>

      </div>
   );
};

export default WorkExp;