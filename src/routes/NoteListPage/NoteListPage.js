import React, { Component } from 'react';
import { parseDate } from '../../utils/notes-helpers';
import NotesService from '../../services/notes-api-service';
import { filterNotes } from '../../utils/notes-helpers';
import NoteListContext from '../../utils/note-list-context';
import ListFilter from '../../components/ListFilter/ListFilter';
import Note from '../../components/Note/Note';
import NoteForm from '../../components/NoteForm/NoteForm';
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

    onChange = e => {
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
        const { filter } = this.state;
        const { startDate, endDate, mood } = this.state.filter;

        const sortedNoteList = filterNotes(noteList, startDate, endDate, mood);

        return (
            <>
                <ListFilter
                    filter={filter}
                    setMood={this.setMood}
                    setDates={this.setDates}
                />
                {
                    sortedNoteList.map(note =>
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
        const { noteToEdit } = this.state;

        return (
            <>
                <div className='edit-note-page__container'>
                    <h2 className='edit-note-page__title'>Edit Entry</h2>
                    <h2 className='edit-note-page__date'>{parseDate(noteToEdit.createdAt).format('MMMM DD, YYYY')}</h2>
                </div>
                <NoteForm
                    note={noteToEdit}
                    onChange={this.onChange}
                    onSubmit={this.handleEdit}
                    onBack={this.closeEdit}
                />
            </>
        )
    }

    render() {
        const { isEdit } = this.state;
        const { noteList } = this.context;
        let showScreen;

        if (isEdit) showScreen = this.renderEdit();
        else if (!noteList) showScreen = <Loading />;
        else if (noteList.length === 0) showScreen = <Empty />;
        else showScreen = this.renderNoteList();

        return (
            <section className='note-list-page'>
                {showScreen}
            </section>
        )
    }
}

export default NoteListPage;