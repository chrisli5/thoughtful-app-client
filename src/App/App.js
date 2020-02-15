import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import NotesService from '../services/notes-api-service';
import PublicOnlyRoute from '../components/Utils/PublicOnlyRoute';
import PrivateRoute from '../components/Utils/PrivateRoute';
import NoteListContext from '../utils/note-list-context';
import Header from '../components/Header/Header';
import Snackbar from '../components/Snackbar/Snackbar';
import LandingPage from '../routes/LandingPage/LandingPage';
import NoteListPage from '../routes/NoteListPage/NoteListPage';
import AddNotePage from '../routes/AddNotePage/AddNotePage';
import LoginPage from '../routes/LoginPage/LoginPage';
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';
import './App.css';

class App extends Component {
    static contextType = NoteListContext;

    componentDidMount() {
        const { setAuthToken, setNoteList, setError } = this.context;

        AuthApiService.verifyToken()
            .then(res => setAuthToken())
            .then(() => NotesService.getAllNotes())
            .then(noteList => setNoteList(noteList))
            .catch(e => setError(e.error))
    }

    render() {
        return (
            <div className='app'>
                <Header />
                <Snackbar />
                <main className='main'>
                    <Switch>
                        <PublicOnlyRoute
                            exact
                            path={'/'}
                            component={LandingPage}
                        />
                        <PrivateRoute
                            path={'/home'}
                            component={NoteListPage}
                        />
                        <PrivateRoute
                            path={'/add-note'}
                            component={AddNotePage}
                        />
                        <PublicOnlyRoute
                            path={'/login'}
                            component={LoginPage}
                        />
                        <PublicOnlyRoute
                            path={'/register'}
                            component={RegistrationPage}
                        />
                        <Route
                            component={NotFoundPage}
                        />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default App;
