import React from 'react';
import './Button.css';

const Button = ({ type, onClick, children }) => (
    <button
        className='button'
        onClick={onClick}
        type={type}
    >
        {children}
    </button>
);

export default Button;