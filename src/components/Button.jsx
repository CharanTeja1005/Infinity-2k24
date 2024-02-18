import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="text-lg px-8 py-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-700 hover:scale-105">
      {children}
    </button>
  );
}

export default Button;
