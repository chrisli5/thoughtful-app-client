import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import NoteListContext from '../../utils/NoteListContext';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './RegistrationPage.css';

class RegistrationPage extends Component {
    static contextType = NoteListContext;

    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    state = {
        username: '',
        password: '',
        confirmPassword: '',
    }

    onSubmit = e => {
        e.preventDefault();
        const { setMessage } = this.context;
        const { username, password, confirmPassword } = this.state;
        const { history } = this.props;

        if (password === confirmPassword) {
            AuthApiService.postUser({
                username,
                password
            })
                .then(user => this.setState({
                    username: '',
                    password: '',
                    confirmPassword: '',
                }))
                .then(() => history.push('/login'))
                .then(() => setMessage('Registration successful.', 'success'))
                .catch(e => setMessage(e.error, 'error'))
        } else {
            setMessage('Password does not match.', 'error')
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { username, password, confirmPassword } = this.state;
        return (
            <section className='registration-page'>
                <h2 className='registration__title'>Create an Account</h2>
                <form className='registration__form' onSubmit={this.onSubmit}>
                    <div className='registration__container'>
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
                        <Input
                            type='password'
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            id='confirmPassword'
                            value={confirmPassword}
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

export default RegistrationPage;