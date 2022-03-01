import React from 'react';

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ children }) => {
  return (
    <button
      type='submit'
      className='m-1.5 rounded bg-teal-600 py-1 px-3 focus:outline-none focus:ring-4 focus:ring-teal-500/30'
    >
      {children}
    </button>
  );
};

export default Button;
