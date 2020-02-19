import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown, faAngry, faMeh, faSmile, faLaugh, faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { parseDate } from '../../utils/notes-helpers';
import Button from '../Button/Button';
import './Note.css';

const renderIcon = mood => {
    if (mood === '1') return faAngry;
    if (mood === '2') return faFrown;
    if (mood === '3') return faMeh;
    if (mood === '4') return faSmile;
    if (mood === '5') return faLaugh;
    return faSmile;
}

const Note = ({ note, openEdit, handleDelete }) => (
    <div className='note'>
        <div className='note__header'>
            <div>
                <div className='note__container'>
                    <FontAwesomeIcon icon={faCalendar} className='note__icon' />
                    <p className='note__date'>{parseDate(note.createdAt).format('MMMM DD, YYYY')}</p>
                </div>
                <div className='note__container'>
                    <FontAwesomeIcon icon={faClock} className='note__icon' />
                    <p className='note__time'>{note.timeSpent || '0'} minutes</p>
                </div>
            </div>
            <FontAwesomeIcon icon={renderIcon(note.mood)} className='note__mood'/>
        </div>
        <p className='note__content'>{note.content}</p>
        <div className='note__buttons'>
            <Button onClick={() => openEdit(note)}>Edit</Button>
            <div className='note__space' />
            <Button onClick={() => handleDelete(note)}>Delete</Button>
        </div>
    </div>
);

export default Note;