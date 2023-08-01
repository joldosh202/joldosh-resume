import React from 'react';

const Footer = () => {
   return (
      <div>
         <div className='bg-slate-900 h-[280px] w-full flex flex-col items-center text-white '>
        <div className='mt-[30px] mb-[30px]'>Contact Info</div>
        <div className='flex w-[360px] sm:w-[1000px]  justify-between'>
          <div>

          <div>Name: Joldoshbek</div>
          <div>Email: joldoshbek.ajymudunov@gmail.com</div>
          <div>Phone: +996 700 56 06 56</div>
          <div>Address: Kyrgystan, Bishkek</div>
          </div>
          <div className='flex'>
            <a href="https://www.linkedin.com/in/joldoshbek-ajymudunov-832b47253" target='blank'>
              <img className='w-[50px] mr-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="" />
            </a>
            <a href="https://www.instagram.com/_joldosh/"target='blank' >
              <img className='w-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      </div>
   );
};

export default Footer;