import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavLink.css';

const Link = ({ to, icon, children }) => (
    <NavLink
        className='link'
        activeClassName='link--active'
        to={to}
    >
        <FontAwesomeIcon icon={icon} />
        <span className='link__text'>{children}</span>
    </NavLink>
)

export default Link;