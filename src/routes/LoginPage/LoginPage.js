import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import NotesService from '../../services/notes-api-service';
import TokenService from '../../services/token-service';
import NoteListContext from '../../utils/NoteListContext';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './LoginPage.css';

class LoginPage extends Component {
    static contextType = NoteListContext;

    state = {
        username: '',
        password: '',
    }

    onSubmit = e => {
        e.preventDefault();
        const { setAuthToken, setNoteList, setMessage } = this.context;
        const { username, password } = this.state;

        AuthApiService.postLogin({
            username,
            password
        })
            .then(user => TokenService.saveAuthToken(user.authToken))
            .then(() => setAuthToken())
            .then(() => NotesService.getAllNotes())
            .then(noteList => setNoteList(noteList))
            .then(() => setMessage('Login Successful', 'success'))
            .catch(e => setMessage(e.error, 'error'))
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { username, password } = this.state;

        return (
            <section className='login-page'>
                <h2 className='login__title'>Welcome Back!</h2>
                <form className='login__form' onSubmit={this.onSubmit}>
                    <div className='login__container'>
                        <Input
                            type='text'
                            placeholder='Username'
                            name='username'
                            id='username'
                            value={username}
                            onChange={(e) => this.onChange(e)}
                            required
                        />
                        <Input
                            type='password'
                            placeholder='Password'
                            name='password'
                            id='password'
                            value={password}
                            onChange={(e) => this.onChange(e)}
                            required
                        />
                    </div>
                    <Button type='submit'>Submit</Button>
                </form>
            </section>
        )
    }
}

export default LoginPage;