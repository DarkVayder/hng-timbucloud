import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Summary = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleConfirmOrder = () => {
    toast.success('Order confirmed!!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      navigate('/'); 
    }, 5000);
  };

  return (
    <div className='bg-custom-blue min-h-screen flex flex-col'>
      <ToastContainer />
      <div className='container mx-auto py-5 px-5 md:px-12 lg:px-28 flex-grow'>
        <nav className='text-white mb-4'>
          <a href='/' className='text-blue-500 hover:underline'>Home</a> {'>'} <span>Checkout</span>
        </nav>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <h1 className='text-3xl font-bold text-white mb-8'>Payment Details</h1>
            <div className='mb-8'>
              <h2 className='text-2xl text-white font-bold'>Customer Details</h2>
              <h3 className='text-white'>Your Email Address</h3>
              <input type='email' placeholder='Enter your email' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
              <h3 className='text-white'>Card Number</h3>
              <input type='text' placeholder='1234 1234 1234 1234' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <h3 className='text-white'>Expiration Date</h3>
                  <input type='text' placeholder='MM/YY' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
                </div>
                <div>
                  <h3 className='text-white'>CVC</h3>
                  <input type='text' placeholder='CVC' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
                </div>
              </div>
              <h3 className='text-white'>Promo Code</h3>
              <input type='text' placeholder='Enter promo code' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
            </div>
            <div className='mb-8'>
              <h2 className='text-2xl text-white font-bold'>Billing Address</h2>
              <h3 className='text-white'>Address Line 1</h3>
              <input type='text' placeholder='Enter address line 1' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
              <h3 className='text-white'>Address Line 2</h3>
              <input type='text' placeholder='Enter address line 2' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <h3 className='text-white'>Country</h3>
                  <input type='text' placeholder='Enter country' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
                </div>
                <div>
                  <h3 className='text-white'>State</h3>
                  <input type='text' placeholder='Enter state' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
                </div>
              </div>
              <h3 className='text-white'>ZIP Code</h3>
              <input type='text' placeholder='Enter ZIP code' className='bg-inherit text-white w-full p-2 rounded-md mb-4 border border-gray-300' />
              <div className='flex items-center'>
                <input type='checkbox' id='saveDetails' className='mr-2' />
                <label htmlFor='saveDetails' className='text-white'>Save details for later</label>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-2xl font-bold text-white mb-4'>Order Summary</h2>
            <div className='bg-gray-800 p-4 rounded-lg text-white'>
              <div className='text-white mt-4'>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className='flex items-center mb-4'>
                      <img src={item.image} alt={item.title} width={50} height={50} className='rounded-lg' />
                      <div className='ml-4'>
                        <h2 className='text-lg text-white font-bold'>{item.title}</h2>
                        <p>${item.price} x {item.quantity}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className='mt-4'>
                <p>Subtotal: ${getTotalPrice()}</p>
                <p className='text-green-500'>Discount: $0.00</p>
                <p>Tax: ${(getTotalPrice() * 0.07).toFixed(2)}</p>
                <hr className='my-4' />
                <p className='text-xl font-bold'>Total: ${(parseFloat(getTotalPrice()) + parseFloat(getTotalPrice() * 0.07)).toFixed(2)}</p>
              </div>
              <button
                onClick={handleConfirmOrder}
                className='w-full mt-4 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300'
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
