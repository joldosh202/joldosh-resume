import React from 'react';

const Navbar = ({workRef,skillsRef,contactRef}:any) => {
   const scrollTo = () => {
    
      workRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToSkills = () => {
    skillsRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    
  }
  const scrollToFooter = () => {
    contactRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    
  }
   return (
      <div className='w-full h-[60px] bg-gray-700 flex justify-center items-center'>
      <div className='w-[1250px] grid gap-1 grid-cols-3 grid-rows-1'>
         <button onClick={scrollTo} className='text-center text-white font-bold text-[20px] font-montserrat'>Exprerience</button>
         <button onClick={scrollToSkills} className='text-center  text-white font-bold text-[20px] font-montserrat'>Skills</button>
         <button onClick={scrollToFooter} className='text-center  text-white font-bold text-[20px] font-montserrat'>Contact Info</button>
      </div>
      </div>
   );
};

export default Navbar;