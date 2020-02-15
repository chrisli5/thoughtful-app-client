import React, { Component } from 'react';
import NotesService from '../../services/notes-api-service';
import { filterNotes } from '../../utils/notes-helpers';
import NoteListContext from '../../utils/note-list-context';
import Note from '../../components/Note/Note';
import Loading from '../../components/Loading/Loading';
import Empty from '../../components/Empty/Empty';
import './NoteListPage.css';

class NoteListPage extends Component {
    static contextType = NoteListContext;

    state = {
        isEdit: false,
        noteToEdit: {},
        filter: {
            startDate: null,
            endDate: null,
            mood: '',
            sortBy: 'desc',
        }
    }

    setDates = ({ startDate, endDate }) => {
        this.setState({
            filter: {
                ...this.state.filter,
                startDate,
                endDate,
            }
        })
    }

    setMood = mood => {
        this.setState({
            filter: {
                ...this.state.filter,
                mood,
            }
        })
    }

    openEdit = note => {
        this.setState({
            isEdit: true,
            noteToEdit: {
                ...note,
            }
        })
    }

    closeEdit = () => {
        this.setState({
            isEdit: false,
            noteToEdit: {},
        })
    }

    handleForm = e => {
        this.setState({
            noteToEdit: {
                ...this.state.noteToEdit,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleEdit = () => {
        const { patchNote, setMessage, setError } = this.context;
        const { noteToEdit } = this.state;

        let validatedNote = {
            ...noteToEdit,
            timeSpent: parseInt(noteToEdit.timeSpent) || 0,
        }

        NotesService.patchNote(validatedNote)
            .then(note => {
                patchNote(note)
                setMessage('Note successfully updated.', 'success')
            })
            .then(() => this.setState({
                isEdit: false,
                noteToEdit: {},
            }))
            .catch(e => {
                setError(e.error)
                setMessage(e.error, 'error')
            })
    }

    handleDelete = note => {
        const { deleteNote, setMessage, setError } = this.context;

        NotesService.deleteNote(note)
            .then(note => {
                deleteNote(note)
                setMessage('Note successfully deleted.', 'success')
            })
            .catch(e => {
                setError(e.error)
                setMessage(e.error, 'error')
            })
    }

    renderNoteList = () => {
        const { noteList } = this.context;

        return (
            <>
                {
                    noteList.map(note =>
                        <Note
                            key={note.id}
                            note={note}
                            openEdit={this.openEdit}
                            handleDelete={this.handleDelete}
                        />
                    )
                }
            </>
        )
    }

    renderEdit = () => {
        return (
            <>
            </>
        )
    }

    renderScreen = () => {
        const { isEdit } = this.state;
        const { noteList } = this.context;
        
        if (isEdit) return this.renderEdit();
        else if (!noteList) return <Loading />
        else if (noteList.length === 0) return <Empty />
        else return this.renderNoteList();
    }

    render() {
        return (
            <section className='note-list-page'>
                { this.renderScreen() }
            </section>
        )
    }
}

export default NoteListPage;