"use client";
import { motion } from 'framer-motion';
import { PageInfo } from "@/types/PageInfo";
import { urlFor } from "@/sanity/config/client-config";

type Props = {
  information: PageInfo[]
}

function About ({information}:Props) {
    return( 
    <div>
      <motion.div 
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className='flex flex-col py-20 px-10 mx-auto relative h-screen  items-center justify-center sm:justify-evenly  text-center md:text-sm  md:text-left md:flex-row max-w-[2000px]  '
      >
      {/* Display the "About" title */}
      <div className=' pl-3 absolute top-16 uppercase tracking-[10px] text-gray-500 text-small md:text-2xl lg:text-3xl '>
        About
      </div>
      
      {/* Display the profile image with motion */}
      {information.map((info) => (
        <motion.img 
        key={info._id}
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          src={urlFor(info?.image).url()} // Constructing URL for the image
          alt='Picture of the author'
          className='flex  p-0 mb-2 bg-stone-50 w-20 h-20  sm:w-[120px] sm:h-[120px] rounded-full object-cover md:rounded-lg md:w-[300px] md:h-60 lg:w-[320px] lg:h-[320px] '
      />
      ))}
        
      
      
        
      {/* Display the "Here is a little background" subtitle */}
      <div className=' border-blue-500 space-y-2 -py-10 px-0 md:px-10' >
        <h4 className='text-lg font-semibold sm:text-2xl lg:text-3xl'>
          Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
        </h4>
        {/* Display the detailed description */}
          <p className="text-xs sm:text-xm lg:text-base ">
            {information.map((info) => (
              info.backgroundInformation
            ))}
          </p>
      </div>
      </motion.div>
    </div>
    )
}
export default About
// export default dynamic (() => Promise.resolve(AboutContent), {ssr: false})
