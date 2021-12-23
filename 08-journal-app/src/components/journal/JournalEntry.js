import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiyJijq5Hj7SSlRv7vdWkSeRBrtSOof2rR5m2ZldE2kGl9Lp4PC8wYSO-nUZKU3n2fniE&usqp=CAU)'
                }}
            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry_title'>
                    Un nuevo día 
                </p>
                <p className='journal__entry_content'>
                    Eso es un texto largo que uso como ejemplo para el 
                    contenido de la tarjeta del journal
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
