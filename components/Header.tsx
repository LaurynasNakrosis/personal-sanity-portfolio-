"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

import dynamic from 'next/dynamic';

const Header = ({
    children
}:{
  children: React.ReactNode;
}) => {
    
    return(
        
        <div className=' sticky top-0 p-1 flex items-start justify-between md:px-6 z-50' >
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }} 
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.8,
            }}
            className='flex flex-row items-center'
            >
              {children}
          </motion.div>

          <Link href='#contactme'>
            <motion.div
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
              }} 
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.8,
              }}
              className='flex flex-row items-center text-gray-300 cursor-pointer'>

                {/* Social icon for email */}
                <SocialIcon
                  className='cursor-pointer'
                  network='email'
                  fgColor='grey'
                  bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-grey-900'>Get in touch</p>
          </motion.div>
        </Link>
  </div>
    )
}
export default dynamic (() => Promise.resolve(Header), {ssr: false})