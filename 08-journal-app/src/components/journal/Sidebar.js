import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const username = useSelector(state => state.auth.name);

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    const handleAddNew = () => {
        dispatch( startNewNote() );
    }

    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3>
                    <i className='far fa-moon'></i>
                    <span> {username} </span>
                </h3>

                <button 
                    className='btn'
                    onClick={ handleLogout }
                >Logout</button>
            </div>
            <div 
                className='journal__new-entry'
                onClick={ handleAddNew }
            >
                <i className='far fa-calendar-plus fa-5x'></i>
                <p>
                    input
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}
