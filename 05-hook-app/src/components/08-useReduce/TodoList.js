import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ toDos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                toDos.map( (toDo, i) => {
                    return ( <TodoListItem 
                                key={toDo.id}
                                toDo={toDo} 
                                i={i} 
                                handleDelete={handleDelete} 
                                handleToggle={handleToggle} /> )
                })
            }
        </ul>
    )
}
