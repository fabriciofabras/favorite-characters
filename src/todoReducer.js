// { type: [todo remove], payload: id }

export const todoReducer = ( initialState = [], action ) => {

    console.log("action type");
        console.log(action.type);
//console.log(initialState)
        console.log(action.payload)
    
    switch ( action.type ) {

        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {// id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 

                return todo;
            });
    
        default:
            return initialState;
    }


}