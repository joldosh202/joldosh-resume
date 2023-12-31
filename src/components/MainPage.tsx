import React, { useEffect } from 'react';
import design from '../imgs/Дизайн без названия (2).png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const MainPage = () => {
   useEffect(() => {
      Aos.init()
   },[])
   return (
      <div>
      <div className='bg-gray-900 h-[680px] sm:h-screen w-full flex flex-col items-center text-white   '>
        <div className='font-bold h-50 flex w-[360px] sm:w-[1000px] mt-[50px] sm:mt-[160px] flex-col sm:flex-row justify-between'>
          <img 
          className='h-auto w-[70%] m-7 sm:h-auto sm:w-[40%] rounded-lg'
          src={design} alt=""  data-aos="fade-right" data-aos-duration="3000"/>
            <div className='flex justify-center flex-col' >
              

              <div className=' mb-10 w-auto sm:ml-0 ml-5 text-[30px] font-montserrat' 
              data-aos='fade-down'
              data-aos-duration="3000"
              >
                hello everyone my name is Joldosh and im junior web developer
              </div>
              <div 
              className=' w-auto sm:ml-0 ml-5 text-[18px] font-montserrat'
              data-aos='fade-down'
              data-aos-duration="3000"
              >Love building projects and learn new about web development</div>
            </div>
        </div>
  
      </div>
      </div>
   );
};

export default MainPage;