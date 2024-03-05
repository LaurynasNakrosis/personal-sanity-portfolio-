// Importing necessary libraries and components
'use client';
import React, { FC, ReactNode } from 'react';
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
    // Animated div using Framer Motion library
    <motion.div
      // Initial animation state
      initial={{ opacity: 0 }}
      // Transition animation configuration
      transition={{ duration: 1 }}
      // Animation state when component is in view
      whileInView={{ opacity: 1.5, x: 0 }}
      // CSS classes for styling
      className='h-screen flex snap-x mx-6 sm:mx-10 relative overflow-hidden  pb-12 flex-col text-left md:flex-row md:pb-16 md:pt-20 max-w-full px-1 justify-evenly  lg:mx-auto items-center space-x-1'
    >
      {/* Heading for experience section */}
      <h3 className=' pl-3 absolute top-16 uppercase tracking-[10px] text-gray-500 text-small md:text-2xl lg:text-3xl '>
        Experience
      </h3>
      {/* Container for experience cards */}
      <div className='flex w-full justify-between sm:my-0 sm:p-6 sm:pt-24 sm:space-x-5  overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {/* Mapping over experiences array to render ExperienceCard for each */}
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
