import React from 'react';
import './Button.css';

const Button = ({ type, children }) => (
    <button
        className='button'
        type={type}
    >
        {children}
    </button>
);

export default Button;