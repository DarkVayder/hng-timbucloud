import React, { useState, useEffect, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CiStar } from 'react-icons/ci';
import 'react-toastify/dist/ReactToastify.css';
import { timbu_data, assets } from '../assets/assets'; 
import { useParams, useNavigate } from 'react-router-dom'; 

const ItemDetail = () => {
  const { id } = useParams(); 
  const navigate  = useNavigate();
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showReviewField, setShowReviewField] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const fetchItemData = useCallback(() => {
    const item = timbu_data.find(item => Number(id) === item.id);
    if (item) {
      setData(item);
    }
  }, [id]);

  useEffect(() => {
    fetchItemData();
    loadCartItems();
  }, [fetchItemData]);

  const loadCartItems = () => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  };

  const addToCart = () => {
    const existingItem = cartItems.find(item => item.id === data.id);
    let updatedCartItems;

    if (existingItem) {
      updatedCartItems = cartItems.map(item =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCartItems = [...cartItems, { ...data, quantity: 1 }];
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    toast.success(`${data.title} added to cart!`);
  };

  const goToCart = () => {
    toast.success('Thank you for Buying!');
    setTimeout(() => {
      navigate('/cart');
    }, 500); 
  };

  const handleReviewSubmit = () => {
    setShowReviewField(false);
    setReviewText("");
    toast.success('Review submitted successfully!');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const ratings = [
    { stars: 5, width: '70%' },
    { stars: 4, width: '10%' },
    { stars: 3, width: '30%' },
    { stars: 2, width: '2%' },
    { stars: 1, width: '0%' },
  ];

  return (
    <div className='bg-custom-blue min-h-screen flex flex-col'>
      <div className='container mx-auto py-5 px-5 md:px-12 lg:px-28 flex-grow'>
        <nav className='text-white mb-4'>
          <a href='/' className='text-blue-500 hover:underline'>Home</a> {'>'} <span>items</span>
        </nav>
        <h1 className='text-3xl font-bold text-white mb-8'>Item</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          <div className='relative'>
            <img
              className='border-4 border-gray-200'
              src={data.image}
              alt={data.title}
              style={{ width: '100%', height: 'auto' }} 
            />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-8 drop-shadow-lg leading-tight'>
              {data.title}
            </h1>
            <div className='flex items-center mb-4'>
              <img
                src={assets.HNGlogo}
                width={20}
                height={10}
                alt='HNG Shop Logo'
                className='mr-2'
                style={{ width: 'auto', height: 'auto' }} 
              />
              <p className='text-white text-sm'>HNG Shop</p>
            </div>
            <p className='text-base text-white mb-4'>{data.description}</p>
            <p className='text-4xl mb-4 text-white font-bold'>${data.price}</p>
            <div className='flex justify-end space-x-4 mb-4'>
              <button 
                className='bg-inherit text-white border border-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300'
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <button 
                className='bg-white text-black px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300'
                onClick={goToCart}
              >
                Buy Now
              </button>
            </div>
            <div className='flex flex-col text-white'>
              <h1 className='mb-4 text-2xl font-semibold'>Ratings and Reviews</h1>
              {ratings.map((rating, index) => (
                <div key={index} className='mb-4 flex items-center'>
                  <div className='flex items-center mr-2'>
                    <p className='ml-1'>{rating.stars} </p>
                    <CiStar className='text-yellow-400' />
                  </div>
                  <div className='w-full bg-gray-300 rounded-full h-4'>
                    <div className='bg-orange-500 h-4 rounded-full' style={{ width: rating.width }}></div>
                  </div>
                </div>
              ))}
              <div className='flex justify-end mb-4'>
                <button 
                  className='bg-white text-black px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300'
                  onClick={() => setShowReviewField(!showReviewField)}
                >
                  Write a Review
                </button>
              </div>
              {showReviewField && (
                <div className='mb-4'>
                  <textarea 
                    className='w-full p-2 rounded-lg bg-gray-700 text-white' 
                    value={reviewText} 
                    onChange={(e) => setReviewText(e.target.value)} 
                    rows={4} 
                    placeholder='Write your review here...'
                  ></textarea>
                  <button 
                    className='bg-blue-600 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-500 transition duration-300'
                    onClick={handleReviewSubmit}
                  >
                    Submit
                  </button>
                </div>
              )}
              <div className='mt-8'>
                <h2 className='text-xl font-semibold mb-2'>Customer Reviews</h2>
                <div className='bg-gray-700 p-4 rounded-lg mb-4'>
                  <p className='font-bold mb-2'>Samuel</p>
                  <p className='text-sm'>Great product! Highly recommend.</p>
                </div>
                <div className='bg-gray-700 p-4 rounded-lg mb-4'>
                  <p className='font-bold mb-2'>Pops</p>
                  <p className='text-sm'>Good value for money.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
