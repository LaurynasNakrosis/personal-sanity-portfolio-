// Import necessary libraries and components
"use client";
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the shape of form inputs
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {}

// Define the ContactMe component
function ContactMe({}: Props) {
  // Destructure functions and data from useForm
  const { register, 
          handleSubmit, 
          formState: { errors },
         } = useForm<Inputs>();
  
  // Define the form submission handler
  const onSubmit: SubmitHandler<Inputs> = data => {
    // Construct the email link and open default email client
    window.location.href = `mailto:laurynaskingston@outlook.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };
  return (
    // Container for the Contact Me section
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-[2000px] px-10 justify-evenly mx-auto items-center'>
      {/* Display the "Contact Me" title */}
      <h3 className='absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-1xl sm:text-2xl'>
          Contact Me 
      </h3>

      <div className='flex flex-col space-y-10'>
        {/* Display the introductory message */}
        <h4 className='font-semibold text-center text-1xl sm:text-4xl '>
          I have just what you need. <span>Lets Talk</span>
        </h4>

        <div className='space-y-2'>
          {/* Display contact information */}
          <div className='flex items-center space-x-4 sm:space-x-12 justify-center'>
            <PhoneIcon className='text-[#f7ab0a] h-5 w-5 sm:h-7 sm:w-7 animate-pulse' />
            <p className=' text-1xl sm:text-2xl'>+447774939994</p>
          </div>

          <div className='flex items-center space-x-4 sm:space-x-12 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-5 w-5 sm:h-7 sm:w-7 animate-pulse'/>
            <p className=' text-1xl sm:text-2xl'>Laurynaskingston@outlook.com</p>
          </div>

          <div className='flex items-center space-x-4 sm:space-x-12 justify-center'>
            <MapPinIcon className='text-[#f7ab0a] h-5 w-5 sm:h-7 sm:w-7 animate-pulse'/>
            <p className=' text-1xl sm:text-2xl'>London, UK</p>
          </div>

          {/* Display the contact form */}
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 sm:space-y-2 w-fit mx-auto'>
            <div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row  sm:space-x-2 '>
              <input {...register('name')} placeholder='Name' 
                     className='contactInput'  
                     type="text" />
              <input {...register('email')} placeholder='Email' 
                     className='contactInput'  
                     type="email" />
            </div>
            <input {...register('subject')} placeholder='Subject' 
                   className='contactInput'  
                   type="text" />
            <textarea {...register('message')} placeholder='Message' 
                      className='contactInput'   />
            <button type='submit' 
                    className='bg-[#f7ab0a] py-5 px-5 sm:py-5 sm:px-10 rounded-md text-black font-bold text-sm sm:text-lg'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
