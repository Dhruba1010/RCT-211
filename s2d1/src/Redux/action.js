
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
        payload,
    }
}

export const getTodosFailure = () => {
    return {
        type: types.GET_TODOS_FAILURE,
    }
}

export const getTodos = () => (dispatch) => {
    dispatch(getTodosRequest());
    axios.get('/todos')
    .then(r => {
        dispatch(getTodosSuccess(r.data));
    })
    .catch(e => {
        dispatch(getTodosFailure());
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
        payload,
    }
}

export const addTodosFailure = () => {
    return {
        type: types.ADD_TODOS_FAILURE,
    }
}

export const addTodos = (payload) => (dispatch) => {
    dispatch(addTodosRequest());
    axios.post('/todos', payload)
    .then(r => {
        dispatch(addTodosSuccess(r.data));
    })
    .catch(e => {
        dispatch(addTodosFailure());
    })
}