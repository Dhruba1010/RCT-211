import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import { appReducer } from './appReducer/appReducer';
import thunk from 'redux-thunk';
import { authReducer } from './authReducer/authReducer';


const rootReducer = combineReducers({
    appReducer: appReducer,
    authReducer: authReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));