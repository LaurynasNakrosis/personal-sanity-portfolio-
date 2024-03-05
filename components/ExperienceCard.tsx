"use client";

// Importing necessary libraries and components
import React from 'react';
import { urlFor } from "../sanity/config/client-config";
import { motion } from 'framer-motion';
import { Experience } from '@/types/Experience';
import Image from 'next/image';

// Defining Props type for the ExperienceCard component
type Props = {
    experience: Experience; // Expects an Experience object as prop
};

// Define the ExperienceCard component
export default function ExperienceCard({ experience }: Props) {
    //console.log(experience); // Logging experience object to console for debugging
    return (
        // Article container for the experience card
        <article className='bg-[#2f2f2f] flex mx-2 flex-col items-center justify-center  flex-shrink-0 rounded-lg  space-y-1   
        h-[420px] pt-5 m:mt-0 pb-2 mb-3 w-[320px] 
       sm:h-full sm:w-[600px] sm:ml-[200px] sm:m-0 
        md:w-[600px] md:h-[450px]

        snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            {/* Display company image if available */}
            {experience.companyImage && (
                <motion.img 
                    initial={{
                        y: -100, 
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    //viewport={{ once: true }}
                    className=' rounded-full p-2
                     my-2
                    h-[75px] w-[75px] 
                    sm:h-[80px] sm:w-[80px]
                    md:h-[120px] md:w-[120px]  
                    xl:w-[100px] xl:h-[100px] 
                    object-cover object-center'
                    src={urlFor(experience?.companyImage).url()} // Constructing URL for the image
                    alt=''
                /> 
            )}

            {/* Container for experience details */}
            <div className='  px-5 md:px-10 flex flex-col space-y-2  '>
                {/* Display job title */}
                <h4 className=' 
                text-[18px]
                sm:text-[28px] sm:tracking-auto
                xl:text-5xl 
                font-light'>{experience.company}</h4>
                
                {/* Display company name */}
                <p className=' font-bold text-[12px] sm:text-[14px]'>{experience.jobTitle}</p>
                
                {/* Display logos */}
                <div className=' flex space-x-2 my-2'>
                    {/* Mapping over technologies array to display technology images */}
                    {experience?.technologies?.map((technology) => (
                        <div key={technology._id}>
                            {technology.image && (
                                <Image
                                    src={urlFor(technology?.image)?.url()} // Constructing URL for the image
                                    alt={technology.slug}
                                    width={10}
                                    height={10}
                                    className=' w-5 h-5 rounded-full'
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Display start and end date */}
                <p className=' uppercase text-gray-300 text-[11px]' >
                    {/* Converting start and end dates to human-readable format */}
                    {new Date(experience.dateStarted).toDateString()} - {" "} 
                    {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>

                {/* Display summary points */}
                <ul className=' list-disc space-y-2 pb-10 pr-2 text-sm h-40 md:h-40 overflow-y-scroll scrollbar scrollbar-track-[#f7ab0a]/80 scrollbar-thumb-[#f7ab0a]/80'>
                    {/* Mapping over points array to display summary points */}
                    {experience.points.map((point,i) =>(
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
