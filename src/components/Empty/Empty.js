import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './Empty.css';

const Empty = () => (
    <div className='empty'>
        <div className='empty__container'>
            <FontAwesomeIcon icon={faPencilAlt} className='empty__icon' />
        </div>
        <p className='empty__content'>Add a new entry to start!</p>
    </div>
);

export default Empty;