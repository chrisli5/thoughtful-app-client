import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RadioButton.css';

const RadioButton = ({ icon, id, name, value, checked, onChange }) => (
    <div className={ checked ? 'radio radio--checked' : 'radio radio--unchecked' }>
        <label htmlFor={id} className='radio__label'>
            <FontAwesomeIcon icon={icon} className='radio__icon' />
        </label>
        <input 
            type='radio'
            className='radio__input'
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
        />
    </div>
);

export default RadioButton;