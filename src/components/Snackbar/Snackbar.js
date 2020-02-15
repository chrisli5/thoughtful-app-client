import React from 'react';
import NoteListContext from '../../utils/note-list-context';
import './Snackbar.css';

const getStatus = messageType => {
    if (messageType === 'error') return 'snackbar snackbar--error';
    if (messageType === 'success') return 'snackbar snackbar--success';
    return 'snackbar';
}

const Snackbar = () =>
    <NoteListContext.Consumer>
        {({ messageType, message }) => (
            <div className={getStatus(messageType)}>
                {message}
            </div>
        )}
    </NoteListContext.Consumer>

export default Snackbar;