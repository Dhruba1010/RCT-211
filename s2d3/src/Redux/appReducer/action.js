
import * as types from './actionTypes';
import axios from 'axios';


export const getBooksRequest = () => {
    return {
        type: types.GET_BOOKS_REQUEST,
    }
}

export const getBooksSuccess = (payload) => {
    return {
        type: types.GET_BOOKS_SUCCESS,
        payload,
    }
}

export const getBooksFailure = () => {
    return {
        type: types.GET_BOOKS_FAILURE,
    }
}

export const getBooks = (params) => (dispatch) => {
    dispatch(getBooksRequest());
    axios.get('/books', params)
    .then(r => {
        dispatch(getBooksSuccess(r.data))
    })
    .catch(e => {
        dispatch(getBooksFailure())
    })
}