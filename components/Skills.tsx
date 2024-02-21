// Importing necessary libraries and components
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '@/types/Skill';

// Defining Props type for the Skills component
type Props = {
    skills: SkillType[]
};

// Defining Skills functional component
function Skills({skills}: Props) {
    //console.log(skills); // Logging skills object to console for debugging
  return (
    // Animated div using Framer Motion library
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      transition={{ duration: 1.5 }} 
      className='h-screen flex relative flex-col text-center xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      
      {/* Heading for skills section */}
      <h3 className='pl-2.5 absolute top-24 uppercase text-small tracking-[10px] text-gray-500 sm:text-center'>Skills</h3>
      
      {/* Sub-heading for skills section */}
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-[10px]'>
        Hover over a skill for current proficiency
      </h3>

      {/* Container for displaying skills */}
      <div className='border grid grid-cols-3 sm:grid-cols-4 gap-2 '>
        {/* Rendering Skill component multiple times */}
        {skills?.slice(0, skills.length/2).map(skill => (
            <Skill key={skill._id} skill={skill}/>
        ))}
        {skills?.slice(skills.length/2, skills.length).map(skill => (
            <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
