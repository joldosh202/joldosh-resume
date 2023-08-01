import React from 'react';

const Skills = () => {
   return (
      <div>
         <div className='bg-gray-700 h-[730px] sm:h-[600px] w-full flex flex-col items-center text-white '>
              <div className='text-[30px] font-bold mt-10 mb-10 font-montserrat'
              data-aos='zoom-in'
              data-aos-duration="3000"
              >
                Skills
              </div>
            <div className='flex w- w-[360px] sm:w-[900px] justify-between  flex-col sm:flex-row sm:ml-0' 
            data-aos='zoom-in'
            data-aos-duration="3000"
            >
              <div className='w-[360px]'>
                <div className='font-bold text-[20px] text-center mb-3 font-montserrat'>
                  Hard-Skills
                </div >
                <div className='flex flex-col justify-between h-[270px]'>
                  <div className='flex items-center justify-between'>
                    <li>React </li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '70%'}}></div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <li>JavaScript </li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '75%'}}></div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <li>Redux-toolkit </li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '65%'}}></div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <li>Node.js</li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '45%'}}></div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <li>Express.js</li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '45%'}}></div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <li>Tailwind</li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '65%'}}></div>
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <li>CSS </li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '85%'}}></div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <li>HTML </li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '95%'}}></div>
                    </div>
                  </div>
                </div>
                </div>
              <div className='mt-9 sm:mt-0'>
                <div className='font-bold text-[20px] text-center mb-3 font-montserrat'>

                Soft-Skills
                </div>
                <div className='flex flex-col justify-between h-[140px] w-[360px]'>
                  <div className='flex items-center justify-between'>
                    <li>Collaboration </li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '65%'}}></div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <li>Communication </li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '65%'}}></div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <li>Critical Thinking</li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '75%'}}></div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <li>Problem Solving </li>
                    <div className="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{'width': '85%'}}></div>
                    </div>
                  </div>
                  
                </div>
                </div>
            </div>
        </div>
      </div>
   );
};

export default Skills;