import React from 'react';
import './Input.css';

const Input = ({ type, name, id, value, placeholder, onChange, required }) => (
    <input
        className='input'
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required} 
    />
);

export default Input;