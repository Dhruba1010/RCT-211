
import * as types from './actionTypes';

const initState = {
    isLoading: false,
    error: false,
    curTodo:{},
    todos:[],
    totalTodos: 2,
    completedTodos: 0
}

export const reducer = (state=initState, action) => {
    switch (action.type) {
        case types.GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading:true,
                error: false,
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
                error: true,
            }

        case types.ADD_TODOS_REQUEST:
            return {
                ...state,
                isLoading:true,
                error: false,
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
                error: true
            }


        case types.GET_SINGLE_TODO_REQUEST:
            return {
                ...state,
                isLoading:true,
                error: false,
            }

        case types.GET_SINGLE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                curTodo: action.payload
            }

        case types.GET_SINGLE_TODO_FAILURE:
            return {
                ...state,
                error: true
            }


        case types.CHANGE_SINGLE_TODO_STATUS_REQUEST:
            return{
                ...state,
                isLoading:true,
                error: false,
            }

        case types.CHANGE_SINGLE_TODO_STATUS_SUCCESS:
            let newToggledTodo = state.todos.map(t => t.id === action.payload.id ? action.payload : t)
            return{
                ...state,
                isLoading:false,
                todos: newToggledTodo
            }

        case types.CHANGE_SINGLE_TODO_STATUS_FAILURE:
            return {
                ...state,
                error:true
            }


        case types.EDIT_SINGLE_TODO_REQUEST:
            return {
                ...state,
                isLoading:true,
                error: false,
            }

        case types.EDIT_SINGLE_TODO_SUCCESS:
            let newTodo = state.todos.map(t => t.id === action.payload.id ? action.payload : t);
            return {
                ...state,
                isLoading: false,
                todos: newTodo
            }

        case types.EDIT_SINGLE_TODO_FAILURE:
            return {
                ...state,
                error: true
            }


        case types.DELETE_SINGLE_TODO_REQUEST:
            return {
                ...state,
                isLoading:true,
                error: false,
            }

        case types.DELETE_SINGLE_TODO_SUCCESS:
            const leftTodos = state.todos.filter(t => t.id !== action.payload)
            return {
                ...state,
                isLoading: false,
                todos: leftTodos
            }

        case types.DELETE_SINGLE_TODO_FAILURE:
            return {
                ...state,
                error: true
            }


        case types.ADD_TOTAL_TODOS:
            return {
                ...state,
                totalTodos: state.totalTodos + action.payload,
            }

        case types.REDUCE_TOTAL_TODOS:
            return {
                ...state,
                totalTodos: state.totalTodos - action.payload,
            }

        case types.ADD_TOTAL_COMPLETED_TODOS:
            return {
                ...state,
                completedTodos: state.completedTodos + action.payload,
            }

        case types.REDUCE_TOTAL_COMPLETED_TODOS:
            return {
                ...state,
                completedTodos: state.completedTodos - action.payload,
            }

    
        default:
            return state;
    }
}