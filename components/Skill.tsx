import React from 'react'; // Importing React library
import { motion } from 'framer-motion'; // Importing motion from 'framer-motion' library
import { Skill } from '@/types/Skill';
import { urlFor } from '@/app/admin/[[...index]]/page';

// Props type definition
type Props = {
    skill: Skill;
    directionLeft?: boolean; // Optional prop indicating direction
}

// Skill component definition
function Skill({skill, directionLeft }: Props) {
    //console.log(skill); // Logging skills object to console for debugging
  return (
    // Container div for the skill
    <div className='border group relative flex items-center cursor-pointer'>
      {/* Image with motion animation */}
      {skill.image && (
        <motion.img
        // Initial animation state
        initial={{
          x: directionLeft ? -350 : 100,
          opacity: 0
        }}
        // Transition animation configuration
        transition={{ duration: 1}}
        // Animation state when component is in view
        whileInView={{ opacity: 1, x: 0}}
        // Source URL for the image
        src={urlFor(skill?.image).url()}
        // CSS classes for styling
        className='rounded-full m-3  border-gray-500 object-cover w-[30px] h-[30px]  md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      )}
      
      {/* Absolute div for skill percentage */}
      <div className='absolute m-3 opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white w-[30px] h-[30px] md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className=' flex items-center justify-center h-full'>
          {/* Displaying skill percentage */}
          <p className='text:-2xl md:text-3xl font-bold text-black opacity-100 '>{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill; // Exporting Skill component
