
import * as types from './actionTypes';
import axios from 'axios';

export const getAuthTokenRequest = () => {
    return {
        type: types.GET_AUTH_TOKEN_REQUEST
    }
}

export const getAuthTokenSuccess = (payload) => {
    return {
        type: types.GET_AUTH_TOKEN_SUCCESS,
        payload,
    }
}

export const getAuthTokenFailure = (payload) => {
    return {
        type: types.GET_AUTH_TOKEN_FAILURE,
        payload,
    }
}


export const getAuthToken = (payload) => (dispatch) => {
    dispatch(getAuthTokenFailure());
    axios.post('https://reqres.in/api/login', payload)
    .then(r => {
        dispatch(getAuthTokenSuccess(r.data))
    })
    .catch(e => {
        dispatch(getAuthTokenFailure(e.data))
    })
}


export const logoutSuccess = (payload) => {
    return {
        type: types.LOGOUT_SUCCESS,
        payload
    }
}
