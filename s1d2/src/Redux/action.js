
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
    axios.get('http://localhost:8080/todos')
    .then(r => {
        dispatch(getTodosSuccess(r.data))
    })
    .catch(e => {
        dispatch(getTodosError(e.data))
        console.log(e);
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
    axios.post('http://localhost:8080/todos', payload)
    .then(r => {
        dispatch(addTodosSuccess(r.data))
    })
    .catch(e => {
        dispatch(addTodosError(e.data))
        console.log(e)
    })
}