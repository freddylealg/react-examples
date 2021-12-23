import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3>
                    <i className='far fa-moon'></i>
                    <span> Freddy Leal </span>
                </h3>

                <button 
                    className='btn'
                >Logout</button>
            </div>
            <div className='journal__new-entry'>
                <i className='far fa-calendar-plus fa-5x'></i>
                <p>
                    input
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}