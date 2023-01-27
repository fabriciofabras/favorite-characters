import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

const init = () => {
    console.log(localStorage.getItem('todos'))
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        console.log('UseEffect')
        console.log(todos)
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        console.log("handlenewtodo")
        console.log(todo)
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( todo, id ) => {
        console.log("handleDeleteTodo")
        console.log(todo)
        console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: todo.id
        });


    }


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo
    }

}
