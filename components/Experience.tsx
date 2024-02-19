'use client';
import React, {FC, ReactNode} from 'react';
import { motion } from 'framer-motion';

export const WorkExperience= ({children}:{children: React.ReactNode}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1.5, x: 0 }}
      className=' h-screen flex relative overflow-hidden pb-12  flex-col text-left md:flex-row 
      md:pb-16 md:pt-20 max-w-full px-1 justify-evenly mx-auto items-center space-y-1'
    >
      <h3 className=' pl-5 absolute top-16 uppercase text-sm tracking-[10px] text-gray-500 
      sm:tracking-[15px] sm:text-[20px]  
      md:text-[30px] '>
        Experience
        
      </h3>
      <div className='flex w-full my-10
      sm:my-2 sm:h-full sm:p-6 sm:pt-24 sm:space-x-5 
      md:mt-6 
      overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {/* Experience Card */}
        {children}
        
      </div>
    </motion.div>
  );
}

export default WorkExperience;
