import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import './Loading.css';

const Loading = () => (
    <div className='loading'>
        <FontAwesomeIcon className='loading__icon' icon={faCircleNotch} spin />
        <p className='loading__content'>Loading</p>
    </div>
);

export default Loading;