import { authReducer } from "./Auth/authReducer";
import { todoReducer } from "./Todo/todoReducer";
import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import thunk from "redux-thunk"; 

const rootReducer = combineReducers ({
    authReducer: authReducer,
    todoReducer: todoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));