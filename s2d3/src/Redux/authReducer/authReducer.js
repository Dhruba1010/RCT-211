
import * as types from './actionTypes';

const initState = {
    isLoading: false,
    isError: false,
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
                token: payload,
            }

        case types.GET_AUTH_FAILURE:
            return {
                ...state,
                isError: true,
            }

        default:
            return state;
    }
}