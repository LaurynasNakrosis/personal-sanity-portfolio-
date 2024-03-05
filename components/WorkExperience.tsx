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
      className='h-screen flex pb-32 sm:pb-20 snap-x p-5 relative overflow-hidden   flex-col text-left  max-w-full   items-center space-x-1'
    >
      {/* Heading for experience section */}
      <h3 className=' pl-3 absolute top-16 uppercase tracking-[10px] text-gray-500 text-small md:text-2xl lg:text-3xl '>
        Experience
      </h3>
      {/* Container for experience cards */}
      <div className='pb-3 pt-24 px-8 flex w-full h-full   overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 space-x-5'>
        {/* Mapping over experiences array to render ExperienceCard for each */}
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
