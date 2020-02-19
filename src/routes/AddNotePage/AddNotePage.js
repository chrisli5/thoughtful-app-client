import React, { Component } from 'react';
import moment from 'moment';
import NotesService from '../../services/notes-api-service';
import NoteListContext from '../../utils/note-list-context';
import NoteForm from '../../components/NoteForm/NoteForm';
import './AddNotePage.css';

class AddNotePage extends Component {
    static contextType = NoteListContext;

    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    state = {
        noteToAdd: {
            content: '',
            mood: '1',
            timeSpent: '',
            createdAt: moment(),
        }
    }

    onChange = e => {
        this.setState({
            noteToAdd: {
                ...this.state.noteToAdd,
                [e.target.name]: e.target.value,
            }
        })
    }

    onBack = () => {
        const { history } = this.props;
        history.push('/home')
    }

    handleAdd = () => {
        const { addNote, setMessage, setError } = this.context;
        const { history } = this.props;
        const { noteToAdd } = this.state;

        const validatedNote = {
            ...noteToAdd,
            timeSpent: parseInt(noteToAdd.timeSpent) || 0,
        }

        NotesService.postNote(validatedNote)
            .then(note => {
                addNote(note);
                setMessage('Note successfully added.', 'success');
                history.push('/home');
            })
            .catch(e => {
                setMessage(e.error, 'error')
                setError(e.error)
            })
    }

    render() {
        const { noteToAdd } = this.state;

        return (
            <section className='add-note-page'>
                <div className='add-note-page__container'>
                    <h2 className='add-note-page__title'>New Entry</h2>
                    <h2 className='add-note-page__date'>{noteToAdd.createdAt.format('MMMM DD, YYYY')}</h2>
                </div>
                <NoteForm
                    note={noteToAdd}
                    onChange={this.onChange}
                    onSubmit={this.handleAdd}
                    onBack={this.onBack}
                />
            </section>
        )
    }
}

export default AddNotePage;