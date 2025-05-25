// Importing necessary libraries and components
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/types/Experience';
import ExperienceCard from './ExperienceCard';

// Defining Props type for the WorkExperience component
type Props = {
  experiences: Experience[]; // Expects an array of Experience objects as a prop
}

// Defining WorkExperience functional component
export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5, x: 0 }}  
      className='pb-32 pt-12 h-screen relative flex overflow-hidden text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <h3 className='pl-3 absolute top-16 uppercase tracking-[10px] text-gray-500 text-small md:text-2xl lg:text-3xl'>Experience</h3>

      <div className='pb-3 h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
       scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 relative'>
        {experiences?.map((experience, i) => (
          <div key={experience._id} 
               className='pt-12 h-full w-full px-5 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center'>
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
