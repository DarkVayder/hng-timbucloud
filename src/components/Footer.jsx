import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-custom-blue py-5 px-4'>
      <div className='border-t border-gray-200 py-4'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='md:text-right md:order-2 flex gap-4 md:mt-0 mt-4 cursor-pointer'>
            <FaYoutube className='text-white' size={28} />
            <FaInstagram className='text-white' size={28} />
            <FaTwitter className='text-white' size={28} />
          </div>
          
          <div className='text-sm text-white flex flex-col md:flex-row md:order-1 md:mt-0 mt-4'>
            <ul className='flex gap-4'>
              <li>Contact</li>
              <li>Privacy and Policy</li>
              <li>Terms of Service</li>
              <li>
                <span className='flex items-center'>
                  <FaRegCopyright className='mr-1' />
                  Timbu Shop
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
