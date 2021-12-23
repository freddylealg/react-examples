import React from 'react'

export const NoteAppBar = () => {
    return (
        <div className='notes__appbar'>
            <span>20 de agosto de 2020</span>
            <div>
                <button className='btn'>Picture</button>
            </div>
            <div>
                <button className='btn'>Save</button>
            </div>
        </div>
    )
}
