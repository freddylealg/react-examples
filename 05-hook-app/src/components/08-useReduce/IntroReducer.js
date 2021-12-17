console.log('Hola mundo 2')

const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: true
}];


const todoReducer = (state = initialState, action) => {

    if( action?.type === 'agregar' ){
        return [ ...state, action.payload ]
    }

    return state;
}

let todos = todoReducer();
console.log( todos );

const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction);


console.log( todos );