import React, { Component } from 'react';

const NoteListContext = React.createContext({
    hasAuthToken: false,
    noteList: null,
    message: '',
    error: null,
    messageType: null,
    setMessage: () => {},
    setError: () => {},
    setAuthToken: () => {},
    clearAuthToken: () => {},
    setNoteList: () => {},
    addNote: () => {},
    deleteNote: () => {},
    patchNote: () => {},
});

export default NoteListContext;

export class NoteListProvider extends Component {
    state = {
        hasAuthToken: false,
        noteList: null,
        timeoutID: null,
        message: '',
        messageType: null,
        error: null,
    };

    setAuthToken = () => {
        this.setState({
            hasAuthToken: true,
        })
    }

    clearAuthToken = () => {
        this.setState({
            hasAuthToken: false,
        })
    }

    setNoteList = noteList => {
        this.setState({
            noteList,
        })
    }

    addNote = note => {
        const { noteList } = this.state;

        this.setState({
            noteList: [...noteList, note],
        })
    }

    deleteNote = noteToDelete => {
        const newNoteList = this.state.noteList.filter(note => 
            note.id !== noteToDelete.id
        );
        
        this.setState({
            noteList: newNoteList
        });
    }

    patchNote = noteToPatch => {
        const newNoteList = this.state.noteList.filter(note => 
            note.id !== noteToPatch.id
        );

        this.setState({
            noteList: [...newNoteList, noteToPatch],
        })
    }

    setMessage = (message, messageType) => {
        clearTimeout(this.state.timeoutID);

        const timeout = setTimeout(() => {
            this.setState({
                messageType: null,
                message: '',
            })
        }, 10000)


        this.setState({
            message,
            messageType,
            timeoutID: timeout,
        });
    }

    setError = error => {
        this.setState({
            error,
        })
    }

    render() {
        const value = {
            hasAuthToken: this.state.hasAuthToken,
            noteList: this.state.noteList,
            message: this.state.message,
            messageType: this.state.messageType,
            setMessage: this.setMessage,
            setError: this.setError,
            setAuthToken: this.setAuthToken,
            clearAuthToken: this.clearAuthToken,
            setNoteList: this.setNoteList,
            addNote: this.addNote,
            deleteNote: this.deleteNote,
            patchNote: this.patchNote,
        }

        return (
            <NoteListContext.Provider value={value}>
                {this.props.children}
            </NoteListContext.Provider>
        )
    }
}