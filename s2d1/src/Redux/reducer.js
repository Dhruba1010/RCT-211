
import * as types from './actionTypes';

const initState ={
    isLoading: false,
    isError: false,
    todos:[]
}

export const reducer = (state=initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: payload,
            }

        case types.GET_TODOS_FAILURE:
            return {
                ...state,
                isError: true,
            }

        
        case types.ADD_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.ADD_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: [...state.todos, payload],
            }

        case types.ADD_TODOS_FAILURE:
            return {
                ...state,
                isError: true,
            }


        default:
            return state;
    }
}