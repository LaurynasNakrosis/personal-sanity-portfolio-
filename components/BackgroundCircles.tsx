// Import necessary libraries and components
"use client";
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

// Define the BackgroundCircles component
function BackgroundCircles({}: Props) {
  return (
    // Container for animated circles
    <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            scale: [2, 0, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: [ "20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
            duration: 3.5,
        }}
        className=' relative flex justify-center items-center top-[75px] sm:top-[121px] md:top-[138px] '>
            {/* First animated circle */}
            <div className=' absolute border border-[#333333] rounded-full   h-[76px] w-[76px]   sm:h-[109px] sm:w-[109px]  md:h-[152px] md:w-[152px] animate-ping inline-flex' />
            
            {/* Second animated circle */}
            <div className='rounded-full border border-[#333333]            h-[114px] w-[114px] sm:h-[171px] sm:w-[171px] md:h-[228px] md:w-[228px] absolute  ' />
            
            {/* Third animated circle */}
            <div className='rounded-full border border-[#333333]            h-[190px] w-[190px] sm:h-[275px] sm:w-[275px] md:h-[380px] md:w-[380px] absolute  ' />
            
            {/* Fourth animated circle */}
            <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[247px] w-[247px] sm:h-[370px] sm:w-[370px] md:h-[494px] md:w-[494px] absolute animate-pulse'/>
            
            {/* Fifth animated circle */}
            <div className='rounded-full border border-[#333333]            h-[304px] w-[304px] sm:h-[456px] sm:w-[456px] md:h-[608px] md:w-[608px] absolute ' />
    </motion.div>
  );
}

export default BackgroundCircles;
