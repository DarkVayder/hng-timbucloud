import React from 'react';
import Timbulogo from '../assets/Timbulogo1.png';
import { FaOpencart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className='py-3 px-4 md:px-12 lg:px-28 bg-custom-blue'>
      <div className='relative'>
        <img
          src={Timbulogo}
          alt='Timbo Logo'
          className='w-[100px] sm:w-[130px] md:w-auto'
        />
        <div className='absolute top-0 right-0 flex items-end'>
          <div 
            className='relative cursor-pointer p-1 bg-white rounded-full inline-block hover:bg-blue-500 transition-colors duration-300'
            onClick={handleCartClick}
          >
            <FaOpencart className='text-black w-6 h-6 md:w-8 md:h-8 inline-block' />
            <span className='text-black ml-2 text-sm md:text-base inline-block'>Cart</span>
            {cartCount > 0 && (
              <span className='absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm'>
                {cartCount}
              </span>
            )}
          </div>
          <CgProfile className='text-white w-6 h-6 md:w-8 md:h-8 cursor-pointer inline-block' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
