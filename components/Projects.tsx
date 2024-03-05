"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/types/Project';
import { urlFor } from '../sanity/config/client-config';
import Image from 'next/image';

type Props = {
    projects: Project[];
}

function Projects({projects}: Props) {
    //console.log(projects)
  return (
    <motion.div 
    initial={{ opacity: 0,  }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5, x: 0 }}  
    className=' h-screen relative flex  overflow-hidden text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        <h3 className=' pl-3 absolute top-16 uppercase tracking-[10px] text-gray-500 text-small md:text-2xl lg:text-3xl'>Projects</h3>

        <div className='relativemax-x-fit max-w-fit flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
         scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
            {projects?.map((project, i) => (
                /* Missing key element */
                <div key={i} 
                     className='h-full w-full my-24 px-5 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center '>
                        <motion.img 
                        className=' mt-8 min-h-44 min-w-60  max-h-[280px] px-3 '
                        initial={{ y: -300, opacity: 0, }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}             
                        //src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                        src={urlFor(project?.image).url()}
                        alt="" />
                <div className='space-y-2 md:px-10 max-w-6xl'>
                    <h4 className=' text-lg font-semibold text-center'>
                        <span>Case study {i + 1} of {projects?.length}: </span> {" "}{project?.title}
                    </h4>
                    <div className='flex items-center space-x-2 justify-center'>
{/* Mapping over technologies array to display technology images */}
{project.technologies.map((technology) => (
                        <div key={technology._id}>
                            {technology.image && (
                                <Image
                                    src={urlFor(technology?.image)?.url()} // Constructing URL for the image
                                    alt={technology.slug}
                                    width={10}
                                    height={10}
                                    className=' w-6 h-6 sm:w-8 sm:h-8 rounded-full'
                                />
                            )}
                        </div>
                    ))}
                    </div>
                    <p className='mb-10 text-[11px] sm:text-[14px] m-3 pb-5'>{project?.summary}</p>
                </div>
                    
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-gradient-to-b from-[#5f4307] via-[#614302]  left-0 h-[200px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects