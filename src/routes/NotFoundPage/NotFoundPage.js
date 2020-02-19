import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import './NotFoundPage.css';

class NotFoundPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section className='not-found-page'>
                <div className='not-found-page__container'>
                    <FontAwesomeIcon icon={faBug} className='not-found-page__icon' />
                </div>
                <p className='not-found-page__content'>Oops! Page not found</p>
            </section>
        )
    }
}

export default NotFoundPage;