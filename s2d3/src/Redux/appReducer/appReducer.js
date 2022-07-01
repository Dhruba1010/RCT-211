
import * as types from './actionTypes';

const initState = {
    isLoading: false,
    isError: false,
    books:[]
}

export const appReducer = (state=initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.GET_BOOKS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                books: payload,
            }

        case types.GET_BOOKS_FAILURE:
            return {
                ...state,
                iseError: true,
            }


        default:
            return state;
    }
}