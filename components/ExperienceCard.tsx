/* eslint-disable @next/next/no-img-element */
// Import necessary libraries and components
"use client"

import React, { FC } from 'react';
import { urlFor } from "../sanity/config/client-config"
import { Image } from 'sanity';
import { motion } from 'framer-motion';

interface ExperienceProps {
    jobTitle: string;
    company: string;
    //companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    technologies: string;
};

// Define the ExperienceCard component
const ExperienceCard: FC<ExperienceProps> = (props) => {
    const {jobTitle,company,dateStarted,dateEnded} = props;
  return (
    // Article container for the experience card
    <article className='bg-[#2f2f2f] flex flex-col items-center  flex-shrink-0 rounded-lg  space-y-0  
    h-[420px] pt-5 pb-2 w-[320px] ml-10 -mr-7
    sm:border-black sm:h-full sm:w-[600px] sm:ml-[200px] sm:m-0 
    md:border-blue-600 md:w-[600px]

    snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>

      {/* <ExperienceCardAssetsIcon/> */}
      {/* <motion.img 
      initial={{
        y: -100, 
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      //viewport={{ once: true }}
      className=' rounded-full p-2
      h-[85px] w-[85px] 
      sm:h-[120px] sm:w-[120px]
      md:h-[140px] md:w-[140px]  
      xl:w-[150px] xl:h-[150px] 
      object-cover object-center'
      src={urlFor(companyImage).url()}
      alt=''
    /> */}

      <div className='  px-0 md:px-10 flex flex-col space-y-2  '>
        {/* Display job title */}
        <h4 className=' 
        text-[18px]
        sm:text-[35px] sm:tracking-auto
        xl:text-5xl 
        font-light'>{company}</h4>
        
        {/* Display company name */}
        <p className=' font-bold text-[12px] sm:text-[16px]'>{jobTitle}</p>
        
        {/* Display logos */}
        {/* <div className=' flex space-x-1 '>
          <img className=' h-6 w-6 md:h-10 md:w-10 rounded-full '
            src={}
            alt=''
            width={300}
            height={300}
          />
        </div> */}
        
        {/* Display start and end date */}
          <p className=' uppercase text-gray-300 text-sm' >{dateStarted} - {dateEnded}</p>

        {/* Display summary points */}
          <ul className=' list-disc space-y-0 ml-3 
        text-[11px]'
        >
          <li>Responsive Design</li>
          <li>New Feature Development</li>
          <li>Cross-Functional Collaboration</li>
          <li>Database Management</li>
          <li>Data Retrieval Efficiency</li>
          <li>Problem Solving</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
