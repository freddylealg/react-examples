import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NoteAppBar />

            <div className='notes__contect'>
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className='notes__title-input'
                    autoComplete='off'
                />

                <textarea
                    placeholder='What happened today'
                    className='notes_textarea'
                ></textarea>

                <div className='notes__image'>
                    <img
                        src="https://estaticos-cdn.elperiodico.com/clip/37da45b6-4fff-42ea-92e0-70470d621d5b_alta-libre-aspect-ratio_default_0.jpg"
                        alt="Imagen de anime"
                    />
                </div>

            </div>
        </div>
    )
}
