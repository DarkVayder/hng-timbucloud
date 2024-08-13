import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CiTrash } from 'react-icons/ci';

const Cart = () => {
  const navigate = useNavigate(); 
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    updateCartItems(updatedCartItems);
    toast.success('Item removed from cart!');
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateCartItems(updatedCartItems);
  };

  const updateCartItems = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = (subtotal * 0.07).toFixed(2);
    return (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/summary');  // Updated method
  };

  return (
    <div className='bg-custom-blue min-h-screen flex flex-col'>
      <div className='container mx-auto py-5 px-5 md:px-12 lg:px-28 flex-grow'>
        <nav className='text-white mb-4'>
          <a href='/' className='text-blue-500 hover:underline'>
            Home
          </a>{' '}
          {'>'} <span>Cart</span>
        </nav>
        <h1 className='text-3xl font-bold text-white mb-8'>My Cart</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-3'>
            {cartItems.length === 0 ? (
              <p className='text-white'>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className='flex items-center mb-4 bg-gray-700 p-4 rounded-lg'>
                  <img src={item.image} alt={item.title} width={100} height={100} className='rounded-lg' />
                  <div className='ml-4 flex-grow'>
                    <h2 className='text-lg text-white font-bold'>{item.title}</h2>
                    <p className='text-white'>${item.price} x {item.quantity}</p>
                    <div className='flex items-center mt-2'>
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className='px-2 py-1 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-gray-400 transition duration-300'
                      >
                        -
                      </button>
                      <span className='px-4 text-white'>{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className='px-2 py-1 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-gray-400 transition duration-300'
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className='p-2 text-red-600 hover:text-red-500 transition duration-300'
                  >
                    <CiTrash size={24} />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className='bg-gray-800 p-6 rounded-lg text-white'>
            <h2 className='text-xl font-bold mb-4'>Order Summary</h2>
            <p className='mb-2'>Subtotal: ${calculateSubtotal()}</p>
            <p className='mb-2 text-green-500'>Discount: $0.00</p>
            <p className='mb-2'>Tax: ${(calculateSubtotal() * 0.07).toFixed(2)}</p>
            <hr className='my-4' />
            <p className='text-lg font-bold'>Total: ${calculateTotal()}</p>
            <button
              onClick={handleCheckout}
              className='w-full mt-4 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300'
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
