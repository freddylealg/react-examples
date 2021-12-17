import React from 'react'
import { useForm } from '../hooks/useForm';

export const ToDoAdd = ({ handleAddTodo }) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ){
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo( newToDo )
        reset();
    }

    return (
        <>
            <h4>Agregar a ToDo</h4>
            <hr />

            <form>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />
                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        onClick={ handleSubmit }
                        className="btn btn-outline-primary mt-1 btn-block"
                    > Agregar </button>
                </div>
            </form>   
        </>
    )
}
