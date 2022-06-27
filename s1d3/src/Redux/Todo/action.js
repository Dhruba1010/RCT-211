
import * as types from './actionTypes';
import axios from 'axios';

export const getTodosRequest = () => {
    return {
        type: types.GET_TODOS_REQUEST,
    }
}

export const getTodosSuccess = (payload) => {
    return {
        type: types.GET_TODOS_SUCCESS,
        payload
    }
}

export const getTodosError = (payload) => {
    return {
        type: types.GET_TODOS_ERROR,
        payload
    }
}


export const getTodos = () => (dispatch) => {
    dispatch(getTodosRequest());
    axios.get('/todos')
    .then(r => {
        dispatch(getTodosSuccess(r.data))
    })
    .catch(e => {
        dispatch(getTodosError(e.data))
    })
}


export const addTodosRequest = () => {
    return {
        type: types.ADD_TODOS_REQUEST,
    }
}

export const addTodosSuccess = (payload) => {
    return {
        type: types.ADD_TODOS_SUCCESS,
        payload
    }
}

export const addTodosError = (payload) => {
    return {
        type: types.ADD_TODOS_ERROR,
        payload
    }
}


export const addTodo = (payload) => (dispatch) => {
    dispatch(addTodosRequest())
    axios.post('/todos', payload)
    .then(r => {
        dispatch(addTodosSuccess(r.data))
    })
    .catch(e => {
        dispatch(addTodosError(e.data))
        console.log(e)
    })
}


export const getSingleTodoRequest = () => {
    return {
        type: types.GET_SINGLE_TODO_REQUEST,
    }
}

export const getSingleTodoSuccess = (payload) => {
    return {
        type: types.GET_SINGLE_TODO_SUCCESS,
        payload,
    }
}

export const getSingleTodoFailure = (payload) => {
    return {
        type: types.GET_SINGLE_TODO_FAILURE,
        payload,
    }
}


export const getSingleTodo = (id) => (dispatch) => {
    dispatch(getSingleTodoRequest())
    axios.get(`/todos/${id}`)
    .then(r => {
        dispatch(getSingleTodoSuccess(r.data))
    })
    .catch(e => {
        dispatch(getSingleTodoFailure(e.data))
    })
}


export const changeSingleTodoStatusRequest = () => {
    return {
        type: types.CHANGE_SINGLE_TODO_STATUS_REQUEST,
    }
}

export const changeSingleTodoStatusSuccess = (payload) => {
    return {
        type: types.CHANGE_SINGLE_TODO_STATUS_SUCCESS,
        payload
    }
}

export const changeSingleTodoStatusFailure = (payload) => {
    return {
        type: types.CHANGE_SINGLE_TODO_STATUS_FAILURE,
        payload
    }
}

export const changeSingleTodoStatus = (id, newStatus) => (dispatch) => {
    dispatch(changeSingleTodoStatusRequest())
    axios.patch(`/todos/${id}`, {status: newStatus})
    .then(r => {
        dispatch(changeSingleTodoStatusSuccess(r.data))
    })
    .catch(e => {
        dispatch(changeSingleTodoStatusFailure(e.data))
    })
}


export const editSingleTodoRequest = () => {
    return {
        type: types.EDIT_SINGLE_TODO_REQUEST,
    }
}

export const editSingleTodoSuccess = (payload) => {
    return {
        type: types.EDIT_SINGLE_TODO_SUCCESS,
        payload,
    }
}

export const editSingleTodoFailure = (payload) => {
    return {
        type: types.EDIT_SINGLE_TODO_FAILURE,
        payload,
    }
}


export const editSingleTodo = (id, text) => (dispatch) => {
    dispatch(editSingleTodoRequest())
    axios.patch(`/todos/${id}`, {title: text})
    .then(r => {
        dispatch(editSingleTodoSuccess(r.data))
    })
    .catch(e => {
        dispatch(editSingleTodoFailure(e.data))
        console.log(e);
    })
}


export const deleteSingleTodoRequest = () => {
    return {
        type: types.DELETE_SINGLE_TODO_REQUEST,
    }
}

export const deleteSingleTodoSuccess = (payload) => {
    return {
        type: types.DELETE_SINGLE_TODO_SUCCESS,
        payload,
    }
}

export const deleteSingleTodoFailure = (payload) => {
    return {
        type: types.DELETE_SINGLE_TODO_FAILURE,
        payload,
    }
}

export const deleteSingleTodo = (id) => (dispatch) => {
    dispatch(deleteSingleTodoRequest())
    axios.delete(`/todos/${id}`)
    .then(r => {
        dispatch(deleteSingleTodoSuccess(id))
    })
    .catch(e => {
        dispatch(deleteSingleTodoFailure(e.data))
    })
}


export const addTotalTodos = (payload) => {
    return {
        type: types.ADD_TOTAL_TODOS,
        payload
    }
}

export const reduceTotalTodos = (payload) => {
    return {
        type: types.REDUCE_TOTAL_TODOS,
        payload
    }
}

export const getTotalTodos = () => {
    return{
        type: types.GET_TOTAL_TODOS
    }
}


export const addTotalCompletedTodos = (payload) => {
    return{
        type: types.GET_TOTAL_COMPLETED_TODOS,
        payload
    }
}

export const reduceTotalCompletedTodos = (payload) => {
    return{
        type: types.GET_TOTAL_COMPLETED_TODOS,
        payload
    }
}

export const getTotalCompletedTodos = () => {
    return{
        type: types.GET_TOTAL_COMPLETED_TODOS
    }
}

