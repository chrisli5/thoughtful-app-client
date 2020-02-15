import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSquare, faPencilAlt, faHome, faSignInAlt, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import NavLink from './NavLink/NavLink';
import NoteListContext from '../../utils/note-list-context';
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
                <NavLink to='/home' icon={faHome}>Home</NavLink>
                <NavLink to='/add-notes' icon={faPencilAlt}>New Entry</NavLink>
                <NavLink to='/login' icon={faSignOutAlt} onClick={this.handleLogoutClick}>Logout</NavLink>
            </div>
        )
    }

    renderLogin() {
        return (
            <div className='header__container'>
                <NavLink to='/register' icon={faUserAlt}>Register</NavLink>
                <NavLink to='/login' icon={faSignInAlt}>Login</NavLink>
            </div>
        )
    }

    render() {
        const { hasAuthToken } = this.context;

        return (
            <nav className='header'>
                <Link to='/' className='header__container'>
                    <span className="header__logo fa-layers fa-fw">
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faCloud} inverse transform="shrink-9" />
                    </span>
                    <h1 className='header__title'>Thoughtful</h1>
                </Link>
                {
                    hasAuthToken ? this.renderLogout() : this.renderLogin()
                }
            </nav>
        )
    }
}

export default Header;

