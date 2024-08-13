import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartItems = () => {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(savedCartItems);
      const count = savedCartItems.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(count);
    };

    updateCartItems(); 

    window.addEventListener('storage', updateCartItems);

    return () => {
      window.removeEventListener('storage', updateCartItems);
    };
  }, []);

  const updateCartCount = () => {
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  };

  const addItemToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((i) => i.id === item.id);

    if (itemIndex > -1) {
      updatedCartItems[itemIndex].quantity += item.quantity;
    } else {
      updatedCartItems.push(item);
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    updateCartCount();
  };

  const removeItemFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    updateCartCount();
  };

  return (
    <CartContext.Provider value={{ cartCount, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
