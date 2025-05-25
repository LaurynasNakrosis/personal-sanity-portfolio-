"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/types/Project';
import { urlFor } from '../sanity/config/client-config';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

type Props = {
    projects: Project[];
}

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

function Projects({projects}: Props) {
    //console.log(projects)
  return (
    <motion.div 
    initial={{ opacity: 0,  }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5, x: 0 }}  
    className='pb-32 pt-12 h-screen relative flex overflow-hidden text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        <h3 className='pl-3 absolute top-16 uppercase tracking-[10px] text-gray-500 text-small md:text-2xl lg:text-3xl'>Projects</h3>

        <div className='pb-3 h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
         scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 relative'>
            {projects?.map((project, i) => (
                <div key={i} 
                     className='pt-12 h-full w-full px-5 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center'>
                        <motion.img 
                        className='min-h-24 min-w-28 max-h-[200px] px-3 sm:pr-16'
                        initial={{ y: -100, opacity: 0, }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}             
                        src={urlFor(project?.image).url()}
                        alt="" />
                <div className='space-y-2 max-w-6xl'>
                    <h4 className='text-lg font-semibold text-center'>
                        <span>Case study {i + 1} of {projects?.length}: </span> {" "}{project?.title}
                    </h4>
                    <div className='flex items-center space-x-2 justify-center'>
                        {project.technologies.map((technology) => (
                            <div key={technology._id}>
                                {technology.image && (
                                    <Image
                                        src={urlFor(technology?.image)?.url()}
                                        alt={technology.slug}
                                        width={10}
                                        height={10}
                                        className='w-6 h-6 sm:w-8 sm:h-8 rounded-full'
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <p className='text-[11px] sm:text-[14px] m-3 pb-3'>{project?.summary}</p>
                </div>
                </div>
            ))}
            <SwipeIndicator />
        </div>
        {/* <div className='w-full absolute top-[30%] bg-gradient-to-b from-[#5f4307] via-[#614302] left-0 h-[200px] -skew-y-12'/> */}
    </motion.div>
  )
}

export default Projects