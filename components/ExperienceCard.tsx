"use client";

// Importing necessary libraries and components
import React from 'react';
import { urlFor } from "../sanity/config/client-config";
import { motion } from 'framer-motion';
import { Experience } from '@/types/Experience';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

// Defining Props type for the ExperienceCard component
type Props = {
    experience: Experience; // Expects an Experience object as prop
};

// Swipe indicator component
const SwipeIndicator = () => (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute top-4 right-4 md:top-1/2 md:right-6 md:transform md:-translate-y-1/2 z-30 bg-black/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 lg:px-2 lg:py-1 rounded-full"
    >
        <div className="flex items-center space-x-1 text-white">
            <span className="text-xs md:text-sm lg:text-xs font-medium">Swipe</span>
            <ChevronRightIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-4 lg:w-4 animate-pulse" />
        </div>
    </motion.div>
);

// Define the ExperienceCard component
export default function ExperienceCard({ experience }: Props) {
    //console.log(experience); // Logging experience object to console for debugging
    return (
        // Article container for the experience card
        <article className='flex flex-col items-center justify-center flex-shrink-0 rounded-lg space-y-3 
        w-full h-full snap-center snap-mandatory hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden relative'>
            <SwipeIndicator />
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
                    className='hidden md:block rounded-full h-18 w-18 max-w-[100px] max-h-[100px] object-cover object-center'
                    src={urlFor(experience?.companyImage).url()} // Constructing URL for the image
                    alt=''
                /> 
            )}

            {/* Container for experience details */}
            <div className='p-5 m-2 space-y-2 bg-[#2f2f2f] max-w-6xl rounded-lg'>
                <h4 className='text-sm md:text-4xl font-semibold text-center'>
                    <span>{experience.company}</span>
                </h4>
                <p className='font-bold text-sm md:text-lg text-center'>{experience.jobTitle}</p>
                
                {/* Display logos */}
                <div className='flex items-center space-x-2 justify-center'>
                    {experience?.technologies?.map((technology) => (
                        <div key={technology._id}>
                            {technology.image && (
                                <Image
                                    src={urlFor(technology?.image)?.url()}
                                    alt={technology.slug}
                                    width={10}
                                    height={10}
                                    className='w-4 h-4 md:w-10 md:h-10 rounded-full'
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Display start and end date */}
                <p className='uppercase text-gray-300 text-[11px] md:text-[14px] text-center'>
                    {new Date(experience.dateStarted).toDateString()} - {" "} 
                    {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>

                {/* Display summary points */}
                <ul className='rounded-lg bg-[#393939] text-left list-disc space-y-2 py-3 pl-5 md:pl-10 pr-2 text-[10px] md:text-[16px] overflow-y-scroll scrollbar scrollbar-track-[#f7ab0a]/80 scrollbar-thumb-[#f7ab0a]/80'>
                    {experience.points.map((point,i) =>(
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}