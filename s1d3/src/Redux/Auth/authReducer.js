
import { loadData, saveData } from '../../Utils/localStorage';
import * as types from './actionTypes';

const initState = {
    isAuth: loadData('authStatus') || false,
    isError:false,
    token: loadData('token') || '',
}

export const authReducer = (state=initState, action) => {
    switch (action.type){
        case types.GET_AUTH_TOKEN_REQUEST:
            return {
                ...state,
            }

        case types.GET_AUTH_TOKEN_SUCCESS:
            const authStatus = true;
            const token = action.payload;
            saveData('authStatus', authStatus)
            saveData('token', token)
            return {
                ...state,
                isAuth:authStatus,
                token: token,
                isError:false,
            }

        case types.GET_AUTH_TOKEN_FAILURE:
            return {
                ...state,
                isAuth:false,
                token: '',
                isError:true,
            }

        case types.LOGOUT_SUCCESS:
            const LogoutAuthStatus = false;
            const logoutToken = '';
            saveData('authStatus', LogoutAuthStatus)
            saveData('token', logoutToken)
            return {
                ...state,
                isAuth:LogoutAuthStatus,
                token: logoutToken,
                isError:false,
            }


        default:
            return state;
    }
}