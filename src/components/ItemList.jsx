import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Item from './Item'; 
import { timbu_data } from '../assets/assets'; 

const ItemList = ({ updateCartCount }) => {
  return (
    <div className='bg-custom-blue'>
      <ToastContainer />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-8 drop-shadow-md text-left font-trispace'>
          Explore Our Wide Range of Books
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {timbu_data.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              updateCartCount={updateCartCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
