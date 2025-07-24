"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import Image from 'next/image';
import hero from '../pictures/hero.jpg'

type Props = {}

export default function Hero() {
  const [text,count] = useTypewriter({
    words: [
      "Hi, The Name's Laurynas Nakrosis",
      "React.useState('Innovation')",
      "export default AwesomeDeveloper",      
      "Problem Solver",
      "<ButLovesToCodeMore />",
      "Creative Coder",
      "<CodeWithPassion />",
      "Tech Enthusiast",
      "console.log('Hello World!')",
      "Building Amazing Apps",
      "const developer = 'awesome'",
      "Turning Ideas Into Reality",
      "function createAmazing() { }",
      "Passionate About Code",
      "npm install creativity",
      "Always Learning",
      "git commit -m 'Building the future'",
      "Innovation Driven",
      "while(alive) { code() }",
      "User Experience Focused",
      "const coffee = 'essential'",
      "Clean Code Advocate",
      "async function solveProblems() { }",
      "Modern Web Developer",
      "const bugs = 'features'",
      "Guy-who-loves-Coffee.tsx", 
    ],
    loop: true,
    delaySpeed: 3000,
  })
  
  return (
  <div className= 'h-screen flex flex-col space-y-[33px] items-center justify-center text-center overflow-hidden'>

          <BackgroundCircles/>

        <div className=' w-full  sm:pt-6 z-50'>

        <Image 
          className="  h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40  rounded-full mx-auto  my-auto  object-cover  "
          src={hero}
          alt='Picture of the author'
          priority 
        /> 
      </div>
      <div className=' z-20'>
        <h2 className='uppercase text-xs sm:text-sm  text-gray-500  pb-2 tracking-[8px]'>
          Full Stack Developer
        </h2>

        <h1 className='font-semibold px-10 text-xs md:text-4xl lg:text-5xl py-1'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className='pt-1 flex flex-col gap-1  pt-10 md:pt-0 md:gap-2 md:flex-row md:justify-center z-20'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#workExperience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href="#reviews">
            <button className='heroButton'>Reviews</button>
          </Link>
        </div>
  </div>
      
    </div>
  )
}