
import * as types from './actionTypes';
import axios from 'axios';

export const getAuth = (payload) => (dispatch) => {
    dispatch({type: types.GET_AUTH_REQUEST});

    axios({
        method: 'POST',
        url: '/api/login',
        baseURL: 'https://reqres.in',
        data: payload
    })
    .then(r => {
        dispatch({type: types.GET_AUTH_SUCCESS, payload: r.data})
    })
    .catch(e => {
        dispatch({type: types.GET_AUTH_FAILURE})
    })
}