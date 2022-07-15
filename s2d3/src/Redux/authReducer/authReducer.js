
import * as types from './actionTypes';

const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: ''
}

export const authReducer = (state=initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_AUTH_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload,
            }

        case types.GET_AUTH_FAILURE:
            return {
                ...state,
                isError: true,
                isAuth: false,
                token: ''
            }

        default:
            return state;
    }
}