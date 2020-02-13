import React from 'react';
import NoteListContext from '../../utils/NoteListContext';
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