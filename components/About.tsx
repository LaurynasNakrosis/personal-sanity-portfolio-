"use client";
import { FC } from "react"
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import profilePic from '../pictures/hero.jpg'

interface AboutProps {
  backgroundInformation: string;
  profilePicture: string;
  slug: string;
}

 const AboutContent: FC<AboutProps> = (props) => {
    const {backgroundInformation, profilePicture, slug } = props;
    return( 
    <div>
      <motion.div 
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className='flex flex-col py-20 px-10 mx-auto relative h-screen  items-center justify-center sm:justify-evenly  text-center md:text-sm  md:text-left md:flex-row max-w-[2000px]  '
      >
      {/* Display the "About" title */}
      <div className=' pl-5  absolute top-16 uppercase text-small tracking-[10px] text-gray-500
      md:top-24 mt-8 sm:mt-2 sm:pl-5   sm:tracking-[20px]   md:text-2xl '>
        About
      </div>
      
      {/* Display the profile image with motion */}
      <motion.img 
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          src={profilePicture}
          //alt='Picture of the author'
          className='flex  p-0  bg-stone-50 w-20 h-20  sm:w-[120px] sm:h-[120px]   rounded-full object-cover md:rounded-lg md:w-[300px] md:h-60  '
      />
        
      {/* Display the "Here is a little background" subtitle */}
      <div className='pt-10 md:pt-0 border-blue-500 space-y-2 -py-10 px-0 md:px-10' >
        <h4 className='text-lg font-semibold sm:text-2xl lg:text-3xl'>
          Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
        </h4>
        {/* Display the detailed description */}
          <p className="text-xs sm:text-xm lg:text-base ">
            {backgroundInformation}
          </p>
      </div>
      </motion.div>
    </div>
    )
}
export default dynamic (() => Promise.resolve(AboutContent), {ssr: false})
