import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const note = useSelector(state => state.notes.active );
    const [ values, handleInputChange, reset ] = useForm( note );

    const {title, body} = values;
    const activeId = useRef(note.id);

    useEffect(() => {
        if( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch( activeNote(values.id, {...values}) );
    }, [values, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting(activeId.current) );
    }

    return (
        <div className='notes__main-content'>
            <NoteAppBar />

            <div className='notes__contect'>
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className='notes__title-input'
                    autoComplete='off'
                    name='title'
                    value= { title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder='What happened today'
                    className='notes_textarea'
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>

                {
                    (note.url) &&
                    <div className='notes__image'>
                        <img
                            src={ note.url }
                            alt="Imagen de anime"
                        />
                    </div>
                }

            </div>
            <button
                className="btn btn-danger"
                onClick={ handleDelete }
            > Delete </button>
        </div>
    )
}
