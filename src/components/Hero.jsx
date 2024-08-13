import React from 'react';
import coverImage from '../assets/cover.png'; 
import HNGlogo from '../assets/HNGlogo.png';  

const Hero = () => {
  return (
    <div className='relative bg-custom-blue'>
      <div className='relative'>
        <img 
          src={coverImage} 
          alt='Cover Image'
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
        />
        <div className='absolute left-9 bottom-[-70px]'>
          <img
            src={HNGlogo}
            alt='HNG Logo'
            className='w-[100px] h-auto sm:w-[150px] sm:h-auto md:w-[180px] md:h-auto'
          />
        </div>
      </div>

      <div className='py-10 pt-20 px-5 md:px-12 lg:px-28 text-white'>
        <div className='max-w-4xl mx-auto md:ml-0'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-left font-trispace'>HNG BookStore</h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl leading-snug mb-1 md:mb-2 text-left font-trispace'>
            Equipping tech talents with perseverance, grit, and skills to succeed
          </p>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl leading-snug text-left'>
            in their tech careers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
