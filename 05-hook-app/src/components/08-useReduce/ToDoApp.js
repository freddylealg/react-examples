import React, { useEffect, useReducer } from 'react';

import './styles.css';
import { toDoReducer } from './toDoReducer';
import { TodoList } from './TodoList';
import { ToDoAdd } from './ToDoAdd';


const init = () => {
    const todos = JSON.parse( localStorage.getItem('todos') ) || [];
    return todos;
}

export const ToDoApp = () => {

    const [ toDos, dispatch ] = useReducer(toDoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDos) )
    }, [toDos])

    const handleDelete = (todoId) => {
        console.log( todoId );
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch( action )
    }

    const handleToggle = ( todoId ) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch( action )
    }

    const handleAddTodo = (newToDo) => {
        dispatch( {
            type: 'add',
            payload: newToDo
        });
    }

    return (
        <>
            <h1>ToDo App ({toDos.length})</h1>
            <hr />
            
            <div className="row">

                <div className="col-7">
                    <TodoList toDos={toDos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>

                <div className="col-5">
                    <ToDoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    )
}
