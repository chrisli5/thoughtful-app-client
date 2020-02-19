import React from 'react';
import { faFrown, faAngry, faMeh, faSmile, faLaugh } from '@fortawesome/free-regular-svg-icons'
import RadioButton from '../RadioButton/RadioButton';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './NoteForm.css';

const NoteForm = ({ note, onChange, onSubmit, onBack }) => (
    <form className='note-form' onSubmit={onSubmit}>
        <label htmlFor='mood' className='note-form__label'>Mood</label>
        <div className='note-form__container'>
            <RadioButton
                id='mood-radio-1'
                value='1'
                name='mood'
                checked={note.mood === '1'}
                onChange={onChange}
                icon={faAngry}
            />
            <RadioButton
                id='mood-radio-2'
                value='2'
                name='mood'
                checked={note.mood === '2'}
                onChange={onChange}
                icon={faFrown}
            />
            <RadioButton
                id='mood-radio-3'
                value='3'
                name='mood'
                checked={note.mood === '3'}
                onChange={onChange}
                icon={faMeh}
            />
            <RadioButton
                id='mood-radio-4'
                value='4'
                name='mood'
                checked={note.mood === '4'}
                onChange={onChange}
                icon={faSmile}
            />
            <RadioButton
                id='mood-radio-5'
                value='5'
                name='mood'
                checked={note.mood === '5'}
                onChange={onChange}
                icon={faLaugh}
            />
        </div>
        <div>
            <label htmlFor='timeSpent' className='note-form__label'>Minutes</label>
            <Input type='number' className='form-input' name='timeSpent' value={note.timeSpent} onChange={onChange} />
        </div>
        <div>
            <label htmlFor='content' className='note-form__label'>Your Thoughts</label>
            <textarea type='text' className='note-form__textarea' name='content' rows='5' value={note.content} onChange={onChange} />
        </div>
        <div className='note-form__buttons'>
            <Button onClick={() => onBack()}>Back</Button>
            <div className='note-form__space' />
            <Button type='submit'>Submit</Button>
        </div>
    </form>
);

export default NoteForm;