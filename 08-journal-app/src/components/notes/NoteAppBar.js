import React from 'react'
import { startSaveNote, startUploading } from '../../actions/notes';
import { useDispatch, useSelector } from 'react-redux';

export const NoteAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );
 
    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () => {
        document.getElementById('fileSelector').click();
    }

    const handleFileChnage = (e) => {
        const file = e.target.files[0];
        if( file ){
            dispatch( startUploading( file ) );
        }

    }

    return (
        <div className='notes__appbar'>
            <span>20 de agosto de 2020</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChnage }
            />

            <div>
                <button 
                    className='btn'
                    onClick={ handlePictureClick }
                >Picture</button>
            </div>
            <div>
                <button 
                    className='btn'
                    onClick={ handleSave }    
                > Save </button>
            </div>
        </div>
    )
}
