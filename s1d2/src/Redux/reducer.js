
import * as types from './actionTypes';

const initState = {
    isLoading: false,
    error: '',
    todos:[]
}

export const reducer = (state=initState, action) => {
    switch (action.type) {
        case types.GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading:true
            }

        case types.GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: [...state.todos, ...action.payload]
            }

        case types.GET_TODOS_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case types.ADD_TODOS_REQUEST:
            return {
                ...state,
                isLoading:true
            }

        case types.ADD_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: [...state.todos, action.payload]
            }

        case types.ADD_TODOS_ERROR:
            return {
                ...state,
                error: action.payload
            }
    
        default:
            return state;
    }
}