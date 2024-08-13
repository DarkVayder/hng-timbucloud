import React from 'react';
import { FaOpencart } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; 
import { useCart } from '../context/CartContext';

const Item = ({ id, title, image, price }) => {
  const { addItemToCart } = useCart();

  const addToCart = () => {
    addItemToCart({ id, title, image, price, quantity: 1 });
    toast.success(`${title} added to cart!`);
  };

  return (
    <div className='max-w-full sm:max-w-[330px] bg-inherit border border-black hover:shadow-[-7px_7px_0px_#000000] rounded-lg overflow-hidden'>
      <div className='relative cursor-pointer'>
        <Link to={`/items/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className='border-b border-black rounded-t-lg w-full h-[400px] object-cover'
            style={{ aspectRatio: '330 / 400' }}
          />
          <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-t-lg'>
            <p className='text-white text-lg font-bold font-trispace'>View</p>
          </div>
        </Link>
      </div>
      <div className='p-5'>
        <h2 className='text-xl text-white font-bold mt-2 font-trispace'>{title}</h2>
        <div className='flex justify-between items-center mt-4'>
          <p className='text-lg text-white font-bold font-trispace'>${price}</p>
          <button 
            onClick={addToCart} 
            className='px-4 py-2 bg-white rounded-full cursor-pointer flex items-center shadow-md hover:bg-gray-200 transition duration-300'
          >
            <FaOpencart className='text-black text-xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
