import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => (
    <div className='footer'>
        <p className='footer__title'>Created by Christopher Li</p>
        <div className='footer__container'>
            <a href='https://github.com/chrisli5' className='footer__link'><FontAwesomeIcon icon={faGithub} className='footer__icon' /></a>
            <a href='https://linkedin.com/in/christopher-li-50a89383'><FontAwesomeIcon icon={faLinkedin} className='footer__icon' /></a>
        </div>
        <p className='footer__text'>Copyright © 2020</p>
        <p className='footer__text'>All Rights Reserved</p>
    </div>
    )

export default Footer;