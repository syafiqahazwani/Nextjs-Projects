import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col bg-pink-800 bg_clip'>
      <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* Text Content */}
        <div data-aos="fade-up">
            {/* Heading */}
            <h1 className='text-3xl md:text-4xl text-white lg:text-5xl mt-6 font-bold leading-[2.5rem]
             md:leading-[3.5rem]'>
                Superior sound, tangible quality
            </h1>
             {/* Description */}
             <p className='text-xs sm:text-sm md:text-base font-medium text-gray-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
            </p>
            {/* Button */}
            <div className='mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0
             sm:space-x-4'>
              {/* 1st Button */}  
              <a href="#_" className="rounded relative inline-flex group items-center justify-center px-3.5 
              py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none 
              shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
             <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full 
             group-hover:w-32 group-hover:h-32 opacity-10"></span>
             <span className="relative">Buy Now</span>
             </a>
             {/* 2nd Button */}  
              <a href="#_" className="rounded relative inline-flex group items-center justify-center px-3.5 
              py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none 
              shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
             <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full 
             group-hover:w-32 group-hover:h-32 opacity-10"></span>
             <span className="relative">Explore Now</span>
             </a>
             </div>
        </div>
        {/* Image Content */}
        <div data-aos="zoom-in" 
             data-aos-delay="150" 
             className='mx-auto hidden xl:block'>
            <Image src="/images/hero.png" alt="image" width={380} height={380} />
        </div>
      </div>
    </div>
  )
}

export default Hero
