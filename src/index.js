import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NoteListProvider } from './utils/note-list-context';
import App from './App/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <NoteListProvider>
            <App />
        </NoteListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);