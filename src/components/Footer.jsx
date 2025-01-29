import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-custom-blue py-6 px-4">
      <div className="border-t border-gray-200 py-4 container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Social Icons */}
          <div className="flex gap-4 md:mt-0 mt-4">
            <FaYoutube className="text-white hover:text-gray-300 transition-all duration-300 cursor-pointer" size={28} />
            <FaInstagram className="text-white hover:text-gray-300 transition-all duration-300 cursor-pointer" size={28} />
            <FaTwitter className="text-white hover:text-gray-300 transition-all duration-300 cursor-pointer" size={28} />
          </div>
          
          {/* Links */}
          <div className="text-sm text-white flex flex-wrap justify-center md:justify-start gap-4">
            <span className="cursor-pointer hover:text-gray-300 transition-all duration-300">Contact</span>
            <span className="cursor-pointer hover:text-gray-300 transition-all duration-300">Privacy Policy</span>
            <span className="cursor-pointer hover:text-gray-300 transition-all duration-300">Terms of Service</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white flex items-center cursor-pointer">
            <FaRegCopyright className="mr-1" /> Timbu Shop
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
