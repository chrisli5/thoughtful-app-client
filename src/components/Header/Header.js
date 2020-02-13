import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSquare, faPencilAlt, faHome, faSignInAlt, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import Link from './NavLink/NavLink';
import NoteListContext from '../../utils/NoteListContext';
import TokenService from '../../services/token-service';
import './Header.css';

class Header extends Component {
    static contextType = NoteListContext;

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.context.clearAuthToken();
    }

    renderLogout() {
        return (
            <div className='header__container'>
                <Link to='/home' icon={faHome}>Home</Link>
                <Link to='/add-notes' icon={faPencilAlt}>New Entry</Link>
                <Link to='/login' icon={faSignOutAlt} onClick={this.handleLogoutClick}>Logout</Link>
            </div>
        )
    }

    renderLogin() {
        return (
            <div className='header__container'>
                <Link to='/register' icon={faUserAlt}>Register</Link>
                <Link to='/login' icon={faSignInAlt}>Login</Link>
            </div>
        )
    }

    render() {
        const { hasAuthToken } = this.context;

        return (
            <nav className='header'>
                <div className='header__container'>
                    <span className="header__logo fa-layers fa-fw">
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faCloud} inverse transform="shrink-9" />
                    </span>
                    <h1 className='header__title'>Thoughtful</h1>
                </div>
                {this.renderLogout()}
            </nav>
        )
    }
}

export default Header;

