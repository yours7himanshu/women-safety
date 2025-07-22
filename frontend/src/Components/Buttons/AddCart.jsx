import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AddToCartButton = ({ onClick }) => {
  return (
    <button 
      className="bg-pink-500 text-white py-2 px-4 border-none rounded text-base cursor-pointer transition-colors duration-300 ease-in-out hover:bg-pink-600 flex items-center justify-center"
      onClick={onClick}
    >
      <FaShoppingCart className="mr-2" />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;