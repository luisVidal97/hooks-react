
const initialState = [{
    id: 1,
    todo: 'Comprar',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'add'){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Comprar milk',
    done: false
};

const action = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, action);

console.log(todos);